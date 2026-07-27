import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Building2,
  Eye,
  Clock,
  DoorOpen,
  Camera,
  FileCheck,
  Phone,
  CheckCircle2,
  MapPin,
  Star,
  ShieldX,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useCreateContactRequest } from '@workspace/api-client-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in';
import { TrustBar } from '@/components/ui/trust-bar';
import { GoogleRatingBadge } from '@/components/ui/google-rating-badge';
import { FaqAccordion } from '@/components/ui/faq-accordion';

// --- Form Schema ---
const formSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  phone: z.string().optional(),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  message: z.string().optional(),
  consent: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

// --- Data ---
const faqItems = [
  {
    q: 'Was kostet Objektschutz in Norddeutschland?',
    a: 'Die Kosten hängen vom Schutzumfang, den Einsatzzeiten und der Größe Ihres Objekts ab. Wir erstellen Ihnen nach einer kostenlosen Vor-Ort-Analyse ein transparentes, individuelles Angebot – ohne versteckte Kosten.',
  },
  {
    q: 'Wie schnell können Sie in Schleswig-Holstein eingesetzt werden?',
    a: 'In den meisten Fällen können wir innerhalb weniger Tage mit dem Schutz Ihres Objekts beginnen. Bei dringenden Fällen sprechen Sie uns direkt an – wir finden eine schnelle Lösung.',
  },
  {
    q: 'Sind Ihre Mitarbeiter §34a ausgebildet?',
    a: 'Ja, alle unsere Sicherheitsmitarbeiter sind nach §34a GewO geprüft und werden regelmäßig weitergeschult. Qualifikation und Zuverlässigkeit sind für uns nicht verhandelbar.',
  },
  {
    q: 'Übernehmen Sie auch kurzfristige Einsätze in Norddeutschland?',
    a: 'Ja. Wir sind flexibel und können auch kurzfristig auf veränderte Sicherheitsanforderungen reagieren – sei es bei besonderen Ereignissen, Personalengpässen oder akuten Sicherheitsvorfällen.',
  },
  {
    q: 'Was unterscheidet Junker-Sicherheit von anderen Anbietern in Norddeutschland?',
    a: 'Wir sind kein anonymes Großunternehmen. Als inhabergeführter Betrieb kennen Sie Ihren persönlichen Ansprechpartner, haben kurze Wege und bekommen maßgeschneiderte – nicht standardisierte – Lösungen.',
  },
];

const norddeutschlandCities = [
  'Kiel', 'Lübeck', 'Flensburg', 'Neumünster', 'Norderstedt',
  'Elmshorn', 'Pinneberg', 'Quickborn', 'Itzehoe', 'Bad Segeberg',
  'Husum', 'Heide', 'Schleswig', 'Rendsburg', 'Lüneburg',
];

const services = [
  {
    icon: Building2,
    title: 'Werksschutz & Betriebsschutz',
    desc: 'Schutz Ihrer Produktionsstätten, Büros und Gewerbeflächen in Norddeutschland – rund um die Uhr.',
  },
  {
    icon: Eye,
    title: 'Revierdienste Norddeutschland',
    desc: 'Mobile Streifenfahrten in Schleswig-Holstein und Umgebung – sichtbare Präsenz, die abschreckt.',
  },
  {
    icon: DoorOpen,
    title: 'Pförtner- & Zugangskontrolle',
    desc: 'Freundlich, bestimmend, repräsentativ – Ihr erster Eindruck am Eingang.',
  },
  {
    icon: Camera,
    title: 'Videoüberwachung & Monitoring',
    desc: 'Professionelle Überwachung mit modernster Technik und sofortiger Reaktion.',
  },
  {
    icon: FileCheck,
    title: 'Sicherheitskonzept auf Maß',
    desc: 'Individuelle Gefährdungsbeurteilung und Sicherheitsplan speziell für Ihr Objekt in Norddeutschland.',
  },
  {
    icon: Phone,
    title: '24/7 Notruf & Alarmverfolgung',
    desc: 'Bei Alarm sind wir sofort da – Koordination mit Polizei und Feuerwehr inklusive.',
  },
];

