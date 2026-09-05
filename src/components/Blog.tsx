"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "A Arte de Ler a Sala",
    category: "Comunicação",
    date: "12 Out, 2026",
    image: "/media/IMG-20251213-WA0082.jpg",
    excerpt: "Como um MC profissional avalia a energia do público e ajusta o seu tom rapidamente para manter o envolvimento."
  },
  {
    title: "Diretrizes de Protocolo em Eventos Corporativos",
    category: "Protocolo",
    date: "28 Set, 2026",
    image: "/media/Manica_259.jpg",
    excerpt: "Navegar no complexo mundo dos protocolos diplomáticos e executivos durante cimeiras corporativas de alto nível."
  },
  {
    title: "Preparação para o Inesperado",
    category: "Planeamento de Eventos",
    date: "15 Set, 2026",
    image: "/media/MANICA_632.jpg",
    excerpt: "Os bastidores da execução perfeita de eventos quando a agenda muda subitamente."
  }
];

export default function Blog() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Publicações
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
              Últimos <span className="italic text-accent font-light">Artigos</span>.
            </h2>
          </div>
          <Link
            href="#"
            className="group flex items-center gap-2 text-secondary hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-semibold">Ver Todos os Artigos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-secondary/50 uppercase tracking-widest mb-4">
                <span className="text-accent">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              
              <h3 className="font-display text-2xl text-secondary mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              
              <p className="text-secondary/70 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
