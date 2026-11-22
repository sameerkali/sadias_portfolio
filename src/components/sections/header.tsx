import { IconLayoutGrid, IconMovie, IconTimeline, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { ctaLabel, nav, site } from "@/data/site";

// Icons only show on small screens in the floating nav.
const icons: Record<string, React.ReactNode> = {
  "#work": <IconMovie className="h-5 w-5" stroke={1.5} />,
  "#services": <IconLayoutGrid className="h-5 w-5" stroke={1.5} />,
  "#process": <IconTimeline className="h-5 w-5" stroke={1.5} />,
  "#about": <IconUser className="h-5 w-5" stroke={1.5} />,
};

export function Header() {
  return (
    <>
      {/* Static bar at the top of the page */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <a href="#main" className="text-2xl font-bold tracking-tight">
            {site.firstName}
            <span className="text-accent">.</span>
          </a>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className="rounded-pill px-4 py-2 text-lg text-fg-muted transition-colors hover:bg-fg/10 hover:text-fg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="#contact" className="px-5 py-2 text-lg">
            {ctaLabel}
          </ButtonLink>
        </div>
      </header>

      {/* Appears when scrolling back up (Aceternity Floating Navbar) */}
      <FloatingNav
        navItems={nav.map((item) => ({ ...item, icon: icons[item.link] }))}
        cta={{ label: ctaLabel, link: "#contact" }}
      />
    </>
  );
}
