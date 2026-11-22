import { ImageResponse } from "next/og";
import { hero, site } from "@/data/site";

// Link-preview image (WhatsApp, Instagram DMs, X, LinkedIn...), rendered once at build time
// to out/og.png (a real .png file, so every host serves it with the right type).
// Text comes from site.ts, so it updates when you change your name or tagline.
// Brand colors are written out because this image can't read theme.css.
// To use your own image instead: delete this folder and put your 1200x630 image at public/og.png.
export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

const PURPLE = "#be85f9";
const CYAN = "#00e5ff";
const BG = "#0b0614";

const clips = [150, 90, 210, 120, 170, 100, 190];
const bars = Array.from({ length: 70 }, (_, i) => Math.round(14 + 46 * Math.abs(Math.sin(i * 0.61) * Math.cos(i * 0.17))));

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 56px",
          color: "#f3f0f9",
          backgroundColor: BG,
          backgroundImage: `radial-gradient(circle at 0% 0%, ${PURPLE}55, transparent 45%), radial-gradient(circle at 100% 100%, ${CYAN}40, transparent 45%)`,
        }}
      >
        {/* top row: role + REC timecode */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: CYAN, textTransform: "uppercase" }}>{site.role}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#bab3cb" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: CYAN }} />
            REC 00:00:12:08
          </div>
        </div>

        {/* name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
            <span style={{ color: PURPLE }}>.</span>
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#bab3cb" }}>
            {`${hero.flipWords.join(", ")} ${hero.headlineRest}`}
          </div>
        </div>

        {/* editing timeline with playhead */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {clips.map((w, i) => (
              <div
                key={i}
                style={{ width: w, height: 44, borderRadius: 10, backgroundImage: `linear-gradient(90deg, ${PURPLE}, ${CYAN})` }}
              />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, height: 60 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ width: 8, height: h, borderRadius: 4, backgroundColor: `${CYAN}b3` }} />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 560,
              top: -16,
              bottom: -8,
              width: 4,
              backgroundColor: CYAN,
              boxShadow: `0 0 24px ${CYAN}`,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
