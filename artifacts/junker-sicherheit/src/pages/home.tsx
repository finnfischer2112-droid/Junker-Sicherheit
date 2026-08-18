import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Clock, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { GoogleRatingBadge } from '@/components/ui/google-rating-badge';
import { services } from '@/data/services';

const logoTicker = [
  { name: "Stadt Quickborn", logo: "quickborn.jpg" },
  { name: "List auf Sylt", logo: "list-zipfelbund.jpg" },
  { name: "Wacken Open Air", logo: "wacken.png" },
  { name: "Bundesministerium für Gesundheit", logo: "bmg.jpg" },
  { name: "GMSH", logo: "gmsh.jpg" },
  { name: "H.C. Röver", logo: "hc-roever.jpg" },
  { name: "Sartori & Berger", logo: "sartori-berger.png" },
  { name: "Schleswig-Holstein", logo: "schleswig-holstein.jpg" },
  { name: "JuRa Hasloh", logo: "jura-hasloh.jpg" },
  { name: "SV Rugenbergen", logo: "sv-rugenbergen.jpg" },
  { name: "Wirtschaftsjunioren", logo: "wirtschaftsjunioren.png" },
];

export default function Home() {
  const references = [
    { name: "Stadt Quickborn", logo: "quickborn.jpg" },
    { name: "List auf Sylt", logo: "list-zipfelbund.jpg" },
    { name: "Wacken Open Air", logo: "wacken.png" },
    { name: "Bundesministerium für Gesundheit", logo: "bmg.jpg" },
    { name: "GMSH", logo: "gmsh.jpg" },
    { name: "Schleswig-Holstein", logo: "schleswig-holstein.jpg" }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 z-10"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/generated/hero.jpg`} 
            alt="Sicherheitsdienst Norddeutschland" 
            className="w-full h-full object-cover object-center animate-in fade-in duration-1000 scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#0f172a';
            }}
          />
          <span className="absolute bottom-2 right-3 text-[10px] italic text-white/35 z-20 pointer-events-none select-none">KI generiert</span>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20 pt-20 pb-24">
          <FadeIn delay={0.2} duration={0.8} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Inhabergeführt · §34a ausgebildet · 24/7 erreichbar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-4 tracking-tight">
              Sicherheitsdienst aus Hasloh – <span className="text-primary">Professioneller Schutz</span> für Hamburg & Schleswig-Holstein
            </h1>

            <h3 className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-normal">
              Objektschutz, Veranstaltungssicherheit & Wachdienst aus Hasloh bei Hamburg – zuverlässig, diskret und rund um die Uhr. Ihr persönlicher Sicherheitspartner für die gesamte Metropolregion.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                <Link href="/kontakt">Kostenlose Beratung anfordern</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                <Link href="/dienstleistungen">Unsere Leistungen</Link>
              </Button>
            </div>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 mt-2">
              <GoogleRatingBadge size="sm" />
            </div>
          </FadeIn>
        </div>
        
      </section>

      {/* Logo Ticker */}
      <div className="bg-white border-b border-slate-100 shadow-sm overflow-hidden py-8">
        <div className="flex gap-20 animate-ticker whitespace-nowrap">
          {[...logoTicker, ...logoTicker].map((ref, idx) => (
            <div key={idx} className="inline-flex items-center justify-center shrink-0 h-16 w-44">
              <img
                src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`}
                alt={ref.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trust & About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <FadeIn direction="right" className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative">
                <div className="h-52 w-52 rounded-full ring-4 ring-primary/15 ring-offset-4 overflow-hidden shadow-lg">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/guenter-junker.jpg`} 
                    alt="Günter Junker - Inhaber Junker-Sicherheit" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-slate-900">Günter Junker</div>
                <div className="text-sm text-slate-500">Inhaber &amp; Geschäftsführer</div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="flex-1">
              <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Über uns</div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Ihr Sicherheitsunternehmen aus Hasloh – persönlich, zuverlässig, 24/7.</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Junker-Sicherheit ist ein inhabergeführtes Bewachungsunternehmen mit Sitz in Hasloh bei Hamburg. Seit Jahren schützen wir Unternehmen, Kommunen und Veranstaltungen in Hamburg, Pinneberg, Quickborn und der gesamten Metropolregion – persönlich, diskret und zuverlässig.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Unsere §34a ausgebildeten Mitarbeiter werden sorgfältig ausgewählt und regelmäßig geschult. Wir verstehen uns nicht als Fremdkörper, sondern als festen Teil Ihres Teams – mit norddeutscher Handschlagqualität auf höchstem Niveau.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Fester, persönlicher Ansprechpartner",
                  "Maßgeschneiderte Sicherheitskonzepte",
                  "Hochqualifiziertes, repräsentatives Personal",
                  "Norddeutsche Handschlagqualität"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="outline" className="h-12 px-6">
                <Link href="/kontakt">Lernen Sie uns kennen</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Unsere Expertise</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Sicherheitsdienstleistungen in Hamburg & Norddeutschland</h2>
            <p className="text-slate-600 text-lg">
              Von Objektschutz über Veranstaltungssicherheit bis hin zu Alarmanlagen – wir bieten maßgeschneiderte Sicherheitslösungen für Unternehmen, Kommunen und Privatkunden in Hamburg, Schleswig-Holstein und der gesamten Metropolregion.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={`/dienstleistungen/${service.slug}`} className="group block h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                    <img 
                      src={`${import.meta.env.BASE_URL}images/generated/${service.image}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl text-primary shadow-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="absolute bottom-1.5 right-2 text-[10px] italic text-white/40 z-20 pointer-events-none select-none">KI generiert</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-6 flex-1">{service.shortDescription}</p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Details ansehen <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeIn delay={0.4} className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="bg-white border-slate-200">
              <Link href="/dienstleistungen">Zur Dienstleistungsübersicht</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/generated/reception.jpg)` }}></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Warum Kunden in Hamburg & Schleswig-Holstein auf Junker-Sicherheit vertrauen</h2>
            <p className="text-slate-300 text-lg">Professioneller Schutz mit norddeutscher Zuverlässigkeit. Kein anonymes Großunternehmen – sondern ein persönlicher Partner, der Verantwortung übernimmt.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                <div className="h-16 w-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">24/7 Einsatzbereitschaft</h3>
                <p className="text-slate-300">Sicherheit kennt keine Öffnungszeiten. Wir sind rund um die Uhr, an 365 Tagen im Jahr für Sie erreichbar und einsatzbereit.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                <div className="h-16 w-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Persönliche Betreuung</h3>
                <p className="text-slate-300">Als inhabergeführtes Unternehmen garantieren wir Ihnen feste Ansprechpartner, kurze Wege und schnelle Entscheidungen.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                <div className="h-16 w-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Qualifiziertes Personal</h3>
                <p className="text-slate-300">Unsere Mitarbeiter sind sorgfältig ausgewählt, bestens geschult und treten stets repräsentativ und deeskalierend auf.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Unser Prozess</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">In 3 Schritten zu Ihrer individuellen Sicherheitslösung aus Hasloh für Hamburg & Norddeutschland</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 z-0"></div>
            
            {[
              { num: "01", title: "Analyse & Beratung", desc: "Wir analysieren Ihre Situation vor Ort und beraten Sie umfassend zu möglichen Schwachstellen." },
              { num: "02", title: "Konzept & Planung", desc: "Basierend auf der Analyse erstellen wir ein maßgeschneidertes, wirtschaftliches Sicherheitskonzept." },
              { num: "03", title: "Umsetzung & Schutz", desc: "Unsere qualifizierten Mitarbeiter setzen das Konzept zuverlässig und professionell in die Tat um." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* References Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Referenzen – Zufriedene Kunden in Hamburg & Norddeutschland</h2>
            <p className="text-slate-500">Von Bundesbehörden bis Großveranstaltungen – ein Auszug unserer geschätzten Auftraggeber</p>
          </FadeIn>

          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {references.map((ref, i) => (
              <StaggerItem key={i}>
                <div className="w-32 md:w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`} 
                    alt={ref.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeIn delay={0.4} className="text-center mt-12">
            <Link href="/referenzen" className="text-primary font-medium hover:underline inline-flex items-center">
              Alle Referenzen ansehen <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <FadeIn className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Kostenlosen Sicherheits-Check für Hamburg & Norddeutschland anfragen</h2>
              <p className="text-slate-300 text-lg mb-6">
                Lassen Sie uns gemeinsam ein maßgeschneidertes Sicherheitskonzept für Ihr Unternehmen oder Ihre Veranstaltung erarbeiten – unverbindlich, diskret und ohne Risiko.
              </p>
              <ul className="space-y-3 mb-8 hidden md:block">
                {['Kostenlose Vor-Ort-Analyse', 'Maßgeschneiderte Konzepte', 'Transparente Preisgestaltung'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold w-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:scale-105 transition-transform">
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
              <p className="text-center text-slate-400 text-sm">
                Oder direkt anrufen:<br/>
                <a href="tel:+4917621488084" className="text-white font-medium hover:text-primary transition-colors text-lg md:text-xl mt-1 block">+49 176 214 880 84</a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
