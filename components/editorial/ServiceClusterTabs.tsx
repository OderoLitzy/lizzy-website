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

export default function ServiceClusterTabs({ services }: ServiceClusterTabsProps) {
  const [active, setActive] = useState<Cluster>("health");

  const activeServices = services.filter((s) => s.cluster === active);

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Service clusters"
        className="flex overflow-x-auto scrollbar-none border-b border-stone-200 gap-0"
      >
        {TABS.map(({ cluster, label }) => {
          const isActive = cluster === active;
          return (
            <button
              key={cluster}
              role="tab"
              id={`tab-${cluster}`}
              aria-selected={isActive}
              aria-controls={`panel-${cluster}`}
              onClick={() => setActive(cluster)}
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
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="py-8"
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeServices.map((service) => (
            <li key={service.title} className="flex gap-3 items-start">
              <span
                aria-hidden="true"
                className="mt-1.5 w-2 h-2 rounded-full bg-teal-primary shrink-0"
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">{service.title}</p>
                <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
