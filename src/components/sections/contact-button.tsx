"use client";
import { motion } from "motion/react";
import { IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { ctaLabel, hireUrl } from "@/data/site";

// Floating contact button, always bottom-right. Opens a WhatsApp chat in a new tab.
// Pops in, gradient drifts, a light sweep crosses it and a soft halo pulses.
// All looping effects use `motion-safe:` so they stop for "reduce motion" users.
export function ContactButton() {
  return (
    <motion.a
      href={hireUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1 }}
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed right-4 bottom-4 z-50 rounded-pill md:right-8 md:bottom-8"
    >
      {/* pulsing halo */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-pill bg-linear-to-r from-accent to-accent-2 opacity-60 blur-lg motion-safe:animate-halo"
      />
      <span className="relative flex items-center gap-2 overflow-hidden rounded-pill bg-linear-to-r from-accent via-accent-2 to-accent bg-[length:200%_100%] py-3.5 pr-5 pl-4 text-xl font-semibold text-fg-on-accent shadow-xl shadow-shadow/40 motion-safe:animate-gradient-drift">
        {/* light sweep: a white highlight in both themes, so it's not a theme color */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent motion-safe:animate-shine"
        />
        <IconBrandWhatsapp
          aria-hidden="true"
          stroke={1.75}
          className="relative h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
        />
        <span className="relative">{ctaLabel}</span>
        <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
        <IconArrowUpRight
          aria-hidden="true"
          stroke={2.25}
          className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </motion.a>
  );
}
