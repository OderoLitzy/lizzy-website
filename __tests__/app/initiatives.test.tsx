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

  it("preserves existing focus area descriptions and beneficiary information", () => {
    for (const area of focusAreas) {
      expect(screen.getByText(area.description)).toBeInTheDocument();
    }

    expect(screen.getByText(/Primary beneficiaries are girls aged 10/)).toBeInTheDocument();
    expect(screen.getByText(/Youth aged 15/)).toBeInTheDocument();
  });

  it("renders each focus area as image-led content with descriptive alt text", () => {
    for (const area of focusAreas) {
      expect(screen.getByRole("img", { name: area.image.alt })).toBeInTheDocument();
    }
  });
});
