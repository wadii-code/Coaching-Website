# 3OCTBR — Professional Polish & Anti-AI Checklist

A prioritized list of changes to make the site feel like a premium brand
built by a real team, not an AI template generator.

---

## 1. Break the Repetitive Layout Patterns

The biggest giveaway right now is that every section follows the same skeleton:
eyebrow text → big Bebas Neue title → crimson divider bar → content grid.
It works, but it screams "templated."

**What to do:**
- Remove the crimson divider bar (`h-[3px] w-12 bg-crimson`) from at least half the sections. Use it as a rare accent, not a constant.
- Vary section layouts: some sections should have no eyebrow at all, just a bold heading. Some should lead with the content, not the heading.
- Change the spacing. Sections all use `py-24 md:py-28`. Mix it up — some sections tighter (py-16), some wider (py-32+). This creates rhythm.
- The `SectionHeading` component is used in 7 sections. Each looks identical. Consider 2–3 variations: one with eyebrow + divider, one with just a heading, one left-aligned with no decorative elements.

---

## 2. Rewrite the Copy to Sound Human

AI-generated copy has a specific cadence: long sentences with em dashes, words like
"sustainable," "uncompromising," "science-backed," and "evidence-based" repeated
constantly. The current text does all of this.

**What to do:**
- Hero heading: "Unlock Your Potential. Transform. Elevate Your Life." — this says nothing. Replace with something specific to Aimad's actual story or a concrete promise. "Stop Guessing. Start Training with Proof." or something that reveals a real personality.
- The "Who We Are" section talks about "October — the third month of Q4." This is the brand origin story and it's buried in a generic paragraph. Lead with it. Make it the hook, not the footnote.
- Service descriptions are all the same length (2–3 sentences). Real companies vary. Some descriptions should be punchy ("Personal training that actually works."), some can be longer.
- The coach bio is generic: "Former competitive powerlifter with a passion for building sustainable fitness systems that outlast motivation." This is AI filler. Replace with real details — where did Marcus compete? What was his best total? What made him start coaching?
- Testimonials: "James T." from "Chicago, IL" losing "28 lbs in 16 weeks" feels fabricated. If these are real, use real names, real details, real photos. If they're not, that's the #1 trust killer for a coaching business. Get real testimonials or remove the section entirely.

---

## 3. Remove the Skiper UI Attribution and Dependencies

The footer has a "UI by Skiper" credit link, and the codebase imports
`skiper40` (the `Link000` component). This signals the site was built from
a pre-made UI kit, not a custom design.

**What to do:**
- Remove the "UI by Skiper" link from the footer (`src/components/layout/footer.tsx:70-75`).
- Replace all `Link000` imports with standard Next.js `Link` or a custom link component. The `Link000` is used in `navbar.tsx` and `footer.tsx` — it's just a styled link.
- Delete the `src/components/ui/skiper-ui/skiper40.tsx` file entirely.
- Consider removing any Skiper UI CSS or utility classes that aren't pulling their own weight.

---

## 4. Fix the Visual Inconsistencies

Some elements break the design language:

**What to do:**
- The contact form card uses `rounded-2xl` while everything else uses `rounded-none` or very small radii. Pick one direction: either go sharp-edged everywhere (more editorial/premium) or add slight rounding everywhere. Right now it's mixed.
- The services cards have a crimson bottom-line hover animation. The programs cards have a different hover style. The testimonials have a top-border hover. Pick 1–2 hover patterns max and apply them consistently.
- The hero uses `bg-[#080808]` hardcoded. The dark theme background is also `#080808`. This means the hero doesn't respond to theme changes at all — it's always dark. This is intentional for the hero, but it means the light theme toggle is invisible in the hero. Consider adding a subtle indicator.
- The blog preview cards have gradient placeholder backgrounds (`bg-[linear-gradient(135deg,#1a1a1a_0%,#2a0a10_60%,#1a1a1a_100%)]`). Replace these with real images or at least something that looks intentional, not like a missing asset.

---

## 5. Add Real Content and Imagery

The site currently relies on placeholder content that undermines trust:

**What to do:**
- Replace `/images/coach.png` with an actual high-quality photo of the coach. If the photo isn't ready, use a styled silhouette or abstract composition — not a missing image.
- Gallery images (`/images/gallery/g1-g4.png`) — these need to be real training photos. Use consistent editing (same color grade, similar framing) so the gallery feels curated, not random.
- Blog: either create the actual blog posts or remove the blog preview section entirely. Linking to `/blog/science-of-sustainable-fat-loss` that doesn't exist is worse than not having a blog.
- Social links in `data.ts` all point to `#`. Either link to real profiles or remove the social section from the contact area. Dead social links are worse than no social links.
- The "Book Free Call" button links to `#`. Connect it to a real Calendly or scheduling tool, or remove it.

