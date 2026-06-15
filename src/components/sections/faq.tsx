"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { FAQS } from "@/lib/data";

export function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-border bg-elevated px-6 py-24 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <span className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-crimson">
              Got Questions
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.03em] text-foreground">
              Frequently
              <br />
              <span className="text-crimson">Asked</span>
            </h2>
            <div className="mt-6 h-[3px] w-12 bg-crimson" />
            <p className="mt-6 text-sm leading-[1.7] text-muted-foreground">
              Still have questions?{" "}
              <Link
                href="#contact"
                className="font-semibold text-crimson hover:underline"
              >
                Book a free discovery call
              </Link>{" "}
              and we&apos;ll walk you through everything.
            </p>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="items-center py-6 text-[0.95rem] font-semibold text-foreground hover:no-underline data-[state=open]:text-crimson [&>svg]:hidden">
                    <span className="pr-4">{f.q}</span>
                    <span className="flex size-7 shrink-0 items-center justify-center border border-border text-xl font-light leading-none transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:border-crimson group-aria-expanded/accordion-trigger:bg-crimson group-aria-expanded/accordion-trigger:text-white">
                      +
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[0.9rem] leading-[1.8] text-foreground/70">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
