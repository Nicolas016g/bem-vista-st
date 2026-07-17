import { MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { BemVistaLogo } from "../ui/BemVistaLogo";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BemVistaLogo variant="footer" theme="light" className="items-center text-center" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Especialistas em persianas, toldos, redes de proteção e telas mosquiteira em{" "}
              {siteConfig.city}. Atendimento institucional com foco em qualidade e confiança.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Endereço</h4>
            <p className="mt-3 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
              <span>
                {siteConfig.addressLine}
                <br />
                {siteConfig.city} — {siteConfig.state}
              </span>
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-accent-light" />
              <a href={`tel:+${siteConfig.whatsapp}`} className="hover:text-white">
                {siteConfig.whatsappDisplay}
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Redes sociais</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Share2 className="h-4 w-4 text-accent-light" />
                @bemvistaoficial
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook — Bem Vista
              </a>
              <a
                href={whatsappUrl("Olá! Vim pelo site e gostaria de falar com a Bem Vista.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#25D366] hover:text-[#4ade80]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp comercial
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center border-t border-white/10 pt-10">
          <BemVistaLogo variant="footer" theme="light" className="items-center text-center" />
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-center text-[10px] text-white/40">
          Imagens ilustrativas. Consulte disponibilidade de produtos e serviços na região.
        </p>
      </div>
    </footer>
  );
}
