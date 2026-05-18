export default function MissionBlock() {
  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-20"
      aria-labelledby="mission-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          id="mission-heading"
          className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-amber-accent"
        >
          Why We Exist
        </h2>

        <blockquote className="mb-12 font-serif font-bold leading-tight text-teal-dark"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          We believe young people in Kenya should not have to leave their community behind to find confidence, safety, opportunity, and the{" "}
          <em className="not-italic text-amber-accent">fullness of life</em>.
        </blockquote>

        <div className="grid gap-5 border-t border-stone-200 pt-8 md:grid-cols-3">
          <div className="rounded-2xl bg-teal-dark p-6 text-white">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-light">Vision</h3>
            <p className="text-base leading-relaxed text-teal-50">
              An empowered community where every person — regardless of gender, age, or
              background — can access the resources and support they need to thrive.
            </p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-6">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-accent">How</h3>
            <p className="text-base leading-relaxed text-stone-700">
              Through school seminars, safe spaces, referrals, leadership forums, and practical skills programs.
            </p>
          </div>
          <div className="rounded-2xl bg-teal-50 p-6">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-primary">Where</h3>
            <p className="text-base leading-relaxed text-stone-700">
              Community-rooted work across Homa Bay County, built with families, schools, churches, and local partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
