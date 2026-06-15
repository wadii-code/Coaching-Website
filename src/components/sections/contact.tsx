"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SmoothInput } from "@/components/ui/smooth-input";
import { GOALS, SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const fieldLabel =
  "mb-2 block font-condensed text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground";
const selectTextareaCls =
  "w-full rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-crimson";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(true);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Phase 5 will validate with zod + a honeypot, then write to Supabase and
    // notify the admin by email via a rate-limited server action.
    setSent(true);
    toast.success("Application sent — we'll be in touch within 24 hours.");
  }

  return (
    <section id="contact" className="bg-background px-6 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Left — info + socials */}
          <Reveal>
            <span className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-crimson">
              Ready to Begin
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.03em] text-foreground">
              Start Your <span className="text-crimson">Journey</span>
            </h2>
            <div className="mb-8 mt-6 h-[3px] w-12 bg-crimson" />
            <p className="mb-10 max-w-md text-[0.95rem] leading-[1.8] text-foreground/70">
              The application takes under 2 minutes. Tell us your goals,
              we&apos;ll tell you exactly how we can help. No commitment required
              until you decide it&apos;s the right fit.
            </p>
            <div className="flex flex-col gap-0.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.code}
                  href={s.href}
                  className="group flex items-center gap-4 rounded-lg border-l-[3px] border-transparent bg-card px-5 py-4 text-sm font-semibold tracking-[0.06em] text-foreground/70 transition-colors hover:border-crimson hover:bg-accent hover:text-foreground"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-crimson/30 bg-crimson/10 font-display text-sm tracking-[0.04em] text-crimson">
                    {s.code}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — redesigned application card */}
          <Reveal delay={1}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20">
              <div className="h-1 w-full bg-crimson" />
              <div className="p-7 md:p-9">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-crimson">
                      Application
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Under 2 minutes · No commitment
                    </p>
                  </div>
                  <span className="rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-crimson">
                    Free
                  </span>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={fieldLabel}>
                        First name
                      </label>
                      <SmoothInput
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Alex"
                        fontSize={16}
                        wrapperClassName="rounded-xl p-3.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={fieldLabel}>
                        Last name
                      </label>
                      <SmoothInput
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Johnson"
                        fontSize={16}
                        wrapperClassName="rounded-xl p-3.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={fieldLabel}>
                      Email address
                    </label>
                    <SmoothInput
                      id="email"
                      name="email"
                      inputMode="email"
                      required
                      placeholder="alex@example.com"
                      fontSize={16}
                      wrapperClassName="rounded-xl p-3.5"
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className={fieldLabel}>
                      Primary goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      defaultValue=""
                      className={cn(selectTextareaCls, "cursor-pointer")}
                    >
                      <option value="" disabled>
                        Select your main objective
                      </option>
                      {GOALS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={fieldLabel}>
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Where are you now, where do you want to be, and what's held you back before?"
                      className={cn(selectTextareaCls, "resize-none")}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setAgree((a) => !a)}
                    aria-pressed={agree}
                    className="flex w-full items-center gap-3 text-left"
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded border transition-colors",
                        agree
                          ? "border-crimson bg-crimson text-white"
                          : "border-border",
                      )}
                    >
                      {agree && <Check className="size-3.5" strokeWidth={3} />}
                    </span>
                    <span className="text-sm text-foreground/70">
                      Subscribe to the 3OCTBR weekly coaching newsletter
                    </span>
                  </button>

                  <button
                    type="submit"
                    disabled={sent}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-crimson-hover disabled:opacity-70"
                  >
                    {sent ? "✓ Application Sent" : "Send Application"}
                    {!sent && (
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-crimson px-7 py-6 md:px-9">
                <div className="text-sm font-semibold text-white/90">
                  <strong className="block text-base text-white">
                    Prefer to talk first?
                  </strong>
                  Book a free 30-minute discovery call. No pitch, no pressure.
                </div>
                <a
                  href="#"
                  className="whitespace-nowrap rounded-lg bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white/90"
                >
                  Book Free Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
