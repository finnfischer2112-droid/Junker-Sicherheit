import { zodResolver } from "@hookform/resolvers/zod";
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
      onSuccess: () => {
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank für Ihre Anfrage. Wir werden uns umgehend bei Ihnen melden.",
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
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Kontaktieren Sie uns</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Wir sind 24 Stunden am Tag, 365 Tage im Jahr für Sie erreichbar. Schreiben Sie uns Ihr Anliegen oder rufen Sie uns direkt an.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">Kontaktdaten</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Telefon (24h)</div>
                    <a href="tel:+4917621488084" className="text-slate-600 hover:text-primary transition-colors block text-lg">+49 176 214 880 84</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">E-Mail</div>
                    <a href="mailto:info@junker-sicherheit.de" className="text-slate-600 hover:text-primary transition-colors block break-all">info@junker-sicherheit.de</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Adresse</div>
                    <address className="text-slate-600 not-italic">
                      Junker-Sicherheit<br/>
                      Inh. Günter Junker<br/>
                      Garstedter Weg 35<br/>
                      25474 Hasloh
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Einsatzbereitschaft</div>
                    <div className="text-slate-600">
                      24 Stunden, 7 Tage die Woche,<br/>365 Tage im Jahr.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Schreiben Sie uns eine Nachricht</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name / Firma <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr Name" {...field} className="bg-slate-50" />
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
                          <FormLabel>E-Mail <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="ihre.email@beispiel.de" type="email" {...field} className="bg-slate-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+49 ..." {...field} className="bg-slate-50" />
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
                          <FormLabel>Betreff (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Worum geht es?" {...field} className="bg-slate-50" />
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
                        <FormLabel>Ihre Nachricht <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Wie können wir Ihnen helfen?" 
                            className="min-h-[150px] bg-slate-50 resize-y" 
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
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-slate-50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-slate-700">
                            Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@junker-sicherheit.de widerrufen. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto px-8 h-12 text-base"
                    disabled={createContact.isPending}
                  >
                    {createContact.isPending ? "Wird gesendet..." : "Nachricht senden"}
                    {!createContact.isPending && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
