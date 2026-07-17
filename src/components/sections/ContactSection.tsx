import { LeadForm } from "../ui/LeadForm";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contato"
            title="Entre em contato"
            subtitle="Preencha o formulário e receba seu fluxo de pagamento personalizado."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-10 max-w-md">
          <LeadForm compact id="lead-form-contato" />
        </ScrollReveal>
      </div>
    </section>
  );
}
