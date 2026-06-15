"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { Link000 } from "@/components/ui/skiper-ui/skiper40";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <Link
          href="#hero"
          className="font-display text-3xl tracking-[0.1em] text-foreground"
        >
          3<span className="text-crimson">/</span>OCTBR
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <Link000
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link000>
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

        <div className="flex items-center gap-2 md:hidden">
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
      </header>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-40 flex-col items-center justify-center gap-8 bg-background md:hidden",
          open ? "flex" : "hidden",
        )}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl tracking-[0.1em] text-foreground transition-colors hover:text-crimson"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setOpen(false)}
          className="font-display text-4xl tracking-[0.1em] text-crimson"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
