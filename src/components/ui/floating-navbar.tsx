"use client";
// Aceternity UI: Floating Navbar (https://ui.aceternity.com/components/floating-navbar)
// Adapted: design tokens, real CTA link, inert while hidden, labels for icon-only mobile links.
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  cta,
  className,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  cta: { label: string; link: string };
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current - (scrollYProgress.getPrevious() ?? 0);
    // Shows when scrolling up, hides when scrolling down or near the top.
    setVisible(current >= 0.05 && direction < 0);
  });

  return (
    <motion.nav
      aria-label="Quick navigation"
      inert={!visible}
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn("fixed inset-x-0 top-6 z-5000 mx-auto flex max-w-fit items-center justify-center", className)}
    >
      <div className="flex items-center gap-1 rounded-pill border border-line bg-surface-raised/80 py-1.5 pr-1.5 pl-2 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.link}
            href={item.link}
            className="flex items-center rounded-pill px-3 py-2 text-md text-fg-muted transition-colors hover:bg-fg/10 hover:text-fg sm:px-4"
          >
            <span className="sm:hidden" aria-hidden="true">
              {item.icon}
            </span>
            <span className="sr-only sm:not-sr-only">{item.name}</span>
          </a>
        ))}
        <a
          href={cta.link}
          className="ml-1 rounded-pill bg-accent px-4 py-2 text-md font-semibold text-fg-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          {cta.label}
        </a>
      </div>
    </motion.nav>
  );
};
