"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/media/Manica_259.jpg",
  "/media/IMG-20251213-WA0130.jpg",
  "/media/Manica_358.jpg",
  "/media/MANICA_143(1).jpg",
  "/media/IMG-20260523-WA0112.jpeg",
  "/media/Manica_277.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-12 pb-32 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Momentos <span className="italic text-accent font-light">Capturados</span>.
          </h2>
        </div>

        {/* Masonry-style CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-sm cursor-pointer break-inside-avoid"
            >
              <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              <Image
                src={src}
                alt={`Galeria de Evento ${idx + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
