import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 100% static: `npm run build` writes plain HTML/CSS/JS to /out. No server, no API.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
