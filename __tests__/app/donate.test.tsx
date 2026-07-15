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

  it("renders actual public payment details without placeholder confirmation text", () => {
    expect(screen.getByText("522533")).toBeInTheDocument();
    expect(screen.getByText("8088329")).toBeInTheDocument();
    expect(screen.getByText("KCB BANK KENYA LIMITED")).toBeInTheDocument();
    expect(screen.getByText("1351865978")).toBeInTheDocument();
    expect(screen.getAllByText("Change Ambassadors Kenya").length).toBeGreaterThan(0);
    expect(screen.getByText("KCBLKEN230")).toBeInTheDocument();

    expect(screen.queryByText(/XXXXXX/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/confirm with CHAKE director/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/provided on request/i)).not.toBeInTheDocument();
  });

  it("keeps secondary bank details collapsed behind an accessible disclosure by default", () => {
    const disclosure = screen.getByText("View full bank details").closest("details");

    expect(disclosure).not.toBeNull();
    expect(disclosure).not.toHaveAttribute("open");
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
