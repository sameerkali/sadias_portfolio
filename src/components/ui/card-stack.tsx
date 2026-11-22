"use client";
// Aceternity UI: Card Stack (https://ui.aceternity.com/components/card-stack)
// Adapted: prev/next buttons, auto-advance pauses on hover/focus and is off under
// reduced motion, transform-only animation, hidden back cards for screen readers, tokens.
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconQuoteFilled } from "@tabler/icons-react";

type Card = { quote: string; name: string; title: string };

const OFFSET = 14; // px each card behind sits higher
const SCALE = 0.06; // how much smaller each card behind is
const VISIBLE = 3; // cards drawn behind the top one

export const CardStack = ({ items, interval = 5000 }: { items: Card[]; interval?: number }) => {
  const [cards, setCards] = useState(items);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const next = useCallback(() => setCards((c) => [...c.slice(1), c[0]]), []);
  const prev = () => setCards((c) => [c[c.length - 1], ...c.slice(0, -1)]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [paused, reduce, interval, next]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="w-full max-w-xl"
    >
      <div className="relative mt-10 h-72 sm:h-64" aria-roledescription="carousel" aria-label="Testimonials">
        {cards.map((card, index) => (
          <motion.figure
            key={card.name}
            aria-hidden={index !== 0}
            style={{ transformOrigin: "top center" }}
            animate={{
              y: index * -OFFSET,
              scale: 1 - index * SCALE,
              opacity: index <= VISIBLE ? 1 - index * 0.18 : 0,
              zIndex: cards.length - index,
            }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
            className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-surface-raised p-7 shadow-2xl shadow-shadow/30"
          >
            <IconQuoteFilled aria-hidden="true" className="h-8 w-8 text-accent-2" />
            <blockquote className="text-2xl leading-snug text-fg">{card.quote}</blockquote>
            <figcaption className="text-md">
              <span className="block font-semibold text-fg">{card.name}</span>
              <span className="text-fg-muted">{card.title}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        {[
          { label: "Previous testimonial", onClick: prev, Icon: IconArrowLeft },
          { label: "Next testimonial", onClick: next, Icon: IconArrowRight },
        ].map(({ label, onClick, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-fg transition hover:bg-accent-2 hover:text-fg-on-accent active:scale-95"
          >
            <Icon aria-hidden="true" stroke={1.75} className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
};
