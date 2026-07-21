import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Clock, Users, Anchor, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <img 
            src="/images/generated/hero.jpg" 
            alt="Sicherheitsdienst Norddeutschland" 
            className="w-full h-full object-cover object-center animate-in fade-in duration-1000 zoom-in-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#0f172a';
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20 pt-16 pb-24">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Ihr Sicherheitspartner in Norddeutschland</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Haben Sie Fragen zum Thema Sicherheit, können wir mit <span className="text-primary">"SICHERHEIT"</span> helfen.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Junker-Sicherheit ist Ihr inhabergeführtes Sicherheitsunternehmen aus Hasloh. Seriös, wach und verlässlich – mit persönlicher Handschlagqualität.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold">
                <Link href="/kontakt">Kostenlose Beratung anfordern</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/dienstleistungen">Unsere Leistungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Warum Junker-Sicherheit?</h2>
            <p className="text-slate-600 text-lg">Professioneller Schutz mit norddeutscher Zuverlässigkeit. Wir sind nicht nur Dienstleister, sondern Partner auf Augenhöhe.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover-elevate transition-all">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">24/7 Einsatzbereitschaft</h3>
              <p className="text-slate-600">Sicherheit kennt keine Öffnungszeiten. Wir sind rund um die Uhr, an 365 Tagen im Jahr für Sie erreichbar und einsatzbereit.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover-elevate transition-all">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">Persönliche Betreuung</h3>
              <p className="text-slate-600">Als inhabergeführtes Unternehmen garantieren wir Ihnen feste Ansprechpartner, kurze Wege und schnelle Entscheidungen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover-elevate transition-all">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">Qualifiziertes Personal</h3>
              <p className="text-slate-600">Unsere Mitarbeiter sind sorgfältig ausgewählt, bestens geschult und treten stets repräsentativ und deeskalierend auf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Unsere Expertise</div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Umfassende Sicherheitslösungen</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 gap-2 font-medium">
              <Link href="/dienstleistungen">Alle Leistungen ansehen <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Objektschutz", desc: "Werk- und Objektschutz, Revierdienste", icon: ShieldCheck, img: "object.jpg" },
              { title: "Eventsicherheit", desc: "Von der Einlasskontrolle bis zum Brandschutz", icon: Users, img: "event.jpg" },
              { title: "Empfangsdienst", desc: "Freundlich, repräsentativ und wachsam", icon: Clock, img: "reception.jpg" },
              { title: "Maritime Sicherheit", desc: "Hafenanlagen, ISPS-Code und Schiffe", icon: Anchor, img: "hero.jpg" }
            ].map((service, idx) => (
              <Link key={idx} href="/dienstleistungen" className="group block h-full">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <img 
                    src={`/images/generated/${service.img}`} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.backgroundColor = '#f1f5f9'; }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg transform transition-transform group-hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-1">
                        <service.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-heading font-bold text-slate-900">{service.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-1">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Bereit für ein sicheres Gefühl?</h2>
              <p className="text-slate-300 text-lg mb-6">
                Lassen Sie uns gemeinsam ein individuelles Sicherheitskonzept für Ihre Anforderungen erarbeiten. Unverbindlich und diskret.
              </p>
              <ul className="space-y-3 mb-8">
                {['Kostenlose Vor-Ort-Analyse', 'Maßgeschneiderte Konzepte', 'Transparente Preisgestaltung'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
              <p className="text-center text-slate-400 text-sm">
                Oder direkt anrufen:<br/>
                <a href="tel:+4917621488084" className="text-white font-medium hover:text-primary transition-colors text-base mt-1 block">+49 176 214 880 84</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