// --- Contact Form Sub-component ---
function KontaktFormular() {
  const { toast } = useToast();
  const createContact = useCreateContactRequest();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      consent: true,
    },
  });

  function onSubmit(values: FormValues) {
    createContact.mutate(
      { data: { ...values, subject: 'Objektschutz Norddeutschland – Landingpage Anfrage', message: values.message ?? '' } },
      {
        onSuccess: () => {
          toast({
            title: 'Anfrage gesendet!',
            description: 'Vielen Dank. Wir melden uns innerhalb von 2 Stunden bei Ihnen.',
          });
          form.reset();
          setSubmitted(true);
        },
        onError: () => {
          toast({
            title: 'Fehler beim Senden',
            description: 'Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
            variant: 'destructive',
          });
        },
      }
    );
  }

  if (submitted) {
    return (
      <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Anfrage eingegangen!</h3>
        <p className="text-slate-300">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 2 Stunden persönlich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">
                  Name / Firma <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ihr Name oder Firmenname"
                    {...field}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 focus:border-primary"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">
                  Telefonnummer <span className="text-slate-500 text-xs">(empfohlen)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+49 ..."
                    {...field}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 focus:border-primary"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">
                E-Mail <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="ihre.email@beispiel.de"
                  type="email"
                  {...field}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 focus:border-primary"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">
                Beschreiben Sie kurz Ihr Objekt &amp; Ihre Anforderungen{' '}
                <span className="text-slate-500 text-xs">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="z.B. Lagerhalle, 2.000 m², Kiel – Schutz Mo–Fr nachts und am Wochenende"
                  className="min-h-[110px] bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-y text-base p-4 focus:border-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 text-base font-bold shadow-xl hover:scale-[1.02] transition-transform"
          disabled={createContact.isPending}
        >
          {createContact.isPending ? 'Wird gesendet…' : 'Kostenlose Beratung anfordern →'}
        </Button>

        <p className="text-slate-400 text-xs text-center">
          🔒 Ihre Daten werden vertraulich behandelt.{' '}
          <Link href="/datenschutz" className="text-slate-300 hover:text-white underline">
            Datenschutzerklärung
          </Link>
        </p>
      </form>
    </Form>
  );
}

// --- Main Page ---
const refLogos = [
  { name: 'Stadt Quickborn', logo: 'quickborn.jpg' },
  { name: 'List auf Sylt', logo: 'list-zipfelbund.jpg' },
  { name: 'Wacken Open Air', logo: 'wacken.png' },
  { name: 'Bundesministerium für Gesundheit', logo: 'bmg.jpg' },
  { name: 'GMSH', logo: 'gmsh.jpg' },
  { name: 'H.C. Röver', logo: 'hc-roever.jpg' },
  { name: 'Sartori & Berger', logo: 'sartori-berger.png' },
  { name: 'Schleswig-Holstein', logo: 'schleswig-holstein.jpg' },
  { name: 'JuRa Hasloh', logo: 'jura-hasloh.jpg' },
  { name: 'SV Rugenbergen', logo: 'sv-rugenbergen.jpg' },
  { name: 'Wirtschaftsjunioren', logo: 'wirtschaftsjunioren.png' },
];

