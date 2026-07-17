"use client";

import { Loader2, Lock, MessageCircle, Blinds } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

const productOptions = [
  { value: "persianas", label: "Persianas" },
  { value: "toldos", label: "Toldos" },
  { value: "rede", label: "Rede de proteção" },
  { value: "mosquiteira", label: "Tela mosquiteira" },
  { value: "manutencao", label: "Manutenção / higienização" },
  { value: "outro", label: "Outro assunto" },
] as const;

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

export function LeadForm({
  id = "lead-form",
  title = "Solicite seu orçamento",
  subtitle = "Preencha e fale direto com nossa equipe pelo WhatsApp.",
  compact = false,
  className = "",
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const nome = String(form.get("nome") ?? "");
    const telefone = String(form.get("telefone") ?? "");
    const produto = productOptions.find((p) => p.value === form.get("produto"))?.label ?? "";
    const mensagem = compact ? "" : String(form.get("mensagem") ?? "").trim();

    const text = [
      "Olá! Vim pelo site da Bem Vista e gostaria de um orçamento.",
      "",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Produto de interesse: ${produto}`,
      mensagem ? `Mensagem: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setLoading(false);
  };

  return (
    <div className={`card-premium relative flex h-full flex-col overflow-hidden ${className}`} id={id}>
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Blinds className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-primary-dark">{title}</h3>
            <p className="text-xs text-text-muted">{subtitle}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-4 p-6">
        <div>
          <label htmlFor={`${id}-nome`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
            Nome *
          </label>
          <input
            id={`${id}-nome`}
            name="nome"
            required
            type="text"
            placeholder="Seu nome"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-telefone`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
            Telefone / WhatsApp *
          </label>
          <input
            id={`${id}-telefone`}
            name="telefone"
            required
            type="tel"
            placeholder="(16) 99999-9999"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-produto`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
            Produto de interesse *
          </label>
          <select id={`${id}-produto`} name="produto" required className="input-field" defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div>
            <label htmlFor={`${id}-mensagem`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
              Mensagem
            </label>
            <textarea
              id={`${id}-mensagem`}
              name="mensagem"
              rows={3}
              placeholder="Conte o que você precisa..."
              className="input-field resize-none"
            />
          </div>
        )}
        <button type="submit" disabled={loading} className="btn-whatsapp w-full disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
          Quero um orçamento
        </button>
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-text-muted">
          <Lock className="h-3 w-3" />
          Dados protegidos
        </p>
      </form>
    </div>
  );
}
