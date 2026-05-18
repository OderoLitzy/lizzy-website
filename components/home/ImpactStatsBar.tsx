import type { ImpactStat } from "@/lib/content/types";

interface Props {
  stats: ImpactStat[];
}

export default function ImpactStatsBar({ stats }: Props) {
  return (
    <section className="bg-white py-12" aria-label="Impact statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
          Community momentum
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-stone-bg px-6 py-5 text-center ring-1 ring-stone-200"
            >
              <p className="mb-2 font-serif font-black leading-none text-amber-accent"
                style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)" }}>
                {stat.value}
                <span className="text-teal-primary">{stat.suffix ?? ""}</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
