import { render, screen } from "@testing-library/react";
import CtaBanner from "@/components/home/CtaBanner";

describe("CtaBanner", () => {
  it("renders the headline", () => {
    render(<CtaBanner />);
    expect(
      screen.getByRole("heading", { name: /help a young person/i })
    ).toBeInTheDocument();
  });

  it("uses a diagonal teal and amber split on desktop with a stacked split on mobile", () => {
    render(<CtaBanner />);

    const banner = screen.getByRole("region", { name: /call to action/i });
    expect(banner).toHaveClass("overflow-hidden");
    expect(screen.getByTestId("cta-split-background")).toHaveClass(
      "grid",
      "grid-rows-2",
      "md:block"
    );
    expect(screen.getByTestId("cta-teal-panel")).toHaveClass(
      "bg-teal-dark",
      "md:[clip-path:polygon(0_0,58%_0,48%_100%,0_100%)]"
    );
    expect(screen.getByTestId("cta-amber-panel")).toHaveClass(
      "bg-amber-accent",
      "md:[clip-path:polygon(58%_0,100%_0,100%_100%,48%_100%)]"
    );
  });

  it("centers the headline in white over the split banner", () => {
    render(<CtaBanner />);

    expect(
      screen.getByRole("heading", { name: /help a young person/i })
    ).toHaveClass("text-center", "text-white");
  });

  it("Donate link points to /donate", () => {
    render(<CtaBanner />);
    const donateLink = screen.getByRole("link", { name: /donate/i });
    expect(donateLink).toHaveAttribute("href", "/donate");
  });

  it("keeps the action group in normal flow below the headline", () => {
    render(<CtaBanner />);

    expect(screen.getByTestId("cta-actions")).toHaveClass(
      "flex",
      "items-center",
      "justify-center"
    );
    expect(screen.getByTestId("cta-actions")).not.toHaveClass("md:absolute");
    expect(screen.getByRole("link", { name: /donate now/i })).toHaveClass(
      "border-2",
      "border-white",
      "text-white"
    );
  });

  it("Volunteer link points to /volunteer", () => {
    render(<CtaBanner />);
    const volunteerLink = screen.getByRole("link", { name: /volunteer/i });
    expect(volunteerLink).toHaveAttribute("href", "/volunteer");
  });

  it("styles Volunteer as a white outline action centered at the split", () => {
    render(<CtaBanner />);

    expect(screen.getByRole("link", { name: /volunteer/i })).toHaveClass(
      "border-2",
      "border-white",
      "text-white"
    );
  });
});
