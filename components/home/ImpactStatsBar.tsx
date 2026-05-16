import type { ImpactStat } from "@/lib/content/types";

interface Props {
  stats: ImpactStat[];
}

export default function ImpactStatsBar({ stats }: Props) {
  return (
    <section className="bg-stone-bg border-y border-stone-200 py-12" aria-label="Impact statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-8">
          Impact at a glance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col items-center text-center px-6 py-4",
                i % 2 === 0 ? "" : "",
              ].join(" ")}
            >
              <p className="font-serif font-black text-amber-accent leading-none mb-2"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                {stat.value}
                <span className="text-teal-primary">{stat.suffix ?? ""}</span>
              </p>
              <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
