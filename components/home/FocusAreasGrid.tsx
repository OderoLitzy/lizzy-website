import type { FocusArea } from "@/lib/content/types";

interface Props {
  areas: FocusArea[];
}

export default function FocusAreasGrid({ areas }: Props) {
  return (
    <section className="overflow-hidden bg-stone-bg py-20" aria-labelledby="focus-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-accent">
              What we do
            </p>
            <h2
              id="focus-heading"
              className="font-serif font-black leading-tight text-teal-dark"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Programs young people can feel.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-600">
            Clear, practical pillars for the issues families raise every day: health, confidence, safety, leadership, and livelihoods.
          </p>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 scrollbar-none md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-5">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className="group relative min-h-72 w-72 flex-shrink-0 cursor-default overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-primary hover:shadow-xl md:w-auto"
            >
              <span
                className="absolute right-3 top-3 select-none font-serif font-black leading-none text-stone-100 transition-colors duration-300 group-hover:text-amber-100"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-3xl">{area.icon}</span>
              <h3 className="relative z-10 mb-3 font-serif text-lg font-bold text-teal-dark">
                {area.title}
              </h3>
              <p className="relative z-10 text-sm leading-6 text-stone-600">
                {area.description}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-amber-accent via-teal-primary to-amber-light" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
