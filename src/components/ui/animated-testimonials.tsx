"use client";
// Aceternity UI: Animated Testimonials (https://ui.aceternity.com/components/animated-testimonials)
// Adapted: gradient monogram tiles when there's no photo, fixed tilt angles (no random = no
// hydration mismatch), autoplay pauses on hover/focus and is off under reduced motion,
// jump-to buttons, labelled controls, tokens.
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconQuoteFilled } from "@tabler/icons-react";
import type { Testimonial } from "@/data/site";
import { cn } from "@/lib/utils";

const TILT = [-8, 6, -4, 9, -6, 4]; // resting angle of the cards behind
const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

export const AnimatedTestimonials = ({ items, interval = 6000 }: { items: Testimonial[]; interval?: number }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const next = useCallback(() => setActive((a) => (a + 1) % items.length), [items.length]);
  const prev = () => setActive((a) => (a - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [paused, reduce, interval, next, active]); // `active` resets the timer after a manual click

  const current = items[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="grid grid-cols-1 items-center gap-14 md:grid-cols-[5fr_7fr] md:gap-20"
    >
      {/* Card pile: photo if provided, otherwise a gradient tile with initials */}
      <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-sm [perspective:1000px]">
        {items.map((t, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={t.name}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.55,
                scale: isActive ? 1 : 0.92,
                rotate: isActive ? 0 : TILT[i % TILT.length],
                zIndex: isActive ? 40 : items.length - i,
                y: isActive ? [0, -60, 0] : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 origin-bottom overflow-hidden rounded-3xl shadow-2xl shadow-shadow/40"
            >
              {t.photo ? (
                <Image src={t.photo} alt="" fill sizes="384px" className="object-cover" />
              ) : (
                <div
                  className="relative flex h-full w-full items-center justify-center text-fg-on-accent"
                  style={{
                    backgroundImage: `linear-gradient(${135 + i * 45}deg, var(--color-accent), var(--color-accent-2))`,
                  }}
                >
                  <IconQuoteFilled className="absolute top-6 left-6 h-12 w-12 opacity-30" />
                  <span className="text-9xl font-bold tracking-tighter opacity-90">{initials(t.name)}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Quote (words blur in) + controls */}
      <div>
        <figure key={active} aria-live={paused ? "polite" : "off"}>
          <blockquote className="text-3xl leading-snug font-medium text-fg">
            {current.quote.split(" ").map((word, i) => (
              <span key={i}>
                <motion.span
                  initial={{ filter: "blur(10px)", opacity: 0, y: 6 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut", delay: 0.025 * i }}
                  className="inline-block"
                >
                  {word}
                </motion.span>{" "}
              </span>
            ))}
          </blockquote>
          <motion.figcaption
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8"
          >
            <span className="block text-2xl font-semibold text-fg">{current.name}</span>
            <span className="text-lg text-fg-muted">{current.title}</span>
          </motion.figcaption>
        </figure>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex gap-3">
            {[
              { label: "Previous testimonial", onClick: prev, Icon: IconArrowLeft, hover: "group-hover/btn:-translate-x-0.5" },
              { label: "Next testimonial", onClick: next, Icon: IconArrowRight, hover: "group-hover/btn:translate-x-0.5" },
            ].map(({ label, onClick, Icon, hover }) => (
              <button
                key={label}
                type="button"
                onClick={onClick}
                aria-label={label}
                className="group/btn flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-fg transition hover:bg-accent-2 hover:text-fg-on-accent active:scale-95"
              >
                <Icon aria-hidden="true" stroke={1.75} className={cn("h-5 w-5 transition-transform", hover)} />
              </button>
            ))}
          </div>
          {/* Jump to a testimonial. The active one stretches into a gradient pill. */}
          <div className="flex items-center gap-2">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                aria-current={i === active}
                className="flex h-6 items-center"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-500",
                    i === active ? "w-8 bg-linear-to-r from-accent to-accent-2" : "w-2 bg-fg-subtle hover:bg-fg-muted",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
