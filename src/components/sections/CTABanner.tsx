"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { LeadForm } from "../ui/LeadForm";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl font-extrabold text-white md:text-4xl">Quero meu apê</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Preencha o formulário e receba seu fluxo de pagamento personalizado.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mx-auto mt-8 max-w-md">
          <LeadForm compact id="lead-form-cta" />
        </ScrollReveal>
      </div>
    </section>
  );
}
