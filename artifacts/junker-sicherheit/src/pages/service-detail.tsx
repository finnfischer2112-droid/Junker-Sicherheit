import { useRoute } from 'wouter';
import { services } from '@/data/services';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import NotFound from '@/pages/not-found';

export default function ServiceDetail() {
  const [, params] = useRoute('/dienstleistungen/:slug');
  const slug = params?.slug;
  
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/generated/${service.image}`} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-20">
          <FadeIn>
            <Link href="/dienstleistungen" className="inline-flex items-center text-primary-foreground/70 hover:text-white mb-6 transition-colors font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Alle Dienstleistungen
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                <service.icon className="h-6 w-6" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {service.shortDescription}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="prose prose-slate prose-lg max-w-none">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Umfassender Schutz für Ihre Anforderungen</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
                
                {service.extra && (
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
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
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
    </div>
  );
}
