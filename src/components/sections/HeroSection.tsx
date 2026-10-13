"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import {
  copy,
  heroBackground,
  whatsappMessageOrcamentoGeral,
  whatsappUrl,
} from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <div className={`absolute inset-0 ${reduceMotion ? "" : "hero-ken-burns"}`}>
        <Image
          src={heroBackground}
          alt="Persiana vertical instalada pela Bem Vista"
          fill
          priority
          className="object-cover object-[70%_center] md:object-[85%_center]"
          sizes="100vw"
          unoptimized
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-dark/[0.97] via-primary-dark/[0.82] via-[42%] to-transparent to-[78%] md:via-[38%] md:to-[72%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent md:hidden"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-24 pt-28 md:px-6 md:pb-20 md:pt-32">
        <div className="w-full max-w-xl lg:max-w-2xl">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          >
            {copy.heroTitle}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.1, ease }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
          >
            {copy.heroSubtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.2, ease }}
            className="mt-8"
          >
            <a
              href={whatsappUrl(whatsappMessageOrcamentoGeral())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-shine !px-10 !py-4 text-base shadow-xl shadow-black/25"
            >
              <MessageCircle className="h-5 w-5" />
              {copy.heroCtaWhatsApp}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
