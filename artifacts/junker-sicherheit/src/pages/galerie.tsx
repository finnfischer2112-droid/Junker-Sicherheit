import { useState } from 'react';
import { X, ZoomIn, MapPin, CheckCircle2, Anchor, PartyPopper } from 'lucide-react';
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

interface EinsatzImage {
  src: string;
  alt: string;
}

interface Einsatz {
  id: number;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  location: string;
  heroImage: string;
  images: EinsatzImage[];
  intro: string;
  tasks: string[];
  ships?: string[];
}

const einsaetze: Einsatz[] = [
  {
    id: 1,
    icon: <PartyPopper className="h-5 w-5" />,
    badge: 'Veranstaltungsschutz',
    title: 'Hafenfest List auf Sylt',
    subtitle: 'Seit 2024 festes Sicherheitsteam beim traditionsreichen Hafenfest',
    location: 'List auf Sylt, Schleswig-Holstein',
    heroImage: 'einsaetze/hafenfest_1.jpeg',
    images: [
      { src: 'einsaetze/hafenfest_2.png', alt: 'Hafenfest List – Impression 2' },
      { src: 'einsaetze/hafenfest_3.jpeg', alt: 'Hafenfest List – Impression 3' },
    ],
    intro:
      'Zum 20-jährigen Jubiläum des Hafenfestes in List auf Sylt im Jahr 2024 wurden wir erstmals mit der Sicherheitsbetreuung betraut. Durch unser freundliches Auftreten, professionelles Handeln und die enge Zusammenarbeit mit den örtlichen Sicherheitsorganen sind wir seitdem fester Bestandteil des jährlichen Teams vor Ort.',
    tasks: [
      'Streifengänge im gesamten Hafenbereich',
      'Prävention vor Diebstahl und Sachbeschädigung',
      'Bewachen von technischem Equipment',
      'Vorbeugender Brandschutz',
      'Erste-Hilfe-Maßnahmen',
      'Ansprechpartner für Besucher, Gäste und Schausteller',
    ],
  },
  {
    id: 2,
    icon: <Anchor className="h-5 w-5" />,
    badge: 'Maritime Sicherheit',
    title: 'Kreuzfahrtschiffe List auf Sylt',
    subtitle: 'Seit über 10 Jahren verlässlicher ISPS-Sicherheitspartner im Hafen List',
    location: 'Hafen List, Sylt',
    heroImage: 'einsaetze/kreuzfahrt_2.jpeg',
    images: [
      { src: 'einsaetze/kreuzfahrt_1.png', alt: 'Kreuzfahrt List – Impression 1' },
      { src: 'einsaetze/kreuzfahrt_3.jpeg', alt: 'Kreuzfahrt List – Impression 3' },
    ],
    intro:
      'Seit mehr als 10 Jahren betreuen wir Kreuzfahrtschiffe, die in List vor Sylt auf Reede liegen. Wir sichern die Hafenanlage gemäß ISPS-Code, regeln die Zutrittskontrolle zu den Tenderbooten, führen Gepäck- und Lieferkontrollen durch und stehen den Passagieren mit Rat und Tat zur Seite. Eng arbeiten wir dabei mit dem Hafenamt (PFSO), der Polizei und dem Zoll zusammen.',
    tasks: [
      'Sicherung der Hafenanlage gem. ISPS-Code',
      'Zutrittskontrolle zu den Tenderbooten',
      'Gepäck- und Lieferkontrollen',
      'Ansprechpartner für Kreuzfahrtpassagiere',
      'Enge Zusammenarbeit mit Hafenamt, Polizei und Zoll',
    ],
    ships: ['M/S Hamburg', 'M/S Hanseatic Spirit', 'M/S Deutschland'],
  },
];

type LightboxEntry =
  | { kind: 'press'; index: number }
  | { kind: 'einsatz'; einsatzId: number; imageIndex: number };

