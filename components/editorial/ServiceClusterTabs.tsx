"use client";

import { useState } from "react";
import type { Service } from "@/lib/content/types";

interface ServiceClusterTabsProps {
  services: Service[];
}

type Cluster = Service["cluster"];

const TABS: { cluster: Cluster; label: string }[] = [
  { cluster: "health", label: "Health & Reproductive" },
  { cluster: "economic", label: "Economic Empowerment" },
  { cluster: "community", label: "Community & Advocacy" },
  { cluster: "legal", label: "Legal & Rights" },
];

const servicePanelId = (service: Service) =>
  `service-${service.cluster}-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function ServiceClusterTabs({ services }: ServiceClusterTabsProps) {
  const [active, setActive] = useState<Cluster>("health");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const activeServices = services.filter((s) => s.cluster === active);
  const selectCluster = (cluster: Cluster) => {
    setActive(cluster);
    setExpandedService(null);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Service clusters"
        className="sticky top-20 z-20 flex gap-0 overflow-x-auto scrollbar-none border-b border-stone-200 bg-white/95 backdrop-blur"
      >
        {TABS.map(({ cluster, label }) => {
          const isActive = cluster === active;
          return (
            <button
              type="button"
              key={cluster}
              role="tab"
              id={`tab-${cluster}`}
              aria-selected={isActive}
              aria-controls={`panel-${cluster}`}
              onClick={() => selectCluster(cluster)}
              className={[
                "shrink-0 px-5 py-3 text-sm font-semibold tracking-wide transition-colors relative whitespace-nowrap",
                isActive
                  ? "text-teal-primary"
                  : "text-stone-500 hover:text-teal-primary",
              ].join(" ")}
            >
              {label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-accent transition-all duration-300"
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="py-8"
      >
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {activeServices.map((service) => (
            <li key={service.title} className="border-b border-stone-200 pb-3">
              <button
                type="button"
                aria-expanded={expandedService === service.title}
                aria-controls={servicePanelId(service)}
                onClick={() =>
                  setExpandedService((current) =>
                    current === service.title ? null : service.title,
                  )
                }
                className="flex w-full items-start gap-3 text-left font-semibold text-stone-800 transition-colors hover:text-teal-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-accent focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-primary"
                />
                <span className="text-sm leading-snug">{service.title}</span>
              </button>
              {expandedService === service.title && (
                <p
                  id={servicePanelId(service)}
                  className="ml-5 mt-2 text-xs leading-relaxed text-stone-500"
                >
                  {service.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
