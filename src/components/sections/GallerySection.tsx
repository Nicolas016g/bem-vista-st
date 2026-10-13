"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryPhotos } from "@/lib/site";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const photos = galleryPhotos;

export function GallerySection() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const current = photos[active];

  const prev = useCallback(
    () => setActive((i) => (i - 1 + photos.length) % photos.length),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % photos.length),
    [],
  );

  const openLightbox = (index?: number) => {
    if (index !== undefined) setActive(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, prev, next]);

  if (!photos.length) return null;

  return (
    <section id="galeria" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Galeria"
            title="Projetos instalados"
            subtitle="Confira ambientes reais atendidos pela equipe Bem Vista em São Carlos e região."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="relative mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_40px_rgba(30,95,116,0.1)]">
            <button
              type="button"
              onClick={() => openLightbox()}
              className="group relative block h-64 w-full cursor-zoom-in md:h-[32rem]"
              aria-label={`Ampliar: ${current.label}`}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain object-center bg-surface"
                sizes="(max-width: 768px) 100vw, 1280px"
                unoptimized
                priority={active === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/80 to-transparent px-6 py-5">
                <p className="text-lg font-bold text-white">{current.label}</p>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-lg opacity-0 transition group-hover:opacity-100">
                <ZoomIn className="h-3.5 w-3.5" />
                Ampliar
              </div>
            </button>

            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105"
              aria-label="Próxima"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-6 sm:overflow-visible">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(i)}
                onDoubleClick={() => openLightbox(i)}
                className={`relative aspect-[4/3] min-w-[4.5rem] shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:min-w-0 ${
                  i === active ? "border-primary ring-2 ring-primary/20" : "border-border opacity-70 hover:opacity-100"
                }`}
                aria-label={photo.label}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover bg-surface"
                  sizes="120px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
            aria-label="Próxima"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative flex h-full w-full max-h-[90vh] max-w-6xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full max-w-6xl">
              <Image
                key={`lightbox-${current.src}`}
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-white/90">{current.label}</p>
            <p className="mt-1 text-center text-xs text-white/50">
              Use as setas do teclado ou clique fora para fechar
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
