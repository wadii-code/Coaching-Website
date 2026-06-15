/**
 * Static site content ported from the original 3OCTBR single-page site.
 * In later phases the dynamic collections (testimonials, posts, programs)
 * will be sourced from Supabase; the shapes here mirror those tables.
 */

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#transformations" },
  { label: "Programs", href: "#programs" },
  { label: "Blog", href: "#blog" },
] as const;

export type Stat = { value: number; suffix: string; label: string; decimals?: number };

export const HERO_STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Clients Coached" },
  { value: 94, suffix: "%", label: "Success Rate" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

export const RESULT_STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Clients Coached" },
  { value: 94, suffix: "%", label: "Client Success Rate" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
];

export const PILLARS = [
  {
    title: "Evidence-Based",
    body: "Every program grounded in peer-reviewed research and measurable outcomes.",
  },
  {
    title: "Accountability",
    body: "Weekly check-ins, progress tracking, and a coach who doesn't let you make excuses.",
  },
  {
    title: "Individualized",
    body: "No two bodies are the same. Your plan is built for you, not copied from someone else.",
  },
  {
    title: "Sustainable",
    body: "We build habits that last long after your coaching program ends.",
  },
] as const;

export const COACH = {
  name: "Marcus R.",
  title: "Head Coach & Founder, 3OCTBR",
  bio: "8+ years in performance coaching across professional athletes, corporate executives, and everyday individuals seeking transformation. Former competitive powerlifter with a passion for building sustainable fitness systems that outlast motivation.",
  certs: ["NSCA-CSCS", "Pn1 Nutrition", "FMS Level 2", "CPPS"],
} as const;

export const SERVICES = [
  {
    n: "01",
    name: "1-on-1 Online Coaching",
    desc: "A fully personalized coaching relationship with direct access to your coach, custom programming, and dedicated accountability support throughout your journey.",
  },
  {
    n: "02",
    name: "Personalized Training Programs",
    desc: "Custom-built training plans designed around your goals, equipment, schedule, and current fitness level — reviewed and updated every 4 weeks.",
  },
  {
    n: "03",
    name: "Fat Loss Transformation",
    desc: "A science-backed approach to sustainable fat loss that preserves muscle, maintains performance, and avoids the metabolic damage of crash dieting.",
  },
  {
    n: "04",
    name: "Muscle Building Programs",
    desc: "Progressive overload protocols, hypertrophy science, and nutritional support to build size and strength efficiently — without unnecessary bulk or wasted effort.",
  },
  {
    n: "05",
    name: "Sports Performance Coaching",
    desc: "Sport-specific strength and conditioning for competitive athletes — improving power, speed, endurance, and injury resilience for peak on-field performance.",
  },
  {
    n: "06",
    name: "Nutrition & Habit Coaching",
    desc: "Flexible, practical nutrition guidance paired with behavioral habit coaching — because the best nutrition plan is one you can actually stick to long-term.",
  },
] as const;

export type Testimonial = {
  initials: string;
  name: string;
  meta: string;
  result: string;
  quote: string;
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "JT",
    name: "James T.",
    meta: "Fat Loss Transformation · Chicago, IL",
    result: "↓ 28 lbs · 16 Weeks",
    featured: true,
    quote:
      "I'd tried everything before 3OCTBR. What made the difference wasn't just the program — it was the accountability. Marcus checks in twice a week, adjusts when life gets in the way, and actually cares whether you succeed. I've kept the weight off for over a year now.",
  },
  {
    initials: "DM",
    name: "David M.",
    meta: "Muscle Building · Austin, TX",
    result: "+18 lbs Muscle · 6 Months",
    quote:
      "I came in as a skinny guy who'd tried to bulk for years without results. 3OCTBR identified exactly what I was doing wrong and built me a system that finally worked. The results are visible, the strength gains are real, and I finally feel confident in my own body.",
  },
  {
    initials: "SR",
    name: "Sofia R.",
    meta: "Sports Performance · Miami, FL",
    result: "PR by 40% · 12 Weeks",
    quote:
      "As a competitive CrossFit athlete, I needed a coach who understood sport-specific programming. 3OCTBR delivered. My squat, deadlift, and benchmark workouts all hit new PRs within three months. The sport performance protocols are elite.",
  },
];

export type Program = {
  tier: string;
  name: string;
  price: number;
  period: string;
  featured?: boolean;
  badge?: string;
  cta: string;
  features: { text: string; dim?: boolean }[];
};

