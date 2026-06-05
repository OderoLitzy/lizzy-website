import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MarqueeTicker from "@/components/editorial/MarqueeTicker";
import ImpactStatsBar from "@/components/home/ImpactStatsBar";
import MissionBlock from "@/components/home/MissionBlock";
import FocusAreasGrid from "@/components/home/FocusAreasGrid";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import CtaBanner from "@/components/home/CtaBanner";
import SupportTrustBand from "@/components/home/SupportTrustBand";
import ImageGallery from "@/components/visual/ImageGallery";
import { focusAreas, homeImpactGallery, impactStats, testimonials } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Home",
  path: "/",
  description:
    "Change Ambassadors Kenya supports youth, women, and vulnerable families in Homa Bay County through mentorship, health education, leadership, and livelihood pathways.",
});

const tickerPhrases = [
  "Youth mentorship",
  "Safe spaces",
  "Girls and boys empowerment",
  "Health education",
  "Leadership forums",
  "Livelihood skills",
  "Homa Bay County",
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker phrases={tickerPhrases} />
      <ImpactStatsBar stats={impactStats} />
      <ImageGallery title={homeImpactGallery.title} images={homeImpactGallery.images} />
      <MissionBlock />
      <FocusAreasGrid areas={focusAreas} />
      <SupportTrustBand />
      <TestimonialsCarousel testimonials={testimonials} />
      <CtaBanner />
    </>
  );
}
