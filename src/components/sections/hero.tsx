import { Fragment } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { CtaButton } from "@/components/ui/cta-button";
import { HeroVideo } from "@/components/ui/hero-video";
import { HERO_STATS } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#080808]"
    >
      {/* Background video — pauses itself while off-screen */}
      <HeroVideo
        src="/videos/hero.mp4"
        poster="/images/hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark legibility overlay — the hero stays dark in both themes */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]/40"
      />
      {/* Faint crimson grid + diagonal slash */}
      <div aria-hidden className="hero-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute right-[10%] top-0 h-full w-[3px] opacity-60 [transform:skewX(-8deg)]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--crimson) 30%, var(--crimson) 70%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[900px] px-6 pb-24 md:px-20 md:pb-28">
        <Reveal delay={3} className="mb-7 flex items-center gap-3">
          <span className="block h-0.5 w-8 bg-crimson" />
          <span className="font-condensed text-xs font-bold uppercase tracking-[0.15em] text-crimson">
            Elite Performance Coaching
          </span>
        </Reveal>

        <h1 className="mb-8 font-display text-[clamp(4rem,9vw,9rem)] leading-[0.9] tracking-[0.02em] text-white">
          <TextReveal
            delay={0.35}
            lines={[
              "Stop Guessing.",
              "Start Training",
              <Fragment key="proof">
                With <span className="text-gradient-crimson">Proof.</span>
              </Fragment>,
            ]}
          />
        </h1>

        <Reveal delay={7}>
          <p className="mb-12 max-w-[460px] text-base font-light leading-relaxed text-white/70">
            Every plan is built from your numbers and tuned every week. No
            fluff. Just a system that shows you exactly what&apos;s working and
            what to do next.
          </p>
        </Reveal>

        <Reveal delay={9} className="flex flex-wrap gap-4">
          <Magnetic>
            <CtaButton href="#programs" variant="primary" className="glow-crimson">
              Start Your Journey
            </CtaButton>
          </Magnetic>
          <Magnetic>
            <CtaButton href="#contact" variant="outline" className="text-white">
              Book a Consultation
            </CtaButton>
          </Magnetic>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="font-condensed text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <span className="block h-12 w-px overflow-hidden bg-white/15">
          <span className="scroll-hint-line block h-1/2 w-full bg-crimson" />
        </span>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 right-0 z-10 hidden border-l border-t border-white/15 bg-[#080808]/40 backdrop-blur-sm sm:flex">
        {HERO_STATS.map((s) => (
          <div
            key={s.label}
            className="border-r border-white/15 px-10 py-6 text-center last:border-r-0"
          >
            <Counter
              value={s.value}
              suffix={s.suffix}
              className="font-display text-[2.6rem] leading-none tracking-[0.04em] text-white"
            />
            <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
