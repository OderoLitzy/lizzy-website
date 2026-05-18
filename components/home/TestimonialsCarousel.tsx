"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/content/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setActiveIndex((p) => (p + 1) % testimonials.length);

  return (
    <section aria-label="Testimonials" className="overflow-hidden">
      {testimonials.map((t, i) => {
        const isTeal = i % 2 === 0;
        return (
          <div
            key={t.author}
            aria-hidden={i !== activeIndex}
            className={[
              "transition-opacity duration-500",
              i === activeIndex ? "block opacity-100" : "hidden opacity-0",
              isTeal ? "bg-teal-dark" : "bg-stone-bg",
            ].join(" ")}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 relative">
              {/* Giant decorative quote mark */}
              <span
                className={[
                  "absolute -top-4 left-0 font-serif font-black leading-none select-none pointer-events-none",
                  isTeal ? "text-white/5" : "text-teal-primary/10",
                ].join(" ")}
                style={{ fontSize: "clamp(10rem, 20vw, 18rem)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <article role="article" aria-label="testimonial" className="relative z-10">
                <blockquote
                  className={[
                    "font-serif font-bold leading-tight mb-10",
                    isTeal ? "text-white" : "text-teal-dark",
                  ].join(" ")}
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
                >
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-px ${isTeal ? "bg-amber-accent" : "bg-teal-primary"}`} aria-hidden="true" />
                  <div>
                    <p className={`font-bold text-sm ${isTeal ? "text-amber-accent" : "text-teal-primary"}`}>
                      {t.author}
                    </p>
                    <p className={`text-xs ${isTeal ? "text-teal-100" : "text-stone-500"}`}>
                      {t.role} — {t.location}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="bg-teal-dark border-t border-white/10 py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={[
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === activeIndex ? "bg-amber-accent w-6" : "bg-white/20 hover:bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center bg-amber-accent text-white hover:bg-amber-light transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
