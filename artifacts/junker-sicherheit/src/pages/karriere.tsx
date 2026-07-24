import { Link } from 'wouter';
import { Mail, CheckCircle2, Users, Briefcase, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

export default function Karriere() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={`${import.meta.env.BASE_URL}images/generated/object.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              <span>Jetzt bewerben</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Karriere bei Junker-Sicherheit
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Werden Sie Teil unseres Teams – wir suchen motivierte Sicherheitskräfte für unsere wachsende Mannschaft.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Job Posting */}
      <div className="container mx-auto px-4 max-w-4xl py-20">
        <FadeIn>
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">

            {/* Job Title Banner */}
            <div className="bg-primary px-10 py-8">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="h-6 w-6 text-white/80" />
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Stellenausschreibung</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Sicherheitskraft</h2>
            </div>

            <div className="px-10 py-10 space-y-10">

              {/* Intro */}
              <section>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Wir suchen Sicherheitskräfte gem.:
                </p>
                <StaggerContainer className="mt-5 space-y-3">
                  {[
                    'Sachkundeprüfung § 34a GewO (Aushilfe/Teilzeit/Vollzeit\u00a0– m/w/d)',
                    'Unterrichtung § 34a GewO (Aushilfe/Teilzeit/Vollzeit\u00a0– m/w/d)',
                    'Quereinsteiger (eine Qualifikation kann ggf. über uns gefördert werden\u00a0– m/w/d)',
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="mt-5 text-slate-500 text-sm italic">
                  (eine Teilzeitstelle richtet sich bei uns nach einem Stundenvolumen im Monat)
                </p>
              </section>

              <hr className="border-slate-100" />

              {/* Was erwartet Dich */}
              <section>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Das erwartet Dich:
                </h3>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
                  {[
                    'ein dynamisch wachsendes Team',
                    'kurze Entscheidungswege (Du sprichst direkt mit dem Chef)',
                    'Du kannst Deine Ideen mit einbringen',
                    'sozialversicherungspflichtige Beschäftigung',
                    'Dienstkleidung wird gestellt',
                    'pünktliche Lohnzahlung',
                    'spannende Tätigkeiten',
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              <hr className="border-slate-100" />

              {/* Aufgaben */}
              <section>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-5">
                  Was sind Deine Aufgaben:
                </h3>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
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
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              <hr className="border-slate-100" />

              {/* Profil */}
              <section>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-5">
                  Das bringst Du mit:
                </h3>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
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
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>

              <hr className="border-slate-100" />

              {/* Apply CTA */}
              <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  Vollständige Bewerbungsunterlagen gerne über unsere Email:
                </h3>
                <a
                  href="mailto:info@junker-sicherheit.de"
                  className="text-2xl font-heading font-bold text-primary hover:underline block mb-6"
                >
                  info@junker-sicherheit.de
                </a>
                <Button asChild size="lg" className="h-13 px-8 font-bold shadow-lg hover:scale-105 transition-transform">
                  <a href="mailto:info@junker-sicherheit.de?subject=Bewerbung%20Sicherheitskraft">
                    Jetzt bewerben
                  </a>
                </Button>
              </section>

              {/* Fragen */}
              <section className="text-center">
                <p className="text-slate-500 text-sm mb-4">
                  Fragen? Wir sind 24/7 erreichbar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline" className="h-12">
                    <a href="tel:+4917621488084">+49 176 214 880 84</a>
                  </Button>
                  <Button asChild variant="outline" className="h-12">
                    <Link href="/kontakt">Kontaktformular</Link>
                  </Button>
                </div>
              </section>

            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
