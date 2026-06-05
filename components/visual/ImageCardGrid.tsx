import Image from "next/image";
import type { ImageMetadata } from "@/lib/content/types";

interface ImageCardGridProps {
  title: string;
  images: ImageMetadata[];
}

export default function ImageCardGrid({ title, images }: ImageCardGridProps) {
  return (
    <section className="bg-stone-bg py-16" aria-labelledby="image-card-grid-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="image-card-grid-heading" className="font-serif text-3xl font-black text-teal-dark">
          {title}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <article key={image.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <div className="relative aspect-[4/3] bg-stone-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
