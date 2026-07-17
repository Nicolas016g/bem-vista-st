"use client";

import { motion } from "framer-motion";
import { Home, MapPin } from "lucide-react";

const slides = [
  { label: "Casa 50 m²", sub: "2 dormitórios" },
  { label: "", sub: "Quintal privativo" },
  { label: "Bairro planejado", sub: "Infraestrutura completa" },
];

export function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_48px_rgba(26,66,138,0.12)]"
      >
        <div className="flex h-52 items-center justify-center bg-gradient-to-br from-primary via-primary-light to-[#1a5a9e]">
          <div className="text-center text-white">
            <Home className="mx-auto h-16 w-16 opacity-90" strokeWidth={1.25} />
            <p className="mt-3 text-lg font-bold">Parque Vista Bárbara</p>
            <p className="text-sm text-white/80">Golden City Incorporação e Construção</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {slides.map((s) => (
            <div key={s.label} className="rounded-xl bg-surface p-3 text-center">
              <p className="text-xs font-bold text-primary-dark">{s.label}</p>
              <p className="mt-1 text-[10px] text-text-muted">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-border px-4 py-3 text-xs text-text-muted">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Av. Sandro Antônio Mendes, 1.250 — Sorocaba/SP
        </div>
      </motion.div>
    </div>
  );
}
