import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useCreateContactRequest } from "@workspace/api-client-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein."),
  consent: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen."
  })
});

export default function Contact() {
  const { toast } = useToast();
  const createContact = useCreateContactRequest();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createContact.mutate({ data: values }, {
      onSuccess: (result) => {
        toast({
          title: result.notificationSent ? "Nachricht gesendet" : "Anfrage gespeichert",
          description: result.notificationSent
            ? "Vielen Dank für Ihre Anfrage. Wir werden uns umgehend bei Ihnen melden."
            : "Die E-Mail-Benachrichtigung ist fehlgeschlagen. Bitte rufen Sie uns an, wenn Ihre Anfrage dringend ist. Bitte senden Sie das Formular nicht erneut.",
          variant: result.notificationSent ? "default" : "destructive",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Fehler beim Senden",
          description: "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später noch einmal oder rufen Sie uns an.",
          variant: "destructive"
        });
      }
    });
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      <div className="bg-slate-900 py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/generated/reception.jpg)` }}></div>
        <span className="absolute bottom-2 right-3 text-[10px] italic text-white/35 z-10 pointer-events-none select-none">KI generiert</span>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Sicherheitsdienst aus Hasloh kontaktieren – Kostenlose Erstberatung</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Wir sind 24 Stunden am Tag, 365 Tage im Jahr für Sie erreichbar. Stellen Sie Ihre Anfrage – wir melden uns schnell, persönlich und unverbindlich zurück.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn direction="right">
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Kontaktdaten</h3>
                
                <StaggerContainer className="space-y-8">
                  <StaggerItem direction="right">
                    <div className="flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 transition-colors hover:bg-primary hover:text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Telefon (24h)</div>
                        <a href="tel:+4917621488084" className="text-slate-600 hover:text-primary transition-colors block text-lg">+49 176 214 880 84</a>
                      </div>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem direction="right">
                    <div className="flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 transition-colors hover:bg-primary hover:text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">E-Mail</div>
                        <a href="mailto:info@junker-sicherheit.de" className="text-slate-600 hover:text-primary transition-colors block break-all">info@junker-sicherheit.de</a>
                      </div>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem direction="right">
                    <div className="flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 transition-colors hover:bg-primary hover:text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Adresse</div>
                        <address className="text-slate-600 not-italic leading-relaxed">
                          Junker-Sicherheit<br/>
                          Inh. Günter Junker<br/>
                          Garstedter Weg 35<br/>
                          25474 Hasloh
                        </address>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem direction="right">
                    <div className="flex items-start gap-5">
                      <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 transition-colors hover:bg-primary hover:text-white">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">Einsatzbereitschaft</div>
                        <div className="text-slate-600 leading-relaxed">
                          24 Stunden, 7 Tage die Woche,<br/>365 Tage im Jahr.
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Schreiben Sie uns eine Nachricht</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Name / Firma <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Name" {...field} className="bg-slate-50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">E-Mail <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="ihre.email@beispiel.de" type="email" {...field} className="bg-slate-50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Telefon (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+49 ..." {...field} className="bg-slate-50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Betreff (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Worum geht es?" {...field} className="bg-slate-50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Ihre Nachricht <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Wie können wir Ihnen helfen?" 
                              className="min-h-[180px] bg-slate-50 resize-y text-base p-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-xl border border-slate-200 p-6 bg-slate-50">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1"
                            />
                          </FormControl>
                          <div className="space-y-2 leading-relaxed">
                            <FormLabel className="text-sm font-normal text-slate-600">
                              Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@junker-sicherheit.de widerrufen. Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-primary hover:underline font-medium">Datenschutzerklärung</Link>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto px-10 h-14 text-base font-bold shadow-lg hover:scale-105 transition-transform"
                      disabled={createContact.isPending}
                    >
                      {createContact.isPending ? "Wird gesendet..." : "Nachricht senden"}
                      {!createContact.isPending && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
