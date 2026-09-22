"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Agendas", id: "agendas" },
  { label: "Galeria", id: "galeria" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sectionIds = ["sobre", "servicos", "agendas", "briefing", "galeria", "contacto"];
      const scrollPos = window.scrollY + 220;

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        current = "";
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "/");
      setActiveSection("");
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "")}
            className="font-display text-base sm:text-lg lg:text-xl tracking-[0.2em] text-secondary uppercase hover:text-accent transition-colors select-none"
          >
            LORD KELVIN II
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-xs uppercase tracking-[0.18em] transition-all duration-200 relative py-1 ${
                    active
                      ? "text-accent font-bold"
                      : "text-secondary/70 hover:text-secondary font-medium"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="#briefing"
              onClick={(e) => scrollToSection(e, "briefing")}
              className="ml-2 group relative inline-flex items-center justify-center px-6 py-2.5 bg-accent text-primary font-bold uppercase tracking-[0.15em] text-[10px] lg:text-[11px] overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                Fazer Marcação
              </span>
              <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-secondary p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {mobileOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg pt-24 px-6 sm:px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-5 pt-4">
              {navLinks.map((link) => {
                const active = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`font-display text-2xl sm:text-3xl transition-colors tracking-wide ${
                      active ? "text-accent font-bold" : "text-secondary/80 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href="#briefing"
                onClick={(e) => scrollToSection(e, "briefing")}
                className="w-full py-4 bg-accent text-primary text-xs font-bold uppercase tracking-[0.2em] text-center block rounded-sm shadow-xl"
              >
                Fazer Marcação
              </a>
              <p className="text-center text-secondary/40 text-[11px] uppercase tracking-widest">
                LORD KELVIN II · MESTRE DE CERIMÓNIAS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/qr/O36EAYGUCMS6E1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.526 5.845L.057 23.5l5.808-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.002-1.37l-.36-.214-3.724.977.994-3.629-.235-.374A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
        </svg>
      </a>
    </>
  );
}
