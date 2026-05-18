import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ServiceClusterTabs from "@/components/editorial/ServiceClusterTabs";
import { services } from "@/lib/content/data";

describe("ServiceClusterTabs", () => {
  it("shows health cluster services by default", () => {
    render(<ServiceClusterTabs services={services} />);
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    // At least one health service visible
    expect(screen.getByText(/life skills/i)).toBeInTheDocument();
  });

  it("switches to economic services on tab click", async () => {
    const user = userEvent.setup();
    render(<ServiceClusterTabs services={services} />);
    await user.click(screen.getByRole("tab", { name: /economic/i }));
    expect(screen.getByText(/economic empowerment support/i)).toBeInTheDocument();
  });

  it("switches to community services on tab click", async () => {
    const user = userEvent.setup();
    render(<ServiceClusterTabs services={services} />);
    await user.click(screen.getByRole("tab", { name: /community/i }));
    expect(screen.getByText(/community mobilization/i)).toBeInTheDocument();
  });

  it("has correct ARIA tablist structure with 4 tabs", () => {
    render(<ServiceClusterTabs services={services} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(4);
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("marks the active tab as selected", async () => {
    const user = userEvent.setup();
    render(<ServiceClusterTabs services={services} />);
    const healthTab = screen.getByRole("tab", { name: /health/i });
    expect(healthTab).toHaveAttribute("aria-selected", "true");

    await user.click(screen.getByRole("tab", { name: /legal/i }));
    expect(screen.getByRole("tab", { name: /legal/i })).toHaveAttribute("aria-selected", "true");
    expect(healthTab).toHaveAttribute("aria-selected", "false");
  });

  it("hides non-active tab panels from the accessibility tree", async () => {
    const user = userEvent.setup();
    render(<ServiceClusterTabs services={services} />);
    await user.click(screen.getByRole("tab", { name: /economic/i }));
    // Only one tabpanel should be visible at a time
    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });
});
