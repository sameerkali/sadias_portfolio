import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static"; // generated once at build (static export)

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
