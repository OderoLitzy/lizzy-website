import Image from "next/image";
import Link from "next/link";
import type { ImageMetadata } from "@/lib/content/types";

interface VisualImageSectionCta {
  label: string;
  href: string;
}

interface VisualImageSectionProps {
  eyebrow?: string;
  title: string;
  copy: string;
  image: ImageMetadata;
  ctas?: VisualImageSectionCta[];
}

export default function VisualImageSection({
  eyebrow,
  title,
  copy,
  image,
  ctas = [],
}: VisualImageSectionProps) {
  return (
    <section className="overflow-hidden bg-white py-20" aria-labelledby={`${image.id}-heading`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-amber-accent">
              {eyebrow}
            </p>
          )}
          <h2 id={`${image.id}-heading`} className="font-serif text-4xl font-black leading-tight text-teal-dark sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
            {copy}
          </p>
          {ctas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctas.map((cta, index) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors",
                    index === 0
                      ? "bg-amber-accent text-white hover:bg-amber-light"
                      : "border-2 border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white",
                  ].join(" ")}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
