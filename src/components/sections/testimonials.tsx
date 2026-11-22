import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { sections, testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-surface-muted py-24 md:py-32">
      <h2 id="testimonials-title" className="mx-auto mb-12 max-w-7xl px-6 text-display font-semibold tracking-tight">
        {sections.testimonials.title}
      </h2>
      <InfiniteMovingCards items={testimonials} speed="slow" className="mx-auto" />
    </section>
  );
}
