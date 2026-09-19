"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "/#about" },
  { label: "Serviços", href: "/#services" },
  { label: "Agendas", href: "/agendas" },
  { label: "Galeria", href: "/#gallery" },
  { label: "Contacto", href: "/#contact" },
  { label: "Briefing", href: "/evento" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-[0.2em] text-secondary uppercase">
            MC DRLO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-secondary/60 hover:text-secondary uppercase tracking-[0.15em] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#booking"
            className="hidden md:inline-flex px-6 py-3 bg-accent text-primary text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Reservar
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-primary pt-24 px-8 flex flex-col gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-4xl text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#booking"
            onClick={() => setMobileOpen(false)}
            className="mt-8 px-6 py-4 bg-accent text-primary text-sm font-bold uppercase tracking-widest text-center"
          >
            Reservar Evento
          </Link>
        </motion.div>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/qr/O36EAYGUCMS6E1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-emerald flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.526 5.845L.057 23.5l5.808-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.002-1.37l-.36-.214-3.724.977.994-3.629-.235-.374A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
        </svg>
      </a>

      {/* Sticky Book Button (appears on scroll) */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        >
          <Link
            href="/#booking"
            className="px-8 py-3 bg-accent text-primary text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-2xl"
          >
            Reservar Evento
          </Link>
        </motion.div>
      )}
    </>
  );
}
