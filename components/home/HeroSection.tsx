import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-stone-bg" aria-label="Hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.16),transparent_28%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-teal-dark lg:block" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-white" style={{ clipPath: "polygon(0 58%, 100% 0, 100% 100%, 0 100%)" }} aria-hidden="true" />

      <div className="relative z-10 grid min-h-[92vh] grid-cols-1 items-center gap-12 px-4 pb-24 pt-28 sm:px-6 lg:mx-auto lg:max-w-7xl lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-primary shadow-sm">
            Youth-led change in Homa Bay
          </p>
          <h1 className="font-serif font-black leading-[0.96] text-teal-dark" style={{ fontSize: "clamp(3.25rem, 8vw, 6.5rem)" }}>
            Growing courage,
            <span className="block text-amber-accent">skills &amp; dignity</span>
            for Kenya&apos;s youth.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700">
            Change Ambassadors Kenya walks with young people, women, and vulnerable families through mentorship, health education, leadership, and livelihood pathways rooted in local community life.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-amber-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-light"
            >
              Support Our Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal-dark px-8 py-4 text-sm font-bold uppercase tracking-widest text-teal-dark transition-all hover:bg-teal-dark hover:text-white"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-stone-200">
            <figure className="relative aspect-[4/5] sm:aspect-[4/3]">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/U-Tena_youth_workshop_on_the_right_to_health_in_Nairobi%2C_Kenya_%2815458781609%29.jpg/960px-U-Tena_youth_workshop_on_the_right_to_health_in_Nairobi%2C_Kenya_%2815458781609%29.jpg"
                alt="Young people participating in a right to health workshop in Nairobi, Kenya"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/30 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-100">Community snapshot</p>
                <p className="mt-3 max-w-sm font-serif text-2xl font-black leading-tight sm:mt-4 sm:text-4xl">
                  Safe spaces, school outreach, peer mentorship, and skills forums.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <span className="rounded-full bg-white/15 px-3 py-2 font-semibold backdrop-blur-sm">Girls &amp; boys empowerment</span>
                  <span className="rounded-full bg-white/15 px-3 py-2 font-semibold backdrop-blur-sm">Health awareness</span>
                  <span className="rounded-full bg-white/15 px-3 py-2 font-semibold backdrop-blur-sm">Youth leadership</span>
                  <span className="rounded-full bg-white/15 px-3 py-2 font-semibold backdrop-blur-sm">Economic opportunity</span>
                </div>
              </figcaption>
            </figure>
            <div className="grid grid-cols-3 divide-x divide-stone-200 bg-white text-center">
              <div className="px-3 py-5">
                <p className="font-serif text-3xl font-black text-teal-primary">2018</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">Founded</p>
              </div>
              <div className="px-3 py-5">
                <p className="font-serif text-3xl font-black text-teal-primary">40+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">Communities</p>
              </div>
              <div className="px-3 py-5">
                <p className="font-serif text-3xl font-black text-teal-primary">18</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-stone-500">Programs</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-1 hidden max-w-xs rounded-2xl bg-white p-5 shadow-xl ring-1 ring-stone-200 sm:block">
            <p className="text-sm font-semibold leading-6 text-stone-700">
              &ldquo;Let young people see a future they can help build.&rdquo;
            </p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-widest text-stone-400">
              Photo: Article 25 Flickr, CC BY-SA 2.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
