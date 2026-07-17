"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Layers, Star, Zap } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const solutions = [
  {
    name: "NeuroEnterprise",
    status: "Pronto para Implementar",
    badgeClass: "badge-ready",
    description: "Solução completa para grandes corporações. Infraestrutura dedicada, SLA 99.99% e gerente exclusivo.",
    icon: Layers,
    color: "from-emerald-500 via-green-600 to-teal-700",
    available: true,
    featured: true,
  },
  {
    name: "NeuroScale",
    status: "Em Expansão",
    badgeClass: "badge-plant",
    description: "Novas integrações e módulos de IA generativa lançados mensalmente para empresas em crescimento.",
    icon: Cpu,
    color: "from-blue-500 via-cyan-600 to-blue-700",
    available: true,
    featured: false,
  },
  {
    name: "NeuroCore",
    status: "100% Adotado",
    badgeClass: "badge-sold",
    description: "Motor de automação inteligente com milhares de implementações bem-sucedidas no Brasil.",
    icon: Zap,
    color: "from-slate-400 to-slate-500",
    available: false,
    featured: false,
  },
  {
    name: "NeuroFlow",
    status: "100% Adotado",
    badgeClass: "badge-sold",
    description: "Atendimento automatizado 24/7. Referência em chatbots empresariais de alta performance.",
    icon: Bot,
    color: "from-slate-400 to-slate-600",
    available: false,
    featured: false,
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfólio"
            title="Nossas Soluções"
            subtitle="Escolha a plataforma ideal para o momento da sua empresa"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => (
            <ScrollReveal key={solution.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`card card-hover group overflow-hidden ${solution.featured ? "ring-2 ring-accent/40 ring-offset-2" : ""}`}
              >
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${solution.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent)]" />
                  <solution.icon className="relative h-16 w-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                  <span className={`absolute left-3 top-3 ${solution.badgeClass}`}>
                    {solution.status}
                  </span>
                  {solution.featured && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-primary-dark">
                      <Star className="h-3 w-3 fill-current" />
                      Destaque
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-primary-dark">{solution.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{solution.description}</p>
                  {solution.available ? (
                    <a
                      href="#contato"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-accent-dark"
                    >
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="mt-5 inline-block rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-text-muted">
                      Vagas esgotadas
                    </span>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
