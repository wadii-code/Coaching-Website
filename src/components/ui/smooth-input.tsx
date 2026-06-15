"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Smooth-caret input adapted from Skiper UI skiper106. Changes from the
 * original: the `dialkit` debug-panel dependency is removed (spring/font size
 * are plain props), and the password-mask character is resolved at runtime
 * instead of at module load so it no longer crashes server-side rendering.
 */

const inputWrapperClassName = cn(
  "relative w-full rounded-2xl bg-muted p-4",
  "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
);

const inputClassName =
  "w-full bg-transparent outline-none placeholder:text-foreground/40";

const SPRING = { stiffness: 500, damping: 30, mass: 0.5 } as const;

type SmoothInputType = "text" | "password";

type SmoothInputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  type?: SmoothInputType;
  wrapperClassName?: string;
  fontSize?: number;
};

function resolvePasswordChar() {
  if (typeof navigator === "undefined") return "•";
  return /firefox|fxios/i.test(navigator.userAgent) ? "●" : "•";
}

export function SmoothInput({
  className,
  wrapperClassName,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  placeholder = "smooth input",
  fontSize = 24,
  style,
  ...props
}: SmoothInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const caretX = useMotionValue(0);
  const caretOpacity = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pwCharRef = useRef("•");
  const metricsRef = useRef<{
    ctx: CanvasRenderingContext2D;
    letterSpacing: number;
    caretMargin: number;
    maxMargin: number;
    isPassword: boolean;
    pwCharWidth: number | null;
  } | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isControlled = value !== undefined;
  const inputValue = isControlled ? String(value) : internalValue;

  const springCaretX = useSpring(
    caretX,
    prefersReducedMotion
      ? { stiffness: 10000, damping: 100, mass: 0.1 }
      : SPRING,
  );

  const syncMetrics = () => {
    const input = inputRef.current;
    const container = containerRef.current;
    if (!input || !container) return null;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
      ctxRef.current = canvasRef.current.getContext("2d");
    }
    const ctx = ctxRef.current;
    if (!ctx) return null;

    const styles = window.getComputedStyle(input);
    const isPassword = input.type === "password";
    const pwChar = pwCharRef.current;
    const font =
      pwChar === "•" &&
      isPassword &&
      !navigator.userAgent.match(/chrome|chromium|crios/i)
        ? `${parseFloat(styles.fontSize) + 6.25}px ${styles.fontFamily}`
        : `${styles.fontSize} ${styles.fontFamily}`;
    ctx.font = font;

    const paddingLeft = parseInt(styles.paddingLeft, 10) || 0;
    const letterSpacing = parseInt(styles.letterSpacing, 10) || 0;

    metricsRef.current = {
      ctx,
      letterSpacing,
      caretMargin: paddingLeft,
      maxMargin: (container.offsetWidth || 0) - 10,
      isPassword,
      pwCharWidth: isPassword ? ctx.measureText(pwChar).width : null,
    };
    return metricsRef.current;
  };

  const measurePrefixWidth = (text: string, selectionStart: number) => {
    const metrics = metricsRef.current ?? syncMetrics();
    if (!metrics) return null;
    const { ctx, letterSpacing, caretMargin, maxMargin, isPassword, pwCharWidth } =
      metrics;

    let textWidth: number;
    if (isPassword && pwCharWidth !== null) {
      const charCount = selectionStart;
      textWidth =
        charCount > 0
          ? pwCharWidth * charCount + caretMargin + letterSpacing * (charCount - 1)
          : caretMargin - 1;
    } else {
      const measuredWidth = ctx.measureText(text).width;
      textWidth =
        measuredWidth > 0
          ? measuredWidth +
            caretMargin +
            letterSpacing * Math.max(text.length - 1, 0)
          : caretMargin - 1;
    }
    if (textWidth > maxMargin) return null;
    return textWidth;
  };

  const updateCaretFromInput = (target: HTMLInputElement) => {
    const selectionStart = target.selectionStart ?? 0;
    const selectionEnd = target.selectionEnd ?? 0;
    if (selectionStart !== selectionEnd) {
      caretOpacity.set(0);
      return;
    }
    const textBeforeCaret = metricsRef.current?.isPassword
      ? ""
      : target.value.slice(0, selectionStart);
    const textWidth = measurePrefixWidth(textBeforeCaret, selectionStart);
    if (textWidth === null) return;
    caretOpacity.set(1);
    caretX.set(textWidth);
  };

  const updateCaretRef = useRef(updateCaretFromInput);
  updateCaretRef.current = updateCaretFromInput;

  useEffect(() => {
    pwCharRef.current = resolvePasswordChar();
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (input && document.activeElement === input) {
      updateCaretRef.current(input);
    }
  }, [inputValue]);

  useEffect(() => {
    syncMetrics();
    const input = inputRef.current;
    if (input && document.activeElement === input) {
      updateCaretRef.current(input);
    }
  }, [type, fontSize]);

  useEffect(() => {
    const input = inputRef.current;
    const container = containerRef.current;
    if (!input || !container) return;

    syncMetrics();

    const handleSelectionChange = () => {
      if (document.activeElement === input) updateCaretRef.current(input);
    };
    document.addEventListener("selectionchange", handleSelectionChange);

    const resizeObserver = new ResizeObserver(() => {
      syncMetrics();
      if (document.activeElement === input) updateCaretRef.current(input);
    });
    resizeObserver.observe(container);

    if (document.activeElement === input) updateCaretRef.current(input);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      resizeObserver.disconnect();
      canvasRef.current = null;
      ctxRef.current = null;
    };
  }, []);

  return (
    <div className={cn(inputWrapperClassName, wrapperClassName)}>
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 p-0"
        style={{ caretColor: "transparent", fontSize }}
      >
        <input
          {...props}
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          className={cn(
            inputClassName,
            "col-start-1 col-end-2 row-start-1 row-end-2 text-inherit",
            className,
          )}
          style={style}
          value={inputValue}
          onChange={(e) => {
            if (!isControlled) setInternalValue(e.target.value);
            onChange?.(e);
          }}
          onFocus={(e) => {
            updateCaretRef.current(e.currentTarget);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            caretOpacity.set(0);
            onBlur?.(e);
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none col-start-1 col-end-2 row-start-1 row-end-2 h-[0.9em] w-0.5 self-center bg-crimson"
          style={{ x: springCaretX, opacity: caretOpacity }}
        />
      </div>
    </div>
  );
}
