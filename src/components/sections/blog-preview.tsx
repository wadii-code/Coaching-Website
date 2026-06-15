import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { POSTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-background px-6 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionHeading eyebrow="Knowledge & Education">
            From the <span className="text-crimson">Blog</span>
          </SectionHeading>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={cn(
                  "group block overflow-hidden bg-card transition-transform duration-300 hover:-translate-y-1",
                  post.featured && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(135deg,#1a1a1a_0%,#2a0a10_60%,#1a1a1a_100%)]">
                  <span className="absolute left-4 top-4 z-10 bg-crimson px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
                    {post.tag}
                  </span>
                  <div className="flex h-full items-center justify-center text-5xl opacity-15 transition-transform duration-500 group-hover:scale-110">
                    {post.emoji}
                  </div>
                </div>
                <div className="p-7">
                  <div className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {post.category} · {post.date} · {post.readTime}
                  </div>
                  <h3
                    className={cn(
                      "mb-3 font-condensed font-bold leading-tight tracking-[0.04em] text-foreground transition-colors group-hover:text-crimson",
                      post.featured ? "text-2xl" : "text-lg",
                    )}
                  >
                    {post.title}
                  </h3>
                  <p
                    className={cn(
                      "leading-relaxed text-muted-foreground",
                      post.featured ? "text-[0.9rem]" : "text-[0.83rem]",
                    )}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
