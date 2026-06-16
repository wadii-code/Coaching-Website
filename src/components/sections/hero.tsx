import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { CtaButton } from "@/components/ui/cta-button";
import { HERO_STATS } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#080808]"
    >
      {/* Background video (falls back to the poster image while loading / if unsupported) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.png"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

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

        <Reveal delay={5}>
          <h1 className="mb-8 font-display text-[clamp(4rem,9vw,9rem)] leading-[0.9] tracking-[0.02em] text-white">
            Stop Guessing.
            <br />
            Start Training
            <br />
            With <span className="text-crimson">Proof.</span>
          </h1>
        </Reveal>

        <Reveal delay={7}>
          <p className="mb-12 max-w-[460px] text-base font-light leading-relaxed text-white/70">
            Every plan is built from your numbers and tuned every week. No
            fluff. Just a system that shows you exactly what&apos;s working and
            what to do next.
          </p>
        </Reveal>

        <Reveal delay={9} className="flex flex-wrap gap-4">
          <CtaButton href="#programs" variant="primary">
            Start Your Journey
          </CtaButton>
          <CtaButton href="#contact" variant="outline" className="text-white">
            Book a Consultation
          </CtaButton>
        </Reveal>
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
