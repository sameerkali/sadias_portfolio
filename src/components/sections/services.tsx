import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react";
import { RevealText } from "@/components/ui/scroll-motion";
import { sections, services } from "@/data/site";
import { cn } from "@/lib/utils";

// 4 services -> 4 cells: wide + narrow, then narrow + wide.
const spans = ["md:col-span-2", "", "", "md:col-span-2"];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="gradient-services scroll-mt-8 bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <RevealText id="services-title" text={sections.services.title} className="mb-12 text-display font-semibold tracking-tight" />
        <BentoGrid>
          {services.map((s, i) => (
            <BentoGridItem
              key={s.title}
              delay={i * 0.12}
              title={s.title}
              description={s.description}
              className={cn(spans[i], !s.image && "bg-accent text-fg-on-accent")}
              header={
                s.image ? (
                  <div aria-hidden="true" className="absolute inset-0">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover opacity-55 transition-transform duration-700 group-hover/bento:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/75 to-surface/10" />
                  </div>
                ) : (
                  // Accent tile: the three platforms instead of an image
                  <div aria-hidden="true" className="mb-auto flex gap-3">
                    {[IconBrandInstagram, IconBrandYoutube, IconBrandTiktok].map((Icon, j) => (
                      <Icon key={j} stroke={1.5} className="h-14 w-14 transition-transform duration-500 group-hover/bento:-rotate-6" />
                    ))}
                  </div>
                )
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
