/**
 * Assinatura "Desenvolvido com amor por Alabarda": padrão de todos os sites da Alabarda.
 *
 * Arquivo autocontido (a logo vai embutida em base64): para reutilizar em outro cliente,
 * basta copiar este arquivo e renderizar <AlabardaFooter /> no rodapé.
 *
 * A logo aparece com um gradiente roxo → azul em movimento, que funciona em fundo claro ou escuro.
 */

type Props = {
  className?: string;
};

export function AlabardaFooter({ className = "" }: Props) {
  return (
    <p className={`inline-flex items-center gap-2 text-sm whitespace-nowrap ${className}`}>
      Desenvolvido com amor por
      <a
        href="https://alabarda.com.br"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Alabarda"
        className="relative inline-block h-11"
        style={{ aspectRatio: "240 / 102" }}
      >
        {/* A logo vira máscara sobre um gradiente roxo → azul que fica correndo. */}
        <span aria-hidden className="alabarda-gradient absolute inset-0" style={logoMask} />
      </a>
      <style href="alabarda-footer" precedence="default">{`
        .alabarda-gradient {
          background-image: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
          background-size: 200% 100%;
          animation: alabarda-flow 4s linear infinite;
        }
        @keyframes alabarda-flow {
          to { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .alabarda-gradient { animation: none; }
        }
      `}</style>
    </p>
  );
}

// Logo da Alabarda (branca, fundo transparente), 240×102, usada como máscara.
const ALABARDA_LOGO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABmCAMAAADCtOz+AAADAFBMVEVMaXH////////////+/v7////////////////////////////////////////////+/v7////////+/v7+/v7////////////////////////////+/v7////+/v7////////////////////+/v7////////////////+/v7+/v7+/v7////////////////////////////////+/v7////////////////////////////////////////+/v7////////////////////////////+/v7////////////////+/v7////////////////////////////////////////////////////////////////////////+/v7////////////////////////////////////////////+/v7////////////////////////////////////+/v7////////////////////////////////////////////////////////////////////////////////+/v7////////////////////////////////+/v7////////////////////+/v7+/v7////+/v7////////////////////////////////////////////////////////+/v7////////////////////////////////////////////////////////////////////////////////////+/v7////////////////////////////+/v7////////////////////////////////////////////////////////////////+/v7////////////////+/v7////+/v7////////////////////////////////+/v7////////////////////+/v7////////////////+/v7////////////////////////+/v7///////////+6rPauAAAA/3RSTlMA/fsF/P4EAQMC+j0M+TYGtvXecQcz+Hk7Cwn3exgOFQ8maQjl8DTjFO/tP0QbPPIqI8ESyizCIDkh8QoyECXu8+stj4wWofZQvOqycNAv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";

const logoMask = {
  WebkitMaskImage: `url(${ALABARDA_LOGO})`,
  maskImage: `url(${ALABARDA_LOGO})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
} as const;
