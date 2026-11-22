import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "@/components/ui/flip-words";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroReels } from "@/components/sections/hero-reels";
import { ctaLabel, hero, work } from "@/data/site";

// Yellow version of the Aceternity spotlight beams.
const yellow = (a: number) => `oklch(0.88 0.18 96 / ${a})`;

export function Hero() {
  const [center, left, right] = [work[0], work[3], work[1]];
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <Spotlight
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${yellow(0.1)} 0, ${yellow(0.03)} 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, ${yellow(0.07)} 0, ${yellow(0.02)} 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, ${yellow(0.05)} 0, ${yellow(0.02)} 80%, transparent 100%)`}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-28 pb-16 md:grid-cols-[1.15fr_1fr] md:pt-24">
        <div>
          <p className="mb-6 text-md font-semibold tracking-[0.18em] text-accent uppercase">{hero.eyebrow}</p>
          <h1 className="text-display font-semibold tracking-tight">
            <span className="sr-only">
              {hero.flipWords.join(", ")} {hero.headlineRest}
            </span>
            <span aria-hidden="true">
              <FlipWords words={hero.flipWords} className="-mx-2 text-accent" />
              {hero.headlineRest}
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-2xl leading-relaxed text-fg-muted">{hero.subtext}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
            <ButtonLink href="#work" variant="ghost">
              See work
            </ButtonLink>
          </div>
        </div>

        <HeroReels center={center} left={left} right={right} />
      </div>
    </section>
  );
}
