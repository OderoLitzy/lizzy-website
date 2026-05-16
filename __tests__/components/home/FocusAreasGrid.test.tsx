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
});
