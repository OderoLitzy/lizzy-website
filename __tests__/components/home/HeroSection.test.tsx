import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/HeroSection";

describe("HeroSection", () => {
  it("renders the homepage editorial hero copy", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { name: /define your limits/i });

    expect(heading).toBeInTheDocument();
    expect(screen.getByText("CHAKE")).toHaveClass("uppercase", "text-amber-accent");
    expect(
      screen.getByText(
        "Change Ambassadors Kenya walks with young people, women, and vulnerable families through mentorship, health education, leadership, and livelihood pathways rooted in local community life.",
      ),
    ).toBeInTheDocument();
  });

  it("uses the shared editorial header pattern instead of the split-image hero", () => {
    render(<HeroSection />);
    const hero = screen.getByRole("region", { name: /homepage hero/i });
    const headline = screen.getByRole("heading", { name: /define your limits/i });

    expect(hero).toHaveClass("bg-teal-dark", "py-16", "overflow-hidden");
    expect(hero).not.toHaveClass("min-h-screen", "lg:grid-cols-[55%_45%]");
    expect(headline).toHaveClass("font-serif", "font-black", "text-white", "leading-tight");
    expect(hero.querySelector("img")).not.toBeInTheDocument();
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
