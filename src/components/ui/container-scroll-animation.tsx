"use client";
// Aceternity UI: Container Scroll Animation (https://ui.aceternity.com/components/container-scroll-animation)
// Adapted: frameless card, design tokens, flat under reduced motion, matchMedia instead of resize math.
import React, { useRef } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : isMobile ? [0.7, 0.9] : [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -100]);

  return (
    <div className="relative flex h-[50rem] items-center justify-center p-2 md:h-[72rem] md:p-20" ref={containerRef}>
      <div className="relative w-full py-10 md:py-32" style={{ perspective: "1000px" }}>
        <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{ rotateX: rotate, scale }}
          className="mx-auto -mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-surface-muted shadow-2xl shadow-shadow/60"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
