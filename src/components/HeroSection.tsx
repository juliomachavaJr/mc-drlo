"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[960px] lg:min-h-[1020px] flex flex-col justify-end items-center pb-12 sm:pb-16 overflow-hidden bg-[#111111]"
    >
      {/* Background Image Container com máscara radial para fusão perfeita nas bordas */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 100% 120% at 50% 30%, black 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 120% at 50% 30%, black 50%, transparent 95%)",
        }}
      >
        <Image
          src="/media/image000005_original.png"
          alt="Lord Kelvin II - Mestre de Cerimónias"
          fill
          priority
          className="object-cover object-[center_top] translate-y-0"
          quality={100}
          sizes="100vw"
        />

        {/* Gradiente sutil inferior para contraste perfeito dos textos e transição suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 via-40% to-transparent pointer-events-none z-[1]" />
      </div>

      {/* Animated grain texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* Hero Content - Positioned generously below chin */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center mt-auto pt-[440px] sm:pt-[480px] md:pt-[520px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-accent uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold mb-3 inline-flex items-center gap-2 sm:gap-3"
        >
          <span className="w-5 sm:w-8 h-px bg-accent" />
          Mestre de Cerimónias
          <span className="w-5 sm:w-8 h-px bg-accent" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-bold leading-[1.05] max-w-5xl mb-3 text-secondary uppercase tracking-widest px-2"
        >
          LORD KELVIN II
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-display text-sm sm:text-lg md:text-xl lg:text-2xl font-light italic text-accent mb-3 max-w-2xl px-2"
        >
          Permita-me narrar a sua história com elegância e profissionalismo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-secondary/80 text-xs sm:text-sm md:text-base max-w-xl mb-6 leading-relaxed font-light px-2"
        >
          Mestre de Cerimónias profissional, especializado em eventos corporativos, casamentos de luxo, noivados e celebrações memoráveis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="#briefing"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 bg-accent text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm overflow-hidden shadow-lg text-center"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
              Reservar Evento
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0" />
          </Link>

          <Link
            href="#showreel"
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 text-secondary hover:text-accent transition-colors py-2 px-4"
          >
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-secondary/30 group-hover:border-accent transition-colors group-hover:bg-accent/10 flex-shrink-0">
              <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
            </div>
            <span className="font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
              Ver Showreel
            </span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-1.5"
        >
          <Link href="#sobre" className="flex flex-col items-center gap-1.5 group">
            <span className="text-secondary/40 group-hover:text-accent uppercase tracking-[0.2em] text-[9px] sm:text-[10px] transition-colors">
              Deslizar
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-6 sm:h-8 bg-gradient-to-b from-accent/70 to-transparent"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
