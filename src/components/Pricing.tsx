"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Essencial",
    target: "Eventos de Meio Dia",
    features: ["Até 4 horas de apresentação", "1 Reunião de Preparação", "Revisão Básica de Guião", "Suporte Standard"],
    highlighted: false,
  },
  {
    name: "Profissional",
    target: "Conferências de Dia Inteiro",
    features: ["Até 8 horas de apresentação", "2 Reuniões de Preparação", "Revisão Detalhada de Guião", "Coordenação de Equipamento de Áudio", "Suporte Prioritário"],
    highlighted: true,
  },
  {
    name: "Premium",
    target: "Jantares de Gala e Prémios",
    features: ["Apresentação de Noite Completa", "Reuniões de Preparação Ilimitadas", "Escrita Completa de Guião", "Consultoria de Protocolo", "Presença em Ensaios", "Suporte VIP"],
    highlighted: false,
  },
  {
    name: "VIP / Destino",
    target: "Vários Dias e Internacional",
    features: ["Apresentação em Vários Dias", "Disponibilidade para Viagens Internacionais", "Controlo Criativo Total", "Coordenador Dedicado", "Requisitos Personalizados"],
    highlighted: false,
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-primary border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Investimento
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Pacotes <span className="italic text-accent font-light">Selecionados</span>.
          </h2>
          <p className="text-secondary/60 text-lg">
            Cada evento é único. Selecione uma base que melhor se adapte à sua visão, e nós iremos personalizá-la na perfeição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 border ${
                pkg.highlighted ? "border-accent bg-accent/5" : "border-white/10 bg-[#0a0a0a]"
              } flex flex-col relative transition-all duration-500 hover:-translate-y-2`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Mais Pedido
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-3xl text-secondary mb-2">{pkg.name}</h3>
                <p className="text-secondary/50 text-xs uppercase tracking-[0.2em]">{pkg.target}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-secondary/80 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="#booking"
                className={`w-full py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                  pkg.highlighted 
                    ? "bg-accent text-primary hover:bg-white" 
                    : "bg-white/5 text-secondary hover:bg-white/10"
                }`}
              >
                Pedir Orçamento
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-secondary/50 mb-4 font-light">Tem requisitos específicos?</p>
          <Link
            href="#booking"
            className="group inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-semibold">Pedir Orçamento Personalizado</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
