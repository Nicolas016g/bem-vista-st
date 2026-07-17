import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function TourSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Plantas"
            title="Confira cada tipo de planta"
            subtitle="Apartamentos e opções garden — visualize os espaços do seu futuro lar."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="card overflow-hidden">
            <div className="relative h-72 md:h-96">
              <Image
                src="/images/implantacao-caribe.webp"
                alt="Implantação e plantas do Residencial Caribe"
                fill
                className="object-contain bg-surface p-6"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <a href="#plantas" className="btn-primary">
            Ver todas as tipologias
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
