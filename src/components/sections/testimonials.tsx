import { CardStack } from "@/components/ui/card-stack";
import { sections, testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <h2 id="testimonials-title" className="text-display font-semibold tracking-tight">
            {sections.testimonials.title}
          </h2>
          <p className="mt-6 max-w-md text-2xl leading-relaxed text-fg-muted">{sections.testimonials.text}</p>
        </div>
        <CardStack items={testimonials} />
      </div>
    </section>
  );
}
