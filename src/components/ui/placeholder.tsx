import { IconPhoto } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Gray stand-in for an image that hasn't been added yet. Swap for <Image> when ready (see TODO.md).
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-3 bg-surface-raised text-fg-muted",
        className,
      )}
    >
      <IconPhoto aria-hidden="true" stroke={1.5} className="h-10 w-10" />
      <span className="text-md">{label}</span>
    </div>
  );
}
