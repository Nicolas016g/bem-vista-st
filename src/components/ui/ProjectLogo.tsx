import Image from "next/image";

type ProjectLogoProps = {
  variant?: "hero" | "footer";
  className?: string;
};

export function ProjectLogo({ variant = "hero", className = "" }: ProjectLogoProps) {
  const isHero = variant === "hero";

  return (
    <Image
      src="/images/logos/parque-vista-barbara-logo.jpg"
      alt="Residencial Parque Vista Bárbara"
      width={isHero ? 420 : 320}
      height={isHero ? 330 : 251}
      className={`h-auto w-auto max-w-full ${isHero ? "max-w-[min(100%,420px)]" : "max-w-[280px]"} ${className}`}
      priority={isHero}
    />
  );
}
