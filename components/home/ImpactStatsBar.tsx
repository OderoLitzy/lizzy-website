import type { ImpactStat } from "@/lib/content/types";

interface Props {
  stats: ImpactStat[];
}

export default function ImpactStatsBar({ stats }: Props) {
  return (
    <section className="bg-teal-primary py-10" aria-label="Impact statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="text-white">
            <p className="font-serif text-4xl font-bold">
              {stat.value}{stat.suffix ?? ""}
            </p>
            <p className="text-teal-100 text-sm mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
