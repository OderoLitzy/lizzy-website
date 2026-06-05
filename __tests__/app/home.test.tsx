import { fireEvent, render, screen, within } from "@testing-library/react";
import HomePage from "@/app/page";
import { homeImpactGallery } from "@/lib/content/data";

describe("Home Page", () => {
  it("renders the curated impact gallery after the impact statistics", () => {
    render(<HomePage />);

    const stats = screen.getByRole("region", { name: /impact statistics/i });
    const gallery = screen.getByRole("region", { name: homeImpactGallery.title });
    const firstGalleryImage = screen.getByRole("img", { name: homeImpactGallery.images[0].alt });

    expect(gallery).toBe(stats.nextElementSibling);
    expect(firstGalleryImage).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Previous image" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next image" })).toBeInTheDocument();
  });

  it("supports keyboard navigation in the home impact gallery", () => {
    render(<HomePage />);

    const gallery = screen.getByRole("region", { name: homeImpactGallery.title });
    gallery.focus();
    fireEvent.keyDown(gallery, { key: "ArrowRight" });

    const secondSlide = within(gallery).getByRole("img", { name: homeImpactGallery.images[1].alt }).closest("[aria-hidden]");
    expect(secondSlide).toHaveAttribute("aria-hidden", "false");
  });
});
