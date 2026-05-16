import { render, screen } from "@testing-library/react";
import ImpactStatsBar from "@/components/home/ImpactStatsBar";
import { impactStats } from "@/lib/content/data";

describe("ImpactStatsBar", () => {
  it("renders all impact stat labels", () => {
    render(<ImpactStatsBar stats={impactStats} />);
    for (const stat of impactStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it("renders the stat value for each entry", () => {
    render(<ImpactStatsBar stats={impactStats} />);
    for (const stat of impactStats) {
      const matches = screen.getAllByText(new RegExp(String(stat.value)));
      expect(matches.length).toBeGreaterThan(0);
    }
  });
});
