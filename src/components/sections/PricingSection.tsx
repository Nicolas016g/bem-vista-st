import Image from "next/image";
import { Check } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const units = [
  {
    name: "Tipo C",
    area: "47,50 m²",
    garden: "Garden: 64,30 m²",
    image: "/images/plantas/tipo-c.jpg",
    gardenImage: "/images/plantas/garden-c.jpg",
    highlight: true,
    features: ["2 dormitórios", "Sala e cozinha", "Varanda", "Vaga de garagem"],
  },
  {
    name: "Tipo B",
    area: "45,70 m²",
    garden: "Garden: 62,50 m²",
    image: "/images/plantas/tipo-b.jpg",
    gardenImage: "/images/plantas/garden-b.jpg",
    highlight: false,
    features: ["2 dormitórios", "Sala e cozinha", "Varanda", "Vaga de garagem"],
  },
  {
    name: "Tipo A",
    area: "52,51 m²",
    garden: "Garden: 70,57 m²",
    image: "/images/plantas/tipo-a.jpg",
    gardenImage: "/images/plantas/garden-a.jpg",
    highlight: false,
    features: ["2 dormitórios", "Sala e cozinha", "Varanda", "Vaga de garagem"],
  },
];

export function PricingSection() {
  return (
    <section id="plantas" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Plantas e tipologias"
            title="Tipologias disponíveis"
            subtitle="Clique e confira cada tipo de planta, Plantas com opções Garden."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {units.map((unit, i) => (
            <ScrollReveal key={unit.name} delay={i * 0.1}>
              <div
                className={`card card-hover flex h-full flex-col overflow-hidden ${
                  unit.highlight ? "ring-2 ring-accent/40" : ""
                }`}
              >
                {unit.highlight && (
                  <span className="badge-launch m-4 mb-0 w-fit">Destaque</span>
                )}
                <div className="relative m-4 mb-0 aspect-square overflow-hidden rounded-xl bg-white">
                  <Image
                    src={unit.image}
                    alt={`Planta ${unit.name}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <h3 className="text-xl font-extrabold text-primary-dark">{unit.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-primary">{unit.area}</p>
                  <p className="mt-1 text-sm font-semibold text-accent-dark">{unit.garden}</p>
                  <ul className="mt-4 space-y-2">
                    {unit.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
