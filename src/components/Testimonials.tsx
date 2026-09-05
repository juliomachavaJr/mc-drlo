"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena Rossi",
    role: "Diretora de Eventos, Global Tech Summit",
    content: "Uma verdadeira aula magistral em presença de palco. Ele manteve a atenção de 2.000 participantes sem esforço durante três dias.",
    rating: 5,
  },
  {
    name: "Carlos Almeida",
    role: "CEO, Alpha Financial",
    content: "O conhecimento de protocolo e a elegância trazidos para o nosso jantar de gala foram inigualáveis. Verdadeiramente a voz do luxo.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Planeadora de Casamentos de Luxo",
    content: "Ele não apenas apresenta; ele une toda a noite. Os meus clientes ficaram completamente maravilhados.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Recomendações
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
            Palavras de <span className="italic text-accent font-light">Elogio</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-primary p-10 border border-white/5 relative group hover:border-accent/30 transition-colors"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-secondary/80 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="text-secondary font-display text-xl mb-1">{testimonial.name}</h4>
                <p className="text-secondary/50 text-sm uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
