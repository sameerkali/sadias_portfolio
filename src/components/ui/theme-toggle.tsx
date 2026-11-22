"use client";
import { useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

// Reads the "dark" / "light" class that the inline script in layout.tsx puts on <html>.
const subscribe = (onChange: () => void) => {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => mo.disconnect();
};
const isDarkNow = () => !document.documentElement.classList.contains("light");

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDarkNow, () => true);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {} // private mode: the choice just isn't remembered
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-raised text-fg transition hover:bg-accent-2 hover:text-fg-on-accent active:scale-95"
    >
      {dark ? (
        <IconSun aria-hidden="true" stroke={1.75} className="h-5 w-5" />
      ) : (
        <IconMoon aria-hidden="true" stroke={1.75} className="h-5 w-5" />
      )}
    </button>
  );
}
