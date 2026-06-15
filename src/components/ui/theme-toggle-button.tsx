"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Theme toggle adapted from Skiper UI's skiper26. Uses the View Transitions
 * API for a circular crimson-tinged reveal from the corner, falling back to an
 * instant swap where unsupported. Icon colour follows the theme via currentColor.
 */

type Start = "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

const STYLE_ID = "theme-transition-styles";

function clipPosition(start: Start) {
  switch (start) {
    case "top-left":
      return "0% 0%";
    case "top-right":
      return "100% 0%";
    case "bottom-left":
      return "0% 100%";
    case "bottom-right":
      return "100% 100%";
    default:
      return "50% 50%";
  }
}

function buildCss(start: Start) {
  const pos = clipPosition(start);
  return `
    ::view-transition-group(root) {
      animation-duration: 0.7s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    ::view-transition-new(root) { animation-name: reveal-theme; }
    ::view-transition-old(root),
    .dark::view-transition-old(root) { animation: none; z-index: -1; }
    @keyframes reveal-theme {
      from { clip-path: circle(0% at ${pos}); }
      to { clip-path: circle(150% at ${pos}); }
    }
  `;
}

export function ThemeToggleButton({
  className,
  start = "top-right",
}: {
  className?: string;
  start?: Start;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggle = useCallback(() => {
    if (typeof document === "undefined") return;

    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = buildCss(start);

    const next = resolvedTheme === "dark" ? "light" : "dark";
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => setTheme(next));
  }, [resolvedTheme, setTheme, start]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className={cn(
        "flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent",
        className,
      )}
    >
      <span className="sr-only">Toggle theme</span>
      <svg viewBox="0 0 240 240" className="size-5" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="currentColor"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="currentColor"
            fillOpacity="0.35"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
