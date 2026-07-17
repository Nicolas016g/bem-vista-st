import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { BemVistaLogo } from "../ui/BemVistaLogo";

const aboutText =
  "A Bem Vista Persianas é especialista em persianas, cortinas, toldos, tela de proteção e tela mosquiteira personalizada. Atendemos online, na loja e também realizamos visita de consultoria, visita técnica para medidas e instalação profissional de todos os produtos. Oferecemos ainda limpeza, manutenção e reparos completos. Soluções modernas, rápidas e personalizadas para seu ambiente.";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Sobre nós"
            title="Institucional Bem Vista"
            subtitle="Referência em soluções para ambientes residenciais e comerciais em São Carlos."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.1} className="flex justify-center">
            <div className="card flex w-full max-w-md items-center justify-center bg-white p-10 md:p-14">
              <BemVistaLogo variant="about" className="items-center text-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg leading-relaxed text-text-muted md:text-xl">{aboutText}</p>
            <a
              href={whatsappUrl(
                "Olá! Vim pelo site da Bem Vista e quero transformar meu ambiente agora. Gostaria de falar com um especialista.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 !px-8 !py-4 text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Quero transformar meu ambiente agora!
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
