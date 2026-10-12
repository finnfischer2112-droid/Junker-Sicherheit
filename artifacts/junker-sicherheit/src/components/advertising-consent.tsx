import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ADS_SETTINGS_EVENT,
  getAdsConsent,
  restoreAdsConsent,
  setAdsConsent,
  type AdsConsent,
} from "@/lib/google-ads";
import { Button } from "@/components/ui/button";

export function AdvertisingConsent() {
  const [visible, setVisible] = useState(() => getAdsConsent() === null);

  useEffect(() => {
    restoreAdsConsent();
    const open = () => setVisible(true);
    window.addEventListener(ADS_SETTINGS_EVENT, open);
    return () => window.removeEventListener(ADS_SETTINGS_EVENT, open);
  }, []);

  function choose(choice: AdsConsent) {
    setAdsConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <section
      role="region"
      aria-labelledby="advertising-consent-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white p-5 shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2
            id="advertising-consent-title"
            className="font-heading text-lg font-bold text-slate-900"
          >
            Cookies
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Mit Ihrer Zustimmung verwenden wir Cookies von Google Ads, um den
            Erfolg unserer Kampagnen zu messen. Dabei werden Daten an Google
            übermittelt. Ihre Auswahl können Sie jederzeit in den
            Cookie-Einstellungen ändern.{" "}
            <Link href="/datenschutz" className="underline hover:text-primary">
              Datenschutz
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button variant="outline" onClick={() => choose("denied")}>
            Nur notwendige
          </Button>
          <Button variant="outline" onClick={() => choose("granted")}>
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </section>
  );
}
