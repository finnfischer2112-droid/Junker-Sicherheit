import { useRoute } from 'wouter';
import { services } from '@/data/services';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Phone, MapPin, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { TrustBar } from '@/components/ui/trust-bar';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { GoogleRatingBadge } from '@/components/ui/google-rating-badge';
import NotFound from '@/pages/not-found';

export default function ServiceDetail() {
  const [, params] = useRoute('/dienstleistungen/:slug');
  const slug = params?.slug;
  
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  const referenceLogos = [
    { name: "Stadt Quickborn", logo: "quickborn.jpg" },
    { name: "Bundesministerium für Gesundheit", logo: "bmg.jpg" },
    { name: "Wacken Open Air", logo: "wacken.png" },
    { name: "GMSH", logo: "gmsh.jpg" },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">

      {/* [1] Hero Section */}
      <div className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/generated/${service.image}`} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 right-3 text-[10px] italic text-white/35 z-20 pointer-events-none select-none">KI generiert</span>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20 py-16">
          <FadeIn>
            <Link href="/dienstleistungen" className="inline-flex items-center text-primary-foreground/70 hover:text-white mb-6 transition-colors font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Alle Dienstleistungen
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                <service.icon className="h-6 w-6" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-6">
              {service.shortDescription}
            </p>

            {/* USP Pills */}
            {'usps' in service && Array.isArray(service.usps) && service.usps.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {(service.usps as string[]).map((usp, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {usp}
                  </span>
                ))}
              </div>
            )}

            {/* Google Rating Badge */}
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <GoogleRatingBadge size="sm" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* [2] TrustBar */}
      <TrustBar />

      {/* [3] Hauptinhalt + Sidebar */}
      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="prose prose-slate prose-lg max-w-none">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  {'headingTitle' in service && service.headingTitle ? service.headingTitle : `${service.title} in Hamburg & Norddeutschland`}
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
                
                {'extra' in service && service.extra && (
                  <div className="my-10 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                    <p className="text-slate-700 italic m-0 font-medium">{service.extra}</p>
                  </div>
                )}

                <h3 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">Leistungen im Überblick</h3>
              </div>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4 mt-8">
              {service.details.map((detail, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-primary">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{detail}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn delay={0.2} direction="left">
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4">Interesse geweckt?</h3>
                  <p className="text-slate-300 mb-8">
                    Lassen Sie uns in einem persönlichen Gespräch evaluieren, wie wir Sie im Bereich {service.title} optimal unterstützen können.
                  </p>
                  
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white h-12 mb-4">
                    <Link href="/kontakt">Jetzt anfragen</Link>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+4917621488084" className="hover:text-white transition-colors font-medium">0176 214 880 84</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">Weitere Leistungen</h3>
                <div className="space-y-4">
                  {otherServices.map((other) => (
                    <Link 
                      key={other.slug} 
                      href={`/dienstleistungen/${other.slug}`}
                      className="group flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-slate-400 group-hover:text-primary transition-colors">
                          <other.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{other.title}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link href="/dienstleistungen" className="text-primary font-medium hover:underline text-sm flex items-center">
                    Alle Leistungen ansehen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>

      {/* [4] Lokaler SEO-Absatz */}
      <div className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                    Ihr Partner für {service.title} in der Region
                  </h2>
                </div>
                {'localText' in service && service.localText && (
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {service.localText as string}
                  </p>
                )}
              </div>
              <div className="lg:w-72 shrink-0 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 mb-4">Unser Einzugsgebiet</h3>
                <ul className="space-y-2">
                  {["Hamburg (alle Stadtteile)", "Schleswig-Holstein", "Pinneberg & Umgebung", "Metropolregion Hamburg", "Auf Anfrage: bundesweit"].map((area, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* [5] Ablauf-Sektion */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Unser Prozess</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">So einfach funktioniert es</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                num: "01",
                title: "Kostenlose Anfrage",
                desc: "Kontaktieren Sie uns — telefonisch, per E-Mail oder über unser Formular. Wir melden uns schnell zurück."
              },
              {
                num: "02",
                title: "Individuelle Analyse",
                desc: "Wir analysieren Ihre Situation vor Ort, identifizieren Schwachstellen und entwickeln ein maßgeschneidertes Konzept."
              },
              {
                num: "03",
                title: "Professionelle Umsetzung",
                desc: "Unsere qualifizierten Mitarbeiter setzen das Konzept zuverlässig um — diskret, professionell, rund um die Uhr."
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* [6] FAQ-Sektion */}
      {'faq' in service && Array.isArray(service.faq) && service.faq.length > 0 && (
        <div className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <FadeIn className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Häufige Fragen zu {service.title}
              </h2>
            </FadeIn>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <FaqAccordion items={service.faq as { q: string; a: string }[]} />
              </div>
            </FadeIn>
          </div>
        </div>
      )}

      {/* [7] Referenz-Teaser */}
      <div className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Kunden die uns vertrauen</h3>
            <p className="text-slate-500">Ein Auszug unserer geschätzten Kunden und Partner</p>
          </FadeIn>

          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {referenceLogos.map((ref, i) => (
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
        </div>
      </div>

      {/* [8] Abschluss-CTA */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Jetzt {service.title} anfragen
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Kostenlose Erstberatung · Schnelle Reaktionszeit · Diskret &amp; Professionell
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg hover:scale-105 transition-transform">
                <Link href="/kontakt">Jetzt anfragen</Link>
              </Button>
              <a
                href="tel:+4917621488084"
                className="inline-flex items-center gap-2 text-white text-xl font-semibold hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                0176 214 880 84
              </a>
            </div>
            <p className="text-slate-500 text-sm">Kein Risiko · Keine Vertragsbindung beim ersten Gespräch</p>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}
