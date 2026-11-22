import { BackgroundBeams } from "@/components/ui/background-beams";
import { ButtonLink } from "@/components/ui/button-link";
import { contact, ctaLabel, site, socials } from "@/data/site";

// No form on purpose: the site is 100% static, so contact goes through email / WhatsApp links.
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-8 overflow-hidden border-t border-line">
      <BackgroundBeams />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center md:py-40">
        <h2 id="contact-title" className="text-display font-semibold tracking-tight">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-2xl text-fg-muted">{contact.text}</p>
        <ButtonLink href={`mailto:${site.email}?subject=${encodeURIComponent(contact.mailSubject)}`} className="mt-10">
          {ctaLabel}
        </ButtonLink>

        <p className="mt-8 text-xl">
          <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:decoration-accent">
            {site.email}
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
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon aria-hidden="true" stroke={1.5} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-fg-muted">{site.availability}</p>
      </div>
    </section>
  );
}
