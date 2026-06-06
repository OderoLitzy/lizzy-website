import Link from "next/link";
import EditorialHero from "@/components/editorial/EditorialHero";

export default function HeroSection() {
  return (
    <EditorialHero
      eyebrow="CHAKE"
      title="Define Your Limits"
      marker="CHA"
      ariaLabel="Homepage hero"
      actions={
        <>
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
        </>
      }
    >
      <p>
        Change Ambassadors Kenya walks with young people, women, and vulnerable families through mentorship, health education, leadership, and livelihood pathways rooted in local community life.
      </p>
    </EditorialHero>
  );
}
