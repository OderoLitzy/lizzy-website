import { render, screen } from "@testing-library/react";
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
    expect(screen.getByRole("heading", { level: 2, name: /health & reproductive/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /economic empowerment/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /community & advocacy/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /legal & rights/i })).toBeInTheDocument();
  });

  it("renders all 18 service titles", () => {
    for (const service of services) {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    }
  });
});
