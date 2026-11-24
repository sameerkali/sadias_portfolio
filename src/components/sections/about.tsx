import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { about } from "@/data/site";

// Text-only intro: story on the left, editing style on the right.
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="gradient-about scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[3fr_2fr] md:items-end md:gap-20">
        <div>
          <RevealText id="about-title" text={about.title} className="text-display font-semibold tracking-tight" />
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={p} delay={0.1 + i * 0.1} className="mt-6 max-w-[60ch] text-2xl leading-relaxed text-fg-muted">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h3 className="text-lg font-semibold">{about.skillsTitle}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <li key={skill} className="rounded-pill bg-surface-raised px-4 py-2 text-lg">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-fg-muted">{about.languages}</p>
        </Reveal>
      </div>
    </section>
  );
}
