"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const showreelImages = [
  "/media/MANICA_660.jpg",
  "/media/Manica_259.jpg",
  "/media/IMG-20251213-WA0130.jpg",
  "/media/Manica_358.jpg",
  "/media/MANICA_143(1).jpg",
  "/media/IMG-20260523-WA0112.jpeg",
];

export default function Showreel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showreelImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="showreel" className="w-full bg-[#050505]">
      <div className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Blurred Background Layer to fill space gracefully */}
              <Image
                src={showreelImages[currentIndex]}
                alt="Event Showreel Background"
                fill
                className="object-cover opacity-30 blur-2xl scale-110"
                quality={30}
                priority
              />
              {/* Main Image Layer (contain to prevent cropping) */}
              <Image
                src={showreelImages[currentIndex]}
                alt="Event Showreel"
                fill
                className="object-contain opacity-90"
                quality={90}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center group cursor-pointer"
        >
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Melhores Momentos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white font-bold text-center">
            Veja a <span className="italic font-light">Magia</span> Acontecer
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
