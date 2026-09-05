"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

const clients = [
  { name: "Governamental", icon: Landmark },
  { name: "Corporativo", icon: Building2 },
  { name: "Kinesis LK", image: "/media/Kinesis LK.jpeg" },
  { name: "Universidades", icon: GraduationCap },
  { name: "Agências", icon: Briefcase },
];

export default function TrustBar() {
  return (
    <section className="w-full py-16 bg-primary border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-secondary/50 uppercase tracking-widest text-xs font-semibold">
          A escolha de instituições e marcas de prestígio
        </p>
      </div>
      <div className="relative flex w-full flex-nowrap overflow-hidden">
        <motion.div
          className="flex items-center gap-16 md:gap-32 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {/* Loop array multiple times for seamless animation */}
          {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex items-center gap-4 text-secondary/40 hover:text-secondary/80 transition-all duration-500 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
              {client.image ? (
                <div className="relative w-32 h-12">
                   <Image src={client.image} alt={client.name} fill className="object-contain" />
                </div>
              ) : (
                <>
                  {client.icon && <client.icon className="w-8 h-8 stroke-[1.5]" />}
                  <span className="font-display text-2xl tracking-wider">{client.name}</span>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
