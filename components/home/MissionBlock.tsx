export default function MissionBlock() {
  return (
    <section
      className="relative bg-teal-dark py-20 px-4 overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Clip-path bottom diagonal */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-stone-bg"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* Giant decorative quote mark */}
      <span
        className="absolute left-4 top-4 font-serif font-black text-white/5 leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 25vw, 22rem)", lineHeight: 1 }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative z-10 max-w-5xl mx-auto">
        <p
          id="mission-heading"
          className="text-xs font-bold tracking-[0.3em] uppercase text-amber-accent mb-8"
        >
          Why We Exist
        </p>

        {/* Pull-quote style mission */}
        <blockquote className="font-serif font-bold text-white leading-tight mb-12"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          A dignified and responsible community where youth, women and vulnerable
          groups enjoy the{" "}
          <em className="not-italic text-amber-accent">fullness of life</em>{" "}
          through education, economic opportunity, health, and social support.
        </blockquote>

        {/* Vision — smaller, right-aligned */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-start md:gap-16">
          <div className="mb-6 md:mb-0">
            <p className="text-xs font-bold tracking-widest uppercase text-teal-light mb-2">Vision</p>
            <p className="text-teal-100 leading-relaxed max-w-md text-base">
              An empowered community where every person — regardless of gender, age, or
              background — can access the resources and support they need to thrive.
            </p>
          </div>
          <div className="flex-shrink-0">
            <p className="text-xs font-bold tracking-widest uppercase text-teal-light mb-2">Founded</p>
            <p className="font-serif font-black text-white/30 text-5xl leading-none">2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
