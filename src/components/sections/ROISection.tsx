import { ArrowDown, TrendingDown, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

const comparisons = [
  { label: "Custos operacionais", before: "R$ 84.000/mês", after: "R$ 25.200/mês", change: "-70%" },
  { label: "Tempo em tarefas manuais", before: "160h/semana", after: "32h/semana", change: "-80%" },
  { label: "Produtividade da equipe", before: "100%", after: "500%", change: "+400%" },
  { label: "Tempo de resposta ao cliente", before: "4 horas", after: "8 segundos", change: "-99%" },
];

export function ROISection() {
  return (
    <section id="resultados" className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            Resultados Comprovados
          </span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Veja o que muda na sua empresa em 30 dias
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Dados médios de clientes que implementaram a NeuroMind AI no último trimestre
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comparisons.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/70">{item.label}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-white/50">Antes</p>
                    <p className="text-lg font-bold text-red-300 line-through">{item.before}</p>
                  </div>
                  <ArrowDown className="h-5 w-5 shrink-0 text-accent" />
                  <div className="flex-1">
                    <p className="text-xs text-white/50">Depois</p>
                    <p className="text-lg font-extrabold text-green-300">{item.after}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-1 rounded-lg bg-green-500/20 py-2">
                  {item.change.startsWith("+") ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-green-400" />
                  )}
                  <span className="text-sm font-extrabold text-green-300">{item.change}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <a href="#contato" className="btn-accent inline-flex text-base">
            Quero Esses Resultados na Minha Empresa
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
