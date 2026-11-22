import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static"; // generated once at build (static export)

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
