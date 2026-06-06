import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24"
      aria-label="Call to action"
    >
      <div
        data-testid="cta-split-background"
        className="absolute inset-0 grid grid-rows-2 md:block"
        aria-hidden="true"
      >
        <div
          data-testid="cta-teal-panel"
          className="bg-teal-dark md:absolute md:inset-0 md:[clip-path:polygon(0_0,58%_0,48%_100%,0_100%)]"
        />
        <div
          data-testid="cta-amber-panel"
          className="bg-amber-accent md:absolute md:inset-0 md:[clip-path:polygon(58%_0,100%_0,100%_100%,48%_100%)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-96 max-w-7xl flex-col items-center justify-center gap-8 text-center md:min-h-80">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-100">
            Take action
          </p>
          <h2
            className="font-serif font-black leading-tight text-center text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Help a young person meet the next open door.
          </h2>
        </div>

        <div
          data-testid="cta-actions"
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/donate"
            className="inline-flex min-w-44 items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-teal-dark"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="inline-flex min-w-44 items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-teal-dark"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
