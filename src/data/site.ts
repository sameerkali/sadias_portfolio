/**
 * ALL website content lives in this file.
 * Edit text, links and numbers here. Components only read from it.
 * Anything marked DUMMY is placeholder data: replace it (see TODO.md).
 */
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export const site = {
  name: "Sadia Khan", // DUMMY surname
  firstName: "Sadia",
  role: "Short-form video editor",
  metaTitle: "Sadia Khan | Short-form Video Editor for Reels, Shorts & TikTok",
  metaDescription:
    "Sadia edits wedding reels, podcast clips and brand shorts for Instagram, YouTube Shorts and TikTok, built to hold attention.",
  url: "https://sadia-portfolio.example.com", // DUMMY, your real domain
  email: "hello@sadiaedits.com", // DUMMY
  phone: "+91 98204 61735", // DUMMY
  whatsapp: "919820461735", // DUMMY. Country code + number, digits only. Both "Hire me" buttons open this chat.
  whatsappMessage: "Hi Sadia! I'd like to hire you for a video project.", // pre-filled first message
  availability: "Booking projects for December", // DUMMY
};

// Label of the floating button and the Contact-section button. Both open WhatsApp.
export const ctaLabel = "Hire me";
export const hireUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const socials = [
  { label: "Instagram", href: "https://instagram.com/yourhandle", icon: IconBrandInstagram }, // DUMMY
  { label: "YouTube", href: "https://youtube.com/@yourhandle", icon: IconBrandYoutube }, // DUMMY
  { label: "TikTok", href: "https://tiktok.com/@yourhandle", icon: IconBrandTiktok }, // DUMMY
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}`, icon: IconBrandWhatsapp },
  { label: "Email", href: `mailto:${site.email}`, icon: IconMail },
];

export const hero = {
  eyebrow: "Short-form video editor",
  flipWords: ["Reels", "Shorts", "TikToks"],
  headlineRest: "people watch till the end.",
  subtext:
    "I'm Sadia, a short-form editor. I turn raw footage into wedding reels, podcast clips and brand shorts built for retention.",
};

// Section headings that aren't covered further down.
export const sections = {
  work: {
    title: "Selected work",
    hoverHint: "Hover to preview.", // desktop only
    text: "Open any reel to watch it with sound.",
  },
  services: { title: "What I edit" },
  testimonials: {
    title: "What clients say",
    text: "Photographers, podcasters and brands I've edited for.",
  },
};

/* ---------------- Videos (files live in /public/videos) ---------------- */

export type Video = {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  poster: string;
  duration: string;
  platform: string; // DUMMY per video
  tools: string; // DUMMY per video
};

// The horizontal clip, shown in the tilting "featured edit" frame.
export const featured = {
  title: "Cinematic edits for Instagram",
  description:
    "A 12-second cut with speed ramps, a moody grade and sound design doing the storytelling.",
  src: "/videos/instagram-viral.mp4",
  poster: "/videos/instagram-viral.jpg",
};

// The vertical reels, shown in the work grid. Order here = order on the page.
export const work: Video[] = [
  {
    id: "bride-reel",
    title: "Bridal reel",
    category: "Wedding",
    description:
      "Mehndi close-ups, fabric textures and slow push-ins, cut to a soft track so every detail gets its moment.",
    src: "/videos/bride-reel.mp4",
    poster: "/videos/bride-reel.jpg",
    duration: "0:27",
    platform: "Instagram Reels",
    tools: "Premiere Pro, After Effects",
  },
  {
    id: "information-reel",
    title: "Podcast clip",
    category: "Talking head",
    description:
      "A long podcast turned into a punchy clip: hook in the first two seconds, bold captions and B-roll cutaways.",
    src: "/videos/information-reel.mp4",
    poster: "/videos/information-reel.jpg",
    duration: "0:25",
    platform: "Instagram Reels, YouTube Shorts",
    tools: "Premiere Pro, CapCut",
  },
  {
    id: "pre-wedding",
    title: "Pre-wedding story",
    category: "Wedding",
    description:
      "A warm, slow-paced pre-wedding story with a soft grade and gentle speed ramps between moments.",
    src: "/videos/pre-wedding.mp4",
    poster: "/videos/pre-wedding.jpg",
    duration: "0:54",
    platform: "Instagram Reels",
    tools: "Premiere Pro, DaVinci Resolve",
  },
  {
    id: "wedding-card",
    title: "Wedding invitation",
    category: "Invitation",
    description:
      "A digital wedding card with rose petals and card close-ups, timed so names and dates land on the beat.",
    src: "/videos/wedding-card.mp4",
    poster: "/videos/wedding-card.jpg",
    duration: "0:32",
    platform: "WhatsApp, Instagram",
    tools: "After Effects, Premiere Pro",
  },
  {
    id: "wedding",
    title: "Wedding night",
    category: "Event",
    description:
      "Top-down crowd shots, live music and quick cuts that keep the energy of the night intact.",
    src: "/videos/wedding.mp4",
    poster: "/videos/wedding.jpg",
    duration: "0:15",
    platform: "Instagram Reels, TikTok",
    tools: "Premiere Pro",
  },
];

/* ---------------- Services (bento grid, exactly 4 cells) ---------------- */

export const services = [
  {
    title: "Wedding and event reels",
    description:
      "Bridal, pre-wedding and event highlights cut into vertical stories families share for years.",
    image: "/videos/bride-reel.jpg",
  },
  {
    title: "Podcast and talking-head clips",
    description: "Hooks, jump cuts, B-roll and captions in English, Hindi or Hinglish.",
    image: "/videos/information-reel.jpg",
  },
  {
    title: "Digital invitations",
    description: "Animated wedding and event invites, ready to send on WhatsApp and Instagram.",
    image: "/videos/wedding-card.jpg",
  },
  {
    title: "Shorts and TikTok repurposing",
    description: "One long video turned into a week of Shorts, Reels and TikToks.",
    image: null, // solid accent-color tile
  },
];

/* ---------------- Process (timeline) ---------------- */

export const process = {
  title: "How a project runs",
  description: "From raw footage to a ready-to-post file, usually within 48 hours.", // DUMMY turnaround
  steps: [
    {
      title: "Brief",
      text: "You share footage, references and where it will be posted. I reply with a plan, a price and a delivery date.",
      points: ["Google Drive or WeTransfer upload", "Reference reels you like", "Platform and length"],
    },
    {
      title: "First cut",
      text: "I build the story: the hook, the pacing and the music. You get a watermarked draft to react to.",
      points: ["Hook in the first 2 seconds", "Music and beat sync", "Rough captions"],
    },
    {
      title: "Polish",
      text: "Color grade, sound design, final captions and motion text. Then up to two rounds of changes.",
      points: ["Color grade", "Sound effects and mix", "Two revision rounds"],
    },
    {
      title: "Delivery",
      text: "You get export-ready files for each platform, plus a cover frame you can use as the thumbnail.",
      points: ["9:16 and 1:1 exports", "Cover frame", "Project files on request"],
    },
  ],
};

/* ---------------- About ---------------- */

export const about = {
  title: "Hi, I'm Sadia.",
  paragraphs: [
    // DUMMY bio, write your own story here.
    "I've been editing short-form video for three years, starting with wedding reels for photographers and growing into podcasts, creators and small brands.",
    "I care about the first two seconds, the beat and the last frame. If people rewatch it, I did my job.",
  ],
  tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Photoshop"], // DUMMY, adjust
  languages: "Captions in English, Hindi and Urdu", // DUMMY
  photoAlt: "Portrait of Sadia",
};

/* ---------------- Testimonials (DUMMY, replace with real quotes) ---------------- */

export const testimonials = [
  {
    quote: "She turned four hours of wedding footage into a 30-second reel the couple posted the same night.",
    name: "Farhan Qureshi",
    title: "Wedding filmmaker, Frame & Vows",
  },
  {
    quote: "Our podcast clips finally get watched past the first three seconds. The captions are spot on.",
    name: "Arjun Mehra",
    title: "Host, The Stronger Hour podcast",
  },
  {
    quote: "Fast, organised and easy to brief. The invite video was shared more than the actual card.",
    name: "Zoya Siddiqui",
    title: "Bride, December 2025",
  },
  {
    quote: "Sadia understands pacing. Every Short she cut for us beat our channel average.",
    name: "Nikita Bansal",
    title: "Content lead, Kesar Skincare",
  },
  {
    quote: "Clear timelines, quick replies and no endless revisions. Booking her again for the next season.",
    name: "Imran Sheikh",
    title: "Founder, Studio Noor Photography",
  },
];

/* ---------------- Contact ---------------- */

export const contact = {
  title: "Have footage sitting on your drive?",
  text: "Send it over. I reply within a day with ideas, a price and a delivery date.",
};