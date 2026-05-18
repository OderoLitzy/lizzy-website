interface MarqueeTickerProps {
  phrases: string[];
}

export default function MarqueeTicker({ phrases }: MarqueeTickerProps) {
  return (
    <div
      role="marquee"
      aria-label="Impact ticker"
      className="overflow-hidden bg-teal-dark py-3 select-none"
    >
      <div className="flex">
        {/* Primary strip — screen readers see this */}
        <ul className="flex shrink-0 items-center gap-8 animate-marquee whitespace-nowrap px-8">
          {phrases.map((p) => (
            <li key={p} className="text-sm font-semibold uppercase tracking-widest text-white">
              {p}
              <span className="ml-8 text-amber-light" aria-hidden="true">·</span>
            </li>
          ))}
        </ul>

        {/* Duplicate strip — hidden from screen readers for seamless loop */}
        <ul
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 animate-marquee whitespace-nowrap px-8"
        >
          {phrases.map((p) => (
            <li key={p} className="text-sm font-semibold uppercase tracking-widest text-white">
              {p}
              <span className="ml-8 text-amber-light">·</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
