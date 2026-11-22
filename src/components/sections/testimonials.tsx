import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { sections, testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="gradient-testimonials bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <RevealText id="testimonials-title" text={sections.testimonials.title} className="text-display font-semibold tracking-tight" />
        <Reveal as="p" delay={0.15} className="mt-6 mb-16 max-w-md text-2xl leading-relaxed text-fg-muted">
          {sections.testimonials.text}
        </Reveal>
        <Reveal delay={0.1}>
          <AnimatedTestimonials items={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}
