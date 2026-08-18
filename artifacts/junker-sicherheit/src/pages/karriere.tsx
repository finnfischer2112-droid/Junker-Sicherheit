import { Link } from 'wouter';
import { Mail, CheckCircle2, Phone } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export default function Karriere() {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/generated/object.jpg`} alt="" className="w-full h-full object-cover" />
        </div>
        <span className="absolute bottom-2 right-3 text-[10px] italic text-white/35 z-10 pointer-events-none select-none">KI generiert</span>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Karriere bei Junker-Sicherheit</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Werden Sie Teil unseres Teams – wir suchen motivierte Sicherheitskräfte für unsere wachsende Mannschaft.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white border-b border-slate-100 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Sicherheitskraft</h2>
            <p className="text-slate-600 text-lg mb-6">Wir suchen Sicherheitskräfte gem.:</p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              {[
                'Sachkundeprüfung § 34a GewO (Aushilfe/Teilzeit/Vollzeit – m/w/d)',
                'Unterrichtung § 34a GewO (Aushilfe/Teilzeit/Vollzeit – m/w/d)',
                'Quereinsteiger (eine Qualifikation kann ggf. über uns gefördert werden – m/w/d)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-5 py-4 flex-1 min-w-[220px]">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4 italic">(eine Teilzeitstelle richtet sich bei uns nach einem Stundenvolumen im Monat)</p>
          </FadeIn>
        </div>
      </div>

      {/* 3-column content */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">

            {/* Das erwartet Dich */}
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Das erwartet Dich:</h3>
                <ul className="space-y-3">
                  {[
                    'ein dynamisch wachsendes Team',
                    'kurze Entscheidungswege (Du sprichst direkt mit dem Chef)',
                    'Du kannst Deine Ideen mit einbringen',
                    'sozialversicherungspflichtige Beschäftigung',
                    'Dienstkleidung wird gestellt',
                    'pünktliche Lohnzahlung',
                    'spannende Tätigkeiten',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Aufgaben */}
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Was sind Deine Aufgaben:</h3>
                <ul className="space-y-3">
                  {[
                    'Objektschutz',
                    'Veranstaltungsdienst',
                    'Streifengänge',
                    'Besucherlenkung',
                    'Schließdienste',
                    'vorbeugender Brandschutz',
                    'Empfangsdienste',
                    'Garderobendienste',
                    'Bearbeitung von Lieferpapieren (bei Speditionen)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Profil */}
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Das bringst Du mit:</h3>
                <ul className="space-y-3">
                  {[
                    'Qualifikationsnachweis',
                    'sauberes Führungszeugnis',
                    'Grundkenntnisse im Umgang mit MS-Office',
                    'Führerschein / PKW (wünschenswert)',
                    'verhandlungssicheres Deutsch in Word und Schrift',
                    'Flexibilität',
                    'Loyalität und Zuverlässigkeit',
                    'gepflegtes Erscheinungsbild',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Vollständige Bewerbungsunterlagen gerne über unsere Email:
              </h2>
              <a href="mailto:info@junker-sicherheit.de" className="text-white/90 text-xl hover:text-white transition-colors font-medium underline underline-offset-4">
                info@junker-sicherheit.de
              </a>
              <p className="text-white/70 mt-4">Fragen?</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button asChild size="lg" className="h-14 px-8 font-bold bg-white text-primary hover:bg-slate-100 shadow-xl hover:scale-105 transition-transform">
                <a href="mailto:info@junker-sicherheit.de?subject=Bewerbung%20Sicherheitskraft">
                  <Mail className="mr-2 h-5 w-5" /> Jetzt bewerben
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 font-bold border-white text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+4917621488084">
                  <Phone className="mr-2 h-5 w-5" /> +49 176 214 880 84
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 h-10">
                <Link href="/kontakt">Kontaktformular</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}
