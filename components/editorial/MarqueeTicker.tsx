interface MarqueeTickerProps {
  phrases: string[];
}

export default function MarqueeTicker({ phrases }: MarqueeTickerProps) {
  return (
    <section
      role="marquee"
      aria-label="Impact ticker"
      className="w-full max-w-full overflow-hidden bg-amber-accent py-3 select-none"
    >
      <div className="flex w-max animate-marquee" aria-hidden="true">
        <ul className="flex shrink-0 items-center gap-8 whitespace-nowrap px-8">
          {phrases.map((p) => (
            <li key={p} className="text-sm font-semibold uppercase tracking-widest text-white">
              {p}
              <span className="ml-8 text-white/70">·</span>
            </li>
          ))}
        </ul>

        <ul className="flex shrink-0 items-center gap-8 whitespace-nowrap px-8">
          {phrases.map((p) => (
            <li key={p} className="text-sm font-semibold uppercase tracking-widest text-white">
              {p}
              <span className="ml-8 text-white/70">·</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
