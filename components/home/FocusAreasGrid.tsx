import type { FocusArea } from "@/lib/content/types";

interface Props {
  areas: FocusArea[];
}

export default function FocusAreasGrid({ areas }: Props) {
  return (
    <section className="py-20 bg-stone-bg overflow-hidden" aria-labelledby="focus-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-accent mb-3">
              What we do
            </p>
            <h2
              id="focus-heading"
              className="font-serif font-black text-teal-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Our Focus Areas
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
            Five interconnected pillars that address the root causes of inequality in Homa Bay County.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on md+ */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-px overflow-x-auto scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className="relative flex-shrink-0 w-72 md:w-auto bg-white border border-stone-100 p-6 hover:bg-teal-dark hover:border-teal-dark group transition-all duration-300 cursor-default"
            >
              {/* Oversized number watermark */}
              <span
                className="absolute top-3 right-3 font-serif font-black text-stone-100 group-hover:text-white/10 leading-none select-none transition-colors duration-300"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="text-3xl mb-5 block">{area.icon}</span>
              <h3 className="font-serif text-base font-bold text-teal-dark group-hover:text-white mb-2 transition-colors duration-300 relative z-10">
                {area.title}
              </h3>
              <p className="text-stone-500 group-hover:text-teal-100 text-xs leading-relaxed transition-colors duration-300 relative z-10">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
