import { act, fireEvent, render, screen } from "@testing-library/react";
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

const panelForQuote = (quote: RegExp) => screen.getByText(quote).closest("[aria-hidden]");

afterEach(() => {
  jest.useRealTimers();
});

describe("TestimonialsCarousel", () => {
  it("uses a full-viewport testimonial section with an amber accent", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByLabelText("Testimonials")).toHaveClass("w-screen", "border-t-4", "border-amber-accent");
  });

  it("alternates deep teal and stone backgrounds between testimonial panels", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(panelForQuote(/First quote text here/)).toHaveClass("bg-teal-dark");
    expect(panelForQuote(/Second quote text here/)).toHaveClass("bg-stone-bg");
  });

  it("renders the first testimonial quote on load", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByText(/First quote text here/)).toBeInTheDocument();
  });

  it("renders the first testimonial author name", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByText("Alice B.")).toBeInTheDocument();
  });

  it("renders the active quote as a large Playfair pull quote with amber author styling", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    expect(screen.getByText(/First quote text here/)).toHaveClass("font-serif", "text-white");
    expect(screen.getByText(/First quote text here/)).toHaveStyle("font-size: clamp(2.25rem, 5vw, 4.5rem)");
    expect(screen.getByText("Alice B.")).toHaveClass("text-amber-accent");
    expect(screen.getByText("Community Member | Homa Bay County")).toHaveClass("text-white/75");
  });

  it("renders a massive decorative amber quote mark behind each testimonial", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const quoteMarks = screen.getAllByText("\u201c");
    expect(quoteMarks[0]).toHaveClass("text-amber-accent/25", "font-serif");
    expect(quoteMarks[0]).toHaveStyle("font-size: clamp(12rem, 28vw, 24rem)");
  });

  it("next button advances to the second testimonial", async () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const next = screen.getByRole("button", { name: /next/i });
    await userEvent.click(next);
    expect(screen.getByText(/Second quote text here/)).toBeInTheDocument();
  });

  it("previous button wraps from the first testimonial to the last", async () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    await userEvent.click(screen.getByRole("button", { name: /previous/i }));
    expect(panelForQuote(/Third quote text here/)).toHaveClass("opacity-100");
  });

  it("supports keyboard left and right arrow navigation from the testimonial section", () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const section = screen.getByLabelText("Testimonials");

    section.focus();
    fireEvent.keyDown(section, { key: "ArrowRight" });
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-100");

    fireEvent.keyDown(section, { key: "ArrowLeft" });
    expect(panelForQuote(/First quote text here/)).toHaveClass("opacity-100");
  });

  it("crossfades between testimonials with opacity and translate-x transitions instead of hiding inactive panels", async () => {
    render(<TestimonialsCarousel testimonials={testimonials} />);

    expect(panelForQuote(/First quote text here/)).toHaveClass("opacity-100", "translate-x-0", "transition-all", "duration-700");
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-0", "translate-x-8", "transition-all", "duration-700");
    expect(panelForQuote(/Second quote text here/)).not.toHaveClass("hidden");

    await userEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(panelForQuote(/First quote text here/)).toHaveClass("opacity-0", "-translate-x-8");
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-100", "translate-x-0");
  });

  it("auto-rotates to the next testimonial after six seconds", () => {
    jest.useFakeTimers();
    render(<TestimonialsCarousel testimonials={testimonials} />);

    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-0");

    act(() => {
      jest.advanceTimersByTime(5999);
    });
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-0");

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-100");
  });

  it("pauses auto-rotation while hovered and resumes after hover ends", () => {
    jest.useFakeTimers();
    render(<TestimonialsCarousel testimonials={testimonials} />);
    const section = screen.getByLabelText("Testimonials");

    fireEvent.mouseEnter(section);
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-0");

    fireEvent.mouseLeave(section);
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    expect(panelForQuote(/Second quote text here/)).toHaveClass("opacity-100");
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
