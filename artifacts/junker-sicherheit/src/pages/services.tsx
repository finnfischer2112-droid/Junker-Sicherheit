import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { TrustBar } from '@/components/ui/trust-bar';

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={`${import.meta.env.BASE_URL}images/generated/event.jpg`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Unsere Dienstleistungen</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Professionelle Sicherheitskonzepte aus einer Hand. Wir bieten maßgeschneiderte Lösungen für Unternehmen, Kommunen und private Anforderungen in ganz Norddeutschland.
            </p>
          </FadeIn>
        </div>
      </div>

      <TrustBar />

      {/* Services List */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <FadeIn 
                key={service.id} 
                delay={0.1}
                direction="up"
              >
                <div 
                  id={service.id}
                  className={cn(
                    "bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row group hover:shadow-xl transition-shadow duration-500",
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  )}
                >
                  <div className="lg:w-2/5 relative overflow-hidden min-h-[300px] lg:min-h-full">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/generated/${service.image}`} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
                  </div>

                  <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-slate-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      {service.shortDescription}. {service.description.split('.')[0]}.
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                        <Link href={`/dienstleistungen/${service.slug}`}>Mehr erfahren</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/generated/about.jpg)` }}></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ihr Tätigkeitsfeld war nicht dabei?
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-10">
              Wie unsere Sicherheitsdienste Ihr spezielles Projekt unterstützen können, erläutern wir Ihnen gerne im persönlichen Dialog. Wir finden eine maßgeschneiderte Lösung.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold h-14 px-8 shadow-xl hover:scale-105 transition-transform">
              <Link href="/kontakt">Persönliches Gespräch vereinbaren <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
