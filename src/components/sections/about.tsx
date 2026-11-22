import { Placeholder } from "@/components/ui/placeholder";
import { Parallax, Reveal, RevealText } from "@/components/ui/scroll-motion";
import { about } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="gradient-about scroll-mt-8 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[2fr_3fr] md:gap-20">
        {/* TODO: replace with <Image src="/images/sadia.jpg" alt={about.photoAlt} ... /> */}
        <Parallax offset={40}>
          <Placeholder label="Your photo (4:5)" className="aspect-[4/5] w-full max-w-md rounded-3xl" />
        </Parallax>

        <div>
          <RevealText id="about-title" text={about.title} className="text-display font-semibold tracking-tight" />
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={p} delay={0.1 + i * 0.1} className="mt-6 max-w-[60ch] text-2xl leading-relaxed text-fg-muted">
              {p}
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <h3 className="mt-10 text-lg font-semibold">{about.skillsTitle}</h3>
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
      </div>
    </section>
  );
}
