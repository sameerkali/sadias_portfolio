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

// Runs before paint: saved choice wins, otherwise follow the device setting. Prevents a theme flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";var c=document.documentElement.classList;c.remove("dark","light");c.add(t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${tasa.variable} dark antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
