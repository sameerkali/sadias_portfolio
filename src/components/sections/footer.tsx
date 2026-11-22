import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-surface-muted">
      {/* extra bottom padding on mobile so the floating contact button doesn't cover the text */}
      <p className="mx-auto max-w-7xl px-6 pt-8 pb-24 text-md text-fg-muted md:pb-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
