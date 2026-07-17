"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { BemVistaLogo } from "../ui/BemVistaLogo";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="shrink-0 items-start">
          <BemVistaLogo variant="header" theme={scrolled ? "brand" : "light"} className="items-start text-left" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-text-muted hover:bg-primary/5 hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={whatsappUrl("Olá! Gostaria de solicitar um orçamento com a Bem Vista.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
              scrolled ? "btn-whatsapp !py-2.5" : "bg-[#25D366] text-white hover:bg-[#20bd5a]"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Quero um orçamento
          </a>
        </div>

        <button
          className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-semibold text-primary-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl("Olá! Gostaria de solicitar um orçamento com a Bem Vista.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-3 w-full text-center"
            onClick={() => setOpen(false)}
          >
            Quero um orçamento
          </a>
        </div>
      )}
    </header>
  );
}
