import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { copy, productCatalog, whatsappMessageProduto, whatsappUrl } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { CardCarousel, CarouselCard } from "../ui/CardCarousel";

export function ProductsSection() {
  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfólio"
            title="Persianas, toldos, rede de proteção e tela mosquiteira"
            subtitle="Fabricação sob medida, instalação profissional e serviços de manutenção para persianas. Atendimento comercial pelo WhatsApp."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <CardCarousel>
            {productCatalog.map((product) => (
              <CarouselCard key={product.id} className="group w-[min(100%,22rem)] sm:w-[24rem]">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 384px"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent px-5 py-4">
                    <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-text-muted">{product.description}</p>
                  <a
                    href={whatsappUrl(whatsappMessageProduto(product.whatsappLabel))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Solicitar informações
                  </a>
                </div>
              </CarouselCard>
            ))}
          </CardCarousel>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <a
            href={whatsappUrl(whatsappMessageProduto("soluções para meu ambiente"))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-8 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {copy.ctaOrcamento}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
