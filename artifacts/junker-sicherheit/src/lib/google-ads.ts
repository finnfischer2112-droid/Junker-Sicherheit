export const GOOGLE_ADS_ID = "AW-18437807806";
export const ADS_SETTINGS_EVENT = "junker:ads-settings";
const STORAGE_KEY = "junker-advertising-consent-v1";
const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export type AdsConsent = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

let sessionChoice: AdsConsent | null = null;
let tagStarted = false;

export function getAdsConsent(): AdsConsent | null {
  if (sessionChoice) return sessionChoice;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (
      (stored.choice === "granted" || stored.choice === "denied") &&
      typeof stored.timestamp === "number" &&
      stored.timestamp <= Date.now() &&
      Date.now() - stored.timestamp < MAX_AGE_MS
    ) {
      return stored.choice;
    }
  } catch {
    // Missing or unreadable consent never grants permission to track.
  }
  return null;
}

function applyConsent(choice: AdsConsent) {
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  if (choice !== "granted" || tagStarted) return;
  tagStarted = true;

  window.gtag?.("js", new Date());
  window.gtag?.("config", GOOGLE_ADS_ID, {
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.id = "google-ads-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
}

export function restoreAdsConsent() {
  const choice = getAdsConsent();
  if (choice) applyConsent(choice);
}

export function setAdsConsent(choice: AdsConsent) {
  const previouslyGranted = getAdsConsent() === "granted";
  sessionChoice = choice;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, timestamp: Date.now() }),
    );
  } catch {
    // Still respect the current choice for this page when storage is unavailable.
  }
  applyConsent(choice);
  if (previouslyGranted && choice === "denied") {
    // Unload the already-running tag so basic consent mode sends no further pings.
    window.location.reload();
  }
}

export function openAdsSettings() {
  window.dispatchEvent(new Event(ADS_SETTINGS_EVENT));
}
