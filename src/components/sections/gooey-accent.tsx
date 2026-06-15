"use client";

import { motion, type Transition } from "framer-motion";

/**
 * Gooey draggable accent adapted from Skiper UI skiper64. Themed crimson and
 * contained in its own band as an interactive palate-cleanser between sections.
 */

const spring: Transition = { type: "spring", stiffness: 300, damping: 30 };

const INITIAL = { y: 0, width: 56, height: 56, borderRadius: 40 };
const ANIMATED = {
  y: -60,
  width: 210,
  height: 96,
  borderRadius: 12,
  transition: { ...spring, delay: 0.15 },
};

function GooeyFilter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0"
      aria-hidden
    >
      <defs>
        <filter id="octbrGooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4.4" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}

export function GooeyAccent() {
  return (
    <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden border-t border-border bg-elevated">
      <GooeyFilter />
      <div className="absolute top-[8%] z-10 grid content-start justify-items-center gap-6 text-center">
        <span className="font-condensed max-w-[16ch] text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Drag the elements — built to merge under pressure
        </span>
      </div>
      <ul
        className="flex flex-col items-center justify-end"
        style={{ filter: "url(#octbrGooey)" }}
      >
        <motion.li
          drag
          dragSnapToOrigin
          initial={INITIAL}
          animate={ANIMATED}
          className="absolute cursor-grab list-none bg-crimson active:cursor-grabbing"
        />
        <motion.li
          drag
          dragSnapToOrigin
          className="size-14 cursor-grab list-none rounded-full bg-crimson active:cursor-grabbing"
        />
      </ul>
    </section>
  );
}
