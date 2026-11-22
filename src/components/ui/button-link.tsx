import { cn } from "@/lib/utils";

// Pill link-button. Hover lifts, press pushes in, focus ring comes from globals.css.
// (Links have no disabled/loading state; every action on this static site is a link.)
export function ButtonLink({
  href,
  newTab,
  className,
  children,
}: {
  href: string;
  newTab?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3 text-xl font-semibold whitespace-nowrap text-fg-on-accent transition hover:-translate-y-0.5 hover:bg-accent-2 active:translate-y-0 active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </a>
  );
}
