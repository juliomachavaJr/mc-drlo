"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EventoForm() {
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ec779586-6151-4ec6-92f6-97c0a65b854b"); // Chave Web3Forms
    formData.append("subject", "Novo Briefing Preenchido - MC DRLO");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Ocorreu um erro ao enviar o formulário. Por favor tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Por favor verifique a sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#050505] flex items-center justify-center p-6 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0a] border border-white/10 p-12 text-center max-w-lg w-full"
        >
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-display font-bold text-secondary mb-4">Formulário Enviado!</h2>
          <p className="text-secondary/60">
            Agradeço por partilharem a vossa história. Entrarei em contacto brevemente para alinharmos todos os detalhes do vosso grande dia.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Formulário de Briefing
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">
            MC Lord Kelvin II
          </h1>
          <p className="text-secondary/60 text-lg leading-relaxed max-w-2xl mx-auto">
            “Cada celebração tem uma história. O meu trabalho é conhecê-la antes de subir ao palco, para que, 
            no grande dia, cada momento seja conduzido com elegância, emoção e profissionalismo.”
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 bg-[#0a0a0a] p-8 md:p-12 border border-white/5 rounded-sm">
          
          {/* 1. DADOS DOS NOIVOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">1. Dados dos Noivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nome completo da noiva" required />
              <Input label="Nome pelo qual prefere ser tratada" required />
              <Input label="Nome completo do noivo" required />
              <Input label="Nome pelo qual prefere ser tratado" required />
              <Input label="Data do evento" type="date" required />
              <Input label="Local do evento" required />
              <Input label="Contacto principal" type="tel" required />
              <Input label="Pessoa de contacto no dia do evento" />
            </div>
          </section>

          {/* 2. A HISTÓRIA DO CASAL */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">2. A História do Casal</h2>
            <div className="grid grid-cols-1 gap-6">
              <Textarea label="Como e onde vocês se conheceram?" />
              <Input label="Quando começaram o relacionamento?" />
              <Input label="Quem tomou a iniciativa?" />
              <Textarea label="Como foi o primeiro encontro?" />
              <Textarea label="Qual foi o momento mais marcante da relação?" />
              <Textarea label="O que mais admiram um no outro?" />
              <Textarea label="Existe alguma história engraçada que gostariam que fosse mencionada?" />
              <Textarea label="Que desafio importante superaram juntos?" />
              <Textarea label="O que torna a vossa relação especial?" />
              <Input label="Definam o vosso relacionamento em três palavras." />
            </div>
          </section>

          {/* 3. TRADIÇÃO E CERIMÓNIA */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">3. Tradição e Cerimónia</h2>
            <div className="grid grid-cols-1 gap-6">
              <Input label="Qual é a tradição/cultura familiar que será seguida?" />
              <Textarea label="Existem rituais tradicionais específicos que deverão fazer parte do programa?" />
              <Textarea label="Há palavras, expressões ou formas de tratamento tradicionais que o MC deve conhecer?" />
              <Textarea label="Quais familiares terão papéis especiais durante a cerimónia?" />
              <Input label="Quem serão os representantes da família da noiva?" />
              <Input label="Quem serão os representantes da família do noivo?" />
              <Textarea label="Existem momentos em que o MC não deve interromper ou intervir?" />
              <Textarea label="Existem assuntos culturais, familiares ou pessoais que não devem ser mencionados publicamente?" />
            </div>
          </section>

          {/* 4. FAMÍLIA E CONVIDADOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">4. Família e Convidados</h2>
            <div className="grid grid-cols-1 gap-6">
              <Input label="Nome dos pais/representantes da noiva" />
              <Input label="Nome dos pais/representantes do noivo" />
              <Textarea label="Outros familiares importantes" />
              <Input label="Padrinho e madrinha" />
              <Textarea label="Outros padrinhos/testemunhas" />
              <Textarea label="Pessoas que deverão ser mencionadas durante a cerimónia" />
            </div>
          </section>

          {/* 5. DISCURSOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">5. Discursos e Intervenções</h2>
            <Textarea label="Liste todos os oradores, a relação com os noivos e o momento previsto para cada discurso." rows={4} />
          </section>

          {/* 6. MÚSICA, ENTRADAS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">6. Música, Entradas e Animação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Como será feita a entrada do noivo?" />
              <Input label="Música escolhida para a entrada do noivo" />
              <Input label="Como será feita a entrada da noiva?" />
              <Input label="Música escolhida para a entrada da noiva" />
              <Input label="Como será feita a entrada dos noivos?" />
              <Input label="Música escolhida para a entrada dos noivos" />
              <Input label="Música especial do casal" />
              <Input label="Nome/contacto do DJ, banda ou responsável pelo som" />
            </div>
          </section>

          {/* 7. BRINCADEIRAS E INTERACÇÃO */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">7. Brincadeiras e Interacção</h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-secondary/70">Preferências:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Sim, descontraídas", "Não", "Descontraído", "Surpresa do MC", "Sim, mas com moderação", "Humor elegante/discreto", "Muito divertido"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="Preferencias_Brincadeiras" value={opt} className="w-4 h-4 accent-accent bg-transparent border-white/20" />
                    <span className="text-secondary/70 text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Input label="Os noivos autorizam brincadeiras durante a cerimónia?" />
              <Input label="Qual o nível de humor desejado?" />
              <Textarea label="Quais assuntos não devem ser utilizados em brincadeiras?" />
              <Input label="Gostariam de incluir um jogo de perguntas sobre os noivos?" />
              <Textarea label="Informações curiosas sobre os noivos (Liste até 8):" rows={4} />
              <Textarea label="Outras brincadeiras ou dinâmicas desejadas" />
            </div>
          </section>

          {/* 8. MOMENTOS ESPECIAIS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">8. Momentos Especiais</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Música de entrada do noivo", "Bênção", "Brinde", "Copo d’água", "Testemunhos", 
                "Dança dos noivos", "Entrega de presentes", "Encerramento", "Música de entrada da noiva",
                "Oração / Nome do responsável", "Discursos / Nomes", "Corte do bolo", "Sessão de fotos",
                "Brincadeiras", "Abertura da sala", "Agradecimentos", "Outro"
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="Momentos_Especiais" value={opt} className="w-4 h-4 accent-accent bg-transparent border-white/20" />
                  <span className="text-secondary/70 text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </section>

          {/* 9. A EMOÇÃO QUE QUEREM DEIXAR */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">9. A Emoção Que Querem Deixar</h2>
            <Textarea label="Se no final deste evento vocês pudessem guardar apenas uma emoção ou mensagem, qual gostariam que fosse?" rows={3} />
          </section>

          {/* 10. INFORMAÇÕES CONFIDENCIAIS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">10. Informações Confidenciais para o MC</h2>
            <div className="grid grid-cols-1 gap-6">
              <Textarea label="Existe alguma informação que o MC deve saber para evitar situações constrangedoras durante o evento?" />
              <Textarea label="Existem pessoas que não devem ser chamadas ao palco/microfone? Se sim, indique-as." />
            </div>
          </section>

          {/* 11. LOGÍSTICA DO EVENTO */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">11. Logística do Evento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Hora prevista para início" type="time" />
              <Input label="Hora prevista para terminar" type="time" />
              <Input label="Hora de chegada dos noivos" type="time" />
              <Input label="Número estimado de convidados / numero de mesas" />
              <Input label="Haverá DJ?" />
              <Input label="Haverá banda/música ao vivo?" />
              <Input label="Haverá fotógrafo?" />
              <Input label="Haverá protocolo? Se sim, indique o nome do responsável." />
              <Input label="Haverá coordenador do evento?" />
            </div>
          </section>

          {/* 12. A VISÃO DOS NOIVOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary border-b border-white/10 pb-4">12. A Visão dos Noivos</h2>
            <div className="grid grid-cols-1 gap-6">
              <Textarea label="Como gostariam que o vosso evento fosse lembrado?" />
              <Input label="Como gostariam que o MC se vestisse?" />
            </div>
          </section>

          <div className="pt-8 text-center border-t border-white/10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent text-primary px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "A Enviar..." : "Enviar Briefing"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

// Helper Components
function Input({ label, type = "text", required = false }: { label: string, type?: string, required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-secondary/70">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={label}
        type={type}
        required={required}
        className="bg-transparent border border-white/20 p-3 text-secondary outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

function Textarea({ label, required = false, rows = 2 }: { label: string, required?: boolean, rows?: number }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-secondary/70">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        name={label}
        required={required}
        rows={rows}
        className="bg-transparent border border-white/20 p-3 text-secondary outline-none focus:border-accent transition-colors resize-none"
      />
    </div>
  );
}
