import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-border bg-elevated px-6 py-24 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="How It Works">
            Your Path to <span className="text-crimson">Results</span>
          </SectionHeading>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop only) */}
          <span
            aria-hidden
            className="absolute left-[5%] right-[5%] top-8 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--crimson), var(--crimson-hover), var(--border), var(--border))",
            }}
          />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i} className="relative z-10 px-0 lg:px-8">
              <div className="group">
                <div className="mb-7 flex size-16 items-center justify-center border-2 border-crimson bg-background font-display text-3xl tracking-[0.06em] text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-white">
                  {s.n}
                </div>
                <h3 className="mb-3 font-condensed text-xl font-bold uppercase tracking-[0.1em] text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-[1.7] text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
