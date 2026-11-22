"use client";
// Cursor follower styled like a camera viewfinder: corner brackets trail the mouse with a
// blinking dot and a running timecode (HH:MM:SS:FF, 25 fps) like an editing monitor.
//   over a reel ([data-cursor="play"]) -> grows and shows "Play"
//   over links / buttons               -> tightens and turns purple
// The real mouse pointer stays visible (hiding it hurts usability). Mouse devices only,
// and not rendered at all for "reduce motion" users.
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(FINE_POINTER);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export function EditorCursor() {
  const reduce = useReducedMotion();
  const fine = useSyncExternalStore(subscribe, () => window.matchMedia(FINE_POINTER).matches, () => false);
  return fine && !reduce ? <Viewfinder /> : null;
}

type Mode = "idle" | "link" | "play";
const SIZE: Record<Mode, number> = { idle: 44, link: 30, play: 92 };
const COLOR: Record<Mode, string> = { idle: "text-fg", link: "text-accent", play: "text-accent-2" };

const pad = (n: number) => String(n).padStart(2, "0");
const timecode = (ms: number) =>
  `${pad(Math.floor(ms / 3_600_000))}:${pad(Math.floor(ms / 60_000) % 60)}:${pad(Math.floor(ms / 1000) % 60)}:${pad(Math.floor(ms / 40) % 25)}`;

// Two short bars per corner make an L-shaped bracket.
const corners = [
  "top-0 left-0",
  "top-0 right-0 rotate-90",
  "right-0 bottom-0 rotate-180",
  "bottom-0 left-0 -rotate-90",
];

function Viewfinder() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
  const [mode, setMode] = useState<Mode>("idle");
  const [visible, setVisible] = useState(false);
  const tcRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // ignore touch on hybrid laptops
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('[data-cursor], a, button, [role="button"]');
      setMode(!el ? "idle" : el.getAttribute("data-cursor") === "play" ? "play" : "link");
    };
    const out = (e: MouseEvent) => !e.relatedTarget && setVisible(false); // left the window
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y]);

  // Writes the timecode straight to the DOM each frame (no React re-render).
  useAnimationFrame((t) => {
    if (tcRef.current) tcRef.current.textContent = timecode(t);
  });

  const size = SIZE[mode];

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn("pointer-events-none fixed top-0 left-0 z-7000 transition-colors duration-300", COLOR[mode])}
    >
      {/* frame, centred on the pointer */}
      <motion.div
        animate={{ width: size, height: size, x: -size / 2, y: -size / 2 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        className="relative"
      >
        {corners.map((pos) => (
          <span key={pos} className={cn("absolute h-3 w-3", pos)}>
            <span className="absolute top-0 left-0 h-0.5 w-3 rounded-full bg-current" />
            <span className="absolute top-0 left-0 h-3 w-0.5 rounded-full bg-current" />
          </span>
        ))}
        {mode === "play" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <IconPlayerPlayFilled className="h-6 w-6" />
          </span>
        )}
      </motion.div>

      {/* label under the frame */}
      <motion.div
        animate={{ y: size / 2 + 8, opacity: mode === "link" ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        className="absolute top-0 left-0 -translate-x-1/2"
      >
        <span className="flex items-center gap-1.5 rounded-pill bg-surface/70 px-2 py-0.5 text-xs font-semibold whitespace-nowrap text-fg tabular-nums backdrop-blur">
          {mode === "play" ? (
            "Play"
          ) : (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
              <span ref={tcRef}>00:00:00:00</span>
            </>
          )}
        </span>
      </motion.div>
    </motion.div>
  );
}
