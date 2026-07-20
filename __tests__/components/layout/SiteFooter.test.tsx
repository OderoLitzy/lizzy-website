import { render, screen } from "@testing-library/react";
import SiteFooter from "@/components/layout/SiteFooter";

describe("SiteFooter", () => {
  it("renders the organisation name", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/Change Ambassadors Kenya/i)).toBeInTheDocument();
  });

  it("renders the CHAKE logo image in the brand block", () => {
    render(<SiteFooter />);

    const logo = screen.getByRole("img", { name: /chake logo/i });
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo-white"));
    expect(logo).toHaveAttribute("width", "1024");
    expect(logo).toHaveAttribute("height", "1024");
    expect(logo).toHaveClass("h-20", "w-20", "object-contain");
    expect(screen.queryByText("CHAKE", { selector: "p.text-white" })).not.toBeInTheDocument();
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

  it("uses the editorial teal footer layout", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("contentinfo")).toHaveClass("bg-teal-dark");
    expect(screen.getByTestId("footer-columns")).toHaveClass("grid-cols-1", "md:grid-cols-3");
    expect(screen.getByText("CHAKE", { selector: "[aria-hidden='true']" })).toHaveClass("text-teal-primary/20");
    expect(screen.getByRole("img", { name: /chake logo/i })).toHaveClass("object-contain");
    expect(screen.getByText("Navigation")).toHaveClass("text-white");
    expect(screen.getByText("Contact")).toHaveClass("text-white");
    expect(screen.getByText(/Empowering youth/i)).toHaveClass("text-teal-50");
    expect(screen.getByText(/kechangeambassadors@gmail\.com/i).closest("ul")).toHaveClass("text-teal-50");
  });

  it("renders email and phone as contact links", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: /kechangeambassadors@gmail\.com/i })).toHaveAttribute(
      "href",
      "mailto:kechangeambassadors@gmail.com",
    );
    expect(screen.getByRole("link", { name: /\+254 769 629 620/i })).toHaveAttribute("href", "tel:+254769629620");
  });

  it("renders social links as accessible icon-only links with amber hover", () => {
    render(<SiteFooter />);

    const socialLinks = [
      ["LinkedIn", "https://www.linkedin.com/in/change-ambassadors-233b383b7/"],
      ["X", "https://x.com/CHAKE_Official"],
      ["Instagram", "https://www.instagram.com/chake_kenya?igsh=b2x2cWFxbnZoZWd0"],
      ["Facebook", "https://www.facebook.com/share/1DG8bnmg4H/"],
      ["TikTok", "https://vm.tiktok.com/ZS9MG5sHpQNB-n1Zf5/"],
      ["WhatsApp", "https://wa.me/254769629620"],
    ] as const;

    for (const [name, href] of socialLinks) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveClass("hover:text-amber-accent");
      expect(link).toHaveTextContent("");
      expect(link.querySelector("svg")).toBeInTheDocument();
      expect(link.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    }
  });
});
