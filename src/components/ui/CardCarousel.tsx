"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

type CardCarouselProps = {
  children: ReactNode;
  className?: string;
};

export function CardCarousel({ children, className = "" }: CardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-lg transition hover:scale-105 md:-left-5"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-lg transition hover:scale-105 md:-right-5"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`card card-hover w-[min(100%,20rem)] shrink-0 snap-center overflow-hidden sm:w-[22rem] ${className}`}
    >
      {children}
    </div>
  );
}