export default function ObjektschutzNorddeutschland() {
  useEffect(() => {
    document.title = 'Objektschutz Norddeutschland | §34a ausgebildet · 24/7 · Junker-Sicherheit';
    const setMeta = (name: string, content: string, prop = false) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) { el = document.createElement('meta'); prop ? el.setAttribute('property', name) : el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    const desc = 'Objektschutz Norddeutschland & Schleswig-Holstein – §34a ausgebildet, inhabergeführt, sofort einsatzbereit. Werksschutz, Revierdienste & Zugangskontrolle für Unternehmen in Norddeutschland. Kostenlose Erstberatung!';
    setMeta('description', desc);
    setMeta('og:title', 'Objektschutz Norddeutschland | Junker-Sicherheit', true);
    setMeta('og:description', desc, true);
    setMeta('twitter:title', 'Objektschutz Norddeutschland | Junker-Sicherheit');
    setMeta('twitter:description', desc);
    return () => {
      document.title = 'Sicherheitsdienst aus Hasloh | Junker-Sicherheit';
    };
  }, []);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('kontakt-formular')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative min-h-[92vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/generated/object.jpg`}
            alt="Objektschutz Norddeutschland – Junker-Sicherheit"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-20 pt-24 pb-28">
          <FadeIn delay={0.1} duration={0.7} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-sm font-semibold mb-7 shadow-lg">
              <Star className="h-4 w-4 fill-white" />
              <span>Nr. 1 Objektschutz Norddeutschland</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Objektschutz Norddeutschland –{' '}
              <span className="text-primary">Professioneller Werk- &amp; Objektschutz</span>{' '}
              für Ihr Unternehmen
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              §34a ausgebildete Sicherheitskräfte. Sofort einsatzbereit. Für Büros, Lager,
              Industrieanlagen und mehr – in ganz Norddeutschland und Schleswig-Holstein.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['✓ 24/7 einsatzbereit', '✓ Inhabergeführt seit 20+ Jahren', '✓ Kostenlose Erstberatung'].map((usp) => (
                <span key={usp} className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                  {usp}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl hover:scale-105 transition-transform duration-300" onClick={scrollToForm}>
                Jetzt kostenloses Angebot anfordern
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm">
                <a href="tel:+4917621488084">Direkt anrufen: 0176 214 880 84</a>
              </Button>
            </div>

            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <GoogleRatingBadge size="sm" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTION 2 — TRUST BAR ═══ */}
      <TrustBar />

      {/* Logo Ticker */}
      <div className="bg-white border-b border-slate-100 shadow-sm overflow-hidden py-8">
        <div className="flex gap-20 animate-ticker whitespace-nowrap">
          {[...refLogos, ...refLogos].map((ref, idx) => (
            <div key={idx} className="inline-flex items-center justify-center shrink-0 h-16 w-44">
              <img src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`} alt={ref.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SECTION 3 — PROBLEM / SOLUTION ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Schützen Sie Ihr Unternehmen – bevor es zu spät ist
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: ShieldX,
                title: 'Einbruch & Vandalismus',
                text: 'Jährlich werden tausende Unternehmen in Norddeutschland Opfer von Einbrüchen. Professioneller Objektschutz schreckt ab – bevor Schaden entsteht.',
              },
              {
                Icon: Eye,
                title: 'Unbefugter Zutritt',
                text: 'Unkontrollierter Personenverkehr gefährdet Ihre Mitarbeiter, Waren und sensiblen Daten. Wir regeln den Zugang – diskret und bestimmend.',
              },
              {
                Icon: Clock,
                title: 'Fehlende Präsenz nach Feierabend',
                text: 'Nachts und am Wochenende ist Ihr Objekt besonders gefährdet. Unsere Revierdienste sind rund um die Uhr in Norddeutschland unterwegs.',
              },
            ].map(({ Icon, title, text }) => (
              <StaggerItem key={title}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-14 w-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-5">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ SECTION 4 — AUTHORITY ═══ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Warum Unternehmen in Norddeutschland ihren Objektschutz Junker-Sicherheit anvertrauen
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <ul className="space-y-5 mb-10">
                {[
                  'Persönlicher Ansprechpartner – kein Callcenter, keine Anonymität',
                  '§34a-geprüfte, regelmäßig geschulte Sicherheitskräfte',
                  'Schnelle Reaktionszeit – wir kennen Norddeutschland und jede Route',
                  'Maßgeschneidertes Sicherheitskonzept statt Standardlösung',
                  'Über 20 Jahre Erfahrung in der norddeutschen Region',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '20+', label: 'Jahre Erfahrung' },
                  { value: '100%', label: 'inhabergeführt' },
                  { value: '24/7', label: 'Einsatzbereit' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                    <div className="text-2xl font-heading font-bold text-primary mb-1">{value}</div>
                    <div className="text-slate-600 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/generated/object.jpg`}
                alt="Objektschutz Norddeutschland – Junker-Sicherheit"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-5 left-5 bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-lg text-sm">
                Ihr Partner in Norddeutschland
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — LEISTUNGEN ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Unser Objektschutz in Norddeutschland – Leistungen im Überblick
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Jedes Objekt ist einzigartig. Deshalb entwickeln wir kein Standardprodukt, sondern
              ein individuelles Sicherheitskonzept für Ihr Unternehmen in Norddeutschland.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-12">
            <Button size="lg" onClick={scrollToForm} className="h-13 px-8 font-bold shadow-lg hover:scale-105 transition-transform">
              Kostenloses Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTION 6 — REGION COVERAGE ═══ */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Objektschutz in ganz Norddeutschland – Wir kennen die Region
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Als Objektschutz-Spezialist aus Hasloh sind wir in Schleswig-Holstein,
              Hamburg und der gesamten norddeutschen Region für Sie aktiv. Schnell, lokal, zuverlässig.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn direction="right">
              <div className="grid grid-cols-3 gap-3">
                {norddeutschlandCities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-slate-300 text-sm bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-primary/20 border border-primary/30 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Auch deutschlandweit auf Anfrage
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Wir arbeiten deutschlandweit auf Anfrage. Egal ob Hamburg, Bremen oder
                  Berlin – sprechen Sie uns an.
                </p>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 border-white text-white hover:bg-white hover:text-slate-900 font-bold transition-colors"
                onClick={scrollToForm}
              >
                Anfrage für Ihr Objekt →
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — SOCIAL PROOF ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Unternehmen in Norddeutschland, die ihren Objektschutz Junker-Sicherheit anvertrauen
            </h2>
          </FadeIn>

          <StaggerContainer className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-14 opacity-80">
            {[
              { name: 'Stadt Quickborn', logo: 'quickborn.jpg' },
              { name: 'Bundesministerium für Gesundheit', logo: 'bmg.jpg' },
              { name: 'Wacken Open Air', logo: 'wacken.png' },
              { name: 'GMSH', logo: 'gmsh.jpg' },
            ].map((ref) => (
              <StaggerItem key={ref.logo}>
                <div className="w-32 md:w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={`${import.meta.env.BASE_URL}images/referenzen/${ref.logo}`} alt={ref.name} className="max-h-full max-w-full object-contain" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="max-w-3xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-3 text-slate-500 text-sm font-medium">Google Bewertung</span>
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-5 italic">
                „Professionelles Unternehmen, vorbehaltlos zu empfehlen 👍. Beste Grüße Mohammad Saleh"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#E8710A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  m
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Mohammed Saleh</div>
                  <div className="text-slate-500 text-sm">Rezension aus Google · vor 2 Jahren</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTION 8 — PROZESS ═══ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              So einfach starten Sie mit professionellem Objektschutz in Norddeutschland
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200 z-0" />
            {[
              { num: '01', title: 'Kostenlose Anfrage', desc: 'Füllen Sie das Formular aus oder rufen Sie an – wir antworten innerhalb von 2 Stunden.' },
              { num: '02', title: 'Kostenlose Vor-Ort-Analyse', desc: 'Wir kommen zu Ihnen, begutachten Ihr Objekt und identifizieren Sicherheitslücken.' },
              { num: '03', title: 'Maßgeschneiderter Schutz', desc: 'Sie erhalten ein individuelles Angebot – keine versteckten Kosten, kein Risiko.' },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 shadow-xl rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — FAQ ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Häufige Fragen zu Objektschutz in Norddeutschland
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FaqAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTION 10 — KONTAKT FORMULAR ═══ */}
      <section id="kontakt-formular" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Jetzt kostenloses Angebot für Objektschutz in Norddeutschland anfordern
            </h2>
            <p className="text-slate-300 text-lg">
              Kein Risiko · Keine Vertragsbindung · Antwort innerhalb von 2 Stunden
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                  <KontaktFormular />
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Oder direkt anrufen:</p>
                  <a href="tel:+4917621488084" className="text-3xl font-heading font-bold text-white hover:text-primary transition-colors block">
                    0176 214 880 84
                  </a>
                  <p className="text-slate-400 text-sm mt-1">24 Stunden erreichbar, 365 Tage im Jahr</p>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">E-Mail</div>
                      <a href="mailto:info@junker-sicherheit.de" className="text-white hover:text-primary transition-colors text-sm break-all">
                        info@junker-sicherheit.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Adresse</div>
                      <address className="not-italic text-white text-sm leading-relaxed">
                        Garstedter Weg 35<br />
                        25474 Hasloh bei Hamburg
                      </address>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="inline-block bg-white/10 rounded-xl px-4 py-2">
                    <GoogleRatingBadge size="lg" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
