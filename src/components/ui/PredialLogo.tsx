import Image from "next/image";

type PredialLogoProps = {
  variant?: "header" | "hero" | "footer";
  className?: string;
};

const sizes = {
  header: { width: 180, height: 78, maxW: "max-w-[180px]" },
  hero: { width: 220, height: 96, maxW: "max-w-[220px]" },
  footer: { width: 200, height: 87, maxW: "max-w-[200px]" },
} as const;

export function PredialLogo({ variant = "header", className = "" }: PredialLogoProps) {
  const size = sizes[variant];

  return (
    <Image
      src="/images/logos/predial.png"
      alt="Predial Novo Mundo"
      width={size.width}
      height={size.height}
      className={`h-auto w-auto ${size.maxW} ${className}`}
      priority={variant === "header" || variant === "hero"}
    />
  );
}
