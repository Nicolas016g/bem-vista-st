"use client";

import { MessageCircle } from "lucide-react";
import { copy, whatsappMessageOrcamentoGeral, whatsappUrl } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { LeadForm } from "../ui/LeadForm";

export function CTABanner() {
  return (
    <section
      id="contato"
      className="cta-banner-gradient relative overflow-hidden py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-float-soft"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float-soft-delayed"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center" variant="scale">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
            Atendimento comercial
          </span>
          <h2 className="mt-5 text-2xl font-extrabold text-white md:text-4xl">
            Entre em contato pelo WhatsApp institucional
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Nossa equipe comercial está disponível para orientações, orçamentos e agendamento de
            visitas técnicas. Utilize o formulário abaixo ou acesse diretamente o canal WhatsApp.
          </p>
          <a
            href={whatsappUrl(whatsappMessageOrcamentoGeral())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-shine mx-auto mt-6 inline-flex !px-8 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {copy.ctaWhatsApp}
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.12} className="mx-auto mt-10 max-w-md" variant="up">
          <LeadForm compact id="lead-form" />
        </ScrollReveal>
      </div>
    </section>
  );
}
