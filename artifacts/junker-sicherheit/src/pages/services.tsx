import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  Building2, Ticket, BellRing, HardHat, 
  Anchor, ConciergeBell, Truck, ShieldAlert, Users,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Services() {
  const services = [
    {
      id: "objektschutz",
      title: "Objektschutz",
      icon: Building2,
      description: "Unsere ausgesuchten und geschulten Mitarbeiter repräsentieren gemäß unserer Firmenphilosophie mit Verantwortungsbewusstsein Ihre Sicherheit. Wir unterstützen Sie beratend und durchführend in allen sicherheitsrelevanten Bereichen, um Ihnen Verantwortung abzunehmen und Sie personell zu entlasten.",
      details: [
        "Werk- und Objektschutz",
        "Revierdienste",
        "Pförtner- und Empfangsdienste",
        "Hafen- und Logistiksicherheit"
      ],
      extra: "Besonders wichtig ist uns dabei die sorgsame Auswahl, Schulung und Mitwirkung unserer Mitarbeiter in Ihre unternehmerischen Abläufe. Wir wollen keine Fremdkörper sein, sondern feste Mitglieder Ihres Teams."
    },
    {
      id: "veranstaltungsschutz",
      title: "Veranstaltungsschutz & Eventsicherheit",
      icon: Ticket,
      description: "Umsichtig und erfahren: Die Veranstaltung in Wirtschaft und Politik braucht ein anderes Sicherheitskonzept als das Groß-Konzert, das Sport-Event oder die Kulturveranstaltung. Wir bieten ein individuelles Sicherheitskonzept, das alle Anforderungen berücksichtigt – von der Örtlichkeit bis zur Personensicherung.",
      details: [
        "Kassendienste und Einlasskontrollen",
        "Foyer- und Garderobendienste",
        "Aufsichtspersonal, Kontroll- und Streifengänge",
        "Vorbeugender und abwehrender Brandschutz",
        "Betreiben der Sicherheitszentrale",
        "Koordination von Rettungskräften"
      ]
    },
    {
      id: "alarmaufschaltung",
      title: "Alarmaufschaltung & Alarmverfolgung",
      icon: BellRing,
      description: "Über unsere Kooperation mit einer zertifizierten Notruf-Service-Leitstelle (NSL) verfügt Junker-Sicherheit über die Möglichkeit, nahezu jede marktübliche Alarmanlage aufzuschalten. Alarme werden professionell anhand eines individuell abgestimmten Maßnahmenkatalogs abgearbeitet.",
      details: [
        "Schnelle Reaktion und Alarmverfolgung",
        "Zusammenarbeit mit zertifizierter NSL",
        "Individueller Alarmplan",
        "Hinzuziehung von Polizei und Feuerwehr bei Bedarf"
      ]
    },
    {
      id: "baustellenabsicherung",
      title: "Baustellenabsicherung",
      icon: HardHat,
      description: "Da Diebstahl, Vandalismus und Sachbeschädigung auf dem Vormarsch sind, bieten wir Ihnen ein speziell auf Ihre Bedürfnisse zugeschnittenes Konzept an, welches Ihnen eine sichere Bauphase gewährt.",
      details: [
        "Gefährdungsbeurteilung vor Ort",
        "Gestellung von Brandwachen (speziell geschult)",
        "Baustellenausweise und Zugangskontrollen",
        "Bestreifung mit und ohne Hund",
        "Videoüberwachung",
        "Objektbewachung außerhalb der Betriebszeit"
      ]
    },
    {
      id: "maritime-sicherheit",
      title: "Maritime Sicherheit",
      icon: Anchor,
      description: "Maritime Sicherheit bedeutet für uns sicherheitsrelevante Absicherung auf der gesamten Hafenanlage und am sowie auf dem Schiff – von Handelsschiffen über Passagierschiffe bis hin zu privaten Yachten.",
      details: [
        "Risikobewertung und Sicherheitskonzepte",
        "Sicherung der Hafenanlage",
        "Arbeit nach ISPS-CODE",
        "Ausgebildete PFSOs für zielsichere Umsetzung"
      ]
    },
    {
      id: "empfangsdienst",
      title: "Empfangsdienst",
      icon: ConciergeBell,
      description: "Am Empfang erleben Besucher Ihr Unternehmen zum ersten Mal live. Hier gilt es, einen perfekten Eindruck zu hinterlassen, gepaart mit höchster Sicherheit. Unser Empfangsdienst koordiniert Personenverkehr, Lieferanten und Anrufer deeskalierend, freundlich und bestimmend.",
      details: [
        "Besucherkoordination und -ausweise",
        "Öffnungs- und Schließdienste",
        "Kontrollgänge im und am Objekt",
        "Bedienung sicherheitstechnischer Einrichtungen",
        "Annahme von Paketen",
        "Auskunfts- und Informationsdienste"
      ]
    },
    {
      id: "logistiksicherheit",
      title: "Logistiksicherheit",
      icon: Truck,
      description: "Ob Logistikzentrum, Spedition oder Lagerhalle: Warensicherung und Transportkettensicherheit sind der wichtigste Aspekt in der Logistikbranche. Wir schützen Sie vor professionellen Diebstählen.",
      details: [
        "Avisierung von Fahrzeugen und Fahrern",
        "Koordination von Lieferanten",
        "Begleitfahrten (bewaffnet/unbewaffnet in DE)",
        "Überprüfung von Versiegelungen",
        "Ein- und Ausfahrtskontrolle, Videoüberwachung",
        "Post- & Paketannahme"
      ]
    },
    {
      id: "alarmanlagen",
      title: "Alarmanlagen & Sicherheitstechnik",
      icon: ShieldAlert,
      description: "Präventiver Schutz durch professionelle Sicherheitstechnik für Gewerbe und Privat. Wir bieten persönliche und individuelle Beratung, da jedes Objekt und jedes Zuhause andere Anforderungen stellt.",
      details: [
        "Gewerblicher Schutz (Einzelhandel, Büro, Lager)",
        "Sicherheitstechnik für das eigene Zuhause",
        "Integration in Bauphasen",
        "Maßgeschneiderte Lösungen für jeden Bereich"
      ]
    },
    {
      id: "nordexperten",
      title: "Nordexperten e.V.",
      icon: Users,
      description: "Als Zusatzdienstleistung und Netzwerk ist Junker-Sicherheit Mitglied im Unternehmernetzwerk „Nordexperten e.V.“. Gemeinsam sind wir stark.",
      details: [
        "Branchenübergreifende Kontaktvermittlung",
        "Regionale Expertise",
        "Vorträge und Netzwerktreffen"
      ],
      extra: "Schauen Sie auch gerne mal als Gast bei den Nordexperten vorbei und talken Sie mit Experten aus der Region."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/generated/event.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Unsere Dienstleistungen</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Professionelle Sicherheitskonzepte aus einer Hand. Wir bieten maßgeschneiderte Lösungen für Unternehmen, Kommunen und private Anforderungen.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={cn(
                  "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="p-8 md:p-12 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Leistungen im Überblick
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.extra && (
                    <p className="mt-6 text-slate-600 italic text-sm border-l-4 border-primary/30 pl-4">
                      {service.extra}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Ihr Tätigkeitsfeld war nicht dabei?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Wie unsere Sicherheitsdienste Ihr spezielles Projekt unterstützen können, erläutern wir Ihnen gerne im persönlichen Dialog. Wir finden eine maßgeschneiderte Lösung.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold h-14 px-8">
            <Link href="/kontakt">Persönliches Gespräch vereinbaren <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
