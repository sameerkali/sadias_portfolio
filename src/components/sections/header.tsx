import { site } from "@/data/site";

// Just the name, top left.
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-18 max-w-7xl items-center px-6">
        <a href="#main" className="text-2xl font-bold tracking-tight">
          {site.firstName}
          <span className="text-accent">.</span>
        </a>
      </div>
    </header>
  );
}