---

## 6. Tighten the Spacing and Typography

AI-generated sites tend to have too much whitespace and too-safe typography choices:

**What to do:**
- The `clamp(2.4rem, 5vw, 5rem)` heading size is safe but doesn't feel bold. For a fitness brand, push the hero heading larger. Consider `clamp(3rem, 7vw, 7rem)` or more.
- Line height on body text is `leading-[1.7]` to `leading-[1.8]` everywhere. That's generous. Tighten it to `leading-relaxed` (1.625) or even `leading-[1.6]` in some places for a more editorial feel.
- The `tracking-[0.22em]` on eyebrow text is very wide. It's a common AI pattern. Try `tracking-[0.15em]` — still uppercase and spaced, but less "designery."
- Service cards all have `p-9`. The programs cards have `p-10`. The testimonials have `p-9`. The contact form has `p-7 md:p-9`. Standardize these — use the same padding scale throughout.
- The gap of `0.5` (2px) between grid items (`gap-0.5`) is used in 4+ sections. It creates a "masonry grid" look that's very trendy right now. Consider using it in 1–2 sections max, and using larger gaps or borders elsewhere.

---

## 7. Fix the Process Section

The sticky-card scroll animation in `process.tsx` is the most "AI template" element
on the site. It's a copy of a popular Skiper UI pattern and every AI-generated
landing page uses something similar.

**What to do:**
- Option A: Replace the sticky scroll animation with a simpler horizontal timeline or a vertical step list with alternating layout. Less flashy, but more professional.
- Option B: Keep the animation but reduce the scale effect. Currently each card scales from 1.0 to 0.96–1.0. The effect is barely visible and just adds complexity. Either make it more dramatic or remove it.
- Option C: Replace with a static 2x2 grid of the 4 steps, with icons or illustrations. This is more scannable and loads faster.

---

## 8. Add Trust Signals That Aren't Generic

AI sites use generic social proof. Real coaching businesses use specific,
verifiable proof.

**What to do:**
- Replace "500+ Clients Coached" with a more specific number if possible: "487 transformations completed" sounds more real than "500+."
- Add real platform ratings: "4.9★ on Google Reviews" with a link to the actual review page. Not just a number — a clickable source.
- Add logos of publications, podcasts, or certifications the coach has been featured in. Even a simple "As seen in" row with 3–4 logos adds credibility.
- The cert badges (NSCA-CSCS, Pn1, FMS Level 2, CPPS) are good. Consider adding the issuing organization logos next to them instead of just text badges.
- If there are real client photos, add a carousel or grid of client transformation photos with consent. Before/after is the #1 trust signal for fitness coaching.

---

## 9. Clean Up Technical Debt

**What to do:**
- The `package.json` has `"version": "0.1.0"`. Bump to `1.0.0` when the site goes live.
- The copyright year in the footer is `© 2025`. Update it to `© 2026` or make it dynamic with `new Date().getFullYear()`.
- The `next.config.ts` should have proper image domains configured for any external images.
- Add a proper `<link rel="icon">` (favicon) and OG image for social sharing.
- The env file (`NEXT_PUBLIC_SITE_URL`) defaults to `localhost:3000` — make sure this is set correctly for production.
- Remove the `process-stack.png`, `foundation-home.png`, `about-coach.png`, and other root-level PNG files. They look like development artifacts that shouldn't be committed.

---

## 10. Add Micro-Interactions That Feel Intentional, Not Automated

AI sites tend to animate everything with the same fade-in-up pattern.
Real premium sites are selective about motion.

**What to do:**
- The `Reveal` component wraps almost every element on the page. This makes everything animate on scroll, which dilutes the effect. Use it on 40–50% of elements, not 100%.
- Add hover micro-interactions to the nav links, footer links, and social links. Currently the nav links just change color. Consider an underline slide-in or a subtle scale.
- The counter animation (counting up numbers) is good but fires on every scroll. Make sure it only triggers once per page load.
- Consider adding a subtle page transition or a loading skeleton for the initial render.

---

## Priority Order

1. **Fix broken links** (social links, blog routes, Book Free Call) — immediate trust killer
2. **Remove Skiper UI attribution** — easy win, removes "template" signal
3. **Rewrite hero heading and copy** — biggest impact on perceived quality
4. **Get real photos and testimonials** — #1 trust factor for coaching businesses
5. **Break the section heading pattern** — removes the biggest AI tell
6. **Clean up technical debt** (favicon, copyright, config) — polish details
7. **Tighten spacing and typography** — subtle but noticeable
8. **Replace or simplify the Process section** — removes most obvious template element
9. **Standardize card padding and hover patterns** — consistency
10. **Be selective with animations** — less is more
