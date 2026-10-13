"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import {
  copy,
  heroBackground,
  whatsappMessageOrcamentoGeral,
  whatsappUrl,
} from "@/lib/site";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={heroBackground}
        alt="Ambiente residencial iluminado com persianas instaladas"
        fill
        priority
        className="object-cover object-[70%_center] md:object-[85%_center]"
        sizes="100vw"
        unoptimized
      />

      {/* Degradê no lado esquerdo — legibilidade do título, subtítulo e CTA */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-dark/[0.97] via-primary-dark/[0.82] via-[42%] to-transparent to-[78%] md:via-[38%] md:to-[72%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent md:hidden"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-24 pt-28 md:px-6 md:pb-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-xl lg:max-w-2xl"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {copy.heroTitle}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            {copy.heroSubtitle}
          </p>

          <div className="mt-8">
            <a
              href={whatsappUrl(whatsappMessageOrcamentoGeral())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-10 !py-4 text-base shadow-xl shadow-black/25"
            >
              <MessageCircle className="h-5 w-5" />
              {copy.heroCtaWhatsApp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
