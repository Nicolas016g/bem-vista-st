import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { CardCarousel, CarouselCard } from "../ui/CardCarousel";

const products = [
  {
    name: "Persianas",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    description:
      "Controle de luz, privacidade e elegância com modelos sob medida. Incluímos manutenção, higienização e reparos para manter seu produto sempre impecável.",
  },
  {
    name: "Toldos",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    description:
      "Proteção solar e conforto para áreas externas e varandas. Soluções resistentes, personalizadas e instaladas com segurança pela nossa equipe.",
  },
  {
    name: "Rede de Proteção",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    description:
      "Segurança para janelas, sacadas e áreas de risco. Instalação profissional com materiais de qualidade para proteger quem você ama.",
  },
  {
    name: "Tela Mosquiteira",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    description:
      "Ventilação natural sem insetos. Telas personalizadas para portas e janelas, com acabamento discreto e durabilidade no dia a dia.",
  },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Produtos"
            title="Soluções completas para o seu ambiente"
            subtitle="Persianas, toldos, redes de proteção e telas mosquiteira com fabricação sob medida, consultoria e instalação profissional em São Carlos."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <CardCarousel>
            {products.map((product) => (
              <CarouselCard key={product.name} className="w-[min(100%,22rem)] sm:w-[24rem]">
                <div className="relative h-52">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="384px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent px-5 py-4">
                    <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
                  </div>
                </div>
                <p className="p-5 text-sm leading-relaxed text-text-muted">{product.description}</p>
              </CarouselCard>
            ))}
          </CardCarousel>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <a
            href={whatsappUrl(
              "Olá! Vim pelo site da Bem Vista e quero transformar meu ambiente hoje mesmo. Pode me ajudar com um orçamento?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-8 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Quero transformar meu ambiente hoje mesmo
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
