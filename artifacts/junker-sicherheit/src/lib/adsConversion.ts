export const ADS_CONV_FORM = "AW-18437807806/5yhqCIWglYIdEL696tdE";
export const ADS_CONV_PHONE = "AW-18437807806/PHONE_LABEL_FOLGT";

export function trackAdsConversion(sendTo: string) {
  try {
    const raw = localStorage.getItem("junker-advertising-consent-v1");
    const consent = raw ? JSON.parse(raw).choice : null;
    if (consent !== "granted") return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", { send_to: sendTo });
  } catch {
    // Tracking must never interrupt a form submission or a phone call.
  }
}

export function installPhoneConversionTracking() {
  function onClick(event: MouseEvent) {
    if (ADS_CONV_PHONE.includes("FOLGT")) return;
    const target =
      event.target instanceof Element
        ? event.target
        : event.target instanceof Node
          ? event.target.parentElement
          : null;
    if (!target?.closest('a[href^="tel:"]')) return;
    trackAdsConversion(ADS_CONV_PHONE);
  }

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
