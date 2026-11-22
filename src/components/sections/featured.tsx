import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { featured } from "@/data/site";

// The horizontal clip in a frame that tilts flat as you scroll (Aceternity Container Scroll).
export function Featured() {
  return (
    <section aria-labelledby="featured-title" className="overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-16 px-6">
            <h2 id="featured-title" className="text-display font-semibold tracking-tight">
              {featured.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-2xl text-fg-muted">{featured.description}</p>
          </div>
        }
      >
        {/* Native controls let visitors pause or unmute. */}
        <video
          src={featured.src}
          poster={featured.poster}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          aria-label={featured.title}
          className="h-full w-full object-cover"
        />
      </ContainerScroll>
    </section>
  );
}
