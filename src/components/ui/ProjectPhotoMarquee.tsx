"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useCallback, useState } from "react";
import Image from "next/image";
import { galleryPhotos } from "@/lib/site";

const SLIDE_WIDTH = 320;
const DURATION_S = 45;

export function ProjectPhotoMarquee() {
  const [paused, setPaused] = useState(false);
  const slides = [...galleryPhotos, ...galleryPhotos];

  const togglePause = useCallback(() => {
    setPaused((p) => !p);
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePause();
      }
    },
    [togglePause],
  );

  return (
    <div
      className="card w-full max-w-md overflow-hidden p-0"
      aria-label="Projetos realizados pela Bem Vista"
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={paused}
        aria-label={
          paused
            ? "Carrossel pausado. Pressione para continuar."
            : "Carrossel em movimento. Pressione para pausar."
        }
        onClick={togglePause}
        onKeyDown={onKeyDown}
        className="relative h-[22rem] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 md:h-[26rem]"
      >
        <span
          className="absolute left-3 top-3 z-20 rounded-full bg-primary-dark/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md backdrop-blur-sm"
        >
          {paused ? "Aperte para continuar" : "Aperte para pausar"}
        </span>

        <div
          className={`project-marquee-track flex h-full w-max ${paused ? "is-paused" : ""}`}
          style={{ "--marquee-duration": `${DURATION_S}s` } as CSSProperties}
        >
          {slides.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="relative h-full shrink-0 overflow-hidden"
              style={{ width: SLIDE_WIDTH }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes={`${SLIDE_WIDTH}px`}
                unoptimized
                priority={i < 2}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent px-4 pb-4 pt-10">
                <p className="text-sm font-semibold leading-snug text-white">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/90 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/90 to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}
