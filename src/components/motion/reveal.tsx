"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplies the base delay (mirrors the original reveal-delay-* classes). */
  delay?: number;
  className?: string;
  y?: number;
};

/**
 * Scroll-triggered fade-up, faithful to the original site's `.reveal` behaviour
 * (opacity 0 → 1, translateY(40px) → 0, fires once on enter). Honours
 * prefers-reduced-motion by rendering content statically.
 */
export function Reveal({ children, delay = 0, className, y = 40 }: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: delay * 0.1, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
