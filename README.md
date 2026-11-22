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
    theme.css             ← COLOR SCHEME (dark + light). Change colors here, the whole site follows.
    globals.css           ← other design tokens (font sizes, radius, durations)
    icon.svg, apple-icon.png, favicon.ico  ← browser/phone icons
    og.png/route.tsx      ← link-preview image, generated from site.ts at build
    robots.ts, sitemap.ts ← for Google, use site.url
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
| Hero background and rotating word | Spotlight New, Flip Words |
| Featured horizontal clip | Container Scroll Animation |
| Work grid and video popup | Expandable Card |
| Services | Bento Grid |
| Process | Timeline |
| Contact background | Background Beams |
| Floating contact button | Custom (Motion + CSS animations) |
| Testimonials | Animated Testimonials |
| Footer | Custom editing-timeline animation (CSS) |
| Cursor | Custom viewfinder follower (`ui/editor-cursor.tsx`) |
| Scroll animations | `ui/scroll-motion.tsx` (word reveals, rise-ins, parallax, progress bar) |

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
- Light and dark mode: follows the visitor's device, toggle in the top-right remembers their choice. Colors from `src/app/theme.css` (purple + cyan active, original yellow kept commented), TASA Orbiter font.
- Every interactive element has a visible accent-colored focus ring. All animations respect the OS "reduce motion" setting.

## Lighthouse

Last checked with Lighthouse 13 on the static build: 100 in Performance, Accessibility,
Best Practices and SEO on both mobile and desktop. The hero reel fades in on purpose (see the
comment in `hero-reels.tsx`); making it visible at first paint drops mobile Performance to ~85.

