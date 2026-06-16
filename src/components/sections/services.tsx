import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      className="bg-background px-6 py-24 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="What We Offer" divider={false}>
            Coaching <span className="text-crimson">Services</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i % 3} className="h-full">
              <article className="group relative h-full overflow-hidden bg-card p-9 transition-all duration-300 hover:-translate-y-1 hover:bg-accent">
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
                <div className="mb-6 flex size-12 items-center justify-center border-2 border-crimson font-display text-xl tracking-[0.05em] text-crimson">
                  {s.n}
                </div>
                <h3 className="mb-3.5 font-condensed text-xl font-bold uppercase tracking-[0.08em] text-foreground">
                  {s.name}
                </h3>
                <p className="text-sm leading-[1.7] text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
