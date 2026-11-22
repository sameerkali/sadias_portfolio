import type { Metadata } from "next";
import { TASA_Orbiter } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/data/site";
import "./globals.css";

const tasa = TASA_Orbiter({
  variable: "--font-tasa",
  subsets: ["latin"],
  adjustFontFallback: false, // Next has no metrics for this font yet
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.metaDescription,
  // TODO: add /public/og.jpg (1200x630) and uncomment for link previews.
  // openGraph: { images: ["/og.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${tasa.variable} dark antialiased`}>
      <body className="bg-surface font-sans text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-6000 focus:rounded-pill focus:bg-accent focus:px-4 focus:py-2 focus:text-fg-on-accent"
        >
          Skip to content
        </a>
        <MotionProvider>
          {/* #site is made inert while the video modal is open (keeps keyboard focus inside it). */}
          <div id="site">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
