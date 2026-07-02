import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { PILLARS, COACH } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-elevated px-6 py-24 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Left — philosophy */}
          <Reveal>
            <span className="font-condensed text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Who We Are
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.03em] text-foreground">
              The <span className="text-crimson">3OCTBR</span>
              <br />
              Philosophy
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
              <p>
                October is when most people quit. The resolutions are long dead,
                summer is over, and the holidays are the perfect excuse. 3OCTBR
                stands for the opposite instinct: showing up when motivation is
                gone and no one is watching. That&apos;s where real change is
                built.
              </p>
              <p>
                We build programs grounded in exercise science, behavioral
                psychology, and individualized data — not generic templates.
                Every client receives a coaching experience tailored to their
                unique physiology, lifestyle, and goals.
              </p>
              <p>
                Whether you&apos;re a complete beginner or a seasoned athlete,
                our methodology scales to you. Because the only competition that
                matters is who you were yesterday.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-0.5 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="border-l-[3px] border-crimson bg-card p-6 transition-colors hover:bg-accent"
                >
                  <div className="mb-2 font-condensed text-lg font-bold uppercase tracking-[0.1em] text-foreground">
                    {p.title}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — coach card */}
          <Reveal delay={2}>
            <div className="overflow-hidden border border-border bg-card">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/coach.webp"
                  alt="Marcus R., Head Coach & Founder of 3OCTBR"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"
                />
              </div>
              <div className="p-8">
                <div className="font-display text-3xl tracking-[0.08em] text-foreground">
                  {COACH.name}
                </div>
                <div className="mb-4 mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-crimson">
                  {COACH.title}
                </div>
                <p className="mb-5 text-sm leading-[1.7] text-foreground/70">
                  {COACH.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {COACH.certs.map((c) => (
                    <span
                      key={c}
                      className="border border-border px-3.5 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
