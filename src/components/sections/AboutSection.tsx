import { MessageCircle } from "lucide-react";
import {
  copy,
  whatsappMessageCanalComercial,
  whatsappMessageOrcamentoGeral,
  whatsappUrl,
} from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectPhotoMarquee } from "../ui/ProjectPhotoMarquee";

const aboutText =
  "A Bem Vista Persianas é referência em soluções para ambientes residenciais e comerciais em São Carlos e região. Atuamos com persianas, cortinas, toldos, redes de proteção e telas mosquiteira sob medida, além de consultoria técnica, instalação profissional, manutenção e higienização. O relacionamento com clientes e parceiros é conduzido de forma institucional, com atendimento comercial dedicado pelo WhatsApp.";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Institucional"
            title="Compromisso com qualidade e atendimento especializado"
            subtitle="Empresa consolidada no mercado de soluções para ambientes, com processos claros e equipe qualificada."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.1} className="flex justify-center">
            <ProjectPhotoMarquee />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg leading-relaxed text-text-muted md:text-xl">{aboutText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(whatsappMessageOrcamentoGeral())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !px-8 !py-4 text-base"
              >
                <MessageCircle className="h-5 w-5" />
                {copy.ctaOrcamento}
              </a>
              <a
                href={whatsappUrl(whatsappMessageCanalComercial())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent !px-8 !py-4 text-base"
              >
                {copy.ctaAtendimento}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
