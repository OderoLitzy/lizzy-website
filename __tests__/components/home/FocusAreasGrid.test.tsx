import { render, screen } from "@testing-library/react";
import FocusAreasGrid from "@/components/home/FocusAreasGrid";
import { focusAreas } from "@/lib/content/data";

describe("FocusAreasGrid", () => {
  it("renders a card for each focus area", () => {
    render(<FocusAreasGrid areas={focusAreas} />);
    for (const area of focusAreas) {
      expect(screen.getByText(area.title)).toBeInTheDocument();
    }
  });

  it("renders 5 cards", () => {
    render(<FocusAreasGrid areas={focusAreas} />);
    expect(screen.getAllByRole("article")).toHaveLength(5);
  });

  it("renders faded teal numbered watermarks and Playfair-backed titles", () => {
    render(<FocusAreasGrid areas={focusAreas} />);

    focusAreas.forEach((area, index) => {
      const article = screen.getByText(area.title).closest("article");
      const number = String(index + 1).padStart(2, "0");

      expect(article).toHaveTextContent(number);
      expect(screen.getByText(number)).toHaveClass("text-teal-primary/10");
      expect(screen.getByText(area.title)).toHaveClass("font-serif");
    });
  });

  it("uses mobile scroll snap cards and a desktop 3 plus 2 editorial grid", () => {
    render(<FocusAreasGrid areas={focusAreas} />);

    const grid = screen.getAllByRole("article")[0].parentElement?.parentElement;
    expect(grid).toHaveClass("snap-x", "snap-mandatory", "md:grid-cols-6");

    focusAreas.forEach((area, index) => {
      const article = screen.getByText(area.title).closest("article");
      const wrapper = article?.parentElement;

      expect(wrapper).toHaveClass("w-[85vw]", "snap-center");
      expect(wrapper).toHaveClass(index < 3 ? "md:col-span-2" : "md:col-span-3");
      expect(article).toHaveClass(
        "border-t-4",
        "border-t-amber-accent",
        "border-l-4",
        "border-l-transparent",
        "hover:border-l-amber-accent",
        "hover:border-t-transparent",
      );
    });
  });

  it("staggers each focus area card by 80ms", () => {
    render(<FocusAreasGrid areas={focusAreas} />);

    focusAreas.forEach((area, index) => {
      const wrapper = screen.getByText(area.title).closest("article")?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });
});
