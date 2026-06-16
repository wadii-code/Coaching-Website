import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section header. The eyebrow and crimson divider are both optional so sections
 * can vary their rhythm instead of all sharing one skeleton.
 */
export function SectionHeading({
  eyebrow,
  children,
  className,
  divider = true,
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <div className={cn("mb-14 md:mb-16", className)}>
      {eyebrow && (
        <span className="font-condensed text-xs font-bold uppercase tracking-[0.15em] text-crimson">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.02em] text-foreground",
          eyebrow && "mt-3",
        )}
      >
        {children}
      </h2>
      {divider && <div className="mt-6 h-[3px] w-12 bg-crimson" />}
    </div>
  );
}
