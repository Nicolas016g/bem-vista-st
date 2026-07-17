"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { LeadForm } from "../ui/LeadForm";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        alt="Ambiente residencial com persianas instaladas"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:px-6 md:pb-20 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 text-white lg:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]">
              <MapPin className="h-3.5 w-3.5 text-accent-light" />
              {siteConfig.city} — {siteConfig.state}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              Persianas, toldos, redes de proteção e telas mosquiteira sob medida
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/88 md:text-xl">
              Soluções personalizadas para conforto, proteção e estilo no seu lar ou empresa — com
              instalação profissional, manutenção e atendimento especializado em São Carlos.
            </p>

            <p className="mt-4 text-sm text-white/65">
              Atendimento institucional · Orçamento sem compromisso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <LeadForm compact id="lead-form" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
