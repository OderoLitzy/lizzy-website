import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import { teamMembers, coreValues, aboutOrganizationGallery } from "@/lib/content/data";

describe("About Page", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it("renders the About Us or Change Ambassadors Kenya heading", () => {
    const heading = screen.getByRole("heading", { name: /about us|change ambassadors kenya/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all 11 team member names", () => {
    for (const member of teamMembers) {
      expect(screen.getByText(member.name)).toBeInTheDocument();
    }
  });

  it("renders the Governance section", () => {
    expect(screen.getByRole("heading", { name: /governance/i })).toBeInTheDocument();
  });

  it("renders all 5 core value titles", () => {
    for (const value of coreValues) {
      expect(screen.getByText(value.title)).toBeInTheDocument();
    }
  });

  it("renders approved organization imagery and named team portraits", () => {
    expect(screen.getByRole("region", { name: aboutOrganizationGallery.title })).toBeInTheDocument();

    for (const image of aboutOrganizationGallery.images) {
      expect(screen.getByRole("img", { name: image.alt })).toBeInTheDocument();
    }

    for (const member of teamMembers) {
      expect(member.image).toBeDefined();
      expect(screen.getByRole("img", { name: member.image?.alt ?? "" })).toBeInTheDocument();
    }
  });
});
