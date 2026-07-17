export const siteConfig = {
  name: "Bem Vista Persianas",
  shortName: "Bem Vista",
  city: "São Carlos",
  state: "SP",
  /** Atualizar com o número oficial do WhatsApp comercial */
  whatsapp: "5516999999999",
  whatsappDisplay: "(16) 99999-9999",
  address: "Centro — São Carlos/SP",
  addressLine: "Atendimento em São Carlos e região",
  email: "contato@bemvistapersianas.com.br",
  instagram: "https://www.instagram.com/bemvistaoficial/",
  facebook: "https://www.facebook.com/bemvistaoficial",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
