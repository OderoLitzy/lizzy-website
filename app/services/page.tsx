import type { Metadata } from "next";
import EditorialHero from "@/components/editorial/EditorialHero";
import ServiceClusterTabs from "@/components/editorial/ServiceClusterTabs";
import { services } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Services",
  path: "/services",
  description:
    "Discover CHAKE services across mentorship, community outreach, health education, leadership forums, and livelihood training.",
});

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <EditorialHero eyebrow="What we offer" title="Our Services" marker="SVC" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ServiceClusterTabs services={services} />
      </div>
    </div>
  );
}
