"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ScrollStroke } from "@/components/ui/scroll-stroke";
import { cn } from "@/lib/utils";

/**
 * Parallax column gallery adapted from Skiper UI skiper30 (Lenis removed —
 * Framer's useScroll drives the parallax). Four Higgsfield training shots are
 * distributed across the four columns / twelve panels.
 */

const G = (n: number) => `/images/gallery/g${n}.webp`;

const COLS = [
  [G(1), G(2), G(3)],
  [G(4), G(1), G(2)],
  [G(3), G(4), G(1)],
  [G(2), G(3), G(4)],
];

function Panel({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border">
      <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
    </div>
  );
}

function Column({
  images,
  y,
  className,
}: {
  images: string[];
  y: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        "relative flex h-full w-1/4 min-w-[160px] flex-col gap-[2vw] will-change-transform",
        className,
      )}
    >
      {images.map((src, i) => (
        <Panel key={i} src={src} />
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

  const ys = [y, y2, y3, y4];
  const tops = ["-top-[45%]", "-top-[95%]", "-top-[45%]", "-top-[75%]"];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-background pt-24 md:pt-28"
    >
      <ScrollStroke className="opacity-[0.12]" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-20">
        <Reveal>
          <SectionHeading eyebrow="Inside the Work" divider={false}>
            The <span className="text-crimson">Grind</span>
          </SectionHeading>
        </Reveal>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        {COLS.map((images, idx) => (
          <Column key={idx} images={images} y={ys[idx]} className={tops[idx]} />
        ))}
      </div>
    </section>
  );
}
