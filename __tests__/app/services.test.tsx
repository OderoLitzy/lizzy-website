import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ServicesPage from "@/app/services/page";
import { services } from "@/lib/content/data";

describe("Services Page", () => {
  beforeEach(() => {
    render(<ServicesPage />);
  });

  it("renders the Services heading", () => {
    expect(screen.getByRole("heading", { level: 1, name: /services/i })).toBeInTheDocument();
  });

  it("renders all 4 cluster headings", () => {
    expect(screen.getByRole("tab", { name: /health & reproductive/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /economic empowerment/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /community & advocacy/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /legal & rights/i })).toBeInTheDocument();
  });

  it("renders service titles for each cluster tab", async () => {
    const user = userEvent.setup();
    const clusters = ["health", "economic", "community", "legal"] as const;

    for (const cluster of clusters) {
      const firstService = services.find((service) => service.cluster === cluster);
      if (!firstService) continue;

      if (cluster !== "health") {
        await user.click(screen.getByRole("tab", { name: new RegExp(cluster === "economic" ? "economic empowerment" : cluster === "community" ? "community & advocacy" : "legal & rights", "i") }));
      }

      expect(screen.getByText(firstService.title)).toBeInTheDocument();
    }
  });
});
