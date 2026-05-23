export default function MissionBlock() {
  return (
    <section
      className="relative w-full overflow-hidden bg-teal-dark px-4 pt-20 pb-24 md:pb-32 md:[clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]"
      aria-labelledby="mission-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          id="mission-heading"
          className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-amber-accent"
        >
          Why We Exist
        </h2>

        <span
          aria-hidden="true"
          className="mb-2 block font-serif text-7xl font-black leading-none text-amber-accent"
        >
          "
        </span>

        <blockquote className="mb-12 border-l-4 border-amber-accent pl-6 font-serif text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          We believe young people in Kenya should not have to leave their community behind to find confidence, safety, opportunity, and the{" "}
          <em className="not-italic text-amber-accent">fullness of life</em>.
        </blockquote>

        <div className="max-w-3xl border-t border-teal-200/25 pt-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-light">Vision</h3>
          <p className="text-base leading-relaxed text-teal-200 sm:text-lg">
            An empowered community where every person — regardless of gender, age, or
            background — can access the resources and support they need to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
