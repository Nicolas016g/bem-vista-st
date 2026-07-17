import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const programs = [
  "Entrada facilitada",
  "Utilização de FGTS na entrada",
  "Taxas de juros reduzidas",
  "Financiamento em até 420 meses",
  "Até R$ 55 mil em subsídios",
  "Composição de renda com até 3 pessoas",
  "Aprovação facilitada de crédito",
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Financiamento"
            title="Condições especiais"
            subtitle="Aproveite as vantagens dos programas habitacionais e realize o sonho de CONQUISTAR o seu apê!  "
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="card mx-auto max-w-3xl p-8 md:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {programs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-primary-dark">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs text-text-muted">
              * A obtenção dos benefícios depende da análise de cada cliente.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
