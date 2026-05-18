import Link from "next/link";

const trustPoints = [
  {
    title: "Rooted locally",
    copy: "Programs are shaped around schools, families, churches, health referrals, and community spaces in Homa Bay County.",
  },
  {
    title: "Practical support",
    copy: "Contributions help fund outreach materials, safe spaces, youth forums, mentorship, and program coordination.",
  },
  {
    title: "Built for partnership",
    copy: "CHAKE works across education, health, advocacy, and livelihoods so partners can support joined-up community change.",
  },
];

export default function SupportTrustBand() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6" aria-labelledby="support-trust-heading">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-accent">
            Support with confidence
          </p>
          <h2
            id="support-trust-heading"
            className="font-serif font-black leading-tight text-teal-dark"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Donor-ready, community-first.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600">
            The strongest support starts with listening. CHAKE keeps young people and families at the center, then gives donors and partners clear ways to strengthen the work already happening on the ground.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-teal-dark px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-teal-primary"
            >
              Donate
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal-dark px-7 py-3 text-sm font-bold uppercase tracking-widest text-teal-dark transition-all hover:bg-teal-dark hover:text-white"
            >
              Partner
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {trustPoints.map((point, index) => (
            <article
              key={point.title}
              className="rounded-2xl border border-stone-200 bg-stone-bg p-6"
            >
              <span className="font-serif text-4xl font-black text-amber-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-xl font-bold text-teal-dark">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{point.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
