import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-teal-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-teal-primary/80 to-teal-primary/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-amber-accent font-semibold tracking-widest uppercase text-sm mb-4">
          Change Ambassadors Kenya
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Define Your Limits
        </h1>
        <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering youth, women, and vulnerable communities in Homa Bay County through education, health, and economic opportunity since 2018.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-accent text-white font-bold text-base hover:bg-amber-light transition-colors shadow-lg"
          >
            Support Our Work
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
