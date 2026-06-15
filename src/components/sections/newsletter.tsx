"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SmoothInput } from "@/components/ui/smooth-input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Phase 5 will POST this to Supabase via a rate-limited server action.
    setDone(true);
    setEmail("");
    toast.success("You're in — welcome to 3OCTBR Intel.");
  }

  return (
    <section
      id="newsletter"
      className="border-y border-border bg-elevated px-6 py-16 md:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-crimson">
            Stay Ahead
          </span>
          <h3 className="mt-2 font-display text-4xl tracking-[0.04em] text-foreground">
            Weekly Coaching <span className="text-crimson">Intel</span>
          </h3>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex w-full min-w-0 max-w-[520px] items-stretch gap-2"
        >
          <SmoothInput
            type="text"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={done}
            placeholder="Enter your email address"
            aria-label="Email address"
            fontSize={17}
            wrapperClassName="flex-1 rounded-xl p-3.5"
          />
          <button
            type="submit"
            disabled={done}
            className="whitespace-nowrap rounded-xl bg-crimson px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-crimson-hover disabled:opacity-70"
          >
            {done ? "✓ Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
