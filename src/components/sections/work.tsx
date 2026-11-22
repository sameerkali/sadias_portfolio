import { ExpandableVideoGrid } from "@/components/ui/expandable-card";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { sections, work } from "@/data/site";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="gradient-work scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <RevealText id="work-title" text={sections.work.title} className="text-display font-semibold tracking-tight" />
        <Reveal as="p" delay={0.15} className="mt-4 mb-12 max-w-xl text-2xl text-fg-muted">
          <span className="hidden lg:inline">{sections.work.hoverHint} </span>
          {sections.work.text}
        </Reveal>
        <ExpandableVideoGrid items={work} />
      </div>
    </section>
  );
}
