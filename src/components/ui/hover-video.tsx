"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Muted preview that plays only while `playing` is true (hover / keyboard focus).
// preload="none": nothing downloads until someone actually hovers.
export function HoverVideo({
  src,
  poster,
  playing,
  className,
}: {
  src: string;
  poster: string;
  playing: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.play().catch(() => {}); // autoplay can be blocked; the poster stays visible
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [playing]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
