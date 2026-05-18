import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-teal-dark px-4 py-20 sm:px-6" aria-label="Call to action">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-light">
            Take action
          </p>
          <h2 className="mb-6 font-serif font-black leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Help a young person meet the next open door.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { href: "/volunteer", label: "Volunteer", copy: "Offer your time, skills, mentorship, or field support." },
            { href: "/donate", label: "Donate", copy: "Support programs, outreach materials, and safe spaces." },
            { href: "/services", label: "Partner", copy: "Work with us through schools, health teams, churches, and local groups." },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group rounded-2xl bg-white p-6 text-left transition-all hover:-translate-y-1 hover:bg-amber-50"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-accent">{action.label}</span>
              <p className="mt-4 text-sm leading-6 text-stone-700">{action.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-teal-primary group-hover:text-teal-dark">Start here</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
