import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { MessageCircle, X, Send, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { useCreateContactRequest } from '@workspace/api-client-react';
import { cn } from '@/lib/utils';

const schema = z.object({
  name:    z.string().min(2, 'Bitte Namen eingeben.'),
  phone:   z.string().min(6, 'Bitte Telefonnummer eingeben.'),
  email:   z.string().email('Bitte gültige E-Mail eingeben.'),
  message: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export function FloatingContactWidget() {
  const [open, setOpen]       = useState(false);
  const [done, setDone]       = useState(false);
  const [notificationSent, setNotificationSent] = useState(true);
  const [visible, setVisible] = useState(false);
  const createContact = useCreateContactRequest();

  // Appear after 1.5 s or on first scroll — whichever comes first
  useEffect(() => {
    const show = () => setVisible(true);
    const timer = setTimeout(show, 1500);
    window.addEventListener('scroll', show, { once: true, passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', show); };
  }, []);

  // Escape closes panel
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', email: '', message: '' },
  });

  function onSubmit(values: FormValues) {
    createContact.mutate(
      { data: { ...values, subject: 'Widget-Anfrage', message: values.message ?? '', consent: true } },
      { onSuccess: (result) => {
        setNotificationSent(result.notificationSent);
        setDone(true);
        form.reset();
      } },
    );
  }

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

          {/* ── Flyout panel ── */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="panel"
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{    opacity: 0, y: 16, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                className="w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-slate-900 px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-heading font-bold text-sm leading-tight">
                      Kostenloses Angebot anfordern
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">Antwort innerhalb von 2 Stunden</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    aria-label="Schließen"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-5">
                  {done ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-6 text-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
                      <p className="font-heading font-bold text-slate-900 mb-1">Vielen Dank!</p>
                      <p className="text-slate-500 text-sm">
                        {notificationSent
                          ? 'Wir melden uns schnellstmöglich bei Ihnen.'
                          : 'Ihre Anfrage wurde gespeichert, aber die E-Mail-Benachrichtigung ist fehlgeschlagen. Bitte rufen Sie uns bei dringenden Anliegen an. Bitte senden Sie das Formular nicht erneut.'}
                      </p>
                      <Button
                        size="sm" variant="outline" className="mt-4"
                        onClick={() => { setDone(false); setOpen(false); }}
                      >
                        Schließen
                      </Button>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-slate-600">Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Max Mustermann" className="h-9 text-sm" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-slate-600">Telefon *</FormLabel>
                            <FormControl>
                              <Input placeholder="+49 40 123 456" className="h-9 text-sm" type="tel" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-slate-600">E-Mail *</FormLabel>
                            <FormControl>
                              <Input placeholder="max@beispiel.de" className="h-9 text-sm" type="email" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold text-slate-600">
                              Nachricht (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Kurz beschreiben, was Sie benötigen …"
                                className="text-sm resize-none"
                                rows={2}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )} />
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10"
                          disabled={createContact.isPending}
                        >
                          {createContact.isPending
                            ? 'Wird gesendet …'
                            : <><Send className="h-4 w-4 mr-2" />Anfrage absenden</>
                          }
                        </Button>
                        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                          Mit dem Absenden stimmen Sie unserer{' '}
                          <a href="/datenschutz" className="underline hover:text-slate-600">
                            Datenschutzerklärung
                          </a>{' '}
                          zu.
                        </p>
                      </form>
                    </Form>
                  )}
                </div>

                {/* Quick-call strip */}
                {!done && (
                  <div className="border-t border-slate-100 px-5 py-3 flex items-center justify-between bg-slate-50">
                    <span className="text-xs text-slate-500">Oder direkt anrufen:</span>
                    <a
                      href="tel:+4917621488084"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      0176 214 880 84
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Trigger button ── */}
          <motion.button
            key="trigger"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.1 }}
            onClick={() => { setOpen(o => !o); if (done) setDone(false); }}
            aria-label={open ? 'Anfrage schließen' : 'Kostenlose Anfrage'}
            className={cn(
              'relative h-14 w-14 rounded-full shadow-xl flex items-center justify-center text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
              open ? 'bg-slate-800 hover:bg-slate-700' : 'bg-primary hover:bg-primary/90',
            )}
          >
            {!open && (
              <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
            )}
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="chat"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <MessageCircle className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      )}
    </AnimatePresence>
  );
}
