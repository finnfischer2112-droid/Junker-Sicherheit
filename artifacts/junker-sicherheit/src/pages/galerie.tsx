import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';

const pressItems = [
  {
    id: 1,
    src: 'gallery/presse-bericht-seite.png',
    thumb: 'gallery/presse-bericht-seite.png',
    title: 'Pilotprojekt: Quickborn öffnet Schulhöfe',
    caption: 'Verwaltungsgemeinschaft Quickborn, Mai 2025',
    description: 'Junker-Sicherheit übernahm im Rahmen des sechsmonatigen Pilotprojekts der Stadt Quickborn die Sicherheitsdienstleistungen auf den geöffneten Schulhöfen – mit pädagogischem Ansatz, regelmäßigen Kontrollgängen und ohne erhobenen Zeigefinger.',
  },
  {
    id: 2,
    src: 'gallery/presse-umschau-seite.png',
    thumb: 'gallery/presse-umschau-seite.png',
    title: 'Schulhöfe werden Lebensräume',
    caption: 'Quickborn Umschau, Mai 2025',
    description: 'Die Quickborn Umschau berichtete über das Projekt: Mit Verantwortung, Vertrauen und Engagement öffneten die Schulhöfe der Comenius-Schule, des Dietrich-Bonhoeffer-Gymnasiums und des Elsensee-Gymnasiums für Kinder und Jugendliche.',
  },
];

export default function Galerie() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const current = lightbox !== null ? pressItems[lightbox] : null;

  return (
    <div className="w-full">

      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/generated/object.jpg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Galerie</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Einblicke in unsere Arbeit, Projekte und Pressebeiträge.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Philosophy / Vorwort */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
              Erfahrung, Verlässlichkeit und Schutz aus einer Hand
            </h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-5">
              <p>
                Junker-Sicherheit steht seit Jahren für zuverlässigen Objekt- und Veranstaltungsschutz in Schleswig-Holstein, Hamburg und Niedersachsen. Das Unternehmen arbeitet diskret, schnell und mit einem hohen Qualitätsanspruch – rund um die Uhr und an 365 Tagen im Jahr. Gründer Günter Junker bringt selbst langjährige Erfahrung aus der Sicherheitsbranche mit und wagte 2017 den Schritt in die Selbstständigkeit.
              </p>
              <p>
                Besonders stolz ist das Unternehmen auf sein Team: Viele Mitarbeiter verfügen über mehr als 20 Jahre Berufserfahrung und sind umfassend §34a ausgebildet. Diese Expertise zeigt sich im täglichen Einsatz – ob bei der Bewachung von Objekten, der Alarmverfolgung, der Baustellenabsicherung oder der Maritimen Sicherheit. Auch bei Firmenfeiern, privaten Veranstaltungen oder Großevents sorgen die freundlichen Sicherheitskräfte für einen reibungslosen Ablauf und ein sicheres Umfeld.
              </p>
              <p>
                Junker-Sicherheit verbindet professionelle Strukturen mit persönlicher Betreuung. Kunden profitieren von kurzen Wegen, hoher Flexibilität und einem Team, das Sicherheit nicht nur gewährleistet, sondern lebt.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Press Section */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Presse & Referenzen</h2>
            <p className="text-slate-500 mb-12">Was andere über uns schreiben.</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {pressItems.map((item, index) => (
              <StaggerItem key={item.id}>
                <div
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setLightbox(index)}
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${item.thumb}`}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.caption}</p>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-3xl w-full max-h-[90vh] overflow-auto rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${current.src}`}
              alt={current.title}
              className="w-full h-auto rounded-t-xl"
            />
            <div className="bg-white p-6 rounded-b-xl">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{current.caption}</p>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{current.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{current.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
