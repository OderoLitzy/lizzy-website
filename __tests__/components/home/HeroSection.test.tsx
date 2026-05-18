import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/HeroSection";

describe("HeroSection", () => {
  it("renders the youth-centered headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { name: /growing courage,\s*skills & dignity\s*for kenya's youth/i })
    ).toBeInTheDocument();
  });

  it("renders a Donate CTA link to /donate", () => {
    render(<HeroSection />);
    const donate = screen.getByRole("link", { name: /support our work/i });
    expect(donate).toHaveAttribute("href", "/donate");
  });

  it("renders a secondary Learn More link to /about", () => {
    render(<HeroSection />);
    const learn = screen.getByRole("link", { name: /our story/i });
    expect(learn).toHaveAttribute("href", "/about");
  });
});
