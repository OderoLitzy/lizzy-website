import { render, screen } from "@testing-library/react";
import InitiativesPage from "@/app/initiatives/page";
import { focusAreas } from "@/lib/content/data";

describe("Initiatives Page", () => {
  beforeEach(() => {
    render(<InitiativesPage />);
  });

  it("renders 'Our Initiatives' heading", () => {
    expect(
      screen.getByRole("heading", { name: /our initiatives/i })
    ).toBeInTheDocument();
  });

  it("renders all 5 focus area titles", () => {
    for (const area of focusAreas) {
      expect(screen.getByText(area.title)).toBeInTheDocument();
    }
  });
});
