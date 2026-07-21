import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      <div className="bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ein kleiner Auszug unserer Kunden</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Vertrauen ist die Basis unserer Arbeit. Wir sind stolz darauf, namhafte Unternehmen, Kommunen und Veranstalter in Norddeutschland zu unseren zufriedenen Kunden zählen zu dürfen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {references.map((ref, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover-elevate transition-all flex flex-col items-center group">
              <div className="h-32 w-full flex items-center justify-center mb-6 p-4">
                <img 
                  src={`/images/referenzen/${ref.logo}`} 
                  alt={`Logo ${ref.name}`}
                  className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-400 font-medium text-center">${ref.name}</span>`;
                  }}
                />
              </div>
              
              <div className="mt-auto w-full text-center">
                <h3 className="font-heading font-semibold text-slate-900 mb-4 line-clamp-2 min-h-[3rem]">{ref.name}</h3>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    Website besuchen <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white p-8 md:p-12 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">Werden Sie Teil unserer Referenzen</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Lernen Sie unsere Dienstleistungen kennen und lassen Sie uns gemeinsam ein Sicherheitskonzept für Ihre spezifischen Anforderungen entwickeln.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/kontakt">Kontakt aufnehmen</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
