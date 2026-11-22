"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { AutoplayVideo } from "@/components/ui/autoplay-video";
import type { Video } from "@/data/site";

// Three fanned phone-shaped reels. The middle one autoplays muted with a pause button.
export function HeroReels({ center, left, right }: { center: Video; left: Video; right: Video }) {
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
        // Fades in on purpose: if the poster were visible at first paint it would become the
        // "largest paint" and wait on the image download (much worse mobile Lighthouse score).
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...spring, delay: 0.1 }}
        className="relative z-10 mx-auto aspect-[9/16] w-[250px] overflow-hidden rounded-[30px] bg-surface-raised shadow-2xl shadow-shadow/60 sm:w-[290px]"
      >
        <AutoplayVideo src={center.preview ?? center.src} poster={center.poster} label={`${center.title} preview`} />
      </motion.div>
    </div>
  );
}
