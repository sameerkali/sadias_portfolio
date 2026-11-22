# What to add later

Real details are in. These are the spots that still need something from you.
Search the project for `DUMMY` and `TODO` to find each one. Most edits are in
[src/data/site.ts](src/data/site.ts).

## 1. Still placeholder

- [ ] Email: `site.email` (shown in Contact and the social icons). Currently `hello@sadiaedits.com`, which only works once that domain and inbox exist.
- [ ] Domain: `site.url` (SEO, link previews, sitemap). Not bought yet; suggested `sadiaedits.com` or `editsbysadia.com`.
- [ ] Social links in `socials` (Instagram / YouTube / TikTok point to `yourhandle`).
- [ ] Revisions: "up to two rounds" in `process` is waiting for confirmation.
- [ ] Languages: add Urdu in `about.languages` if it applies.
- [ ] Portfolio videos in `work` and `featured`: titles, descriptions, platform and tools are sample text.
- [ ] Testimonials in `testimonials`: sample quotes, replace with real ones.

## 2. Images

| What | Where to put it | Size | Then |
| --- | --- | --- | --- |
| Your photo | `public/images/sadia.jpg` | 4:5, about 1200x1500 | Swap the `<Placeholder>` in `src/components/sections/about.tsx` for `<Image>` |
| Link preview image | already generated from your name + tagline (`src/app/og.png/route.tsx`) | 1200x630 | Optional: delete that folder and put your own image at `public/og.png` |
| Favicon | already added: `src/app/icon.svg`, `apple-icon.png`, `favicon.ico` | any | Optional: swap for your own logo |
| Video thumbnails (optional) | `public/videos/<same-name>.jpg` | same ratio as video | Save it as `<same-name>.avif` |

## 3. Optional

- [ ] More videos: see "Adding a video" in [README.md](README.md)
- [ ] Client / brand logos
- [ ] Analytics (e.g. Vercel Analytics or Plausible)
- [ ] Deploy: upload the `out/` folder to Netlify, Vercel or GitHub Pages
