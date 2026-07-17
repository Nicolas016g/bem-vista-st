import { Bus, MapPin, School, ShoppingBag, Stethoscope, Store } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const nearby = [
  { icon: School, label: "Escolas", time: "próximo" },
  { icon: Store, label: "Supermercados", time: "1 min" },
  { icon: ShoppingBag, label: "Comércio local", time: "próximo" },
  { icon: Bus, label: "Transporte", time: "fácil acesso" },
  { icon: Stethoscope, label: "Saúde", time: "2 min" },
  { icon: MapPin, label: "Centro de Sorocaba", time: "acesso rápido" },
];

export function MarketSection() {
  return (
    <section id="localizacao" className="section-padding relative bg-white">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Localização"
            title="Confira a localização do empreendimento"
            subtitle="Rua Ramon Haro Martini, 1.640 — Jardim Gutierres — Sorocaba/SP"
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal delay={0.1} className="flex items-center justify-center">
            <div className="card card-hover w-full overflow-hidden">
              <div className="relative h-80 md:h-[28rem]">
                <Image
                  src="/images/galeria/03-sala.png"
                  alt="Sala decorada do Residencial Caribe"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/30 to-transparent px-5 py-5">
                  <p className="font-bold text-white">Apartamento decorado</p>
                  <p className="mt-1 text-sm text-white/85">
                    Ambientes modernos, iluminados e prontos para o seu estilo de vida
                  </p>
                </div>
              </div>
              <div className="border-t border-border p-4 text-center">
                <p className="font-bold text-primary-dark">Residencial Caribe</p>
                <p className="mt-1 text-sm text-text-muted">
                  Rua Ramon Haro Martini, 1.640 — Jardim Gutierres
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex flex-col justify-center">
            <h3 className="text-xl font-extrabold text-primary-dark">Venha morar em Sorocaba</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Uma região com altos índices de desenvolvimento. Nossas obras estão aceleradas, com
              sucesso na previsão de entrega dos nossos projetos.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {nearby.map(({ icon: Icon, label, time }) => (
                <div key={label} className="card flex flex-col items-center p-4 text-center">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="mt-2 text-xs font-bold text-primary-dark">{label}</span>
                  <span className="mt-1 text-[10px] text-text-muted">{time}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
