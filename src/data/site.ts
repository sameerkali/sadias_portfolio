/**
 * ALL website content lives in this file.
 * Edit text, links and numbers here. Components only read from it.
 * Anything marked DUMMY / TODO is placeholder data: replace it (see TODO.md).
 */
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export const site = {
  name: "Sadiya Faridi",
  firstName: "Sadiya", // text logo + greetings
  role: "Short-form Video Editor",
  location: "Saharanpur, India",
  // SEO: Google results + link previews
  metaTitle: "Sadiya Faridi | Short-form Video Editor & Wedding Reel Editor",
  metaDescription:
    "Sadiya Faridi is a short-form video editor in India for wedding reels, cinematic edits, Instagram Reels, YouTube Shorts and social media videos.",
  keywords: [
    "wedding reel editor",
    "short-form video editor",
    "cinematic video editor",
    "social media video editor",
    "Instagram Reels editor",
    "YouTube Shorts editor",
    "wedding video editor in India",
  ],
  url: "https://sadiya.expendifii.com", // live address: link previews, canonical, sitemap and robots all build from this
  email: "sadiya15232005@gmail.com", // TODO: no email yet (placeholder on the suggested domain)
  phone: "+91 74660 73152",
  whatsapp: "917466073152", // country code + number, digits only. Both "Let's Work Together" buttons open this chat.
  // Pre-filled WhatsApp message. "\n" = new line. The client fills in the blanks before sending.
  whatsappMessage:
    "Hi Sadiya! I saw your portfolio and I'd like to work together.\n\nType of video: \nFootage length: \nDeadline: ",
  replyTime: "I usually reply within 24 hours.",
  availability: "Currently open to new projects.",
};

