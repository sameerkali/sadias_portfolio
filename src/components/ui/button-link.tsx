import { cn } from "@/lib/utils";

// Pill link-button. Hover lifts, press pushes in, focus ring comes from globals.css.
// (Links have no disabled/loading state; every action on this static site is a link.)
const variants = {
  primary: "bg-accent text-fg-on-accent hover:brightness-105",
  ghost: "border border-line text-fg hover:bg-fg/10",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-xl font-semibold whitespace-nowrap transition hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
