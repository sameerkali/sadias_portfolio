import { Timeline } from "@/components/ui/timeline";
import { process } from "@/data/site";

export function Process() {
  return (
    <section id="process" aria-label="Process" className="scroll-mt-8">
      <Timeline
        title={process.title}
        description={process.description}
        data={process.steps.map((step) => ({
          title: step.title,
          content: (
            <div className="max-w-xl">
              <p className="text-2xl leading-relaxed text-fg">{step.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {step.points.map((point) => (
                  <li key={point} className="rounded-pill bg-surface-raised px-4 py-2 text-lg text-fg-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ),
        }))}
      />
    </section>
  );
}
