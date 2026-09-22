"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Calendar, Clock, MapPin, User, Heart, Sparkles } from "lucide-react";

export default function BriefingSection() {
  const [eventType, setEventType] = useState<"casamento" | "outros">("casamento");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ec779586-6151-4ec6-92f6-97c0a65b854b");
    formData.append("to", "machava.kelvin.pro27@gmail.com");
    formData.append("subject", `Novo Briefing de Evento - Lord Kelvin II (${eventType === "casamento" ? "Casamento" : "Outros Eventos"})`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Ocorreu um erro ao submeter o formulário. Por favor, tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Por favor verifique a sua ligação à internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="briefing" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Compatibility anchor for any legacy link to #booking */}
      <span id="booking" className="absolute top-0 pointer-events-none" />

      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4 block">
            Briefing & Contratação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Planeamento & <span className="italic text-accent font-light">Briefing</span>.
          </h2>
          <p className="text-secondary/70 text-base md:text-lg font-light leading-relaxed">
            Cada celebração conta uma história única. Partilhe os detalhes do seu grande dia para que cada momento seja conduzido com elegância, harmonia e profissionalismo.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a] border border-white/10 p-12 text-center max-w-xl mx-auto rounded-sm shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center mx-auto mb-8 text-accent">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">
              Briefing Recebido com <span className="italic text-accent font-light">Sucesso</span>
            </h3>
            <p className="text-secondary/70 text-base leading-relaxed mb-8">
              Agradeço por partilhar os detalhes do seu evento. Entrarei em contacto dentro de 24 horas para alinhar a disponibilidade e todos os pormenores.
            </p>
            <a
              href="https://wa.me/qr/O36EAYGUCMS6E1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Falar Diretamente no WhatsApp
            </a>
          </motion.div>
        ) : (
          <div className="space-y-10">
            {/* Event Type Selector */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setEventType("casamento")}
                className={`w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border text-center ${
                  eventType === "casamento"
                    ? "border-accent bg-accent text-primary shadow-lg shadow-accent/20"
                    : "border-white/15 text-secondary/70 hover:text-secondary hover:border-white/40 bg-[#0a0a0a]"
                }`}
              >
                Casamento
              </button>
              <button
                type="button"
                onClick={() => setEventType("outros")}
                className={`w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border text-center ${
                  eventType === "outros"
                    ? "border-accent bg-accent text-primary shadow-lg shadow-accent/20"
                    : "border-white/15 text-secondary/70 hover:text-secondary hover:border-white/40 bg-[#0a0a0a]"
                }`}
              >
                Outros Eventos
              </button>
            </div>

            {/* Briefing Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-10 sm:space-y-12 bg-[#0a0a0a] p-5 sm:p-8 md:p-14 border border-white/10 rounded-sm shadow-2xl"
            >
              {eventType === "casamento" ? (
                <>
                  {/* 1. DADOS DOS NOIVOS */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <Heart className="w-5 h-5 text-accent" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                        1. Dados dos Noivos & Contacto
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Nome completo da Noiva" name="Nome_Noiva" required />
                      <Input label="Como prefere ser tratada (Noiva)" name="Tratamento_Noiva" required />
                      <Input label="Nome completo do Noivo" name="Nome_Noivo" required />
                      <Input label="Como prefere ser tratado (Noivo)" name="Tratamento_Noivo" required />
                      <Input label="Telefone / WhatsApp Principal" name="Telefone_Principal" type="tel" required />
                      <Input label="E-mail de Contacto" name="Email_Contacto" type="email" required />
                      <Input label="Contacto no Dia do Evento" name="Contacto_Dia_Evento" placeholder="Ex: Cerimonialista / Padrinho" />
                      <Input label="Número Estimado de Convidados" name="Numero_Convidados" type="number" />
                    </div>
                  </section>

                  {/* 2. DADOS DA CERIMÓNIA E FESTA */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <Calendar className="w-5 h-5 text-accent" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                        2. Data & Locais do Casamento
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Data do Casamento" name="Data_Casamento" type="date" required />
                      <Input label="Cidade / Província" name="Cidade" required />
                      <Input label="Hora Prevista de Início" name="Hora_Inicio" type="time" required />
                      <Input label="Hora Prevista de Término" name="Hora_Termino" type="time" />
                      <Input label="Local da Cerimónia Religiosa / Civil" name="Local_Cerimonia" required />
                      <Input label="Local da Recepção / Copo d'Água" name="Local_Recepcao" required />
                    </div>
                  </section>

                  {/* 3. HISTÓRIA DO CASAL */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <Sparkles className="w-5 h-5 text-accent" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                        3. A História do Casal
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <Textarea
                        label="Como e onde vocês se conheceram?"
                        name="Como_Se_Conheceram"
                        placeholder="Conte em breves linhas esse momento marcante..."
                        rows={3}
                      />
                      <Textarea
                        label="Momento mais marcante ou história especial que gostariam que fosse mencionada"
                        name="Momento_Marcante"
                        rows={3}
                      />
                    </div>
                  </section>

                  {/* 4. PREFERÊNCIAS & PROTOCOLO */}
                  <section className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-secondary border-b border-white/10 pb-4">
                      4. Preferências & Roteiro
                    </h3>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-secondary/80">
                        Estilo de condução desejado:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Elegante, solene e protocolar",
                          "Equilíbrio entre elegância e calor/animação",
                          "Muito dinâmico e interativo com os convidados",
                          "Foco na tradição cultural e rituais familiares",
                        ].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer p-3 bg-primary/40 border border-white/5 rounded-sm hover:border-white/20 transition-colors">
                            <input
                              type="checkbox"
                              name="Estilo_Conducao"
                              value={opt}
                              className="w-4 h-4 accent-accent bg-transparent border-white/20"
                            />
                            <span className="text-secondary/80 text-sm">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Textarea
                      label="Momentos especiais a destacar (Ex: Dança dos Noivos, Corte do Bolo, Brinde, Discursos, Homenagens)"
                      name="Momentos_Especiais"
                      rows={3}
                    />
                    <Textarea
                      label="Restrições ou assuntos a evitar durante a condução"
                      name="Restricoes_Evitar"
                      rows={2}
                    />
                  </section>
                </>
              ) : (
                <>
                  {/* 1. DADOS DO EVENTO */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <Calendar className="w-5 h-5 text-accent" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                        1. Dados do Evento
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Tipo de Evento (Ex: Gala, Aniversário, Conferência)" name="Tipo_Evento" required />
                      <Input label="Nome da Empresa / Anfitrião" name="Nome_Anfitriao" required />
                      <Input label="Data do Evento" name="Data_Evento" type="date" required />
                      <Input label="Cidade / Local" name="Local_Evento" required />
                      <Input label="Hora de Início" name="Hora_Inicio" type="time" required />
                      <Input label="Hora de Término Prevista" name="Hora_Termino" type="time" />
                      <Input label="Telefone / WhatsApp" name="Telefone_WhatsApp" type="tel" required />
                      <Input label="E-mail de Contacto" name="Email_Contacto" type="email" required />
                    </div>
                  </section>

                  {/* 2. OBJETIVOS E CONDUÇÃO */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <Sparkles className="w-5 h-5 text-accent" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-secondary">
                        2. Objectivo & Estilo de Condução
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-secondary/80">
                        O que espera da actuação do MC:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Condução protocolar e institucional de alto nível",
                          "Fluidez impecável no cronograma e transição entre oradores",
                          "Interacção dinâmica e engajamento do público",
                          "Apresentação de prémios / galardões e momentos solenes",
                        ].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer p-3 bg-primary/40 border border-white/5 rounded-sm hover:border-white/20 transition-colors">
                            <input
                              type="checkbox"
                              name="Expectativa_MC"
                              value={opt}
                              className="w-4 h-4 accent-accent bg-transparent border-white/20"
                            />
                            <span className="text-secondary/80 text-sm">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Textarea
                      label="Momentos especiais e oradores de destaque"
                      name="Momentos_Destaque"
                      rows={3}
                    />
                    <Textarea
                      label="Observações, protocolo específico ou requisitos técnicos"
                      name="Observacoes_Tecnicas"
                      rows={2}
                    />
                  </section>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-secondary/50 text-xs font-light">
                  Os dados são transmitidos com segurança diretamente para o MC Lord Kelvin II.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-primary font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 disabled:opacity-50 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "A Enviar Briefing..." : "Enviar Briefing"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-primary/60 border border-white/15 px-4 py-3 text-secondary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/30 rounded-sm"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  required = false,
  rows = 3,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-primary/60 border border-white/15 px-4 py-3 text-secondary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/30 rounded-sm"
      />
    </div>
  );
}
