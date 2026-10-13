import media from "./media-manifest.json";

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

export const brandAssets = {
  logoFull: "/images/brand/logo-bem-vista.png",
  logoLockup: "/images/brand/bem-vista-lockup.png",
  mark: "/images/brand/bv-mark.png",
  icon: "/images/brand/logo-icon.png",
} as const;

export const copy = {
  ctaWhatsApp: "Canal comercial WhatsApp",
  ctaOrcamento: "Solicitar orçamento via WhatsApp",
  ctaAtendimento: "Falar com a equipe comercial",
  formTitle: "Solicitação de atendimento",
  formSubtitle:
    "Informe seus dados. Você será direcionado ao WhatsApp comercial com a mensagem já estruturada.",
  formSubmit: "Enviar solicitação via WhatsApp",
  stickyBar: "Atendimento comercial disponível pelo WhatsApp institucional.",
  heroTitle: "Ambientes com conforto, proteção e acabamento sob medida",
  heroSubtitle:
    "Persianas, toldos, redes de proteção e telas mosquiteira — fabricação, instalação e manutenção em São Carlos e região.",
  heroCtaWhatsApp: "Quero um orçamento",
  whyTitle: "Por que escolher a Bem Vista?",
  whySubtitle:
    "Materiais de qualidade, equipe especializada e atendimento comercial ágil do orçamento à instalação.",
} as const;

export const trustDifferentials = [
  {
    id: "pagamento",
    title: "Pagamento facilitado",
    text: "Condições comerciais que facilitam a aquisição do seu projeto.",
    icon: "credit-card" as const,
  },
  {
    id: "entrega",
    title: "Entrega ágil",
    text: "Produção e entrega no prazo combinado com você.",
    icon: "truck" as const,
  },
  {
    id: "instalacao",
    title: "Instalação profissional",
    text: "Equipe qualificada para instalação segura e acabamento impecável.",
    icon: "shield-check" as const,
  },
  {
    id: "precos",
    title: "Custo-benefício",
    text: "Soluções sob medida com transparência comercial.",
    icon: "badge-percent" as const,
  },
] as const;

const productDescriptions: Record<string, string> = {
  "persiana-double-vision":
    "Controle de luminosidade com faixas alternadas — ideal para salas e escritórios.",
  "persiana-horizontal":
    "Lâminas horizontais para controle preciso de luz e privacidade.",
  "persiana-painel":
    "Painéis deslizantes para portas de vidro e grandes vãos.",
  "persiana-rolo-translucida":
    "Filtragem suave da luz, mantendo o ambiente claro e agradável.",
  "persiana-rolo-blackout":
    "Bloqueio total de luz para quartos, home theaters e salas de reunião.",
  "persiana-romana":
    "Elegância em tecido com dobras harmoniosas e excelente isolamento.",
  "persiana-vertical":
    "Versátil para janelas amplas e ambientes corporativos.",
  "rede-de-seguranca":
    "Proteção para janelas, sacadas e áreas de risco, sob medida.",
  "tela-mosqueteira":
    "Ventilação natural com barreira contra insetos em portas e janelas.",
  "toldo-vertical":
    "Proteção solar para varandas, fachadas e áreas externas.",
};

export const productCatalog = media.catalog.map((item) => ({
  id: item.slug,
  name: item.name,
  shortLabel: item.name,
  whatsappLabel: item.name,
  description:
    productDescriptions[item.slug] ??
    "Solução sob medida com fabricação e instalação pela equipe Bem Vista.",
  image: item.image,
}));

export const galleryPhotos = media.gallery.map((photo) => ({
  ...photo,
  width: photo.width ?? 1920,
  height: photo.height ?? 1280,
}));

/** Hero: #3 — Persiana Vertical 5 */
export const heroBackground = "/images/hero/site-background.png";

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappMessageOrcamentoGeral() {
  return [
    "Prezados,",
    "",
    "Acessei o site institucional da Bem Vista Persianas e gostaria de solicitar um orçamento.",
    "",
    "Aguardo orientação da equipe comercial.",
    "",
    "Atenciosamente.",
  ].join("\n");
}

export function whatsappMessageProduto(produto: string) {
  return [
    "Prezados,",
    "",
    `Acessei o site institucional da Bem Vista Persianas e desejo informações e orçamento sobre: ${produto}.`,
    "",
    "Aguardo retorno da equipe comercial.",
    "",
    "Atenciosamente.",
  ].join("\n");
}

export function whatsappMessageFormulario(data: {
  nome: string;
  telefone: string;
  produto: string;
  mensagem?: string;
}) {
  return [
    "Prezados,",
    "",
    "Encaminho solicitação de atendimento comercial registrada no site institucional da Bem Vista Persianas.",
    "",
    `Nome: ${data.nome}`,
    `Telefone / WhatsApp: ${data.telefone}`,
    `Produto ou serviço de interesse: ${data.produto}`,
    data.mensagem ? `Observações: ${data.mensagem}` : null,
    "",
    "Aguardo contato da equipe comercial.",
    "",
    "Atenciosamente.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function whatsappMessageCanalComercial() {
  return [
    "Prezados,",
    "",
    "Acessei o site institucional da Bem Vista Persianas e gostaria de falar com a equipe comercial.",
    "",
    "Atenciosamente.",
  ].join("\n");
}
