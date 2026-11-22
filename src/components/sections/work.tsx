import { ExpandableVideoGrid } from "@/components/ui/expandable-card";
import { sections, work } from "@/data/site";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="gradient-work scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="work-title" className="text-display font-semibold tracking-tight">
          {sections.work.title}
        </h2>
        <p className="mt-4 mb-12 max-w-xl text-2xl text-fg-muted">
          <span className="hidden lg:inline">{sections.work.hoverHint} </span>
          {sections.work.text}
        </p>
        <ExpandableVideoGrid items={work} />
      </div>
    </section>
  );
}
