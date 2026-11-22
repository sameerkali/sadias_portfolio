import { stats } from "@/data/site";

export function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-line bg-surface-muted">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-2">
            <dt className="text-lg text-fg-muted">{s.label}</dt>
            <dd className="text-display font-semibold tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
