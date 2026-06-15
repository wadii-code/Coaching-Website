import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-block cursor-pointer border-2 px-10 py-[17px] text-center text-xs font-bold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5";

const variants = {
  primary:
    "border-crimson bg-crimson text-white hover:border-crimson-hover hover:bg-crimson-hover",
  outline:
    "border-white/30 bg-transparent text-foreground hover:border-white",
  white:
    "border-transparent bg-white px-7 py-3.5 text-black hover:bg-[#f0f0f0]",
} as const;

type CtaButtonProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

export function CtaButton({
  variant = "primary",
  className,
  ...props
}: CtaButtonProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
