import { render, screen } from "@testing-library/react";
import SiteFooter from "@/components/layout/SiteFooter";

describe("SiteFooter", () => {
  it("renders the organisation name", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/Change Ambassadors Kenya/i)).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/kechangeambassadors@gmail\.com/i)).toBeInTheDocument();
  });

  it("renders contact phone number", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/\+254/)).toBeInTheDocument();
  });

  it("renders a copyright notice with CHAKE", () => {
    render(<SiteFooter />);
    expect(screen.getAllByText(/CHAKE/i).length).toBeGreaterThan(0);
  });

  it("renders Donate nav link", () => {
    render(<SiteFooter />);
    const links = screen.getAllByRole("link", { name: /donate/i });
    expect(links.length).toBeGreaterThan(0);
  });
});
