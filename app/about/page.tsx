import type { Metadata } from "next";
import EditorialHero from "@/components/editorial/EditorialHero";
import OrgStory from "@/components/about/OrgStory";
import TeamGrid from "@/components/about/TeamGrid";
import GovernanceSection from "@/components/about/GovernanceSection";
import ValuesGrid from "@/components/about/ValuesGrid";
import ImageCardGrid from "@/components/visual/ImageCardGrid";
import { teamMembers, coreValues, aboutOrganizationGallery } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "About",
  path: "/about",
  description:
    "Learn about Change Ambassadors Kenya's story, team, governance, and values guiding community-led work in Homa Bay County.",
});

export default function AboutPage() {
  return (
    <div className="pt-24">
      <EditorialHero eyebrow="About CHAKE" title="About Us" marker="ABT" />
      <OrgStory />
      <ImageCardGrid title={aboutOrganizationGallery.title} images={aboutOrganizationGallery.images} />
      <TeamGrid members={teamMembers} />
      <GovernanceSection />
      <ValuesGrid values={coreValues} />
    </div>
  );
}
