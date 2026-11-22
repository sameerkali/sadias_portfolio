// Decorative footer, no text: a video-editing timeline that keeps playing.
// Clip tracks and an audio waveform slide under a glowing playhead.
// Pure CSS animation (keyframes in globals.css), frozen for "reduce motion" users.

const SPEED = 50; // px per second, shared by every track so they move together like a real timeline
const GAP = 8; // px between clips

const videoClips = [210, 130, 290, 100, 240, 160, 320, 120, 200, 260];
const overlayClips = [
  { w: 150, tint: "accent" },
  { w: 90, tint: "raised" },
  { w: 260, tint: "accent-2" },
  { w: 180, tint: "raised" },
  { w: 120, tint: "accent" },
  { w: 300, tint: "raised" },
  { w: 140, tint: "accent-2" },
  { w: 230, tint: "raised" },
];
// Fixed (not random) bar heights so the static build and the browser match.
const waveBars = Array.from({ length: 160 }, (_, i) => Math.round(22 + 70 * Math.abs(Math.sin(i * 0.61) * Math.cos(i * 0.17))));

const tintClass: Record<string, string> = {
  accent: "bg-accent/35",
  "accent-2": "bg-accent-2/30",
  raised: "bg-surface-raised",
};

// Renders its row twice so sliding by -50% loops with no visible seam.
function Track({ width, className, children }: { width: number; className?: string; children: React.ReactNode }) {
  return (
    <div
      className="flex w-max motion-safe:animate-track"
      style={{ "--track-duration": `${width / SPEED}s` } as React.CSSProperties}
    >
      {[0, 1].map((copy) => (
        <div key={copy} className={`flex shrink-0 ${className ?? ""}`} style={{ gap: GAP, paddingRight: GAP }}>
          {children}
        </div>
      ))}
    </div>
  );
}

const total = (widths: number[]) => widths.reduce((a, w) => a + w + GAP, 0);

export function Footer() {
  return (
    <footer
      aria-hidden="true"
      className="gradient-footer relative overflow-hidden bg-surface-muted py-12 mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex flex-col gap-3">
        {/* time ruler */}
        <div className="h-3 motion-safe:animate-ruler bg-[repeating-linear-gradient(90deg,var(--color-fg-subtle)_0_1px,transparent_1px_10px)] opacity-60" />

        {/* main video track: film-frame clips */}
        <Track width={total(videoClips)}>
          {videoClips.map((w, i) => (
            <div
              key={i}
              style={{ width: w }}
              className="relative h-14 overflow-hidden rounded-lg bg-linear-to-r from-accent to-accent-2"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_30px,color-mix(in_oklch,var(--color-surface)_30%,transparent)_30px_32px)]" />
              <div className="absolute inset-y-0 left-0 w-1.5 bg-surface/40" />
            </div>
          ))}
        </Track>

        {/* overlay / text track */}
        <Track width={total(overlayClips.map((c) => c.w))}>
          {overlayClips.map((c, i) => (
            <div key={i} style={{ width: c.w }} className={`relative h-8 overflow-hidden rounded-md ${tintClass[c.tint]}`}>
              <div className="absolute inset-y-0 left-0 w-1 bg-accent-2" />
            </div>
          ))}
        </Track>

        {/* audio track: bouncing waveform */}
        <Track width={total(waveBars.map(() => 4))} className="h-14 items-center">
          {waveBars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%`, animationDelay: `${-(i % 24) * 0.08}s` }}
              className="block w-1 shrink-0 origin-center rounded-full bg-accent-2/70 motion-safe:animate-eq"
            />
          ))}
        </Track>
      </div>

      {/* playhead */}
      <div className="pointer-events-none absolute inset-y-8 left-1/2 w-0.5 -translate-x-1/2 bg-accent-2 shadow-[0_0_18px_2px_var(--color-accent-2)]">
        <span className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-sm bg-accent-2" />
      </div>
    </footer>
  );
}
