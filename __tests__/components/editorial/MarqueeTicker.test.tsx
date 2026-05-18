import { render, screen } from "@testing-library/react";
import MarqueeTicker from "@/components/editorial/MarqueeTicker";

const phrases = ["Homa Bay County", "Since 2018", "18 Active Programs"];

describe("MarqueeTicker", () => {
  it("renders every phrase at least once", () => {
    render(<MarqueeTicker phrases={phrases} />);
    phrases.forEach((phrase) => {
      expect(screen.getAllByText(phrase).length).toBeGreaterThan(0);
    });
  });

  it("exposes a live region label for screen readers", () => {
    render(<MarqueeTicker phrases={phrases} />);
    expect(
      screen.getByRole("marquee") ?? screen.getByLabelText(/ticker/i)
    ).toBeInTheDocument();
  });

  it("marks the duplicate strip as aria-hidden to prevent double-reading", () => {
    const { container } = render(<MarqueeTicker phrases={phrases} />);
    const hidden = container.querySelectorAll('[aria-hidden="true"]');
    expect(hidden.length).toBeGreaterThan(0);
  });
});
