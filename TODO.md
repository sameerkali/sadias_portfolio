# What to add later

Everything marked `DUMMY` in [src/data/site.ts](src/data/site.ts) is placeholder data.
Search the project for `DUMMY` and `TODO` to find every spot.

## 1. Replace dummy text (all in `src/data/site.ts`)

- [ ] Full name: `site.name` (currently "Sadia Khan")
- [ ] Email: `site.email`
- [ ] Phone: `site.phone`
- [ ] WhatsApp link: the `wa.me/...` number in `socials`
- [ ] Instagram / YouTube / TikTok links in `socials` (currently `yourhandle`)
- [ ] Availability line: `site.availability`
- [ ] Your domain: `site.url` (used for SEO / link previews)
- [ ] About bio: `about.paragraphs`, `about.tools`, `about.languages`
- [ ] Testimonials: real quotes, names and roles in `testimonials`
- [ ] Per video: check `description`, and fill in the real `platform` and `tools` in `work`
- [ ] Featured clip text: `featured.title` / `featured.description`
- [ ] Process: check the 4 steps and the "48 hours" turnaround in `process`

## 2. Add images

| What | Where to put it | Size | Then |
| --- | --- | --- | --- |
| Your photo | `public/images/sadia.jpg` | 4:5, about 1200x1500 | Swap the `<Placeholder>` in `src/components/sections/about.tsx` for `<Image>` (comment there shows how) |
| Link preview image | `public/og.jpg` | 1200x630 | Uncomment `openGraph` in `src/app/layout.tsx` |
| Favicon | `src/app/icon.png` (and delete `src/app/favicon.ico`) | 512x512 | Nothing, Next picks it up |
| Video thumbnails (optional) | `public/videos/<same-name>.jpg` | same ratio as video | Nothing. Current ones are frames grabbed from each video |

## 3. Optional, if you want them

- [ ] More videos: see "Adding a video" in [README.md](README.md)
- [ ] Client / brand logos row under the stats
- [ ] Contact form (needs a form service such as Formspree, since the site has no server)
- [ ] Analytics (e.g. Vercel Analytics or Plausible)
- [ ] Deploy: upload the `out/` folder to Netlify, Vercel or GitHub Pages
