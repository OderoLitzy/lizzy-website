"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ImageMetadata } from "@/lib/content/types";

interface ImageGalleryProps {
  title: string;
  images: ImageMetadata[];
}

export default function ImageGallery({ title, images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);

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
      aria-label={title}
      tabIndex={0}
      className="overflow-hidden bg-white py-16 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-accent/50"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          showPrevious();
        }
        if (event.key === "ArrowRight") {
          showNext();
        }
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-black text-teal-dark">{title}</h2>
        <div className="mt-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone-100">
            {images.map((image, index) => (
              <div
                key={image.id}
                aria-hidden={index === activeIndex ? "false" : "true"}
                className={[
                  "absolute inset-0",
                  prefersReducedMotion ? "" : "transition-opacity duration-500",
                  index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Previous image"
              onClick={showPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-dark text-2xl leading-none text-teal-dark transition-colors hover:bg-teal-dark hover:text-white"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={showNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-accent text-2xl leading-none text-white transition-colors hover:bg-amber-light"
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
