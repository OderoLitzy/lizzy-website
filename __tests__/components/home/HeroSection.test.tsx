import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/HeroSection";

describe("HeroSection", () => {
  it("renders the CHAKE tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Define Your Limits/i)).toBeInTheDocument();
  });

  it("renders a Donate CTA link to /donate", () => {
    render(<HeroSection />);
    const donate = screen.getByRole("link", { name: /support our work/i });
    expect(donate).toHaveAttribute("href", "/donate");
  });

  it("renders a secondary Learn More link to /about", () => {
    render(<HeroSection />);
    const learn = screen.getByRole("link", { name: /learn about us/i });
    expect(learn).toHaveAttribute("href", "/about");
  });
});
