import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AutoplayVideo } from "@/components/ui/autoplay-video";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { featured } from "@/data/site";

// The horizontal clip in a frame that tilts flat as you scroll (Aceternity Container Scroll),
// over a purple/cyan glow. No timeline or player controls, only a pause button.
export function Featured() {
  return (
    <section aria-labelledby="featured-title" className="gradient-featured overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-16 px-6">
            <RevealText id="featured-title" text={featured.title} className="text-display font-semibold tracking-tight" />
            <Reveal as="p" delay={0.15} className="mx-auto mt-4 max-w-xl text-2xl text-fg-muted">
              {featured.description}
            </Reveal>
          </div>
        }
      >
        <AutoplayVideo src={featured.src} poster={featured.poster} label={featured.title} />
      </ContainerScroll>
    </section>
  );
}
