import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/10 blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="font-condensed text-sm uppercase tracking-[0.4em] text-crimson">
          Elite Performance Coaching
        </span>
        <h1 className="mt-4 font-display text-7xl leading-none tracking-tight text-foreground sm:text-8xl md:text-9xl">
          3<span className="text-crimson">/</span>OCTBR
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Foundation online — Next.js 16, the dark/crimson brand theme, Bebas
          Neue / Inter / Barlow Condensed type, and shadcn + Skiper UI are wired.
          The full landing page is next.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="glow-crimson">
            Start Your Journey
          </Button>
          <Button size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </div>
    </main>
  );
}
