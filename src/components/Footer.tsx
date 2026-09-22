"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-12 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/40 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} LORD KELVIN II. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
