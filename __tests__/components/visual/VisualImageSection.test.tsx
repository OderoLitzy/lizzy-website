import { render, screen } from "@testing-library/react";
import VisualImageSection from "@/components/visual/VisualImageSection";
import type { ImageMetadata } from "@/lib/content/types";

const image: ImageMetadata = {
  id: "test-community-outreach",
  src: "/images/home/youth-community-outreach.jpeg",
  alt: "Young people participating in a community outreach activity.",
  status: "approved",
  sensitivity: "standard",
  usage: ["test"],
};

describe("VisualImageSection", () => {
  it("renders section copy, calls to action, and supplied image metadata", () => {
    render(
      <VisualImageSection
        eyebrow="Community programs"
        title="Youth outreach in action"
        copy="Programs are shaped around schools, families, and community spaces."
        image={image}
        ctas={[
          { label: "Support our work", href: "/donate" },
          { label: "Meet the team", href: "/about" },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: "Youth outreach in action" })).toBeInTheDocument();
    expect(screen.getByText("Community programs")).toBeInTheDocument();
    expect(screen.getByText(/schools, families/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Support our work" })).toHaveAttribute("href", "/donate");
    expect(screen.getByRole("link", { name: "Meet the team" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("img", { name: image.alt })).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(image.src)),
    );
  });

  it("keeps the hero media area dimensionally stable", () => {
    render(
      <VisualImageSection
        title="Stable visual section"
        copy="The media frame should reserve space before the image loads."
        image={image}
      />,
    );

    expect(screen.getByRole("img", { name: image.alt }).parentElement).toHaveClass(
      "aspect-[4/3]",
      "overflow-hidden",
    );
  });

  it("allows decorative media to intentionally render empty alt text", () => {
    render(
      <VisualImageSection
        title="Decorative visual section"
        copy="The image supports an intentionally empty alt attribute."
        image={{ ...image, id: "decorative-image", alt: "" }}
      />,
    );

    expect(screen.getByAltText("")).toHaveAttribute("alt", "");
  });
});
