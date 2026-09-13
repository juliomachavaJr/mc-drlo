"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    title: "Casamento (Neusa & Audren)",
    date: "Novembro de 2025",
    image: "/media/IMG-20251213-WA0081.jpg"
  },
  {
    title: "Dr. Couto // Festa de encerramento do ano",
    date: "2025 - Manica Moçambique Terminais",
    image: "/media/MANICA_367.jpg"
  },
  {
    title: "Festa de Graduação da dra. Tiffany",
    date: "2026",
    image: "/media/1004508439.jpeg"
  }
];

const eventTypes = [
  "Festa de Aniversário",
  "Noivado",
  "Casamento",
  "Festa de Graduação",
  "Evento corporativo",
  "Outros"
];

const bookedDates = [
  { date: "05/09/2026", type: "Casamento", status: "Reservado" },
  { date: "12/09/2026", type: "Casamento", status: "Reservado" },
  { date: "26/09/2026", type: "Casamento", status: "Reservado" },
  { date: "03/10/2026", type: "Casamento", status: "Reservado" },
  { date: "08/11/2026", type: "Casamento", status: "Reservado" },
  { date: "05/12/2026", type: "Casamento", status: "Reservado" },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* EVENT HIGHLIGHTS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Agendas
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Destaques de <span className="italic text-accent font-light">Eventos</span>
          </h2>
          <p className="text-secondary/60 text-lg font-light leading-relaxed mb-8">
            Momentos inesquecíveis conduzidos por Lord Kelvin II.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#050505] border border-white/10 rounded-sm overflow-hidden hover:border-accent/30 transition-colors"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
              </div>
              <div className="p-6 relative -mt-10">
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EVENT TYPES & BOOKED DATES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto border-t border-white/5 pt-20">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Especialização
            </span>
            <h3 className="font-display text-3xl font-bold text-secondary mb-6">
              Tipos de Eventos
            </h3>
            <ul className="space-y-4">
              {eventTypes.map((type, idx) => (
                <li key={idx} className="flex items-center gap-4 text-secondary/80 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Disponibilidade
            </span>
            <h3 className="font-display text-3xl font-bold text-secondary mb-6">
              Datas Reservadas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bookedDates.map((item, idx) => (
                <div key={idx} className="bg-primary border border-white/10 rounded-sm p-4 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary text-sm">{item.date}</h4>
                    <p className="text-secondary/60 text-xs mt-1">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
