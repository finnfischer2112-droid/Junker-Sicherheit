import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Clock, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { GoogleRatingBadge } from '@/components/ui/google-rating-badge';
import { services } from '@/data/services';

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
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20 pt-20 pb-24">
          <FadeIn delay={0.2} duration={0.8} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Ihr Sicherheitspartner in Norddeutschland</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Haben Sie Fragen zum Thema Sicherheit, können wir mit <span className="text-primary">"SICHERHEIT"</span> helfen.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Junker-Sicherheit ist Ihr inhabergeführtes Sicherheitsunternehmen aus Hasloh. Seriös, wach und verlässlich – mit persönlicher Handschlagqualität auf höchstem Niveau.
            </p>
            
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

      {/* Trust & About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <FadeIn direction="right" className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/generated/about.jpg`} 
                alt="Günter Junker - Junker Sicherheit" 
                className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-slate-900">100%</div>
                    <div className="text-slate-600 text-sm">Verlässlichkeit</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="flex-1">
              <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Über uns</div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Sicherheit ist Vertrauenssache.</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Als inhabergeführtes Sicherheitsunternehmen legen wir größten Wert auf eine persönliche, transparente und vertrauensvolle Zusammenarbeit. Wir sind kein anonymer Großkonzern, sondern Ihr Partner aus der Region.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Unsere ausgesuchten und geschulten Mitarbeiter repräsentieren gemäß unserer Firmenphilosophie mit Verantwortungsbewusstsein Ihre Sicherheit. Wir wollen keine Fremdkörper sein, sondern feste Mitglieder Ihres Teams.
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Umfassende Sicherheitslösungen</h2>
            <p className="text-slate-600 text-lg">
              Wir unterstützen Sie beratend und durchführend in allen sicherheitsrelevanten Bereichen, um Ihnen Verantwortung abzunehmen und Sie personell zu entlasten.
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Warum Junker-Sicherheit?</h2>
            <p className="text-slate-300 text-lg">Professioneller Schutz mit norddeutscher Zuverlässigkeit. Wir sind nicht nur Dienstleister, sondern Partner auf Augenhöhe.</p>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">In 3 Schritten zu mehr Sicherheit</h2>
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
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Vertrauen ist die Basis unserer Arbeit</h2>
            <p className="text-slate-500">Ein Auszug unserer geschätzten Kunden und Partner</p>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Bereit für ein sicheres Gefühl?</h2>
              <p className="text-slate-300 text-lg mb-6">
                Lassen Sie uns gemeinsam ein individuelles Sicherheitskonzept für Ihre Anforderungen erarbeiten. Unverbindlich und diskret.
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
