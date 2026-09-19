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
    <section id="services" className="py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
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
