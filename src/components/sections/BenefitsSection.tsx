import {
  Accessibility,
  Coffee,
  ArrowUpDown,
  Gamepad2,
  PartyPopper,
  Trees,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const amenities = [
  { icon: PartyPopper, title: "Salão de festas", text: "Espaço para celebrar com família e amigos." },
  { icon: Coffee, title: "Copa", text: "Área de apoio para seus eventos." },
  { icon: Gamepad2, title: "Brinquedoteca", text: "Diversão garantida para as crianças." },
  { icon: ArrowUpDown, title: "Elevador", text: "Mais conforto e praticidade no dia a dia." },
  { icon: Accessibility, title: "Acessibilidade", text: "Projeto pensado para todos." },
  { icon: Trees, title: "Áreas verdes", text: "Ambiente agradável e bem cuidado." },
];

export function BenefitsSection() {
  return (
    <section id="lazer" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Lazer"
            title="Lazer e comodidades"
            subtitle="Um estilo de vida completo no Residencial Caribe."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card card-hover h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
