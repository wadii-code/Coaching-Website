"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ScrollStroke } from "@/components/ui/scroll-stroke";
import { cn } from "@/lib/utils";

/**
 * Parallax column gallery adapted from Skiper UI skiper30 (Lenis removed —
 * Framer's useScroll drives the parallax directly). Panels are themed
 * placeholders; real photography (e.g. Higgsfield) can drop straight in.
 */

const PANELS = [
  "Strength",
  "Conditioning",
  "Mobility",
  "Hypertrophy",
  "Nutrition",
  "Power",
  "Recovery",
  "Endurance",
  "Discipline",
  "Form",
  "Mindset",
  "Progress",
];

const GRADIENTS = [
  "linear-gradient(135deg,#1a1a1a_0%,#2a0a10_60%,#161616_100%)",
  "linear-gradient(135deg,#161616_0%,#3a0c18_55%,#1a1a1a_100%)",
  "linear-gradient(135deg,#1c1c1c_0%,#240810_60%,#141414_100%)",
];

function Panel({ label, i }: { label: string; i: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border">
      <div
        className="flex h-full w-full items-center justify-center"
        style={{ backgroundImage: GRADIENTS[i % GRADIENTS.length] }}
      >
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <span className="relative font-display text-2xl uppercase tracking-[0.12em] text-foreground/70">
          {label}
        </span>
      </div>
    </div>
  );
}

function Column({
  items,
  y,
  className,
}: {
  items: { label: string; i: number }[];
  y: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        "relative flex h-full w-1/4 min-w-[160px] flex-col gap-[2vw]",
        className,
      )}
    >
      {items.map((p) => (
        <Panel key={p.label} label={p.label} i={p.i} />
      ))}
    </motion.div>
  );
}

export function Gallery() {
  const gallery = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => setHeight(window.innerHeight);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const cols = [
    { items: indexed([PANELS[0], PANELS[1], PANELS[2]], 0), y, top: "-top-[45%]" },
    { items: indexed([PANELS[3], PANELS[4], PANELS[5]], 1), y: y2, top: "-top-[95%]" },
    { items: indexed([PANELS[6], PANELS[7], PANELS[8]], 2), y: y3, top: "-top-[45%]" },
    { items: indexed([PANELS[9], PANELS[10], PANELS[11]], 0), y: y4, top: "-top-[75%]" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-background pt-24 md:pt-28"
    >
      <ScrollStroke className="opacity-[0.12]" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-20">
        <Reveal>
          <SectionHeading eyebrow="Inside the Work">
            The <span className="text-crimson">Grind</span>
          </SectionHeading>
        </Reveal>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        {cols.map((c, idx) => (
          <Column key={idx} items={c.items} y={c.y} className={c.top} />
        ))}
      </div>
    </section>
  );
}

function indexed(labels: string[], base: number) {
  return labels.map((label, k) => ({ label, i: base + k }));
}
