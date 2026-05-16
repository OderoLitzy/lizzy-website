import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action">
      {/* Two-panel diagonal split */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[360px]">
        {/* Left — teal panel */}
        <div
          className="relative bg-teal-dark flex flex-col justify-center px-8 sm:px-16 py-16 md:py-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-accent mb-4">
            Take Action
          </p>
          <h2 className="font-serif font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Ready to Make<br />a Difference?
          </h2>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center self-start px-8 py-4 bg-amber-accent text-white font-bold text-sm uppercase tracking-widest hover:bg-amber-light transition-colors"
          >
            Donate Now
          </Link>
        </div>

        {/* Right — amber/warm panel */}
        <div className="bg-amber-50 flex flex-col justify-center px-8 sm:px-16 py-16 md:py-20 md:pl-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-teal-primary mb-4">
            Join the Team
          </p>
          <h2 className="font-serif font-black text-teal-dark leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            Volunteer Your<br />Skills &amp; Time
          </h2>
          <p className="text-stone-600 text-sm mb-6 leading-relaxed max-w-sm">
            Join us in transforming lives across Homa Bay County. Every contribution — big or small — matters.
          </p>
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center self-start px-8 py-4 border-2 border-teal-dark text-teal-dark font-bold text-sm uppercase tracking-widest hover:bg-teal-dark hover:text-white transition-all"
          >
            Volunteer →
          </Link>
        </div>
      </div>
    </section>
  );
}
