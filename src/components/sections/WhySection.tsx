import { CreditCard, ShieldCheck, Truck, BadgePercent } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { CardCarousel, CarouselCard } from "../ui/CardCarousel";

const reasons = [
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    text: "Condições especiais para você investir no conforto do seu ambiente com tranquilidade.",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    text: "Agilidade do orçamento à entrega, respeitando prazos e a sua necessidade.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação gratuita e segura",
    text: "Equipe qualificada realiza a instalação com segurança e acabamento impecável.",
  },
  {
    icon: BadgePercent,
    title: "Preços competitivos",
    text: "Excelente custo-benefício com produtos de qualidade e atendimento profissional.",
  },
];

export function WhySection() {
  return (
    <section id="diferenciais" className="section-padding relative bg-surface">
      <div className="pattern-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que nossos clientes escolhem a Bem Vista?"
            subtitle="Mais de confiança, qualidade e cuidado em cada detalhe — da consultoria à instalação e manutenção dos seus produtos."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <CardCarousel>
            {reasons.map((item) => (
              <CarouselCard key={item.title}>
                <div className="flex h-full flex-col p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-primary-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.text}</p>
                </div>
              </CarouselCard>
            ))}
          </CardCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
