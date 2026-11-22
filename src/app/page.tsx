import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Featured } from "@/components/sections/featured";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ContactButton } from "@/components/sections/contact-button";
import { ScrollProgress } from "@/components/ui/scroll-motion";
import { EditorCursor } from "@/components/ui/editor-cursor";

// The whole page, top to bottom. Reorder or remove sections here.
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Featured />
        <Work />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ContactButton />
      <EditorCursor />
    </>
  );
}
