import type { Service } from "@/lib/content/types";
import ServiceCard from "./ServiceCard";

interface ServicesListProps {
  services: Service[];
}

const CLUSTER_LABELS: Record<Service["cluster"], string> = {
  health: "Health & Reproductive",
  economic: "Economic Empowerment",
  community: "Community & Advocacy",
  legal: "Legal & Rights",
};

const CLUSTER_ORDER: Service["cluster"][] = [
  "health",
  "economic",
  "community",
  "legal",
];

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="space-y-12">
      {CLUSTER_ORDER.map((cluster) => {
        const clusterServices = services.filter((s) => s.cluster === cluster);
        if (clusterServices.length === 0) return null;
        return (
          <section key={cluster}>
            <h2 className="font-serif text-2xl font-bold text-teal-primary mb-6">
              {CLUSTER_LABELS[cluster]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clusterServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
