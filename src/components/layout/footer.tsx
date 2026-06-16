import Link from "next/link";
import { AnimatedLink } from "@/components/ui/animated-link";
import { FOOTER_COLUMNS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-elevated px-6 pb-10 pt-16 md:px-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 pb-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="#hero"
            className="mb-4 block font-display text-3xl tracking-[0.1em] text-foreground"
          >
            3<span className="text-crimson">/</span>OCTBR
          </Link>
          <span className="mb-5 block border-l-[3px] border-crimson pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Built Through Discipline.
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Elite fitness coaching for those who are serious about
            transformation. Evidence-based. Individualized. Uncompromising.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <AnimatedLink
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          © {year} 3OCTBR Coaching. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
