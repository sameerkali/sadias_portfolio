"use client";
// Aceternity UI: Timeline (https://ui.aceternity.com/components/timeline)
// Adapted: heading via props, accent-colored progress line, re-measures on resize, semantic list.
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  title,
  description,
  data,
}: {
  title: string;
  description: string;
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLOListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <RevealText text={title} className="text-display font-semibold tracking-tight" />
        <Reveal as="p" delay={0.15} className="mt-4 max-w-xl text-2xl text-fg-muted">
          {description}
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <ol ref={ref}>
        {data.map((item) => (
          <li key={item.title} className="flex justify-start pt-10 md:gap-10 md:pt-32">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                <div className="h-4 w-4 rounded-full bg-fg-subtle" />
              </div>
              <h3 className="hidden text-4xl font-bold text-fg-muted md:block md:pl-20">{item.title}</h3>
            </div>

            <div className="relative w-full pr-6 pl-20 md:pl-4">
              <h3 className="mb-4 block text-left text-3xl font-bold text-fg-muted md:hidden">{item.title}</h3>
              <Reveal>{item.content}</Reveal>
            </div>
          </li>
        ))}
        </ol>
        <div
          aria-hidden="true"
          style={{ height: height + "px" }}
          className="absolute top-0 left-14 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-fg/15 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-accent-2 from-0% via-accent via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
