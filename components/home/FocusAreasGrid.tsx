import type { FocusArea } from "@/lib/content/types";

interface Props {
  areas: FocusArea[];
}

export default function FocusAreasGrid({ areas }: Props) {
  return (
    <section className="py-16 bg-stone-bg" aria-labelledby="focus-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 id="focus-heading" className="font-serif text-3xl sm:text-4xl font-bold text-teal-dark text-center mb-12">
          Our Focus Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <article
              key={area.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:border-teal-primary hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-4 block">{area.icon}</span>
              <h3 className="font-serif text-lg font-bold text-teal-dark mb-2">{area.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
