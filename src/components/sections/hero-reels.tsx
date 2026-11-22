"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import type { Video } from "@/data/site";

// Three fanned phone-shaped reels. The middle one autoplays (muted) unless the
// visitor prefers reduced motion, and always has a pause button (WCAG 2.2.2).
export function HeroReels({ center, left, right }: { center: Video; left: Video; right: Video }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!reduce) ref.current?.play().catch(() => {});
  }, [reduce]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const spring = { type: "spring", stiffness: 90, damping: 18 } as const;

  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[480px] sm:h-[540px]">
      {[
        { v: left, side: "left-0", rotate: -9 },
        { v: right, side: "right-0", rotate: 9 },
      ].map(({ v, side, rotate }, i) => (
        <motion.div
          key={v.id}
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 0.6, y: 0, rotate }}
          transition={{ ...spring, delay: 0.25 + i * 0.1 }}
          className={`absolute top-14 ${side} hidden aspect-[9/16] w-[190px] overflow-hidden rounded-[24px] sm:block`}
        >
          <Image src={v.poster} alt="" fill sizes="190px" className="object-cover" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...spring, delay: 0.1 }}
        className="relative z-10 mx-auto aspect-[9/16] w-[250px] overflow-hidden rounded-[30px] bg-surface-raised shadow-2xl shadow-shadow/60 sm:w-[290px]"
      >
        <video
          ref={ref}
          src={center.src}
          poster={center.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${center.title} preview`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause preview" : "Play preview"}
          className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface/70 text-fg backdrop-blur transition-colors hover:bg-accent hover:text-fg-on-accent"
        >
          {playing ? (
            <IconPlayerPauseFilled aria-hidden="true" className="h-4 w-4" />
          ) : (
            <IconPlayerPlayFilled aria-hidden="true" className="h-4 w-4" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
