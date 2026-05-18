"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="font-serif text-3xl text-amber-accent mb-3">
        Something went wrong
      </h1>
      <p className="text-stone-500 text-sm mb-8 max-w-md">{error.message}</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-teal-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-dark transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-teal-primary text-teal-primary px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-primary/10 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
