import Image from "next/image";

type CaribeLogoProps = {
  className?: string;
};

export function CaribeLogo({ className = "" }: CaribeLogoProps) {
  return (
    <Image
      src="/images/empreendimento-caribe.webp"
      alt="Residencial Caribe"
      width={480}
      height={270}
      className={`h-auto w-full max-w-[min(100%,420px)] ${className}`}
      priority
    />
  );
}
