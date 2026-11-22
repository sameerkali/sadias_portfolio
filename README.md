# Sadia's portfolio

Portfolio for a short-form video editor (Reels, YouTube Shorts, TikTok).
Next.js 16, Tailwind CSS v4, Motion, and components from [Aceternity UI](https://ui.aceternity.com/components).
**100% static**: no server and no API calls. `npm run build` outputs plain files to `out/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (upload this folder anywhere)
```

## Where things are

```text
src/
  data/site.ts            ← ALL text, links, numbers and video list. Edit this first.
  app/
    page.tsx              ← page order: which sections show, top to bottom
    layout.tsx            ← font, page title / SEO
    globals.css           ← design tokens (colors, font sizes, radius, durations)
  components/
    sections/             ← one file per page section (hero, work, services, ...)
    ui/                   ← reusable pieces, mostly Aceternity components (adapted)
public/
  videos/                 ← the 6 portfolio videos (.mp4) + their poster frames (.jpg)
TODO.md                   ← list of dummy content and images still to add
SKILL.md                  ← the design system this site follows
```

## Sections and the Aceternity component behind each

| Section | Component |
| --- | --- |
| Top nav that reappears on scroll up | Floating Navbar |
| Hero background and rotating word | Spotlight New, Flip Words |
| Featured horizontal clip | Container Scroll Animation |
| Work grid and video popup | Expandable Card |
| Services | Bento Grid |
| Process | Timeline |
| Testimonials | Infinite Moving Cards |
| Contact background | Background Beams |

## Adding a video

1. Compress it (keeps the site fast):

   ```bash
   ffmpeg -i input.mp4 -vf "scale='if(gt(iw,ih),1280,720)':-2" -c:v libx264 -preset slow -crf 27 \
     -maxrate 2500k -bufsize 5000k -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/my-reel.mp4
   ffmpeg -ss 2 -i public/videos/my-reel.mp4 -frames:v 1 -q:v 4 public/videos/my-reel.jpg
   ```

2. Add an entry to the `work` list in `src/data/site.ts` (copy an existing one).

The work grid is laid out for 5 reels on desktop. With more, they wrap to a new row.

## Design rules (from SKILL.md)

- Colors, sizes and radii come from tokens in `globals.css` (`bg-surface`, `text-fg`, `text-accent`, `rounded-pill`...). Don't use raw hex in components.
- Dark theme only, yellow accent, TASA Orbiter font.
- Every interactive element has a visible yellow focus ring. All animations respect the OS "reduce motion" setting.
- One label per action: the contact button is always "Hire me" (`ctaLabel` in `site.ts`).
