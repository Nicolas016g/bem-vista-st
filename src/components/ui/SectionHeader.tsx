"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div ref={ref} className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className={`section-eyebrow ${light ? "border-white/20 bg-white/10 text-white" : ""}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.06, ease }}
        className={`section-title mt-4 ${light ? "text-white" : ""}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12, ease }}
        style={{ originX: align === "center" ? 0.5 : 0 }}
        className={`section-divider ${align === "center" ? "" : "mx-0"}`}
      />
      {subtitle && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.18, ease }}
          className={`section-subtitle ${light ? "text-white/75" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
