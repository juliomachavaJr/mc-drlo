"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Agenda
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Datas <span className="italic text-accent font-light">Reservadas</span>.
          </h2>
          <p className="text-secondary/60 text-lg font-light leading-relaxed">
            Consulte os eventos já confirmados. Se a sua data não constar nesta lista, 
            significa que ainda poderá estar disponível. Entre em contacto o quanto antes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bookedDates.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/10 rounded-sm p-6 flex items-start gap-4 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-1">{item.date}</h3>
                <p className="text-secondary/60 font-light mb-3">{item.type}</p>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
