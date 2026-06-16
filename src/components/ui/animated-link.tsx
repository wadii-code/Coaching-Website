import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Link with an underline that wipes in from the right on hover. Custom, so the
 * project carries no third-party UI-kit attribution.
 */
export function AnimatedLink({
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "group relative inline-flex items-center",
        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out",
        "hover:after:origin-left hover:after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
