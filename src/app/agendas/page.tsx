"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingDates, parseDate } from "@/data/bookedDates";

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

function getDaysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = parseDate(dateStr);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDateLabel(dateStr: string): string {
  const d = parseDate(dateStr);
  return d.toLocaleDateString("pt-PT", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

export default function AgendasPage() {
  const upcomingDates = getUpcomingDates();

  return (
    <main className="min-h-screen bg-[#050505]">
      <section className="py-32 bg-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 mt-10">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Agendas
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Destaques de <span className="italic text-accent font-light">Eventos</span>
            </h1>
            <p className="text-secondary/60 text-lg font-light leading-relaxed">
              Momentos inesquecíveis conduzidos por Lord Kelvin II.
            </p>
          </div>

          {/* EVENT HIGHLIGHTS */}
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
                  <p className="text-accent text-sm font-semibold tracking-wider uppercase">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AVAILABILITY + EVENT TYPES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto border-t border-white/5 pt-20">

            {/* LEFT: Tipos de Eventos */}
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

            {/* RIGHT: Datas Reservadas */}
            <div>
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
                Disponibilidade
              </span>
              <div className="flex items-end justify-between mb-6">
                <h3 className="font-display text-3xl font-bold text-secondary">
                  Datas Reservadas
                </h3>
                <span className="text-secondary/40 text-xs uppercase tracking-widest">
                  {upcomingDates.length} próximos
                </span>
              </div>

              {upcomingDates.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-primary border border-white/10 rounded-sm p-8 text-center"
                >
                  <Calendar className="w-10 h-10 text-accent mx-auto mb-4 opacity-60" />
                  <p className="text-secondary/60 font-light">Sem datas reservadas. A agenda está disponível!</p>
                  <Link
                    href="/#booking"
                    className="mt-4 inline-block text-accent text-sm font-semibold uppercase tracking-widest hover:underline"
                  >
                    Fazer reserva →
                  </Link>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-3">
                  {upcomingDates.map((item, idx) => {
                    const days = getDaysUntil(item.date);
                    const isIminent = days <= 7;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className={`bg-primary border rounded-sm p-4 flex items-center gap-4 ${
                          isIminent ? "border-accent/40" : "border-white/10"
                        }`}
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center ${
                          isIminent ? "bg-accent/20" : "bg-white/5"
                        }`}>
                          <Calendar className={`w-5 h-5 ${isIminent ? "text-accent" : "text-secondary/50"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-secondary text-sm">{formatDateLabel(item.date)}</h4>
                          <p className="text-secondary/50 text-xs mt-0.5 truncate">{item.type}{item.notes ? ` · ${item.notes}` : ""}</p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 ${
                            isIminent ? "text-accent" : "text-secondary/30"
                          }`}>
                            <Clock className="w-3 h-3" />
                            {days === 0 ? "Hoje" : days === 1 ? "Amanhã" : `${days}d`}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <Link
                  href="/#booking"
                  className="group inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Verificar disponibilidade
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
