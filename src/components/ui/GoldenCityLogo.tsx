import Image from "next/image";

type GoldenCityLogoProps = {
  variant?: "header" | "hero" | "footer";
  className?: string;
};

const logoConfig = {
  header: {
    src: "/images/logos/gc-menu.svg",
    width: 220,
    height: 63,
    alt: "Golden City Incorporação e Construção",
  },
  hero: {
    src: "/images/logos/gc-total-white.svg",
    width: 300,
    height: 118,
    alt: "Golden City",
  },
  footer: {
    src: "/images/logos/gc-footer-white.svg",
    width: 350,
    height: 100,
    alt: "Golden City",
  },
} as const;

export function GoldenCityLogo({ variant = "header", className = "" }: GoldenCityLogoProps) {
  const logo = logoConfig[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`h-auto w-auto ${className}`}
      priority={variant === "hero" || variant === "header"}
    />
  );
}
