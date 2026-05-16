import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      {/* Left panel — teal dark, ~55% width */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[58%] bg-teal-dark"
        style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      {/* Right panel — warm stone */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%] bg-stone-bg" aria-hidden="true" />

      {/* Decorative amber line — vertical accent */}
      <div
        className="hidden md:block absolute top-0 bottom-0 w-1 bg-amber-accent opacity-80"
        style={{ left: "55%" }}
        aria-hidden="true"
      />

      {/* Content grid */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left: headline */}
        <div className="flex flex-col justify-center pt-28 pb-16 md:pt-0 md:pr-8">
          <p className="font-sans text-amber-accent font-bold tracking-[0.25em] uppercase text-xs mb-6 animate-fade-slide-in">
            Change Ambassadors Kenya
          </p>
          <h1 className="font-serif font-black text-white leading-none mb-8 animate-fade-slide-up" style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}>
            Define<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-accent to-amber-light">
              Your
            </span><br />
            Limits.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-accent text-white font-bold text-sm uppercase tracking-widest hover:bg-amber-light transition-colors"
            >
              Support Our Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all"
            >
              Our Story →
            </Link>
          </div>
        </div>

        {/* Right: overline text panel */}
        <div className="hidden md:flex flex-col justify-end pb-24 pl-16">
          <div className="border-l-2 border-amber-accent pl-6 mb-8">
            <p className="text-stone-700 text-lg leading-relaxed max-w-xs">
              Empowering youth, women, and vulnerable communities in Homa Bay County through education, health, and economic opportunity since 2018.
            </p>
          </div>
          {/* Vertical issue number — editorial touch */}
          <div className="flex items-center gap-4">
            <span className="font-serif text-7xl font-black text-teal-primary/10 select-none leading-none">
              2018
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Est. Homa Bay</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
