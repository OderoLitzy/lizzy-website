import { render, screen } from "@testing-library/react";
import ImageCardGrid from "@/components/visual/ImageCardGrid";
import type { ImageMetadata } from "@/lib/content/types";

const images: ImageMetadata[] = [
  {
    id: "school-outreach",
    src: "/images/home/girls-school-outreach.jpeg",
    alt: "Girls participating in a school outreach activity.",
    status: "approved",
    sensitivity: "minors",
    usage: ["test"],
  },
  {
    id: "skills-training",
    src: "/images/skills/skills-development.jpeg",
    alt: "Participants learning practical skills.",
    status: "approved",
    sensitivity: "standard",
    usage: ["test"],
  },
];

describe("ImageCardGrid", () => {
  it("renders approved images as stable cards with descriptive alt text", () => {
    render(<ImageCardGrid title="Program images" images={images} />);

    expect(screen.getByRole("heading", { name: "Program images" })).toBeInTheDocument();

    for (const image of images) {
      const renderedImage = screen.getByRole("img", { name: image.alt });
      expect(renderedImage).toHaveAttribute("src", expect.stringContaining(encodeURIComponent(image.src)));
      expect(renderedImage.closest("article")).toHaveClass("overflow-hidden");
      expect(renderedImage.parentElement).toHaveClass("aspect-[4/3]");
    }
  });
});
