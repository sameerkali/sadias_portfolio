import { Placeholder } from "@/components/ui/placeholder";
import { about } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-8 border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl px-6 items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-20">
        {/* TODO: replace with <Image src="/images/sadia.jpg" alt={about.photoAlt} ... /> */}
        <Placeholder label="Your photo (4:5)" className="aspect-[4/5] w-full max-w-md rounded-3xl" />

        <div>
          <h2 id="about-title" className="text-display font-semibold tracking-tight">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-6 max-w-[60ch] text-2xl leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}

          <h3 className="mt-10 text-lg font-semibold">Tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.tools.map((tool) => (
              <li key={tool} className="rounded-pill bg-surface-raised px-4 py-2 text-lg">
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-fg-muted">{about.languages}</p>
        </div>
      </div>
    </section>
  );
}
