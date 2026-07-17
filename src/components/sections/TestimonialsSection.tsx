"use client";

import { Quote, Star, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Roberto Almeida",
    role: "CEO, TechVentures",
    text: "Reduzimos custos em 65% e triplicamos a produtividade em 3 meses. O ROI foi de 420% — melhor investimento da história da empresa.",
    avatar: "RA",
    result: "ROI 420%",
  },
  {
    name: "Camila Ferreira",
    role: "CTO, DataScale",
    text: "Implementamos em 36 horas. A precisão de 98% superou tudo que testamos. Cancelamos 3 ferramentas e economizamos R$ 47 mil/mês.",
    avatar: "CF",
    result: "Economia R$ 47K/mês",
  },
  {
    name: "Fernando Costa",
    role: "Diretor, OmniRetail",
    text: "Atendimento 24/7 com qualidade superior. O investimento se pagou no primeiro mês. Nossos clientes nem percebem que é IA.",
    avatar: "FC",
    result: "Payback em 30 dias",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Prova Social"
            title="Resultados reais de quem já transformou"
            subtitle="Não acredite em nós — acredite nos números dos nossos clientes"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="card card-hover relative h-full overflow-hidden p-7">
                <Quote className="absolute right-4 top-4 h-10 w-10 text-primary/5" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                  <TrendingUp className="h-3 w-3" />
                  {t.result}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-dark">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <p className="text-sm font-bold text-primary-dark">
            ⭐ Nota média 4.9/5 baseada em +1.200 avaliações verificadas
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
