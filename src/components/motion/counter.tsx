"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
  suffixClassName?: string;
};

/**
 * Counts up from 0 to `value` when scrolled into view (cubic ease-out, matching
 * the original RAF counter). The suffix (+, %, ★) is rendered in accent colour.
 */
export function Counter({
  value,
  suffix = "",
  decimals = 0,
  durationMs = 1800,
  className,
  suffixClassName = "text-crimson",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? value : 0));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: EASE,
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value, durationMs, reduce]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
