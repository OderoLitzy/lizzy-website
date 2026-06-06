import { render, screen } from "@testing-library/react";
import VolunteerPage from "@/app/volunteer/page";
import { volunteerFieldWorkGallery } from "@/lib/content/data";

describe("Volunteer Page", () => {
  it("renders participation imagery without disrupting the volunteer form", () => {
    render(<VolunteerPage />);

    expect(screen.getByRole("region", { name: volunteerFieldWorkGallery.title })).toBeInTheDocument();

    for (const image of volunteerFieldWorkGallery.images) {
      expect(screen.getByRole("img", { name: image.alt })).toBeInTheDocument();
    }

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/motivation/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /express interest/i })).toBeInTheDocument();
  });
});
