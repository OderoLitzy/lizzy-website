import AnimatedCounter from "@/components/home/AnimatedCounter";
import type { ImpactStat } from "@/lib/content/types";

interface Props {
  stats: ImpactStat[];
}

export default function ImpactStatsBar({ stats }: Props) {
  return (
    <section className="bg-stone-50 py-12" aria-label="Impact statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
          Community momentum
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-40 flex-col items-center justify-center border-t border-amber-accent px-3 py-6 text-center"
            >
              <p className="mb-2 font-serif text-7xl font-black leading-none text-amber-accent md:text-8xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-primary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