export default function Galerie() {
  const [lightbox, setLightbox] = useState<LightboxEntry | null>(null);

  // Press lightbox resolution
  const currentPress =
    lightbox?.kind === 'press' ? pressItems[lightbox.index] : null;

  // Einsatz lightbox resolution
  const currentEinsatzData = lightbox?.kind === 'einsatz'
    ? (() => {
        const ez = einsaetze.find(e => e.id === lightbox.einsatzId)!;
        const allImgs = [
          { src: ez.heroImage, alt: ez.title },
          ...ez.images,
        ];
        return { einsatz: ez, img: allImgs[lightbox.imageIndex] };
      })()
    : null;

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

      {/* ── Einsätze vor Ort ── */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Einsätze vor Ort</h2>
            <p className="text-slate-500 mb-14">Ausgewählte Projekte und Dauereinsätze aus unserer täglichen Arbeit.</p>
          </FadeIn>

          <div className="space-y-24">
            {einsaetze.map((ez, ezIdx) => {
              const allImgs = [{ src: ez.heroImage, alt: ez.title }, ...ez.images];
              return (
                <StaggerContainer key={ez.id}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${ezIdx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

                    {/* Bilder-Spalte */}
                    <StaggerItem>
                      <div className="space-y-3">
                        {/* Hero-Bild */}
                        <div
                          className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group shadow-md"
                          onClick={() => setLightbox({ kind: 'einsatz', einsatzId: ez.id, imageIndex: 0 })}
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}images/${ez.heroImage}`}
                            alt={ez.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                          </div>
                        </div>
                        {/* Thumb-Reihe */}
                        <div className="grid grid-cols-2 gap-3">
                          {ez.images.map((img, iIdx) => (
                            <div
                              key={iIdx}
                              className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group shadow-sm"
                              onClick={() => setLightbox({ kind: 'einsatz', einsatzId: ez.id, imageIndex: iIdx + 1 })}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Text-Spalte */}
                    <StaggerItem>
                      <div className="flex flex-col gap-6">
                        {/* Badge */}
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                            {ez.icon}
                            {ez.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">{ez.title}</h3>
                          <p className="text-slate-500 text-sm font-medium">{ez.subtitle}</p>
                        </div>

                        {/* Standort */}
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                          <span>{ez.location}</span>
                        </div>

                        {/* Fließtext */}
                        <p className="text-slate-600 leading-relaxed">{ez.intro}</p>

                        {/* Schiffe (nur Kreuzfahrt) */}
                        {ez.ships && (
                          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Betreute Schiffe</p>
                            <div className="flex flex-wrap gap-2">
                              {ez.ships.map(ship => (
                                <span key={ship} className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                                  <Anchor className="h-3 w-3 text-primary" />
                                  {ship}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Aufgaben */}
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Unsere Aufgaben</p>
                          <ul className="space-y-2">
                            {ez.tasks.map(task => (
                              <li key={task} className="flex items-start gap-2.5 text-slate-700 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </StaggerItem>
                  </div>

                  {/* Divider (not after last) */}
                  {ezIdx < einsaetze.length - 1 && (
                    <div className="border-b border-slate-100 mt-24" />
                  )}
                </StaggerContainer>
              );
            })}
          </div>
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
                  onClick={() => setLightbox({ kind: 'press', index })}
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

      {/* Lightbox – Presse */}
      {currentPress && (
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
              src={`${import.meta.env.BASE_URL}images/${currentPress.src}`}
              alt={currentPress.title}
              className="w-full h-auto rounded-t-xl"
            />
            <div className="bg-white p-6 rounded-b-xl">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{currentPress.caption}</p>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{currentPress.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{currentPress.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox – Einsatz */}
      {currentEinsatzData && (
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
            className="max-w-4xl w-full max-h-[90vh] overflow-auto rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${currentEinsatzData.img.src}`}
              alt={currentEinsatzData.img.alt}
              className="w-full h-auto rounded-t-xl"
            />
            <div className="bg-white p-6 rounded-b-xl">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{currentEinsatzData.einsatz.badge}</p>
              <h3 className="text-xl font-heading font-bold text-slate-900">{currentEinsatzData.einsatz.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
