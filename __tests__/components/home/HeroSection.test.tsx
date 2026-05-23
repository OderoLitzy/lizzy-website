import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/HeroSection";

describe("HeroSection", () => {
  it("renders the editorial Define Your Limits headline with an amber Limits treatment", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { name: /define your limits/i });
    const limits = screen.getByText("Limits");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-[clamp(4rem,10vw,6rem)]");
    expect(limits).toHaveClass("text-amber-accent", "after:bg-amber-accent");
  });

  it("renders the staff photo as the priority hero image", () => {
    render(<HeroSection />);
    const image = screen.getByRole("img", { name: /change ambassadors kenya staff/i });

    expect(image).toHaveAttribute("src", expect.stringContaining(encodeURIComponent("/brand/staff.jpeg")));
    expect(image).not.toHaveAttribute("loading", "lazy");
  });

  it("renders a desktop split hero with a deep teal left panel and diagonal separator", () => {
    render(<HeroSection />);
    const hero = screen.getByRole("region", { name: /hero/i });
    const separator = screen.getByTestId("hero-diagonal-separator");

    expect(hero).toHaveClass("grid", "overflow-hidden", "bg-teal-dark", "lg:grid-cols-[55%_45%]");
    expect(separator).toHaveClass("bg-teal-dark", "lg:block");
    expect(separator).toHaveStyle({ clipPath: "polygon(0 0, 100% 0, 0 100%)" });
  });

  it("stacks the teal message and 50vh image panel on mobile without horizontal overflow", () => {
    render(<HeroSection />);
    const hero = screen.getByRole("region", { name: /hero/i });
    const image = screen.getByRole("img", { name: /change ambassadors kenya staff/i });
    const imagePanel = image.parentElement;

    expect(hero).toHaveClass("max-w-full", "overflow-hidden");
    expect(imagePanel).toHaveClass("min-h-[50vh]", "lg:min-h-screen");
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
