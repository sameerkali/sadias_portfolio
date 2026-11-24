import { IconStarFilled } from "@tabler/icons-react";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { sections, testimonials } from "@/data/site";

// Review wall: every review visible at once, cards flow into columns like a masonry grid.
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="gradient-testimonials bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <RevealText id="testimonials-title" text={sections.testimonials.title} className="text-display font-semibold tracking-tight" />
        <Reveal as="p" delay={0.15} className="mt-6 mb-16 max-w-md text-2xl leading-relaxed text-fg-muted">
          {sections.testimonials.text}
        </Reveal>
        <ul className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 0.1} className="mb-5 break-inside-avoid">
              <figure className="flex flex-col gap-5 rounded-2xl bg-surface-raised p-7">
                <div role="img" aria-label="Rated 5 out of 5" className="flex gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <IconStarFilled key={s} aria-hidden="true" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="text-xl leading-relaxed text-fg">“{t.quote}”</blockquote>
                <figcaption>
                  <span className="block text-lg font-semibold text-fg">{t.name}</span>
                  <span className="text-md text-fg-muted">{t.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
