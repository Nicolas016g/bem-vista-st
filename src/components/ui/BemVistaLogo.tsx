type BemVistaLogoProps = {
  variant?: "header" | "hero" | "footer" | "about";
  theme?: "brand" | "light";
  className?: string;
};

const scales = {
  header: {
    house: "h-7 w-9 md:h-8 md:w-10",
    bem: "text-xl md:text-2xl",
    vista: "text-xl md:text-2xl -mt-2",
  },
  hero: {
    house: "h-9 w-11 md:h-10 md:w-12",
    bem: "text-3xl md:text-4xl",
    vista: "text-3xl md:text-4xl -mt-2.5",
  },
  footer: {
    house: "h-8 w-10 md:h-9 md:w-11",
    bem: "text-2xl md:text-[1.75rem]",
    vista: "text-2xl md:text-[1.75rem] -mt-2",
  },
  about: {
    house: "h-12 w-14 md:h-14 md:w-16",
    bem: "text-4xl md:text-5xl",
    vista: "text-4xl md:text-5xl -mt-3",
  },
};

function HouseIcon({
  className,
  stroke,
}: {
  className?: string;
  stroke: string;
}) {
  return (
    <svg viewBox="0 0 88 64" fill="none" className={className} aria-hidden>
      <path
        d="M8 30 L44 8 L72 26 V56 H8 Z"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M62 18 H70 V30"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="32" y="34" width="24" height="18" rx="1" stroke={stroke} strokeWidth="2" />
      <path d="M44 34 V52 M32 43 H56" stroke="#6fa3d8" strokeWidth="1.6" />
    </svg>
  );
}

export function BemVistaLogo({
  variant = "header",
  theme = "brand",
  className = "",
}: BemVistaLogoProps) {
  const scale = scales[variant];
  const isLight = theme === "light";
  const ink = isLight ? "#f8f4ef" : "#3d2e24";

  return (
    <div className={`inline-flex flex-col gap-0 ${className}`} aria-label="Bem Vista">
      <HouseIcon className={`${scale.house} -mb-0.5`} stroke={ink} />

      <div className="leading-[0.9]" style={{ color: ink, fontFamily: "var(--font-playfair)" }}>
        <p className={`${scale.bem} font-medium tracking-tight`}>Bem</p>
        <p className={`${scale.vista} font-semibold italic tracking-tight`}>Vista</p>
      </div>

      {variant === "about" && (
        <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          São Carlos — SP
        </p>
      )}
    </div>
  );
}
