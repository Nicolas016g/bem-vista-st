import {
  Accessibility,
  Building2,
  Coffee,
  ArrowUpDown,
  Gamepad2,
  Maximize2,
  PartyPopper,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

const stats = [
  { icon: Building2, label: "160 unidades" },
  { icon: Building2, label: "3 blocos" },
  { icon: Maximize2, label: "Até 70,57 m²" },
  { icon: PartyPopper, label: "Salão de festas" },
  { icon: Coffee, label: "Copa" },
  { icon: Gamepad2, label: "Brinquedoteca" },
  { icon: ArrowUpDown, label: "Elevador" },
  { icon: Accessibility, label: "Acessibilidade" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {stats.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.04}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-primary-dark md:text-xs">
                  {item.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
