import { render, screen } from "@testing-library/react";
import SupportTrustBand from "@/components/home/SupportTrustBand";

describe("SupportTrustBand", () => {
  it("renders the donor-ready community-first heading", () => {
    render(<SupportTrustBand />);
    expect(
      screen.getByRole("heading", { name: /donor-ready, community-first/i })
    ).toBeInTheDocument();
  });

  it("links donors and partners to the right pages", () => {
    render(<SupportTrustBand />);
    expect(screen.getByRole("link", { name: /donate/i })).toHaveAttribute("href", "/donate");
    expect(screen.getByRole("link", { name: /partner/i })).toHaveAttribute("href", "/services");
  });
});
