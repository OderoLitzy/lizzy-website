import { render, screen } from "@testing-library/react";
import CtaBanner from "@/components/home/CtaBanner";

describe("CtaBanner", () => {
  it("renders the headline", () => {
    render(<CtaBanner />);
    expect(
      screen.getByRole("heading", { name: /help a young person/i })
    ).toBeInTheDocument();
  });

  it("Donate link points to /donate", () => {
    render(<CtaBanner />);
    const donateLink = screen.getByRole("link", { name: /donate/i });
    expect(donateLink).toHaveAttribute("href", "/donate");
  });

  it("Volunteer link points to /volunteer", () => {
    render(<CtaBanner />);
    const volunteerLink = screen.getByRole("link", { name: /volunteer/i });
    expect(volunteerLink).toHaveAttribute("href", "/volunteer");
  });
});
