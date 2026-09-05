"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Viaja internacionalmente para eventos?",
    answer: "Absolutamente. Embora esteja baseado na Europa, viajo frequentemente a nível global para casamentos de luxo, cimeiras corporativas e conferências internacionais. As viagens e o alojamento são normalmente tratados ou cobertos pelo cliente."
  },
  {
    question: "Presta assistência na escrita de guião e protocolo do evento?",
    answer: "Sim. Todos os pacotes premium incluem revisão de guião, e também ofereço escrita completa de guião e consultoria de protocolo para garantir que o seu evento flua de forma perfeita e cumpra as diretrizes formais necessárias."
  },
  {
    question: "Em que idiomas pode apresentar?",
    answer: "Apresento fluentemente em Português, Inglês e Francês. Posso fazer a transição perfeita entre estes idiomas durante um evento para acomodar um público internacional e diversificado."
  },
  {
    question: "O que acontece se o nosso evento ultrapassar o horário?",
    answer: "Como Mestre de Cerimónias experiente, o meu papel é gerir o tempo com elegância, trazendo suavemente o evento de volta ao rumo certo caso se desvie. No entanto, se for necessária apresentação além das horas contratadas, aplicam-se taxas de horas extra standard."
  },
  {
    question: "Fornece o seu próprio equipamento de áudio?",
    answer: "Confio na equipa de AV dedicada do evento para o equipamento de som, a fim de garantir a integração perfeita com a acústica do local. No entanto, coordeno sempre de perto com a equipa técnica as preferências de microfone e verificações de áudio antes do evento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Informação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
            Perguntas <span className="italic text-accent font-light">Frequentes</span>.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 bg-[#050505] overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-display text-xl transition-colors ${openIndex === idx ? 'text-accent' : 'text-secondary'}`}>
                  {faq.question}
                </span>
                <span className="text-secondary/50 shrink-0 ml-4">
                  {openIndex === idx ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-secondary/70 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
