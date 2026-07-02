"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Editorial line-mask reveal: each line slides up from behind an overflow
 * clip, staggered. Used for display headings (hero, section titles).
 */
export function TextReveal({
  lines,
  delay = 0,
  stagger = 0.12,
  className,
  as: Tag = "span",
}: {
  lines: ReactNode[];
  /** Base delay in seconds before the first line. */
  delay?: number;
  stagger?: number;
  className?: string;
  as?: "span" | "div";
}) {
  const reduce = useReducedMotion();

  return (
    <Tag className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            initial={reduce ? { opacity: 0 } : { y: "115%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
