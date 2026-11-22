"use client";
// Small scroll-animation helpers used across the sections.
// All respect "reduce motion" (MotionConfig in motion-provider.tsx turns movement into a plain fade).
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Heading whose words blur in one by one when it scrolls into view. */
export function RevealText({ text, id, className }: { text: string; id?: string; className?: string }) {
  return (
    <motion.h2
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {text.split(" ").map((word, i) => (
        <span key={i}>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
            }}
          >
            {word}
          </motion.span>{" "}
        </span>
      ))}
    </motion.h2>
  );
}

const tags = { div: motion.div, li: motion.li, p: motion.p };

/** Fades and rises its content into place when scrolled into view. */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: keyof typeof tags;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** Moves its content slightly slower than the page scroll (depth effect). */
export function Parallax({ offset = 50, className, children }: { offset?: number; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Thin gradient bar at the top of the window showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-5000 h-1 origin-left bg-linear-to-r from-accent to-accent-2"
    />
  );
}
