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
    image: "object.jpg",
    usps: [
      "§34a ausgebildetes Personal rund um die Uhr",
      "Maßgeschneiderte Revierdienstkonzepte",
      "Nahtlose Integration in Ihre Betriebsabläufe"
    ],
    localText: "Als Sicherheitsdienstleister mit Sitz in Hasloh bei Hamburg sind wir der ideale Partner für Unternehmen in Hamburg und der gesamten Metropolregion. Von Altona bis Wandsbek, von Pinneberg bis Bad Segeberg – wir kennen die Region und ihre spezifischen Anforderungen an professionellen Objektschutz.",
    faq: [
      { q: "Wie schnell können Sie bei einem Sicherheitsvorfall reagieren?", a: "Unsere Mitarbeiter sind rund um die Uhr erreichbar und können innerhalb kürzester Zeit vor Ort sein – auch außerhalb regulärer Geschäftszeiten." },
      { q: "Sind Ihre Mitarbeiter zertifiziert?", a: "Alle unsere Sicherheitsmitarbeiter sind nach §34a GewO ausgebildet und nehmen regelmäßig an Fortbildungen teil, um stets auf dem neuesten Stand zu sein." },
      { q: "Für welche Objekte bieten Sie Schutz an?", a: "Von Bürogebäuden über Industrieanlagen bis hin zu Logistikzentren und kommunalen Einrichtungen – wir schützen jede Art von Objekt und passen unser Konzept individuell an." },
      { q: "Kann ich meinen Schutz jederzeit anpassen?", a: "Ja, unsere Sicherheitskonzepte sind flexibel und werden regelmäßig gemeinsam mit Ihnen überprüft und bedarfsgerecht angepasst." },
      { q: "Wie unterscheidet sich Revierdienst von festem Objektschutz?", a: "Beim Revierdienst bestreift unser Personal mehrere Objekte in festgelegten Intervallen, was eine kostengünstigere Alternative zum permanenten Objektschutz darstellt – ideal für Objekte mit niedrigerem Risikoprofil." }
    ]
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
    image: "event.jpg",
    usps: [
      "Erfahrung bei Groß-Events wie Wacken Open Air",
      "Komplettlösungen von Einlass bis Brandschutz",
      "Behördlich zugelassene Sicherheitskonzepte"
    ],
    localText: "Junker-Sicherheit ist in der Veranstaltungsbranche Norddeutschlands bestens vernetzt. Wir betreuen Events in Hamburg, Schleswig-Holstein und der gesamten Metropolregion – von kleinen Unternehmensveranstaltungen in der Hamburger Innenstadt bis hin zu Großevents wie dem Wacken Open Air.",
    faq: [
      { q: "Wie früh sollte ich für meine Veranstaltung eine Anfrage stellen?", a: "Wir empfehlen, uns so früh wie möglich zu kontaktieren – idealerweise mindestens 4–6 Wochen vor der Veranstaltung. Bei Großevents gerne noch früher, damit wir gemeinsam ein fundiertes Sicherheitskonzept erarbeiten können." },
      { q: "Erstellen Sie auch behördlich geforderte Sicherheitskonzepte?", a: "Ja, wir erstellen auf Wunsch vollständige Sicherheitskonzepte, die den Anforderungen der zuständigen Behörden entsprechen." },
      { q: "Wie viele Sicherheitskräfte werden für mein Event benötigt?", a: "Das hängt von der Besucherzahl, der Örtlichkeit und dem Veranstaltungstyp ab. Wir führen vorab eine Risikoanalyse durch und ermitteln gemeinsam mit Ihnen den optimalen Personalschlüssel." },
      { q: "Übernehmen Sie auch den Brandschutz?", a: "Ja, wir stellen geschulte Brandschutzhelfer und Brandwachen gemäß den Vorgaben der Feuerwehr und des Ordnungsamts. Unsere Mitarbeiter sind speziell für vorbeugenden und abwehrenden Brandschutz ausgebildet." }
    ]
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
    image: "alarm.jpg",
    usps: [
      "Aufschaltung nahezu jeder marktüblichen Alarmanlage",
      "Zertifizierte Notruf-Service-Leitstelle (NSL)",
      "Individueller Maßnahmenkatalog für jeden Kunden"
    ],
    localText: "Unsere Alarmaufschaltung deckt Hamburg und Schleswig-Holstein lückenlos ab. Dank unserer regionalen Präsenz und schnellen Interventionskräfte können wir im Alarmfall innerhalb kürzester Zeit am Objekt sein – ob in der Hamburger City, im Hamburger Umland oder in Städten wie Kiel, Lübeck oder Flensburg.",
    faq: [
      { q: "Welche Alarmanlagen können aufgeschaltet werden?", a: "Wir können nahezu jede marktübliche Alarmanlage auf unsere zertifizierte Notruf-Service-Leitstelle aufschalten. Im Rahmen eines kostenlosen Beratungsgesprächs prüfen wir die Kompatibilität Ihrer bestehenden Anlage." },
      { q: "Was passiert, wenn mein Alarm ausgelöst wird?", a: "Die NSL nimmt den Alarm entgegen, prüft anhand Ihres individuellen Maßnahmenkatalogs die Situation und leitet die vereinbarten Schritte ein – von der Benachrichtigung eines Schlüsseldienstes bis hin zur Alarmierung von Polizei und Feuerwehr." },
      { q: "Wie lange dauert es, bis jemand vor Ort ist?", a: "Unsere Interventionskräfte sind rund um die Uhr einsatzbereit. Die tatsächliche Reaktionszeit hängt von der Entfernung zum Objekt ab, liegt aber in der Metropolregion Hamburg in der Regel unter 20 Minuten." },
      { q: "Erhalte ich Berichte über Alarmereignisse?", a: "Ja, jedes Alarmereignis wird dokumentiert und Sie erhalten auf Wunsch einen detaillierten Bericht über den Vorfall und die ergriffenen Maßnahmen." }
    ]
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
    image: "construction.jpg",
    usps: [
      "Speziell geschulte Brandwachen nach DGUV",
      "Flexible Bewachung – auch mit Hundeführer",
      "Videoüberwachung und Zugangskontrollen"
    ],
    localText: "Die Baubranche in Hamburg und Schleswig-Holstein boomt – und damit auch die Risiken auf Baustellen. Von Großprojekten in der HafenCity über Infrastrukturmaßnahmen in Pinneberg bis zu Wohnbauprojekten in Norderstedt: Junker-Sicherheit schützt Ihre Baustelle zuverlässig gegen Diebstahl, Vandalismus und unbefugten Zutritt.",
    faq: [
      { q: "Ab welcher Projektgröße lohnt sich eine Baustellenabsicherung?", a: "Eine professionelle Absicherung lohnt sich ab dem ersten Tag – unabhängig von der Projektgröße. Bereits auf kleineren Baustellen entstehen durch Diebstahl und Vandalismus erhebliche Schäden. Wir erstellen Ihnen ein wirtschaftliches Konzept, das zu Ihrer Baustelle passt." },
      { q: "Können Sie auch kurzfristig Brandwachen stellen?", a: "Ja, wir können in der Regel kurzfristig reagieren. Unsere Brandwachen sind speziell nach den Anforderungen der DGUV und der zuständigen Feuerwehr geschult und können auch bei genehmigungspflichtigen Arbeiten eingesetzt werden." },
      { q: "Wie funktioniert die Zugangskontrolle auf der Baustelle?", a: "Wir führen eine Ausweispflicht ein, stellen Baustellenausweise aus und kontrollieren Ein- und Ausfahrten. Auf Wunsch dokumentieren wir alle Zutritte digital und stellen Ihnen Berichte zur Verfügung." },
      { q: "Bieten Sie auch mobile Videoüberwachung an?", a: "Ja, wir setzen moderne mobile Kamerasysteme ein, die auch ohne feste Stromversorgung funktionieren und per 4G-Verbindung in Echtzeit überwacht werden können." }
    ]
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
    image: "hero.jpg",
    usps: [
      "Zertifizierte PFSOs nach ISPS-Code",
      "Umfassende Hafengeländesicherung",
      "Erfahrung mit Handels-, Passagier- und Privatschiffen"
    ],
    localText: "Als Unternehmen in der Metropolregion Hamburg sind wir mit den maritimen Sicherheitsanforderungen des Hamburger Hafens, des Nord-Ostsee-Kanals und der schleswig-holsteinischen Küstenregion bestens vertraut. Wir arbeiten den regionalen Behörden zu und unsere Mitarbeiter sind gem. den spezifischen Anforderungen des ISPS-Codes ausgebildet.",
    faq: [
      { q: "Was ist der ISPS-Code und warum ist er relevant?", a: "Der ISPS-Code (International Ship and Port Facility Security Code) ist ein internationales Regelwerk der IMO, das Sicherheitsstandards für Schiffe und Hafenanlagen vorschreibt. Die Einhaltung ist für viele Hafenbetreiber und Reedereien gesetzlich verpflichtend." },
      { q: "Was ist ein PFSO und welche Aufgaben hat er?", a: "Ein PFSO (Port Facility Security Officer) ist ein nach ISPS-Code ausgebildeter Sicherheitsbeauftragter für Hafenanlagen. Er erstellt Sicherheitspläne, koordiniert Schutzmaßnahmen und ist Ansprechpartner für Behörden und Schiffsführung." },
      { q: "Sichern Sie auch private Yachten und Marinas?", a: "Ja, unser maritimer Schutz umfasst sowohl kommerzielle Hafenanlagen als auch Marinas und private Yachthäfen. Wir erstellen individuelle Konzepte, die auf die jeweiligen Anforderungen zugeschnitten sind." },
      { q: "Arbeiten Sie mit den Hafenbehörden zusammen?", a: "Selbstverständlich, wir arbeiten den zuständigen Behörden zu und arbeiten streng nach deren Vorgaben und Vorschriften." }
    ]
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
    image: "reception.jpg",
    usps: [
      "Repräsentatives Auftreten als Visitenkarte Ihres Unternehmens",
      "Sicherheit und Freundlichkeit in einem",
      "Vollständige Besucherverwaltung und Zutrittskontrolle"
    ],
    localText: "Unternehmen in Hamburg und Schleswig-Holstein vertrauen Junker-Sicherheit den ersten Eindruck ihres Unternehmens an. Ob Firmensitz in der Hamburger City, in Pinneberg, in Elmshorn oder im Großraum Kiel – wir stellen Empfangspersonal, das Ihre Unternehmenskultur versteht und repräsentiert.",
    faq: [
      { q: "Wie schnell können Sie Empfangspersonal bereitstellen?", a: "In der Regel können wir innerhalb weniger Tage qualifiziertes Empfangspersonal bereitstellen. Bei Bedarf stimmen wir mit Ihnen eine Einarbeitungsphase ab, damit unsere Mitarbeiter Ihre Abläufe kennen." },
      { q: "Können Empfangsmitarbeiter auch sicherheitstechnische Einrichtungen bedienen?", a: "Ja, unsere Empfangskräfte sind in der Bedienung gängiger Zutrittskontroll-, Videoüberwachungs- und Alarmierungssysteme geschult und können diese selbstständig bedienen und überwachen." },
      { q: "Ist Ihr Empfangsdienst auch für Schichtbetrieb geeignet?", a: "Absolut. Wir decken Schichtbetrieb, Wochenendbetrieb und Feiertage ab. Sie profitieren von einer lückenlosen Besetzung ohne eigenen Personalaufwand." },
      { q: "Wie wird der Empfangsdienst an unsere Unternehmenskultur angepasst?", a: "Wir führen zu Beginn ein ausführliches Briefing durch, in dem wir Ihre Unternehmenskultur, Dresscode-Anforderungen, häufige Besuchergruppen und spezifische Abläufe besprechen. Auf Wunsch schulen wir das Personal direkt in Ihrem Haus." }
    ]
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
    image: "logistics.jpg",
    usps: [
      "Unterstützung bei der Transportkettensicherheit",
      "Bewaffnete und unbewaffnete Begleitfahrten",
      "Spezialisiert auf Logistikzentren und Lager"
    ],
    localText: "Die Logistikregion Hamburg und Schleswig-Holstein ist eine der wichtigsten in Deutschland. Als lokaler Sicherheitspartner kennen wir die spezifischen Herausforderungen der Logistikbranche in dieser Region – von den Großlagern in Norderstedt und Geesthacht bis zu den Hafenlogistikzentren im Hamburger Hafen.",
    faq: [
      { q: "Wie schützen Sie vor organisiertem Diebstahl in der Logistik?", a: "Wir setzen auf eine Kombination aus Zutrittskontrolle, Fahrer- und Fahrzeugavisierung, Versiegelungsprüfung und Videoüberwachung. Unsere Mitarbeiter sind speziell für die Erkennung und Prävention professioneller Diebstahlmethoden geschult." },
      { q: "Bieten Sie auch Personenschutz für Fahrer bei Hochrisikotransporten an?", a: "Ja, wir bieten bewaffnete und unbewaffnete Begleitfahrten innerhalb Deutschlands an. Die Begleiter sind entsprechend qualifiziert und mit den notwendigen Genehmigungen ausgestattet." },
      { q: "Können Sie in bestehende Logistikprozesse integriert werden?", a: "Ja, unsere Sicherheitskonzepte sind darauf ausgelegt, sich nahtlos in bestehende Lieferketten- und Lagerprozesse einzufügen. Wir arbeiten eng mit Ihrer Logistikleitung zusammen, um Störungen zu minimieren." },
      { q: "Wie läuft die Ein- und Ausfahrtskontrolle ab?", a: "Wir führen eine systematische Kontrolle aller ein- und ausfahrenden Fahrzeuge durch – inklusive Fahrerkontrolle, Laderauminspektionen und Versiegelungskontrollen. Alle Vorgänge werden dokumentiert und auf Wunsch digital erfasst." }
    ]
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
    image: "technology.jpg",
    usps: [
      "Herstellerunabhängige Beratung ohne Interessenkonflikt",
      "Lösungen für Gewerbe und Privat aus einer Hand",
      "Nahtlose Anbindung an Notruf-Service-Leitstelle"
    ],
    localText: "Junker-Sicherheit berät Unternehmen und Privatpersonen in Hamburg und Schleswig-Holstein zu allen Fragen der Sicherheitstechnik. Ob Einfamilienhaus in Norderstedt, Ladengeschäft in Hamburg-Eimsbüttel oder Bürokomplex in Pinneberg – wir kennen die regionalen Gegebenheiten und die lokalen Einbruchstatistiken.",
    faq: [
      { q: "Was kostet eine Alarmanlage für ein Einfamilienhaus?", a: "Die Kosten variieren je nach Objekt, gewünschtem Schutzumfang und eingesetzter Technik. Nach einer kostenlosen Vor-Ort-Begehung erhalten Sie von uns ein transparentes, unverbindliches Angebot – ohne versteckte Kosten." },
      { q: "Können Sie auch bestehende Alarmanlagen erweitern oder optimieren?", a: "Ja, wir analysieren bestehende Anlagen und erweitern oder modernisieren sie bedarfsgerecht. Oft lassen sich mit gezielten Ergänzungen erhebliche Sicherheitsverbesserungen erzielen." },
      { q: "Welche Sicherheitstechnik empfehlen Sie für Einzelhändler?", a: "Für Einzelhandelsgeschäfte empfehlen wir in der Regel eine Kombination aus Einbruchmeldeanlage, Videoüberwachung und ggf. Aufschaltung auf unsere NSL. Welches Konzept am besten passt, ermitteln wir in einem kostenlosen Beratungsgespräch." },
      { q: "Kann die Technik mit meiner Smartphone-App gesteuert werden?", a: "Moderne Sicherheitstechnik lässt sich komfortabel per App bedienen – von der Scharfschaltung der Alarmanlage bis zur Live-Kameraansicht. Wir beraten Sie zu den Möglichkeiten und richten die Systeme für Sie ein." }
    ]
  },
  {
    id: "nordexperten",
    slug: "nordexperten",
    title: "Nordexperten e.V.",
    icon: Users,
    shortDescription: "Zusatzdienstleistung & Unternehmernetzwerk",
    description: 'Als Zusatzdienstleistung und Netzwerk ist Junker-Sicherheit Mitglied im Unternehmernetzwerk \u201eNordexperten e.V.\u201c. Gemeinsam sind wir stark.',
    details: [
      "Branchenübergreifende Kontaktvermittlung",
      "Regionale Expertise",
      "Vorträge und Netzwerktreffen"
    ],
    extra: "Schauen Sie auch gerne mal als Gast bei den Nordexperten e.V. vorbei und talken Sie mit Experten aus der Region.",
    image: "network.jpg",
    usps: [
      "Zugang zu einem starken regionalen Unternehmernetzwerk",
      "Branchenübergreifende Synergien und Kontakte",
      "Regelmäßige Netzwerktreffen und Wissensaustausch"
    ],
    localText: "Die Nordexperten e.V. sind ein aktives Netzwerk norddeutscher Unternehmer mit Schwerpunkt in Hamburg und Schleswig-Holstein. Als Mitglied verbindet Junker-Sicherheit Unternehmen aus der Region miteinander – von Quickborn bis Kiel, von Neumünster bis Lübeck. Regional verwurzelt, unternehmerisch vernetzt.",
    faq: [
      { q: "Was sind die Nordexperten e.V.?", a: "Die Nordexperten e.V. sind ein Netzwerk norddeutscher Unternehmer, das den Austausch, die Vernetzung und die gegenseitige Unterstützung von Betrieben aus der Region fördert. Junker-Sicherheit ist aktives Mitglied und bringt seine Sicherheitsexpertise in das Netzwerk ein." },
      { q: "Wie kann ich an Netzwerktreffen teilnehmen?", a: "Interessierte Unternehmer können zunächst als Gast an Veranstaltungen teilnehmen. Kontaktieren Sie uns, und wir laden Sie zum nächsten Treffen ein – unverbindlich und kostenlos." },
      { q: "Welchen Mehrwert bietet die Mitgliedschaft für mein Unternehmen?", a: "Als Mitglied profitieren Sie von branchenübergreifenden Kontakten, gegenseitigen Empfehlungen, gemeinsamen Veranstaltungen und dem gebündelten Know-how der Mitgliedsunternehmen aus der norddeutschen Region." },
      { q: "Vermitteln Sie auch konkrete Geschäftskontakte?", a: "Ja, die aktive Vernetzung und Kontaktvermittlung ist eines der Kernziele der Nordexperten e.V. Wir helfen Unternehmen, passende Partner, Dienstleister und Kunden in der Region zu finden." }
    ]
  }
];
