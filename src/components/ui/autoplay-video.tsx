"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { VideoSources } from "@/components/ui/video-sources";

// Muted looping video with no timeline/controls, just a small play/pause button
// (an autoplaying video must be pausable, WCAG 2.2.2).
// Plays while on screen, pauses off screen, never autoplays under "reduce motion",
// and stays paused once the visitor pauses it.
export function AutoplayVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (!inView) v.pause();
    else if (!reduce && !userPaused.current) v.play().catch(() => {}); // blocked autoplay: poster stays
  }, [inView, reduce]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    userPaused.current = !v.paused;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className={cn("relative h-full w-full", className)}>
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      >
        <VideoSources src={src} />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface/70 text-fg backdrop-blur transition-colors hover:bg-accent hover:text-fg-on-accent md:right-4 md:bottom-4"
      >
        {playing ? (
          <IconPlayerPauseFilled aria-hidden="true" className="h-4 w-4" />
        ) : (
          <IconPlayerPlayFilled aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
