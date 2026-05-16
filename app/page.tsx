import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ImpactStatsBar from "@/components/home/ImpactStatsBar";
import MissionBlock from "@/components/home/MissionBlock";
import FocusAreasGrid from "@/components/home/FocusAreasGrid";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import CtaBanner from "@/components/home/CtaBanner";
import { focusAreas, impactStats, testimonials } from "@/lib/content/data";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStatsBar stats={impactStats} />
      <MissionBlock />
      <FocusAreasGrid areas={focusAreas} />
      <TestimonialsCarousel testimonials={testimonials} />
      <CtaBanner />
    </>
  );
}
