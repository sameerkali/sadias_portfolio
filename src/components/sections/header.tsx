import { ThemeToggle } from "@/components/ui/theme-toggle";
import { site } from "@/data/site";

// Name on the left, light/dark toggle on the right.
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <a href="#main" className="text-2xl font-bold tracking-tight">
          {site.firstName}
          <span className="text-accent">.</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
