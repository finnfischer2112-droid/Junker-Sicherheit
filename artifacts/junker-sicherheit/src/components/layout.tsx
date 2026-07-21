import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Shield, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { AnimatePresence, motion } from 'framer-motion';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktopServicesHovered, setIsDesktopServicesHovered] = useState(false);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesHovered(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsDesktopServicesHovered(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDesktopServicesHovered(false);
    }, 150); // slight delay to prevent flickering
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative">
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+4917621488084" className="hover:text-white transition-colors">+49 176 214 880 84</a>
              <span className="text-xs text-primary font-medium ml-1">(24h erreichbar)</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@junker-sicherheit.de" className="hover:text-white transition-colors">info@junker-sicherheit.de</a>
            </span>
          </div>
          <div className="text-slate-400 text-xs">
            Zuverlässiger Sicherheitspartner in Norddeutschland
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled || isDesktopServicesHovered
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-2" 
            : "bg-white border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo-junker.png`} 
              alt="Junker Sicherheit Logo" 
              className="h-10 md:h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-logo');
              }}
            />
            <div className="hidden group-[.fallback-logo]:flex items-center gap-2">
               <Shield className="h-8 w-8 text-primary" />
               <div className="flex flex-col">
                 <span className="font-heading font-bold text-xl leading-none text-slate-900">JUNKER</span>
                 <span className="font-heading font-semibold text-sm leading-none text-primary uppercase tracking-wider">Sicherheit</span>
               </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-4",
                location === "/" ? "text-primary" : "text-slate-600"
              )}
            >
              Startseite
            </Link>

            {/* Services Dropdown Trigger */}
            <div 
              className="relative h-full py-4"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setIsDesktopServicesHovered(false);
              }}
              onFocus={() => setIsDesktopServicesHovered(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setIsDesktopServicesHovered(false);
                }
              }}
            >
              <Link
                href="/dienstleistungen"
                aria-haspopup="menu"
                aria-expanded={isDesktopServicesHovered}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                  location.startsWith("/dienstleistungen") ? "text-primary" : "text-slate-600"
                )}
              >
                Dienstleistungen
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDesktopServicesHovered && "rotate-180")} />
              </Link>

              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {isDesktopServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 p-6 grid grid-cols-3 gap-x-6 gap-y-4 origin-top"
                  >
                    <div className="col-span-3 pb-3 border-b border-slate-100 mb-2 flex justify-between items-center">
                      <span className="font-heading font-semibold text-slate-900 text-lg">Unsere Leistungen</span>
                      <Link href="/dienstleistungen" className="text-sm text-primary hover:underline font-medium">Alle ansehen &rarr;</Link>
                    </div>
                    {services.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/dienstleistungen/${service.slug}`}
                        className="group flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="mt-0.5 bg-primary/10 text-primary p-2 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                          <service.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm mb-0.5 group-hover:text-primary transition-colors">{service.title}</div>
                          <div className="text-xs text-slate-500 line-clamp-1">{service.shortDescription}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/referenzen"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-4",
                location === "/referenzen" ? "text-primary" : "text-slate-600"
              )}
            >
              Referenzen
            </Link>
            <Link
              href="/kontakt"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-4",
                location === "/kontakt" ? "text-primary" : "text-slate-600"
              )}
            >
              Kontakt
            </Link>

            <Button asChild className="font-bold bg-primary hover:bg-primary/90 text-white shadow-md ml-2">
              <Link href="/kontakt">Jetzt anfragen</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[73px] z-40 bg-white border-t flex flex-col overflow-y-auto"
          >
            <div className="p-4 flex flex-col gap-1 pb-24">
              <Link
                href="/"
                className={cn(
                  "p-4 text-lg font-medium rounded-xl transition-colors",
                  location === "/" ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                Startseite
              </Link>
              
              <div className="rounded-xl overflow-hidden bg-slate-50/50">
                <button 
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 text-lg font-medium transition-colors",
                    location.startsWith("/dienstleistungen") ? "text-primary" : "text-slate-700"
                  )}
                >
                  <span>Dienstleistungen</span>
                  <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isServicesExpanded && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {isServicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/50 border-t border-slate-100/50"
                    >
                      <Link 
                        href="/dienstleistungen" 
                        className="block px-8 py-3 text-sm font-semibold text-primary"
                      >
                        Alle Leistungen ansehen
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/dienstleistungen/${service.slug}`}
                          className="flex items-center gap-3 px-8 py-3 text-slate-600 hover:text-primary transition-colors text-sm"
                        >
                          <service.icon className="h-4 w-4 opacity-70" />
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/referenzen"
                className={cn(
                  "p-4 text-lg font-medium rounded-xl transition-colors",
                  location === "/referenzen" ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                Referenzen
              </Link>
              <Link
                href="/kontakt"
                className={cn(
                  "p-4 text-lg font-medium rounded-xl transition-colors",
                  location === "/kontakt" ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                Kontakt
              </Link>

              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 text-slate-700 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-slate-500">24h Hotline</div>
                    <a href="tel:+4917621488084" className="font-medium">+49 176 214 880 84</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@junker-sicherheit.de" className="font-medium break-all">info@junker-sicherheit.de</a>
                </div>
                <Button asChild className="w-full mt-6 font-bold" size="lg">
                  <Link href="/kontakt">Nachricht senden</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <Shield className="h-8 w-8 text-primary" />
                 <div className="flex flex-col">
                   <span className="font-heading font-bold text-xl leading-none text-white">JUNKER</span>
                   <span className="font-heading font-semibold text-sm leading-none text-primary uppercase tracking-wider">Sicherheit</span>
                 </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Ihr inhabergeführtes Sicherheitsunternehmen aus Hasloh bei Hamburg. Seriös, wach, verlässlich – Ihr persönlicher Partner für Sicherheit in Norddeutschland.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-6">Schnellzugriff</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors">Startseite</Link></li>
                <li><Link href="/dienstleistungen" className="text-slate-400 hover:text-primary transition-colors">Dienstleistungen</Link></li>
                <li><Link href="/referenzen" className="text-slate-400 hover:text-primary transition-colors">Referenzen</Link></li>
                <li><Link href="/kontakt" className="text-slate-400 hover:text-primary transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Junker-Sicherheit</div>
                    <div className="text-slate-400 text-sm mt-1">Inh. Günter Junker<br/>Garstedter Weg 35<br/>25474 Hasloh</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <a href="tel:+4917621488084" className="text-slate-300 hover:text-white transition-colors block">+49 176 214 880 84</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@junker-sicherheit.de" className="text-slate-300 hover:text-white transition-colors block">info@junker-sicherheit.de</a>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>&copy; {new Date().getFullYear()} Junker-Sicherheit. Alle Rechte vorbehalten.</div>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
