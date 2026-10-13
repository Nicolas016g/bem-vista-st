"use client";

import { Loader2, Lock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { copy, productCatalog, whatsappMessageFormulario, whatsappUrl } from "@/lib/site";

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

export function LeadForm({
  id = "lead-form",
  title = copy.formTitle,
  subtitle = copy.formSubtitle,
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
    const produtoId = String(form.get("produto") ?? "");
    const produto =
      produtoId === "outro"
        ? "Outro assunto comercial"
        : productCatalog.find((p) => p.id === produtoId)?.whatsappLabel ?? "";
    const mensagem = compact ? "" : String(form.get("mensagem") ?? "").trim();

    window.open(
      whatsappUrl(
        whatsappMessageFormulario({
          nome,
          telefone,
          produto,
          mensagem: mensagem || undefined,
        }),
      ),
      "_blank",
      "noopener,noreferrer",
    );
    setLoading(false);
  };

  return (
    <div className={`card-premium relative flex h-full flex-col overflow-hidden ${className}`} id={id}>
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-accent-dark" />
      <div className="border-b border-border/60 bg-gradient-to-r from-secondary/5 to-accent/5 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-primary-dark">{title}</h3>
            <p className="text-xs leading-relaxed text-text-muted">{subtitle}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-4 p-6">
        <div>
          <label htmlFor={`${id}-nome`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
            Nome completo *
          </label>
          <input
            id={`${id}-nome`}
            name="nome"
            required
            type="text"
            placeholder="Informe seu nome"
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
              Selecione uma opção
            </option>
            {productCatalog.map((product) => (
              <option key={product.id} value={product.id}>
                {product.id === "persianas"
                  ? "Persianas (incl. manutenção e higienização)"
                  : product.name}
              </option>
            ))}
            <option value="outro">Outro assunto comercial</option>
          </select>
        </div>
        {!compact && (
          <div>
            <label htmlFor={`${id}-mensagem`} className="mb-1.5 block text-sm font-semibold text-primary-dark">
              Observações
            </label>
            <textarea
              id={`${id}-mensagem`}
              name="mensagem"
              rows={3}
              placeholder="Descreva brevemente sua necessidade (opcional)"
              className="input-field resize-none"
            />
          </div>
        )}
        <button type="submit" disabled={loading} className="btn-whatsapp w-full disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
          {copy.formSubmit}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-text-muted">
          <Lock className="h-3 w-3" />
          Você será direcionado ao WhatsApp comercial com a mensagem preenchida
        </p>
      </form>
    </div>
  );
}
