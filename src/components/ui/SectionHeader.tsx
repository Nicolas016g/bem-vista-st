interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span className={`section-eyebrow ${light ? "border-white/20 bg-white/10 text-white" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title mt-4 ${light ? "text-white" : ""}`}>{title}</h2>
      <div className={`section-divider ${align === "center" ? "" : "mx-0"}`} />
      {subtitle && (
        <p className={`section-subtitle ${light ? "text-white/75" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
