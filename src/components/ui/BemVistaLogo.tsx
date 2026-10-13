import Image from "next/image";
import { brandAssets } from "@/lib/site";

type BemVistaLogoProps = {
  variant?: "header" | "hero" | "footer" | "about";
  theme?: "brand" | "light";
  className?: string;
};

const heights = {
  header: { h: 52, w: 168 },
  hero: { h: 64, w: 210 },
  footer: { h: 56, w: 188 },
  about: { h: 84, w: 260 },
};

export function BemVistaLogo({
  variant = "header",
  theme = "brand",
  className = "",
}: BemVistaLogoProps) {
  const { h, w } = heights[variant];
  const isLight = theme === "light";

  return (
    <div className={`inline-flex flex-col items-start gap-1 ${className}`} aria-label="Bem Vista Persianas">
      <Image
        src={variant === "about" ? brandAssets.logoLockup : brandAssets.logoFull}
        alt="Bem Vista Persianas"
        width={w}
        height={h}
        className={`h-auto w-auto object-contain object-left ${isLight ? "brightness-0 invert" : ""}`}
        style={{ maxHeight: h, width: "auto", maxWidth: w }}
        priority={variant === "header"}
        quality={95}
      />
      {variant === "about" && (
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
          São Carlos — SP
        </p>
      )}
    </div>
  );
}
