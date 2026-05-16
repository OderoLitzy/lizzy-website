import { render, screen } from "@testing-library/react";
import DonatePage from "@/app/donate/page";

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
});