export const PROGRAMS: Program[] = [
  {
    tier: "Starter",
    name: "Essential Coaching",
    price: 149,
    period: "per month · cancel anytime",
    cta: "Get Started",
    features: [
      { text: "Custom training program (updated monthly)" },
      { text: "Basic nutrition guidelines & macros" },
      { text: "Weekly check-in via app" },
      { text: "Access to 3OCTBR exercise library" },
      { text: "Monthly video review call (30 min)" },
      { text: "Daily coach messaging", dim: true },
      { text: "Sport performance protocols", dim: true },
      { text: "Advanced body composition analysis", dim: true },
    ],
  },
  {
    tier: "Recommended",
    name: "Premium Coaching",
    price: 299,
    period: "per month · cancel anytime",
    featured: true,
    badge: "Most Popular",
    cta: "Get Started",
    features: [
      { text: "Custom training program (updated bi-weekly)" },
      { text: "Full nutrition plan with meal timing" },
      { text: "Bi-weekly check-in calls (45 min)" },
      { text: "Daily messaging with same-day response" },
      { text: "Progress tracking & body composition analysis" },
      { text: "Habit coaching & mindset work" },
      { text: "Form video review & feedback" },
      { text: "Sport performance protocols", dim: true },
    ],
  },
  {
    tier: "Full Access",
    name: "Elite Transformation",
    price: 499,
    period: "per month · min 3-month commitment",
    cta: "Apply Now",
    features: [
      { text: "Everything in Premium, plus:" },
      { text: "Weekly 1-on-1 strategy sessions (60 min)" },
      { text: "Sport performance & athletic protocols" },
      { text: "Advanced periodization & peaking programs" },
      { text: "24/7 coach access via priority channel" },
      { text: "Quarterly deep-dive body comp assessment" },
      { text: "Direct lifestyle & recovery coaching" },
      { text: "VIP access to 3OCTBR community & events" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Apply",
    desc: "Fill out our short application form. Tell us about your goals, your history, and what's held you back before. There's no judgment — only clarity.",
  },
  {
    n: "02",
    title: "Assessment & Goal Setting",
    desc: "We conduct an in-depth onboarding call to map your physiology, lifestyle, and non-negotiables — then lock in concrete, measurable goals together.",
  },
  {
    n: "03",
    title: "Your Customized Plan",
    desc: "Within 48 hours, you receive a fully individualized training and nutrition plan. Delivered through our app — clear, structured, and ready to execute.",
  },
  {
    n: "04",
    title: "Ongoing Support & Results",
    desc: "Regular check-ins, program adjustments, and a coach in your corner every step of the way — until the results speak for themselves.",
  },
] as const;

export type Post = {
  slug: string;
  tag: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  emoji: string;
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "science-of-sustainable-fat-loss",
    tag: "Featured",
    category: "Nutrition",
    date: "Jun 1, 2025",
    readTime: "8 min read",
    featured: true,
    emoji: "🏋️",
    title: "The Science of Sustainable Fat Loss: Why Slow Wins the Race",
    excerpt:
      "Crash diets destroy muscle, wreck hormones, and set you up to regain every pound. Here's what the research actually says about optimizing fat loss while preserving everything you've built — and how we apply it at 3OCTBR.",
  },
  {
    slug: "progressive-overload-build-muscle",
    tag: "Training",
    category: "Training",
    date: "May 20, 2025",
    readTime: "6 min read",
    emoji: "💪",
    title: "Progressive Overload: The Only Principle You Need to Build Muscle",
    excerpt:
      "Most lifters train hard but progress slowly. The reason is almost always the same — and the fix is simpler than you think.",
  },
  {
    slug: "discipline-over-motivation",
    tag: "Mindset",
    category: "Mindset",
    date: "May 10, 2025",
    readTime: "5 min read",
    emoji: "🧠",
    title: "Discipline Over Motivation: Building a Fitness Identity That Sticks",
    excerpt:
      "Motivation is a feeling. Discipline is a system. Here's how to engineer your environment so showing up becomes automatic — even when life gets hard.",
  },
];

export const FAQS = [
  {
    q: "Do I need gym access or can I train at home?",
    a: "Both work. During onboarding we assess your equipment access and build your program around what you actually have. Whether that's a fully equipped commercial gym, a home rack, or just a set of dumbbells — we create the most effective program possible for your situation.",
  },
  {
    q: "How experienced do I need to be?",
    a: "Zero experience required. We coach complete beginners through competitive athletes. Your program is built from where you are right now, not from where we wish you were. More important than your starting point is your commitment to the process.",
  },
  {
    q: "What does the nutrition coaching include?",
    a: "Nutrition coaching ranges from simple macro targets (Essential) to comprehensive meal timing, food selection guidance, and habit-based behavioral coaching (Premium/Elite). We use a flexible dieting approach — no rigid meal plans unless you specifically request them. The goal is to build a healthy relationship with food, not create dependency on a specific system.",
  },
  {
    q: "How long until I see results?",
    a: "Measurable results — improved strength, body composition shifts, better energy — typically emerge within 4–6 weeks for compliant clients. Significant visual transformation usually takes 12–16 weeks. We set realistic timelines during onboarding based on your specific goals, so you always know what to expect and when.",
  },
  {
    q: "Can I cancel my coaching at any time?",
    a: "Essential and Premium plans are month-to-month with no cancellation fees — cancel anytime with 7 days' notice. The Elite Transformation Program requires a 3-month minimum commitment, because the results we're targeting together require that runway. After your initial commitment, it becomes month-to-month.",
  },
  {
    q: "Is online coaching as effective as in-person?",
    a: "For the vast majority of clients, yes — and often more so. Online coaching removes geographic limitations, lets you train at your own schedule, and creates a level of written accountability that often exceeds in-person sessions. Our video review system, detailed programming app, and regular check-ins replicate the essentials of in-person coaching without the constraints.",
  },
] as const;

export const GOALS = [
  "Fat Loss & Body Recomposition",
  "Muscle Building & Strength",
  "Sports Performance",
  "General Fitness & Health",
  "Post-Injury Recovery & Reconditioning",
] as const;

export const SOCIALS = [
  { code: "IG", label: "@3OCTBR on Instagram", href: "#" },
  { code: "TT", label: "@3OCTBR on TikTok", href: "#" },
  { code: "YT", label: "3OCTBR on YouTube", href: "#" },
  { code: "FB", label: "3OCTBR on Facebook", href: "#" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Results", href: "#transformations" },
      { label: "Programs", href: "#programs" },
      { label: "Process", href: "#process" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Essential Coaching", href: "#programs" },
      { label: "Premium Coaching", href: "#programs" },
      { label: "Elite Transformation", href: "#programs" },
      { label: "Fat Loss Programs", href: "#services" },
      { label: "Muscle Building", href: "#services" },
      { label: "Sports Performance", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Start Application", href: "#contact" },
      { label: "Book Discovery Call", href: "#contact" },
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
] as const;
