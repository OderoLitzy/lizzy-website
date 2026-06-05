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

  it("renders approved imagery for each service cluster", async () => {
    const user = userEvent.setup();
    const clusters = [
      { tab: /health & reproductive/i, image: /reproductive health education/i },
      { tab: /economic empowerment/i, image: /economic empowerment or livelihood training/i },
      { tab: /community & advocacy/i, image: /community members gathered/i },
      { tab: /legal & rights/i, image: /human rights education or advocacy/i },
    ];

    for (const { tab, image } of clusters) {
      await user.click(screen.getByRole("tab", { name: tab }));

      expect(screen.getByRole("img", { name: image })).toBeInTheDocument();
    }
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

      expect(
        screen.getByRole("button", { name: firstService.title }),
      ).toBeInTheDocument();
    }
  });

  it("preserves service descriptions behind the existing expandable controls", async () => {
    const user = userEvent.setup();
    const firstService = services[0];

    await user.click(screen.getByRole("button", { name: firstService.title }));

    expect(screen.getAllByText(firstService.description).length).toBeGreaterThan(0);
  });
});
