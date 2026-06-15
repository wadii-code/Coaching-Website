import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Eyebrow + Bebas Neue title + crimson divider — the repeated section header
 * pattern from the original. Pass crimson accents via <span className="text-crimson">.
 */
export function SectionHeading({
  eyebrow,
  children,
  className,
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-14 md:mb-16", className)}>
      <span className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-crimson">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.03em] text-foreground">
        {children}
      </h2>
      <div className="mt-6 h-[3px] w-12 bg-crimson" />
    </div>
  );
}
