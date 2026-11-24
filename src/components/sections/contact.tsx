import { BackgroundBeams } from "@/components/ui/background-beams";
import { ButtonLink } from "@/components/ui/button-link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Reveal, RevealText } from "@/components/ui/scroll-motion";
import { contact, ctaLabel, hireUrl, site, socials } from "@/data/site";

// No form on purpose: the site is 100% static, so contact goes through WhatsApp / email links.
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="gradient-contact relative scroll-mt-8 overflow-hidden">
      <BackgroundBeams />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center md:py-40">
        <RevealText id="contact-title" text={contact.title} className="text-display font-semibold tracking-tight" />
        <Reveal as="p" delay={0.15} className="mt-6 max-w-xl text-2xl text-fg-muted">
          {contact.text}
        </Reveal>
        <Reveal delay={0.25} className="flex flex-col items-center">
          <ButtonLink href={hireUrl} newTab className="mt-10">
            <IconBrandWhatsapp aria-hidden="true" stroke={1.75} className="h-5 w-5" />
            {ctaLabel}
            <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </ButtonLink>

          <p className="mt-8 text-xl">
            <a href={hireUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
              {site.email}
              <span className="sr-only"> (opens WhatsApp)</span>
            </a>
            <span className="mx-3 text-fg-muted" aria-hidden="true">
              /
            </span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="underline decoration-line underline-offset-4 hover:decoration-accent">
              {site.phone}
            </a>
          </p>

          <ul className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-fg transition hover:-translate-y-0.5 hover:bg-accent-2 hover:text-fg-on-accent"
                >
                  <Icon aria-hidden="true" stroke={1.5} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-fg-muted">{site.availability}</p>
        </Reveal>
      </div>
    </section>
  );
}
