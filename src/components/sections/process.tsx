"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { PROCESS_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";

type Step = (typeof PROCESS_STEPS)[number];

function StepCard({
  i,
  step,
  total,
  progress,
  range,
  targetScale,
}: {
  i: number;
  step: Step;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const featured = i === total - 1;

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 28}px)` }}
        className={cn(
          "relative flex min-h-[58vh] w-full max-w-3xl origin-top flex-col justify-center overflow-hidden rounded-2xl border p-10 md:p-16",
          featured
            ? "border-crimson bg-[linear-gradient(135deg,rgba(196,30,58,0.12)_0%,var(--card)_55%)]"
            : "border-border bg-card",
        )}
      >
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0 opacity-50"
        />
        <span
          aria-hidden
          className="relative font-display text-[9rem] leading-none text-crimson/15 md:text-[12rem]"
        >
          {step.n}
        </span>
        <div className="relative -mt-6">
          <div className="mb-4 flex size-16 items-center justify-center border-2 border-crimson font-display text-3xl tracking-[0.06em] text-crimson">
            {step.n}
          </div>
          <h3 className="mb-4 font-condensed text-3xl font-bold uppercase tracking-[0.08em] text-foreground md:text-4xl">
            {step.title}
          </h3>
          <p className="max-w-xl text-base leading-[1.8] text-foreground/70">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="process"
      className="border-t border-border bg-elevated px-6 pt-24 md:px-20 md:pt-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="How It Works">
            Your Path to <span className="text-crimson">Results</span>
          </SectionHeading>
        </Reveal>
      </div>

      <div ref={container} className="relative mx-auto max-w-[1280px]">
        {PROCESS_STEPS.map((step, i) => {
          const targetScale = 1 - (PROCESS_STEPS.length - i - 1) * 0.04;
          return (
            <StepCard
              key={step.n}
              i={i}
              step={step}
              total={PROCESS_STEPS.length}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
