"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { AnimatedLink } from "@/components/ui/animated-link";
import { NAV_LINKS } from "@/lib/data";

const menuItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 transition-colors duration-300 md:px-12",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <Link
          href="#hero"
          className="font-display text-3xl tracking-[0.1em] text-foreground"
        >
          3<span className="text-crimson">/</span>OCTBR
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <AnimatedLink
              key={l.href}
              href={l.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-foreground",
                active === l.href ? "text-crimson" : "text-muted-foreground",
              )}
            >
              {l.label}
            </AnimatedLink>
          ))}
          <ThemeToggleButton />
          <Button
            asChild
            size="sm"
            className="text-xs font-semibold uppercase tracking-[0.16em]"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggleButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center text-foreground"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Scroll progress — hairline crimson bar along the header's bottom edge */}
        <motion.span
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-crimson"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col items-center justify-center gap-8 bg-background lg:hidden"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                custom={i}
                variants={menuItem}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl tracking-[0.1em] text-foreground transition-colors hover:text-crimson"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={NAV_LINKS.length}
              variants={menuItem}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-display text-4xl tracking-[0.1em] text-crimson"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
