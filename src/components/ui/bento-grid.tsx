// Aceternity UI: Bento Grid (https://ui.aceternity.com/components/bento-grid)
// Adapted: design tokens, semantic list, optional background header, cells rise in on scroll.
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/scroll-motion";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <ul className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3", className)}>
      {children}
    </ul>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  delay = 0,
}: {
  className?: string;
  delay?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <Reveal
      as="li"
      delay={delay}
      className={cn(
        "group/bento relative row-span-1 flex min-h-64 flex-col justify-end overflow-hidden rounded-2xl bg-surface-raised p-6",
        className,
      )}
    >
      {header}
      <div className="relative transition-transform duration-[var(--duration-slower)] group-hover/bento:translate-x-2">
        <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
        <p className="max-w-sm text-lg opacity-85">{description}</p>
      </div>
    </Reveal>
  );
};
