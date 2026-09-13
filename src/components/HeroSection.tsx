"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/capa.png"
          alt="Lord Kelvin II - Mestre de Cerimónias"
          fill
          priority
          className="object-cover object-top"
          quality={100}
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
      </div>

      {/* Animated grain texture overlay */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "100px" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          Mestre de Cerimónias
          <span className="w-8 h-px bg-accent" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-display text-6xl md:text-8xl lg:text-[100px] font-bold leading-[1.05] max-w-5xl mb-4 text-secondary uppercase tracking-widest"
        >
          LORD KELVIN II
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-accent text-xl md:text-3xl font-light italic mb-8 max-w-3xl"
        >
          Permita-me narrar a sua história com elegância e profissionalismo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-secondary/80 text-lg md:text-xl max-w-2xl mb-14 leading-relaxed font-light"
        >
          Mestre de cerimónias Profissional, especializado em eventos corporativos, casamentos, noivados, festas de aniversário, graduações e outros eventos de alto perfil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="#booking"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-bold uppercase tracking-[0.2em] text-sm overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
              Reservar Evento
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0" />
          </Link>

          <Link
            href="#showreel"
            className="group flex items-center gap-3 text-secondary hover:text-accent transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary/30 group-hover:border-accent transition-colors group-hover:bg-accent/10">
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            </div>
            <span className="font-semibold uppercase tracking-[0.2em] text-sm">
              Ver Showreel
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-secondary/30 uppercase tracking-[0.2em] text-[10px]">Deslizar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
