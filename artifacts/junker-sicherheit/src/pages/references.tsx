import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';

export default function References() {
  const references = [
    { name: "List auf Sylt / Zipfelbund", logo: "list-zipfelbund.jpg", url: "https://www.list-sylt.de" },
    { name: "Erlebniszentrum Naturgewalten Sylt", logo: "list-zipfelbund.jpg", url: "https://www.naturgewalten-sylt.de" },
    { name: "Stadt Quickborn", logo: "quickborn.jpg", url: "https://www.quickborn.de" },
    { name: "Bundesministerium für Gesundheit", logo: "bmg.jpg", url: "https://www.bundesgesundheitsministerium.de" },
    { name: "GMSH", logo: "gmsh.jpg", url: "https://www.gmsh.de" },
    { name: "H.C. Röver", logo: "hc-roever.jpg", url: "https://www.hc-roever.de" },
    { name: "Sartori & Berger", logo: "sartori-berger.png", url: "https://www.sartori-berger.de" },
    { name: "Wacken Open Air", logo: "wacken.png", url: "https://www.wacken.com" },
    { name: "JuRa Hasloh", logo: "jura-hasloh.jpg", url: "https://www.jura-hasloh.de" },
    { name: "SV Rugenbergen", logo: "sv-rugenbergen.jpg", url: "https://www.sv-rugenbergen.de" },
    { name: "Wirtschaftsjunioren", logo: "wirtschaftsjunioren.png", url: "https://www.wjd.de" },
    { name: "Schleswig-Holstein", logo: "schleswig-holstein.jpg", url: "https://www.schleswig-holstein.de" }
  ];

  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-slate-50">
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

      <div className="container mx-auto px-4 max-w-7xl py-24">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {references.map((ref, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group h-full">
                <div className="h-32 w-full flex items-center justify-center mb-8 p-4 bg-slate-50/50 rounded-xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`} 
                    alt={`Logo ${ref.name}`}
                    className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-400 font-medium text-center">${ref.name}</span>`;
                    }}
                  />
                </div>
                
                <div className="mt-auto w-full text-center flex flex-col items-center">
                  <h3 className="font-heading font-semibold text-slate-900 mb-6 line-clamp-2">{ref.name}</h3>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 mt-auto"
                  >
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      Website besuchen <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
