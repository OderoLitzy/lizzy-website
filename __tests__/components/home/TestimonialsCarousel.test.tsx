import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import type { Testimonial } from "@/lib/content/types";

const testimonials: Testimonial[] = [
  {
    quote: "First quote text here.",
    author: "Alice B.",
    role: "Community Member",
    location: "Homa Bay County",
  },
  {
    quote: "Second quote text here.",
    author: "Bob C.",
    role: "Program Graduate",
    location: "Rachuonyo South",
  },
  {
    quote: "Third quote text here.",
    author: "Carol D.",
    role: "Youth Leader",
    location: "Homa Bay Town",
  },
];

describe("TestimonialsCarousel", () => {
  it("renders the first testimonial quote on load", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByText(/First quote text here/)).toBeInTheDocument();
  });

  it("renders the first testimonial author name", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByText("Alice B.")).toBeInTheDocument();
  });

  it("next button advances to the second testimonial", async () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const next = screen.getByRole("button", { name: /next/i });
    await userEvent.click(next);
    expect(screen.getByText(/Second quote text here/)).toBeInTheDocument();
  });

  it("wraps around from the last testimonial back to the first", async () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const next = screen.getByRole("button", { name: /next/i });
    // 3 items: click next 3 times to wrap around
    await userEvent.click(next);
    await userEvent.click(next);
    await userEvent.click(next);
    expect(screen.getByText(/First quote text here/)).toBeInTheDocument();
  });
});
