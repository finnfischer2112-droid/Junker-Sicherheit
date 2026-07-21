import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/dienstleistungen', label: 'Dienstleistungen' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
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
          "sticky top-0 z-50 w-full transition-all duration-200 border-b",
          scrolled 
            ? "bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm py-2" 
            : "bg-white border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo-junker.png" 
              alt="Junker Sicherheit Logo" 
              className="h-10 md:h-12 object-contain"
              onError={(e) => {
                // Fallback if logo not found
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="font-bold bg-primary hover:bg-primary/90 text-white shadow-md">
              <Link href="/kontakt">Jetzt anfragen</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-white border-t p-4 flex flex-col shadow-xl overflow-y-auto">
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "p-4 text-lg font-medium rounded-md transition-colors",
                  location === link.href ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4 p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3 text-slate-700">
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
            <Button asChild className="w-full mt-4 font-bold" size="lg">
              <Link href="/kontakt">Nachricht senden</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <Shield className="h-8 w-8 text-primary" />
                 <div className="flex flex-col">
                   <span className="font-heading font-bold text-xl leading-none text-white">JUNKER</span>
                   <span className="font-heading font-semibold text-sm leading-none text-primary uppercase tracking-wider">Sicherheit</span>
                 </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Ihr inhabergeführter Sicherheitsdienst aus Hasloh bei Hamburg. Seriös, wach, verlässlich – Ihr persönlicher Partner für Sicherheit in Norddeutschland.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-slate-800 p-2 rounded text-primary">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Junker-Sicherheit</div>
                    <div className="text-slate-400">Inh. Günter Junker<br/>Garstedter Weg 35<br/>25474 Hasloh</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-slate-800 p-2 rounded text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">24/7 Erreichbarkeit</div>
                    <a href="tel:+4917621488084" className="text-slate-300 hover:text-white transition-colors">+49 176 214 880 84</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-slate-800 p-2 rounded text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@junker-sicherheit.de" className="text-slate-300 hover:text-white transition-colors">info@junker-sicherheit.de</a>
                </li>
              </ul>
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
