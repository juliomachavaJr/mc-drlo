"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[800px] w-full group"
          >
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/media/1004508439.jpeg"
                alt="Professional Portrait"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col space-y-10"
          >
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">
                Por Detrás do Microfone
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Elevando Eventos Através de uma Comunicação <br />
                <span className="italic text-accent font-light">Elegante</span>.
              </h2>
            </div>

            <div className="space-y-6 text-secondary/70 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Com anos de experiência nos palcos dos mais prestigiados eventos corporativos e privados, a minha missão é garantir que a sua mensagem seja transmitida com absoluta autoridade e elegância.
              </p>
              <p>
                Um evento é mais do que uma reunião; é uma história meticulosamente construída. Como seu Mestre de Cerimónias, atuo como o fio invisível que une cada momento — garantindo o protocolo perfeito, o tempo impecável e um público envolvido do início ao fim.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="font-display text-5xl text-secondary">10+</h3>
                <p className="text-xs text-secondary/50 uppercase tracking-[0.15em] font-medium">Anos de Experiência</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-5xl text-secondary">500+</h3>
                <p className="text-xs text-secondary/50 uppercase tracking-[0.15em] font-medium">Eventos Realizados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
