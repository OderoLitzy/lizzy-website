"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/content/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const handlePrev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setActiveIndex((p) => (p + 1) % testimonials.length);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || testimonials.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((p) => (p + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, testimonials.length]);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      aria-label="Testimonials"
      tabIndex={0}
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t-4 border-amber-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-accent/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          handlePrev();
        }
        if (event.key === "ArrowRight") {
          handleNext();
        }
      }}
    >
      <div className="relative">
        {testimonials.map((t, i) => (
          <div
            key={t.author}
            aria-hidden={i !== activeIndex}
            className={[
              "w-full",
              prefersReducedMotion ? "" : "transition-all duration-700 ease-out",
              i % 2 === 0 ? "bg-teal-dark" : "bg-stone-bg",
              i === activeIndex
                ? "relative translate-x-0 opacity-100"
                : prefersReducedMotion
                  ? "absolute inset-0 pointer-events-none opacity-0"
                  : [
                      "absolute inset-0 pointer-events-none opacity-0",
                      i < activeIndex ? "-translate-x-8" : "translate-x-8",
                    ].join(" "),
            ].join(" ")}
          >
            <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
              <span
                className="pointer-events-none absolute -top-8 left-2 select-none font-serif font-black leading-none text-amber-accent/25 sm:-top-12"
                style={{ fontSize: "clamp(12rem, 28vw, 24rem)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <article role="article" aria-label="testimonial" className="relative z-10 max-w-5xl">
                <blockquote
                  className={[
                    "mb-10 font-serif font-bold leading-tight",
                    i % 2 === 0 ? "text-white" : "text-teal-dark",
                  ].join(" ")}
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
                >
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-amber-accent" aria-hidden="true" />
                  <div>
                    <p
                      className={[
                        "text-sm font-bold uppercase tracking-[0.18em]",
                        i % 2 === 0 ? "text-amber-accent" : "text-teal-primary",
                      ].join(" ")}
                    >
                      {t.author}
                    </p>
                    <p className={["text-xs", i % 2 === 0 ? "text-white/75" : "text-stone-600"].join(" ")}>
                      {t.role} | {t.location}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="border-t border-amber-accent/20 bg-stone-950 px-4 py-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={[
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === activeIndex ? "bg-amber-accent w-6" : "bg-white/40 hover:bg-white/70",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              &lsaquo;
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center bg-amber-accent text-white hover:bg-amber-light transition-colors"
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
