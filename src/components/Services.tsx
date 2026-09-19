"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

const additionalServices = [
  "Eventos Governamentais", "Lançamentos de Produtos", "Moderação de Painéis",
  "Eventos Virtuais", "Eventos Híbridos", "Consultoria de Protocolo",
  "Escrita de Guião", "Assistência no Planeamento"
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Especialidade
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
              Serviços <span className="italic text-accent font-light">Personalizados</span>.
            </h2>
          </div>
          <Link
            href="#booking"
            className="group flex items-center gap-3 text-secondary hover:text-accent transition-colors pb-2 border-b border-transparent hover:border-accent"
          >
            <span className="font-semibold uppercase tracking-wider text-sm">Pedir Orçamento</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {mainServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-3xl text-secondary mb-3">{service.title}</h3>
                <p className="text-secondary/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
