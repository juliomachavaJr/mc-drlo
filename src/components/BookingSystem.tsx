"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, MapPin, Users, Globe, Clock, Wallet, UploadCloud } from "lucide-react";

const EVENT_TYPES = ["Festa de Aniversário", "Noivado", "Casamento", "Festa de Graduação", "Evento corporativo", "Outros"];

type FormData = {
  eventType: string;
  eventDate: string;
  location: string;
  expectedGuests: string;
  language: string;
  duration: string;
  budget: string;
  specialRequests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const totalSteps = 4;

  const [form, setForm] = useState<FormData>({
    eventType: "", eventDate: "", location: "", expectedGuests: "",
    language: "Português", duration: "Dia Inteiro (até 8h)", budget: "A definir",
    specialRequests: "", firstName: "", lastName: "", email: "", phone: "",
  });

  const update = (field: keyof FormData, value: string) => setForm(f => ({ ...f, [field]: value }));
  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ec779586-6151-4ec6-92f6-97c0a65b854b",
          to: "machava.kelvin.pro27@gmail.com",
          subject: "Novo Pedido de Reserva - MC DRLO",
          from_name: `${form.firstName} ${form.lastName}`,
          replyto: form.email,
          message: `
Detalhes do Pedido de Reserva:
- Tipo de Evento: ${form.eventType}
- Data: ${form.eventDate}
- Localização: ${form.location}
- Convidados: ${form.expectedGuests}
- Idioma: ${form.language}
- Duração: ${form.duration}
- Orçamento: ${form.budget}

Contactos do Cliente:
- Nome: ${form.firstName} ${form.lastName}
- Email: ${form.email}
- Telefone: ${form.phone}

Pedidos Especiais:
${form.specialRequests}
          `
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Erro no envio");
      }
    } catch {
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="booking" className="py-32 bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-[600px]">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-8">
            <span className="text-accent text-4xl">✓</span>
          </div>
          <h2 className="font-display text-4xl text-secondary mb-4">Pedido Recebido</h2>
          <p className="text-secondary/60 text-lg">Obrigado, {form.firstName}. Analisarei o seu pedido e entrarei em contacto num prazo de 24 horas para confirmar a disponibilidade.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Pedido de Reserva</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            Garanta a Sua <span className="italic text-accent font-light">Data</span>.
          </h2>
          <p className="text-secondary/60">Passo {step} de {totalSteps}</p>
        </div>

        <div className="bg-primary border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
            <motion.div className="h-full bg-accent" animate={{ width: `${(step / totalSteps) * 100}%` }} transition={{ duration: 0.5 }} />
          </div>

          <div className="min-h-[400px] flex flex-col justify-between pt-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-display text-secondary mb-6">Que tipo de evento está a organizar?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EVENT_TYPES.map((type) => (
                      <button key={type} onClick={() => update("eventType", type)}
                        className={`p-4 border text-left text-sm tracking-wide transition-all ${form.eventType === type ? "border-accent bg-accent/10 text-accent" : "border-white/10 text-secondary hover:border-accent/50"}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-display text-secondary mb-6">Detalhes do Evento</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><Calendar className="w-3 h-3" /> Data</label>
                      <input type="date" value={form.eventDate} onChange={e => update("eventDate", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><MapPin className="w-3 h-3" /> Localização</label>
                      <input type="text" placeholder="Cidade, País" value={form.location} onChange={e => update("location", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><Users className="w-3 h-3" /> Nº Previsto de Convidados</label>
                      <input type="number" placeholder="ex. 500" value={form.expectedGuests} onChange={e => update("expectedGuests", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><Globe className="w-3 h-3" /> Idioma</label>
                      <select value={form.language} onChange={e => update("language", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors appearance-none">
                        <option>Português</option><option>Inglês</option><option>Francês</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-display text-secondary mb-6">Âmbito e Orçamento</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><Clock className="w-3 h-3" /> Duração</label>
                      <select value={form.duration} onChange={e => update("duration", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors appearance-none">
                        <option>Meio Dia (até 4h)</option><option>Dia Inteiro (até 8h)</option><option>Noite / Gala</option><option>Vários Dias</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><Wallet className="w-3 h-3" /> Intervalo de Orçamento</label>
                      <select value={form.budget} onChange={e => update("budget", e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors appearance-none">
                        <option>A definir</option><option>Taxa Standard</option><option>Taxa Premium</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs text-secondary/50 uppercase tracking-widest flex items-center gap-2"><UploadCloud className="w-3 h-3" /> Pedidos Especiais</label>
                      <textarea value={form.specialRequests} onChange={e => update("specialRequests", e.target.value)} placeholder="Quaisquer requisitos adicionais..." rows={3} className="w-full bg-black/50 border border-white/10 p-3 text-secondary focus:border-accent outline-none transition-colors resize-none" />
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-display text-secondary mb-6">As Suas Informações</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Nome" value={form.firstName} onChange={e => update("firstName", e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 text-secondary focus:border-accent outline-none transition-colors" />
                      <input type="text" placeholder="Apelido" value={form.lastName} onChange={e => update("lastName", e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 text-secondary focus:border-accent outline-none transition-colors" />
                    </div>
                    <input type="email" placeholder="Email Profissional" value={form.email} onChange={e => update("email", e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 text-secondary focus:border-accent outline-none transition-colors" />
                    <input type="tel" placeholder="Telemóvel / WhatsApp" value={form.phone} onChange={e => update("phone", e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 text-secondary focus:border-accent outline-none transition-colors" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button onClick={prevStep} className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : "text-secondary/50 hover:text-secondary"}`}>
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>
              {step < totalSteps ? (
                <button onClick={nextStep} disabled={step === 1 && !form.eventType} className="flex items-center gap-2 px-8 py-3 bg-accent text-primary text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-40">
                  Próximo Passo <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={isLoading || !form.email} className="flex items-center gap-2 px-8 py-3 bg-accent text-primary text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-40">
                  {isLoading ? "A enviar..." : "Enviar Pedido"} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
