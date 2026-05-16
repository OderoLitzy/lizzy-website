import { render, screen } from "@testing-library/react";
import SiteHeader from "@/components/layout/SiteHeader";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Volunteer", href: "/volunteer" },
];

describe("SiteHeader", () => {
  it("renders the CHAKE logo text", () => {
    render(<SiteHeader />);
    expect(screen.getByText(/CHAKE/i)).toBeInTheDocument();
  });

  it("renders a Donate link as the primary CTA", () => {
    render(<SiteHeader />);
    const donateLink = screen.getByRole("link", { name: /donate/i });
    expect(donateLink).toBeInTheDocument();
    expect(donateLink).toHaveAttribute("href", "/donate");
  });

  it("renders all main navigation links", () => {
    render(<SiteHeader />);
    for (const { label, href } of NAV_LINKS) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("renders a mobile menu button", () => {
    render(<SiteHeader />);
    expect(
      screen.getByRole("button", { name: /open menu|toggle menu/i })
    ).toBeInTheDocument();
  });
});
