import { Building2, Ticket, BellRing, HardHat, Anchor, ConciergeBell, Truck, ShieldAlert, Users } from 'lucide-react';

export const services = [
  {
    id: "objektschutz",
    slug: "objektschutz",
    title: "Objektschutz",
    icon: Building2,
    shortDescription: "Werk- und Objektschutz, Revierdienste",
    description: "Unsere ausgesuchten und geschulten Mitarbeiter repräsentieren gemäß unserer Firmenphilosophie mit Verantwortungsbewusstsein Ihre Sicherheit. Wir unterstützen Sie beratend und durchführend in allen sicherheitsrelevanten Bereichen, um Ihnen Verantwortung abzunehmen und Sie personell zu entlasten.",
    details: [
      "Werk- und Objektschutz",
      "Revierdienste",
      "Pförtner- und Empfangsdienste",
      "Hafen- und Logistiksicherheit"
    ],
    extra: "Besonders wichtig ist uns dabei die sorgsame Auswahl, Schulung und Mitwirkung unserer Mitarbeiter in Ihre unternehmerischen Abläufe. Wir wollen keine Fremdkörper sein, sondern feste Mitglieder Ihres Teams.",
    image: "object.jpg"
  },
  {
    id: "veranstaltungsschutz",
    slug: "veranstaltungsschutz",
    title: "Veranstaltungsschutz & Eventsicherheit",
    icon: Ticket,
    shortDescription: "Von der Einlasskontrolle bis zum Brandschutz",
    description: "Umsichtig und erfahren: Die Veranstaltung in Wirtschaft und Politik braucht ein anderes Sicherheitskonzept als das Groß-Konzert, das Sport-Event oder die Kulturveranstaltung. Wir bieten ein individuelles Sicherheitskonzept, das alle Anforderungen berücksichtigt – von der Örtlichkeit bis zur Personensicherung.",
    details: [
      "Kassendienste und Einlasskontrollen",
      "Foyer- und Garderobendienste",
      "Aufsichtspersonal, Kontroll- und Streifengänge",
      "Vorbeugender und abwehrender Brandschutz",
      "Betreiben der Sicherheitszentrale",
      "Koordination von Rettungskräften"
    ],
    image: "event.jpg"
  },
  {
    id: "alarmaufschaltung",
    slug: "alarmaufschaltung",
    title: "Alarmaufschaltung & Alarmverfolgung",
    icon: BellRing,
    shortDescription: "Professionelle Alarmverfolgung rund um die Uhr",
    description: "Über unsere Kooperation mit einer zertifizierten Notruf-Service-Leitstelle (NSL) verfügt Junker-Sicherheit über die Möglichkeit, nahezu jede marktübliche Alarmanlage aufzuschalten. Alarme werden professionell anhand eines individuell abgestimmten Maßnahmenkatalogs abgearbeitet.",
    details: [
      "Schnelle Reaktion und Alarmverfolgung",
      "Zusammenarbeit mit zertifizierter NSL",
      "Individueller Alarmplan",
      "Hinzuziehung von Polizei und Feuerwehr bei Bedarf"
    ],
    image: "alarm.jpg"
  },
  {
    id: "baustellenabsicherung",
    slug: "baustellenabsicherung",
    title: "Baustellenabsicherung",
    icon: HardHat,
    shortDescription: "Sicherheit für Ihre Bauphase und Brandwachen",
    description: "Da Diebstahl, Vandalismus und Sachbeschädigung auf dem Vormarsch sind, bieten wir Ihnen ein speziell auf Ihre Bedürfnisse zugeschnittenes Konzept an, welches Ihnen eine sichere Bauphase gewährt.",
    details: [
      "Gefährdungsbeurteilung vor Ort",
      "Gestellung von Brandwachen (speziell geschult)",
      "Baustellenausweise und Zugangskontrollen",
      "Bestreifung mit und ohne Hund",
      "Videoüberwachung",
      "Objektbewachung außerhalb der Betriebszeit"
    ],
    image: "construction.jpg"
  },
  {
    id: "maritime-sicherheit",
    slug: "maritime-sicherheit",
    title: "Maritime Sicherheit",
    icon: Anchor,
    shortDescription: "Hafenanlagen, ISPS-Code und Schiffe",
    description: "Maritime Sicherheit bedeutet für uns sicherheitsrelevante Absicherung auf der gesamten Hafenanlage und am sowie auf dem Schiff – von Handelsschiffen über Passagierschiffe bis hin zu privaten Yachten.",
    details: [
      "Risikobewertung und Sicherheitskonzepte",
      "Sicherung der Hafenanlage",
      "Arbeit nach ISPS-CODE",
      "Ausgebildete PFSOs für zielsichere Umsetzung"
    ],
    image: "hero.jpg"
  },
  {
    id: "empfangsdienst",
    slug: "empfangsdienst",
    title: "Empfangsdienst",
    icon: ConciergeBell,
    shortDescription: "Freundlich, repräsentativ und wachsam",
    description: "Am Empfang erleben Besucher Ihr Unternehmen zum ersten Mal live. Hier gilt es, einen perfekten Eindruck zu hinterlassen, gepaart mit höchster Sicherheit. Unser Empfangsdienst koordiniert Personenverkehr, Lieferanten und Anrufer deeskalierend, freundlich und bestimmend.",
    details: [
      "Besucherkoordination und -ausweise",
      "Öffnungs- und Schließdienste",
      "Kontrollgänge im und am Objekt",
      "Bedienung sicherheitstechnischer Einrichtungen",
      "Annahme von Paketen",
      "Auskunfts- und Informationsdienste"
    ],
    image: "reception.jpg"
  },
  {
    id: "logistiksicherheit",
    slug: "logistiksicherheit",
    title: "Logistiksicherheit",
    icon: Truck,
    shortDescription: "Transportkettensicherheit und Warenschutz",
    description: "Ob Logistikzentrum, Spedition oder Lagerhalle: Warensicherung und Transportkettensicherheit sind der wichtigste Aspekt in der Logistikbranche. Wir schützen Sie vor professionellen Diebstählen.",
    details: [
      "Avisierung von Fahrzeugen und Fahrern",
      "Koordination von Lieferanten",
      "Begleitfahrten (bewaffnet/unbewaffnet in DE)",
      "Überprüfung von Versiegelungen",
      "Ein- und Ausfahrtskontrolle, Videoüberwachung",
      "Post- & Paketannahme"
    ],
    image: "logistics.jpg"
  },
  {
    id: "alarmanlagen",
    slug: "alarmanlagen",
    title: "Alarmanlagen & Sicherheitstechnik",
    icon: ShieldAlert,
    shortDescription: "Sicherheitstechnik für Gewerbe und Privat",
    description: "Präventiver Schutz durch professionelle Sicherheitstechnik für Gewerbe und Privat. Wir bieten persönliche und individuelle Beratung, da jedes Objekt und jedes Zuhause andere Anforderungen stellt.",
    details: [
      "Gewerblicher Schutz (Einzelhandel, Büro, Lager)",
      "Sicherheitstechnik für das eigene Zuhause",
      "Integration in Bauphasen",
      "Maßgeschneiderte Lösungen für jeden Bereich"
    ],
    image: "technology.jpg"
  },
  {
    id: "nordexperten",
    slug: "nordexperten",
    title: "Nordexperten e.V.",
    icon: Users,
    shortDescription: "Zusatzdienstleistung & Unternehmernetzwerk",
    description: "Als Zusatzdienstleistung und Netzwerk ist Junker-Sicherheit Mitglied im Unternehmernetzwerk „Nordexperten e.V.“. Gemeinsam sind wir stark.",
    details: [
      "Branchenübergreifende Kontaktvermittlung",
      "Regionale Expertise",
      "Vorträge und Netzwerktreffen"
    ],
    extra: "Schauen Sie auch gerne mal als Gast bei den Nordexperten vorbei und talken Sie mit Experten aus der Region.",
    image: "network.jpg"
  }
];
