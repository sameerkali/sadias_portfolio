"use client";
// Aceternity UI: Expandable Card, grid variant (https://ui.aceternity.com/components/expandable-card)
// Adapted for 9:16 videos: cards are real <button>s, the modal is a labelled dialog,
// focus moves into it and back, the page behind is inert, Escape / outside click / X close it.
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { IconPlayerPlayFilled, IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { HoverVideo } from "@/components/ui/hover-video";
import type { Video } from "@/data/site";

const noop = () => () => {};

export function ExpandableVideoGrid({ items }: { items: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const id = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  // true only in the browser, so the portal never renders during the static build
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  const close = useCallback(() => setActive(null), []);
  useOutsideClick(dialogRef, close);

  useEffect(() => {
    if (!active) return;
    const site = document.getElementById("site");
    site?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      site?.removeAttribute("inert");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [active, close]);

  return (
    <>
      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {active && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-6000 bg-surface/85 backdrop-blur-sm"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {active && (
                <div className="fixed inset-0 z-6001 grid place-items-center p-3 md:p-6">
                  <motion.div
                    ref={dialogRef}
                    layoutId={`card-${active.id}-${id}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`title-${active.id}-${id}`}
                    className="relative flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-y-auto rounded-3xl border border-line bg-surface-raised md:flex-row md:overflow-hidden"
                  >
                    <motion.div
                      layoutId={`media-${active.id}-${id}`}
                      className="mx-auto aspect-[9/16] h-[64dvh] shrink-0 overflow-hidden bg-surface md:h-[86dvh]"
                    >
                      <video
                        src={active.src}
                        poster={active.poster}
                        controls
                        autoPlay
                        playsInline
                        className="h-full w-full object-contain"
                      />
                    </motion.div>

                    <div className="flex flex-col gap-5 p-6 md:overflow-y-auto md:p-8">
                      <p className="text-md font-semibold text-accent">{active.category}</p>
                      <motion.h3
                        layoutId={`title-${active.id}-${id}`}
                        id={`title-${active.id}-${id}`}
                        className="text-3xl font-semibold tracking-tight"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xl leading-relaxed text-fg-muted"
                      >
                        {active.description}
                      </motion.p>
                      <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 text-md">
                        <div>
                          <dt className="text-fg-muted">Length</dt>
                          <dd className="mt-1 text-lg">{active.duration}</dd>
                        </div>
                        <div>
                          <dt className="text-fg-muted">Made for</dt>
                          <dd className="mt-1 text-lg">{active.platform}</dd>
                        </div>
                        <div className="col-span-2">
                          <dt className="text-fg-muted">Edited in</dt>
                          <dd className="mt-1 text-lg">{active.tools}</dd>
                        </div>
                      </dl>
                    </div>

                    <button
                      ref={closeRef}
                      type="button"
                      onClick={close}
                      aria-label="Close video"
                      className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 text-fg backdrop-blur transition-colors hover:bg-accent hover:text-fg-on-accent"
                    >
                      <IconX aria-hidden="true" stroke={2} className="h-5 w-5" />
                    </button>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>,
          document.body,
        )}

      {/* Mobile: swipeable row. Desktop: 5 columns with a staggered rhythm. */}
      <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
        {items.map((item) => (
          <li key={item.id} className="w-[68vw] max-w-[280px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:even:mt-20">
            <motion.button
              type="button"
              layoutId={`card-${item.id}-${id}`}
              aria-haspopup="dialog"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(item);
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(item.id)}
              onBlur={() => setHovered(null)}
              className="group block w-full cursor-pointer rounded-2xl text-left"
            >
              <motion.div
                layoutId={`media-${item.id}-${id}`}
                className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line bg-surface-raised transition-[border-color] group-hover:border-accent"
              >
                <HoverVideo src={item.src} poster={item.poster} playing={hovered === item.id} />
                <span
                  aria-hidden="true"
                  className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-fg-on-accent opacity-90 transition-transform duration-[var(--duration-slower)] group-hover:scale-110"
                >
                  <IconPlayerPlayFilled className="h-4 w-4" />
                </span>
              </motion.div>
              <span className="mt-3 block">
                <motion.span layoutId={`title-${item.id}-${id}`} className="block text-2xl font-semibold">
                  {item.title}
                </motion.span>
                <span className="mt-1 block text-md text-fg-muted">
                  {item.category}, {item.duration}
                </span>
              </span>
            </motion.button>
          </li>
        ))}
      </ul>
    </>
  );
}
