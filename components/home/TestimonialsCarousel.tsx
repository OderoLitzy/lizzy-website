"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/content/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="bg-teal-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-teal-dark mb-10">
          What People Say
        </h2>

        <article role="article" aria-label="testimonial" className="space-y-6">
          <blockquote className="font-serif text-xl text-teal-dark leading-relaxed">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-teal-primary">{active.author}</p>
            <p className="text-sm text-gray-600">{active.role}</p>
            <p className="text-sm text-gray-500">{active.location}</p>
          </div>
        </article>

        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="px-5 py-2 rounded-full border-2 border-teal-primary text-teal-primary font-semibold hover:bg-teal-primary hover:text-white transition-colors"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="px-5 py-2 rounded-full bg-teal-primary text-white font-semibold hover:bg-teal-dark transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
