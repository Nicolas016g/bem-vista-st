"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { copy, whatsappMessageOrcamentoGeral, whatsappUrl } from "@/lib/site";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-secondary/10 bg-white/95 p-3 shadow-lg backdrop-blur-md md:p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="hidden text-sm font-semibold text-primary-dark sm:block">{copy.stickyBar}</p>
        <a
          href={whatsappUrl(whatsappMessageOrcamentoGeral())}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 text-sm sm:flex-none"
        >
          <MessageCircle className="h-4 w-4" />
          {copy.ctaOrcamento}
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-lg p-2 text-text-muted hover:bg-surface"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
