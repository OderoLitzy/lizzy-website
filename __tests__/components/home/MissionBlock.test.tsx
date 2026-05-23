import { render, screen } from "@testing-library/react";
import MissionBlock from "@/components/home/MissionBlock";

describe("MissionBlock", () => {
  it("renders the mission heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /why we exist/i })).toBeInTheDocument();
  });

  it("presents the mission as a full-width deep teal pull-quote section", () => {
    render(<MissionBlock />);

    const section = screen.getByRole("region", { name: /why we exist/i });

    expect(section).toHaveClass("w-full", "bg-teal-dark");
  });

  it("renders a substring of the mission statement text", () => {
    render(<MissionBlock />);
    expect(
      screen.getByText(/young people in Kenya/i)
    ).toBeInTheDocument();
  });

  it("styles the mission statement as a white Playfair pull quote with amber accents", () => {
    render(<MissionBlock />);

    const quote = screen.getByText(/young people in Kenya/i).closest("blockquote");
    const quoteMark = screen.getByText('"', { selector: "[aria-hidden='true']" });

    expect(quote).toHaveClass(
      "border-l-4",
      "border-amber-accent",
      "font-serif",
      "text-2xl",
      "text-white"
    );
    expect(quoteMark).toHaveClass("text-amber-accent");
  });

  it("renders the vision heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /vision/i })).toBeInTheDocument();
  });

  it("places the vision text below the mission quote in teal-200", () => {
    render(<MissionBlock />);

    const quote = screen.getByText(/young people in Kenya/i).closest("blockquote");
    const visionText = screen.getByText(/an empowered community/i);

    expect(quote?.compareDocumentPosition(visionText)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(visionText).toHaveClass("text-teal-200");
  });

  it("uses a desktop diagonal bottom clip with extra mobile padding", () => {
    render(<MissionBlock />);

    const section = screen.getByRole("region", { name: /why we exist/i });

    expect(section).toHaveClass("pb-24", "md:pb-32");
    expect(section.className).toContain("md:[clip-path:polygon");
  });
});
