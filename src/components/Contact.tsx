"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center w-full"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Entrar em Contacto
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-8">
              Vamos Criar <span className="italic text-accent font-light">História</span>.
            </h2>
            <p className="text-secondary/60 text-lg mb-12 max-w-md mx-auto">
              Quer esteja a organizar uma cimeira em Lisboa ou um casamento em Paris, entre em contacto para discutirmos a sua visão.
            </p>

            <div className="space-y-8 mb-12 flex flex-col items-center">
              <a href="tel:+351912345678" className="flex items-center gap-4 text-secondary/80 hover:text-accent transition-colors group text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl font-light tracking-wide">+258 87 525 6426</span>
              </a>
              <a href="mailto:klvnmachava10@gmail.com" className="flex items-center gap-4 text-secondary/80 hover:text-accent transition-colors group text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-light tracking-wide">klvnmachava10@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-secondary/80 group text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xl font-light tracking-wide">Moçambique- Maputo</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { Icon: InstagramIcon, href: "https://www.instagram.com/kelviinn___?igsi=OXh6NWM3dzYwMWE4" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/kelvin-machava-586845212/" },
                { Icon: FacebookIcon, href: "https://www.facebook.com/share/14rAp4Sddti/?mibextid=wwXIfr" },
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-secondary/50 hover:text-accent hover:border-accent transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
