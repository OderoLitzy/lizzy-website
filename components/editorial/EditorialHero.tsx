import type { ReactNode } from "react";

interface EditorialHeroProps {
  eyebrow: string;
  title: string;
  marker: string;
  children?: ReactNode;
  actions?: ReactNode;
  ariaLabel?: string;
}

export default function EditorialHero({
  eyebrow,
  title,
  marker,
  children,
  actions,
  ariaLabel,
}: EditorialHeroProps) {
  return (
    <section
      className="bg-teal-dark px-4 py-16 sm:px-6 relative overflow-hidden"
      aria-label={ariaLabel ?? title}
    >
      <span
        className="absolute right-4 top-4 font-serif font-black text-white/5 leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem, 14vw, 12rem)" }}
        aria-hidden="true"
      >
        {marker}
      </span>
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-accent mb-4">
          {eyebrow}
        </p>
        <h1
          className="font-serif font-black text-white leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {title}
        </h1>
        {children ? <div className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{children}</div> : null}
        {actions ? <div className="mt-9 flex flex-col gap-4 sm:flex-row">{actions}</div> : null}
      </div>
    </section>
  );
}
