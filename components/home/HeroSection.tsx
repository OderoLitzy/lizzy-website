import Link from "next/link";
import Image from "next/image";
import { homeHeroImage } from "@/lib/content/data";
import type { ImageMetadata } from "@/lib/content/types";

interface HeroSectionProps {
  image?: ImageMetadata;
}

export default function HeroSection({ image = homeHeroImage }: HeroSectionProps) {
  return (
    <section className="grid min-h-screen max-w-full overflow-hidden bg-teal-dark lg:grid-cols-[55%_45%]" aria-label="Hero">
      <div className="relative z-10 flex min-h-screen items-center bg-teal-dark px-4 py-28 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-amber-accent sm:text-sm">
            CHAKE
          </p>
          <h1 className="font-serif text-[clamp(4rem,10vw,6rem)] font-black leading-[0.9] text-white">
            Define Your{" "}
            <span className="relative inline-block text-amber-accent after:absolute after:-bottom-2 after:left-0 after:h-2 after:w-full after:bg-amber-accent after:content-['']">
              Limits
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Change Ambassadors Kenya walks with young people, women, and vulnerable families through mentorship, health education, leadership, and livelihood pathways rooted in local community life.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-amber-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-light"
            >
              Support Our Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-teal-dark"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[50vh] overflow-hidden lg:min-h-screen">
        <div
          className="absolute inset-y-0 -left-px z-10 hidden w-28 bg-teal-dark lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          aria-hidden="true"
          data-testid="hero-diagonal-separator"
        />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-accent/45 via-amber-accent/15 to-transparent" aria-hidden="true" />
        <p className="absolute bottom-3 right-3 z-20 text-[0.65rem] font-semibold uppercase tracking-widest text-white/70">
          Photo: Article 25 Flickr, CC BY-SA 2.0
        </p>
      </div>
    </section>
  );
}
