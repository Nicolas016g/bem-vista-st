"use client";

import { MessageCircle } from "lucide-react";
import { copy, whatsappMessageOrcamentoGeral, whatsappUrl } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { LeadForm } from "../ui/LeadForm";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-secondary to-secondary-light py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center">
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
            className="btn-whatsapp mx-auto mt-6 inline-flex !px-8 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {copy.ctaWhatsApp}
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mx-auto mt-10 max-w-md">
          <LeadForm compact id="lead-form" />
        </ScrollReveal>
      </div>
    </section>
  );
}
