const WORDS = [
  "Discipline",
  "Strength",
  "Accountability",
  "Nutrition",
  "Consistency",
  "Power",
  "Mindset",
  "Recovery",
];

function Row() {
  return (
    <div className="flex w-max shrink-0 items-center">
      {WORDS.map((w) => (
        <span
          key={w}
          className="flex items-center font-display text-4xl uppercase tracking-[0.06em] text-foreground/30 md:text-5xl"
        >
          <span className="px-8">{w}</span>
          <span className="text-crimson/60">/</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Infinite word marquee between hero and about — sets the brand cadence.
 * Two identical rows translate -50% for a seamless loop; pauses on hover.
 */
export function MarqueeBand() {
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-border bg-elevated py-6"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </section>
  );
}
