import type { FocusArea } from "@/lib/content/types";
import AnimatedSection from "@/components/animation/AnimatedSection";

interface Props {
  areas: FocusArea[];
}

function focusTileLayoutClass(index: number) {
  return index < 3 ? "md:col-span-2" : "md:col-span-3";
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

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 scrollbar-none md:mx-0 md:grid md:grid-cols-6 md:px-0">
          {areas.map((area, i) => (
            <AnimatedSection
              key={area.title}
              className={`w-[85vw] flex-shrink-0 snap-center md:w-auto ${focusTileLayoutClass(i)}`}
              delay={i * 80}
            >
              <article
                className="group relative min-h-72 cursor-default overflow-hidden rounded-2xl border border-l-4 border-t-4 border-stone-200 border-l-transparent border-t-amber-accent bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-l-amber-accent hover:border-t-transparent hover:shadow-xl"
              >
                <span
                  className="pointer-events-none absolute right-3 top-3 select-none font-serif font-black leading-none text-teal-primary/10 transition-colors duration-300 group-hover:text-teal-primary/15"
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
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
