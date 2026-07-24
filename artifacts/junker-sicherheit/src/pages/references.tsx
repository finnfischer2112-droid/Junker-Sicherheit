import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';

const references = [
  { name: "List auf Sylt / Zipfelbund", logo: "list-zipfelbund.jpg" },
  { name: "Stadt Quickborn", logo: "quickborn.jpg" },
  { name: "Bundesministerium für Gesundheit", logo: "bmg.jpg" },
  { name: "GMSH", logo: "gmsh.jpg" },
  { name: "H.C. Röver", logo: "hc-roever.jpg" },
  { name: "Sartori & Berger", logo: "sartori-berger.png" },
  { name: "Wacken Open Air", logo: "wacken.png" },
  { name: "JuRa Hasloh", logo: "jura-hasloh.jpg" },
  { name: "SV Rugenbergen", logo: "sv-rugenbergen.jpg" },
  { name: "Wirtschaftsjunioren", logo: "wirtschaftsjunioren.png" },
  { name: "Schleswig-Holstein", logo: "schleswig-holstein.jpg" },
];

export default function References() {
  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/generated/network.jpg)` }}></div>
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Ein kleiner Auszug unserer Kunden</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Vertrauen ist die Basis unserer Arbeit. Wir sind stolz darauf, namhafte Unternehmen, Kommunen und Veranstalter in Norddeutschland zu unseren zufriedenen Kunden zählen zu dürfen.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Logo grid */}
      <div className="container mx-auto px-4 max-w-7xl py-24">
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {references.map((ref, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full">
                <div className="h-28 w-full flex items-center justify-center p-4 bg-slate-50/50 rounded-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`}
                    alt={`Logo ${ref.name}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-400 font-medium text-center text-sm">${ref.name}</span>`;
                    }}
                  />
                </div>
                <h3 className="font-heading font-semibold text-slate-700 mt-5 text-sm text-center leading-snug line-clamp-2">{ref.name}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-24 text-center bg-white p-12 md:p-16 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4 relative z-10">Werden Sie Teil unserer Referenzen</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Lernen Sie unsere Dienstleistungen kennen und lassen Sie uns gemeinsam ein Sicherheitskonzept für Ihre spezifischen Anforderungen entwickeln.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 relative z-10 shadow-lg">
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
