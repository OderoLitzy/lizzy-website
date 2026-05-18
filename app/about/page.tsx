import OrgStory from "@/components/about/OrgStory";
import TeamGrid from "@/components/about/TeamGrid";
import GovernanceSection from "@/components/about/GovernanceSection";
import ValuesGrid from "@/components/about/ValuesGrid";
import { teamMembers, coreValues } from "@/lib/content/data";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <OrgStory />
      <TeamGrid members={teamMembers} />
      <GovernanceSection />
      <ValuesGrid values={coreValues} />
    </div>
  );
}
