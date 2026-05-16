import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-amber-accent font-semibold tracking-widest uppercase text-sm mb-2">404</p>
      <h1 className="font-serif text-4xl font-bold text-teal-dark mb-4">Page Not Found</h1>
      <p className="text-stone-600 max-w-md mb-8">
        The page you are looking for does not exist. Let us help you find your way back.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-full bg-teal-primary text-white font-semibold hover:bg-teal-dark transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