// Label of the floating button and the Contact-section button. Both open WhatsApp.
export const ctaLabel = "Let’s Work Together";
export const hireUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const socials = [
  { label: "Instagram", href: `https://wa.me/${site.whatsapp}`, icon: IconBrandInstagram }, // DUMMY
  { label: "YouTube", href: `https://wa.me/${site.whatsapp}`, icon: IconBrandYoutube }, // DUMMY
  { label: "TikTok", href: `https://wa.me/${site.whatsapp}`, icon: IconBrandTiktok }, // DUMMY
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}`, icon: IconBrandWhatsapp },
  { label: "Email", href: `mailto:${site.email}`, icon: IconMail },];

export const hero = {
  eyebrow: "Short-form Video Editor",
  flipWords: ["Reels", "Shorts", "Edits"],
  headlineRest: "people watch till the end.",
  subtext:
    "I'm Sadiya. I turn raw footage into wedding reels, cinematic edits and social media videos that capture attention and tell a story.",
};

// Section headings that aren't covered further down.
export const sections = {
  work: {
    title: "Selected work",
    hoverHint: "Hover to preview.", // desktop only
    text: "Open any reel to watch it with sound.",
  },
  services: {
    title: "Video editing services",
    text: "Pricing depends on the type, length and requirements of each project.",
  },
  testimonials: {
    title: "What clients say",
    text: "Brides, photographers, creators and small businesses I've edited for.",
  },
};

/* ---------------- Videos (files live in /public/videos) ---------------- */

export type Video = {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  preview?: string; // optional small, silent version for the autoplaying hero reel
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
  poster: "/videos/instagram-viral.avif",
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
    preview: "/videos/bride-reel-preview.mp4",
    poster: "/videos/bride-reel.avif",
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
    poster: "/videos/information-reel.avif",
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
    poster: "/videos/pre-wedding.avif",
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
    poster: "/videos/wedding-card.avif",
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
    poster: "/videos/wedding.avif",
    duration: "0:15",
    platform: "Instagram Reels, TikTok",
    tools: "Premiere Pro",
  },
];

/* ---------------- Services (bento grid, one cell per service) ---------------- */

export const services = [
  {
    title: "Wedding and Event Reels",
    description: "Weddings, engagements and celebrations cut into reels families love to share.",
    image: "/videos/bride-reel.avif",
  },
  {
    title: "Podcast and Talking-Head Editing",
    description: "Long recordings trimmed into punchy clips with clean cuts and well-timed captions.",
    image: "/videos/information-reel.avif",
  },
  {
    title: "Digital Wedding Invitations",
    description: "Video invitations with your names, dates and details, ready to send on WhatsApp.",
    image: "/videos/wedding-card.avif",
  },
  {
    title: "Instagram Reels and YouTube Shorts",
    description: "Vertical edits paced for the feed, with a strong hook in the first seconds.",
    image: null, // solid accent-color tile with platform icons
  },
  {
    title: "Cinematic Video Editing",
    description: "Colour grading, smooth transitions and sound that make footage feel like film.",
    image: "/videos/instagram-viral.avif",
  },
  {
    title: "Social Media Short-form Content",
    description: "Regular short videos for creators and brands, edited to match your style.",
    image: "/videos/pre-wedding.avif",
  },
];

/* ---------------- Process (timeline) ---------------- */

export const process = {
  title: "How I work",
  description: "Usually delivered within 48 hours, depending on the project.",
  steps: [
    {
      title: "Share",
      text: "Send your footage through Google Drive or WhatsApp, along with your project details.",
      points: ["Raw footage", "Editing references (if available)", "Preferred editing style", "Text or captions", "Project details"],
    },
    {
      title: "Edit",
      text: "I shape the story with clean cuts, smooth transitions, colour grading and well-timed captions.",
      points: ["Story and pacing", "Colour grading", "Captions"],
    },
    {
      title: "Review",
      text: "You watch the edit and share any changes you'd like. Up to two rounds of revisions are included.", // TODO: confirm revision count
      points: ["Your feedback", "Up to two revision rounds"],
    },
    {
      title: "Delivery",
      text: "You get high-quality MP4 videos in the aspect ratio you need, ready for social media.",
      points: ["High-quality MP4", "Your required aspect ratio", "Ready to post"],
    },
  ],
};

/* ---------------- About ---------------- */

export const about = {
  title: "Hi, I'm Sadiya.",
  paragraphs: [
    "I'm a short-form video editor passionate about creating engaging and visually appealing videos. I love transforming raw footage into creative content that captures attention and tells a story.",
    "I create wedding reels, cinematic edits, social media videos, invitations and other short-form content. My goal is to make every video feel polished, engaging and visually memorable.",
  ],
  skillsTitle: "What makes my editing different",
  skills: ["Smooth transitions", "Creative storytelling", "Clean cuts", "Cinematic visuals", "Colour grading", "Well-timed captions"],
  languages: "Speaks Hindi and English. Based in Saharanpur, India.",
};

/* ---------------- Testimonials (SAMPLE reviews: replace with real client reviews before going live) ---------------- */

export const testimonials = [
  {
    quote:
      "Sadiya made our nikah highlight reel so beautiful that the whole family keeps forwarding it on WhatsApp. She picked all the emotional moments and the music fit perfectly.",
    name: "Nazia Parveen",
    title: "Bride, Saharanpur",
  },
  {
    quote:
      "I wanted our wedding invitation video to look elegant, not filmy. She got it right in the first draft, changed the fonts twice when I asked and sent the final file in two days.",
    name: "Ritika Sharma",
    title: "Bride, Dehradun",
  },
  {
    quote:
      "I send her raw footage from my wedding shoots and get back reels that are ready to post. Clean cuts, good colour grading and always on time. Now all my reel work goes to her.",
    name: "Mohd. Faizan Ansari",
    title: "Wedding photographer, Deoband",
  },
  {
    quote:
      "I recorded a long tech talk and Sadiya turned it into crisp short clips for LinkedIn and YouTube Shorts. Clean cuts, easy-to-read captions and quick delivery. Exactly what I needed.",
    name: "Sameer Faridi",
    title: "Software engineer, Delhi",
  },
  {
    quote:
      "Our engagement event reel was ready the very next day. Smooth transitions, and the music was synced perfectly to every cut. Our clients loved it, we will surely work with her again.",
    name: "Arshad Qureshi",
    title: "Event planner, Muzaffarnagar",
  },
  {
    quote:
      "I needed regular reels for my boutique's Instagram page. Sadiya understands what my customers like and keeps the edits simple and classy. Very easy to work with on WhatsApp.",
    name: "Pooja Saini",
    title: "Boutique owner, Saharanpur",
  },
];

/* ---------------- Contact ---------------- */

export const contact = {
  title: "Have footage sitting on your drive?",
  text: "Send it over on WhatsApp with a few project details. I usually reply within 24 hours.",
};