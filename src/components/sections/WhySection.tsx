import { BadgePercent, CreditCard, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import { copy, trustDifferentials } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { CardCarousel, CarouselCard } from "../ui/CardCarousel";

const iconMap: Record<(typeof trustDifferentials)[number]["icon"], LucideIcon> = {
  "credit-card": CreditCard,
  truck: Truck,
  "shield-check": ShieldCheck,
  "badge-percent": BadgePercent,
};

export function WhySection() {
  return (
    <section id="diferenciais" className="section-padding relative bg-surface">
      <div className="pattern-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Confiança"
            title={copy.whyTitle}
            subtitle={copy.whySubtitle}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <CardCarousel>
            {trustDifferentials.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <CarouselCard key={item.id}>
                  <div className="flex h-full flex-col p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold text-primary-dark">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.text}</p>
                  </div>
                </CarouselCard>
              );
            })}
          </CardCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
