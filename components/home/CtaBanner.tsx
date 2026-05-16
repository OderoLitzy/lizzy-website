import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-teal-primary py-16 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-teal-100 text-lg mb-8">
          Join us in transforming lives across Homa Bay County. Every contribution matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-accent text-white font-bold text-base hover:bg-amber-light transition-colors shadow-lg"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
