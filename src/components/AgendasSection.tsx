"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingDates, parseDate } from "@/data/bookedDates";

const highlights = [
  {
    title: "Casamento (Neusa & Audren)",
    date: "Novembro de 2025",
    image: "/media/IMG-20251213-WA0081.jpg",
  },
  {
    title: "Dr. Couto - Festa de encerramento do ano",
    date: "2025 - Manica Moçambique Terminais",
    image: "/media/MANICA_367.jpg",
  },
  {
    title: "Festa de Graduação da dra. Tiffany",
    date: "2026",
    image: "/media/1004508439.jpeg",
  },
];

const eventTypes = [
  "Casamentos & Bodas",
  "Noivados & Pedidos Oficiais",
  "Eventos Corporativos & Galas",
  "Conferências Internacionais",
  "Festas de Aniversário Exclusivas",
  "Graduações & Celebrações Académicas",
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

export default function AgendasSection() {
  const upcomingDates = getUpcomingDates();

  return (
    <section id="agendas" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-4 block">
            Agendas & Disponibilidade
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Destaques de <span className="italic text-accent font-light">Eventos</span>.
          </h2>
          <p className="text-secondary/70 text-base md:text-lg font-light leading-relaxed">
            Consulte a programação, os momentos marcantes e garanta a disponibilidade da sua data antecipadamente.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0c0c0c] border border-white/10 rounded-sm overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-6 relative -mt-6">
                <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-1">
                  {item.date}
                </span>
                <h3 className="text-lg font-display font-bold text-secondary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agenda Status & Direct Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto border-t border-white/10 pt-16 items-start">
          {/* Types */}
          <div className="bg-[#0c0c0c] border border-white/10 p-6 sm:p-8 rounded-sm">
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
              Especialidades
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-6">
              Ocasiões Atendidas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {eventTypes.map((type, idx) => (
                <li key={idx} className="flex items-center gap-3 text-secondary/80 text-sm font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
              <p className="text-secondary/60 text-xs leading-relaxed font-light">
                Cada evento é conduzido com protocolo personalizado, adaptando o tom de acordo com o perfil dos convidados e a solenidade da cerimónia.
              </p>
            </div>
          </div>

          {/* Reserved Dates list */}
          <div className="bg-[#0c0c0c] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold block">
                  Disponibilidade
                </span>
                <span className="text-secondary/50 text-xs uppercase tracking-widest">
                  {upcomingDates.length} Datas Reservadas
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Calendário de Eventos
              </h3>
              <p className="text-secondary/70 text-sm font-light leading-relaxed mb-6">
                Consulte as datas que já se encontram ocupadas na temporada. Para reservar uma nova data, envie o seu briefing.
              </p>

              {upcomingDates.length === 0 ? (
                <div className="bg-primary/50 border border-white/10 rounded-sm p-6 text-center mb-6">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-3 opacity-60" />
                  <p className="text-secondary/60 text-sm font-light">Agenda 100% livre para novas marcações!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-2.5 max-h-[260px] overflow-y-auto pr-1 mb-6">
                  {upcomingDates.map((item, idx) => {
                    const days = getDaysUntil(item.date);
                    const isIminent = days <= 7;
                    return (
                      <div
                        key={idx}
                        className={`bg-primary/60 border rounded-sm p-3 flex items-center justify-between gap-3 text-left ${
                          isIminent ? "border-accent/40 bg-accent/[0.03]" : "border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Calendar className={`w-4 h-4 flex-shrink-0 ${isIminent ? "text-accent" : "text-secondary/50"}`} />
                          <div className="min-w-0">
                            <span className="font-semibold text-secondary text-xs sm:text-sm block truncate">
                              {formatDateLabel(item.date)}
                            </span>
                            <span className="text-secondary/40 text-[11px] block truncate">
                              {item.type}{item.notes ? ` · ${item.notes}` : ""}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-1 flex-shrink-0 ${
                          isIminent ? "text-accent" : "text-secondary/40"
                        }`}>
                          <Clock className="w-3 h-3" />
                          {days === 0 ? "Hoje" : days === 1 ? "Amanhã" : `${days}d`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="#briefing"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors text-center shadow-lg"
              >
                Garantir a Minha Data no Briefing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
