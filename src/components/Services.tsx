"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mainServices = [
  {
    title: "Eventos Corporativos",
    image: "/media/45.png",
    description: "Lançamentos de produtos, galas e marcos corporativos apresentados com absoluta autoridade.",
  },
  {
    title: "Conferências e Cimeiras",
    image: "/media/Kinesis LK.jpeg",
    description: "Manter agendas de vários dias no caminho certo, enquanto mantém os participantes profundamente envolvidos.",
  },
  {
    title: "Casamentos",
    image: "/media/IMG-20251216-WA0031.jpg",
    description: "Criar momentos de suspense, celebração e prestígio para os vencedores.",
  },
  {
    title: "Cerimónias de Apresentação",
    image: "/media/IMG-20260328-WA0088.jpg",
    description: "Apresentação elegante e personalizada que torna o seu dia especial verdadeiramente inesquecível.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-primary relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
            Serviços
          </h2>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[420px] overflow-hidden rounded-sm cursor-pointer border border-white/10 hover:border-accent/40 transition-colors duration-500"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <div className="w-10 h-0.5 bg-accent mb-4 transform origin-left transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl md:text-3xl text-secondary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary/80 font-light text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
