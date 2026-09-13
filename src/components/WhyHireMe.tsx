"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Sparkles, ScrollText, Mic2, Star } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Profissionalismo", description: "Dedicação absoluta à imagem da sua marca / evento." },
  { icon: Users, title: "Envolvimento do Público", description: "Manter todos os convidados cativados e conectados." },
  { icon: Clock, title: "Gestão de Tempo", description: "Execução impecável respeitando cada minuto da agenda." },
  { icon: Sparkles, title: "Improvisação", description: "Lido com o inesperado com humor, optimismo e confiança naturais." },
  { icon: ScrollText, title: "Especialista em Protocolo", description: "Domínio de protocolos diplomáticos, corporativos e sociais." },
  { icon: Mic2, title: "Comunicação Elegante", description: "Uma voz sofisticada que eleva a atmosfera." },
  { icon: Star, title: "Fluidez Impecável", description: "Transições perfeitas entre oradores e momentos." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyHireMe() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            A Diferença
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Porquê Contratar um Mestre de Cerimónias <span className="italic text-accent font-light">Profissional</span>?
          </h2>
          <p className="text-secondary/60 text-lg">
            Mais do que simplesmente falar, um Mestre de Cerimónias profissional é o arquiteto da atmosfera do evento.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group p-8 rounded-sm bg-primary border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500" />
              <benefit.icon className="w-10 h-10 text-accent mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-secondary mb-3">{benefit.title}</h3>
              <p className="text-secondary/60 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
