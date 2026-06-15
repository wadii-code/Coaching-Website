import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { PROGRAMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Programs() {
  return (
    <section id="programs" className="bg-background px-6 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="Coaching Packages">
            Choose Your <span className="text-crimson">Program</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.name} delay={i} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col border p-10 transition-transform duration-300 hover:-translate-y-1.5",
                  p.featured
                    ? "border-crimson bg-[linear-gradient(to_bottom,rgba(196,30,58,0.06)_0%,var(--card)_100%)]"
                    : "border-border bg-card",
                )}
              >
                {p.badge && (
                  <span className="absolute right-8 top-[-1px] bg-crimson px-4.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white">
                    {p.badge}
                  </span>
                )}
                <div className="mb-3.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-crimson">
                  {p.tier}
                </div>
                <div className="font-display text-4xl leading-none tracking-[0.06em] text-foreground">
                  {p.name}
                </div>
                <div className="mt-2 font-condensed text-5xl font-extrabold leading-none text-foreground">
                  <sup className="top-[-0.6em] align-top text-2xl font-semibold text-crimson">
                    $
                  </sup>
                  {p.price}
                </div>
                <div className="mb-8 mt-1 text-sm text-muted-foreground">
                  {p.period}
                </div>
                <div className="mb-7 h-px w-full bg-border" />

                <ul className="mb-10 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f.text}
                      className={cn(
                        "flex items-start gap-2.5 text-sm leading-snug",
                        f.dim ? "text-muted-foreground/50" : "text-foreground/70",
                      )}
                    >
                      <ArrowRight
                        className={cn(
                          "mt-0.5 size-3.5 shrink-0",
                          f.dim ? "text-muted-foreground/50" : "text-crimson",
                        )}
                      />
                      {f.text}
                    </li>
                  ))}
                </ul>

                <CtaButton
                  href="#contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="w-full px-4 py-4"
                >
                  {p.cta}
                </CtaButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
