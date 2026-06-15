import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { SectionHeading } from "@/components/sections/section-heading";
import { RESULT_STATS, TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Transformations() {
  return (
    <section
      id="transformations"
      className="border-t border-border bg-elevated px-6 py-24 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="Proven Results">
            Real <span className="text-crimson">Transformations</span>
          </SectionHeading>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-4">
            {RESULT_STATS.map((s) => (
              <div key={s.label} className="bg-card px-8 py-10 text-center">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  className="font-display text-[4rem] leading-none tracking-[0.04em] text-foreground"
                />
                <div className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i} className="h-full">
              <figure
                className={cn(
                  "group h-full border-t-[3px] bg-card p-9 transition-colors",
                  t.featured
                    ? "border-t-crimson"
                    : "border-t-transparent hover:border-t-crimson",
                )}
              >
                <div
                  aria-hidden
                  className="mb-2 font-display text-5xl leading-none text-crimson opacity-60"
                >
                  &ldquo;
                </div>
                <figcaption className="mb-6 inline-flex items-center gap-2 border border-crimson/30 bg-crimson/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-crimson">
                  {t.result}
                </figcaption>
                <blockquote className="mb-7 text-[0.92rem] italic leading-[1.7] text-[#aaaaaa]">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3.5">
                  <div className="flex size-11 items-center justify-center rounded-full border-2 border-border bg-[linear-gradient(135deg,var(--crimson-hover),#2a0a10)] font-display text-lg tracking-[0.05em] text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.meta}</div>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
