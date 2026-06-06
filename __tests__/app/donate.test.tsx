import { render, screen } from "@testing-library/react";
import DonatePage from "@/app/donate/page";
import { donateOutcomeGallery } from "@/lib/content/data";

describe("Donate Page", () => {
  beforeEach(() => {
    render(<DonatePage />);
  });

  it("renders 'Your Support Changes Lives' heading", () => {
    expect(
      screen.getByRole("heading", { name: /your support changes lives/i })
    ).toBeInTheDocument();
  });

  it("renders 'M-Pesa' text", () => {
    const matches = screen.getAllByText(/m-pesa/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("renders the CHAKE email address", () => {
    expect(
      screen.getByText(/kechangeambassadors@gmail\.com/i)
    ).toBeInTheDocument();
  });

  it("renders outcome-oriented imagery while preserving giving calls to action", () => {
    expect(screen.getByRole("region", { name: donateOutcomeGallery.title })).toBeInTheDocument();

    for (const image of donateOutcomeGallery.images) {
      expect(screen.getByRole("img", { name: image.alt })).toBeInTheDocument();
    }

    expect(screen.getByRole("heading", { name: /ways to give/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /volunteer with chake/i })).toHaveAttribute("href", "/volunteer");
  });
});
