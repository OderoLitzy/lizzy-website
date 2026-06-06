import { render, screen } from "@testing-library/react";
import EnrollPage from "@/app/enroll/page";
import { enrollTrainingPathwayGallery } from "@/lib/content/data";

describe("Enroll Page", () => {
  it("renders training pathway imagery without disrupting the enrollment form", () => {
    render(<EnrollPage />);

    expect(screen.getByRole("region", { name: enrollTrainingPathwayGallery.title })).toBeInTheDocument();

    for (const image of enrollTrainingPathwayGallery.images) {
      expect(screen.getByRole("img", { name: image.alt })).toBeInTheDocument();
    }

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/program/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /apply/i })).toBeInTheDocument();
  });
});
