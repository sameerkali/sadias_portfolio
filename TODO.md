# What to add later

Real details are in. These are the spots that still need something from you.
Search the project for `DUMMY` and `TODO` to find each one. Most edits are in
[src/data/site.ts](src/data/site.ts).

## 1. Still placeholder

- [ ] Email: `site.email` (shown in Contact and the social icons). Currently `hello@Sadiyaedits.com`, which only works once that domain and inbox exist.
- [ ] Social links in `socials` (Instagram / YouTube / TikTok point to `yourhandle`).
- [ ] Revisions: "up to two rounds" in `process` is waiting for confirmation.
- [ ] Languages: add Urdu in `about.languages` if it applies.
- [ ] Portfolio videos in `work` and `featured`: titles, descriptions, platform and tools are sample text.
- [ ] Testimonials in `testimonials`: 6 sample reviews, replace with real client reviews before going live.

## 2. Images

| What | Where to put it | Size | Then |
| --- | --- | --- | --- |
| Link preview image | `public/og.jpg` (done) | 1200x627 JPEG, under 300 KB | To change it, replace that file (keep JPEG or PNG, not AVIF) |
| Favicon | already added: `src/app/icon.svg`, `apple-icon.png`, `favicon.ico` | any | Optional: swap for your own logo |
| Video thumbnails (optional) | `public/videos/<same-name>.jpg` | same ratio as video | Save it as `<same-name>.avif` |

## 3. Optional

- [ ] More videos: see "Adding a video" in [README.md](README.md)
- [ ] Client / brand logos
- [ ] Analytics (e.g. Vercel Analytics or Plausible)
- [ ] Deploy: upload the `out/` folder to Netlify, Vercel or GitHub Pages
