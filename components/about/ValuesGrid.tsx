import type { CoreValue } from "@/lib/content/types";

interface ValuesGridProps {
  values: CoreValue[];
}

export default function ValuesGrid({ values }: ValuesGridProps) {
  return (
    <section className="py-16 bg-teal-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-teal-primary mb-10 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-lg shadow p-6 flex flex-col gap-3"
            >
              <span className="text-3xl" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="font-semibold text-gray-900 text-lg">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
