"use client";
// Aceternity UI: Infinite Moving Cards (https://ui.aceternity.com/components/infinite-moving-cards)
// Adapted: tokens, clones hidden from screen readers, pauses on hover AND keyboard focus,
// static scrollable row under reduced motion (see globals.css).
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller || scroller.dataset.cloned) return;
    // Duplicate the list once so the loop is seamless.
    Array.from(scroller.children).forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
    });
    scroller.dataset.cloned = "true";
    container.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    container.style.setProperty("--animation-duration", { fast: "20s", normal: "40s", slow: "80s" }[speed]);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-label="Testimonials. Hover or focus to pause."
      className={cn(
        "scroller group relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[320px] max-w-full shrink-0 rounded-2xl border border-line bg-surface-raised px-8 py-6 md:w-[420px]"
          >
            <figure>
              <blockquote className="text-lg leading-relaxed text-fg">“{item.quote}”</blockquote>
              <figcaption className="mt-6 flex flex-col gap-1 text-md">
                <span className="font-semibold text-fg">{item.name}</span>
                <span className="text-fg-muted">{item.title}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};
