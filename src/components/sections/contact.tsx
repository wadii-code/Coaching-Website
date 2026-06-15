"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion/reveal";
import { GOALS, SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const labelCls =
  "block px-[18px] pt-3.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground";
const inputCls =
  "w-full border-b-2 border-transparent bg-card px-[18px] pb-4 pt-2 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-crimson";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Phase 5 will validate with zod + a honeypot, then write to Supabase
    // and notify the admin by email via a rate-limited server action.
    setSent(true);
    toast.success("Application sent — we'll be in touch within 24 hours.");
  }

  return (
    <section id="contact" className="bg-background px-6 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          {/* Left — info + socials */}
          <Reveal>
            <span className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-crimson">
              Ready to Begin
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[0.03em] text-foreground">
              Start Your <span className="text-crimson">Journey</span>
            </h2>
            <div className="mb-8 mt-6 h-[3px] w-12 bg-crimson" />
            <p className="mb-10 text-[0.95rem] leading-[1.8] text-[#aaaaaa]">
              The application takes under 2 minutes. Tell us your goals,
              we&apos;ll tell you exactly how we can help. No commitment required
              until you decide it&apos;s the right fit.
            </p>
            <div className="flex flex-col gap-0.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.code}
                  href={s.href}
                  className="group flex items-center gap-4 border-l-[3px] border-transparent bg-card px-5 py-4 text-sm font-semibold tracking-[0.06em] text-[#aaaaaa] transition-colors hover:border-crimson hover:bg-[#1a1a1a] hover:text-foreground"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center border border-crimson/30 bg-crimson/10 font-display text-sm tracking-[0.04em] text-crimson">
                    {s.code}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — application form */}
          <Reveal delay={1}>
            <form onSubmit={onSubmit} className="flex flex-col gap-0.5">
              <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                <div className="bg-card">
                  <label htmlFor="firstName" className={labelCls}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Alex"
                    className={inputCls}
                  />
                </div>
                <div className="bg-card">
                  <label htmlFor="lastName" className={labelCls}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Johnson"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="bg-card">
                <label htmlFor="email" className={labelCls}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className={inputCls}
                />
              </div>

              <div className="bg-card">
                <label htmlFor="goal" className={labelCls}>
                  Primary Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  defaultValue=""
                  className={cn(inputCls, "cursor-pointer")}
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

              <div className="bg-card">
                <label htmlFor="message" className={labelCls}>
                  Tell Us About Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Where are you now, where do you want to be, and what's held you back before?"
                  className={cn(inputCls, "resize-none")}
                />
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 bg-card p-8 text-[0.82rem] text-[#aaaaaa]">
                <input
                  type="checkbox"
                  defaultChecked
                  className="size-4 accent-crimson"
                />
                Subscribe to 3OCTBR weekly coaching newsletter
              </label>

              <button
                type="submit"
                disabled={sent}
                className="w-full bg-crimson px-4 py-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-crimson-hover disabled:opacity-70"
              >
                {sent ? "✓ Application Sent!" : "Send Application →"}
              </button>

              <div className="mt-0.5 flex flex-wrap items-center justify-between gap-4 bg-crimson px-9 py-7">
                <div className="text-sm font-semibold text-white/90">
                  <strong className="mb-0.5 block text-lg text-white">
                    Prefer to talk first?
                  </strong>
                  Book a free 30-minute discovery call. No pitch, no pressure.
                </div>
                <a
                  href="#"
                  className="whitespace-nowrap bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#f0f0f0]"
                >
                  Book Free Call
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
