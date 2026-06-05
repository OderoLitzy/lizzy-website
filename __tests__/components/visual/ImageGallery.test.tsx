import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageGallery from "@/components/visual/ImageGallery";
import type { ImageMetadata } from "@/lib/content/types";

const images: ImageMetadata[] = [
  {
    id: "girls-outreach",
    src: "/images/home/girls-school-outreach.jpeg",
    alt: "Girls participating in a school outreach activity.",
    status: "approved",
    sensitivity: "minors",
    usage: ["test"],
  },
  {
    id: "youth-mentorship",
    src: "/images/home/youth-mentorship-session.jpeg",
    alt: "Youth participants gathered during mentorship.",
    status: "approved",
    sensitivity: "standard",
    usage: ["test"],
  },
  {
    id: "skills-development",
    src: "/images/skills/skills-development.jpeg",
    alt: "Participants learning practical skills.",
    status: "approved",
    sensitivity: "standard",
    usage: ["test"],
  },
];

const slideForImage = (alt: string) => screen.getByRole("img", { name: alt }).closest("[aria-hidden]");

function mockReducedMotion(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: query === "(prefers-reduced-motion: reduce)" ? matches : false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe("ImageGallery", () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it("uses explicit previous and next controls to change the active image", async () => {
    render(<ImageGallery title="Impact gallery" images={images} />);

    expect(screen.getByRole("region", { name: "Impact gallery" })).toBeInTheDocument();
    expect(slideForImage(images[0].alt)).toHaveAttribute("aria-hidden", "false");

    await userEvent.click(screen.getByRole("button", { name: "Next image" }));
    expect(slideForImage(images[1].alt)).toHaveAttribute("aria-hidden", "false");

    await userEvent.click(screen.getByRole("button", { name: "Previous image" }));
    expect(slideForImage(images[0].alt)).toHaveAttribute("aria-hidden", "false");
  });

  it("supports keyboard arrow navigation from the gallery region", () => {
    render(<ImageGallery title="Impact gallery" images={images} />);

    const gallery = screen.getByRole("region", { name: "Impact gallery" });
    gallery.focus();
    fireEvent.keyDown(gallery, { key: "ArrowRight" });
    expect(slideForImage(images[1].alt)).toHaveAttribute("aria-hidden", "false");

    fireEvent.keyDown(gallery, { key: "ArrowLeft" });
    expect(slideForImage(images[0].alt)).toHaveAttribute("aria-hidden", "false");
  });

  it("removes slide transition timing when reduced motion is preferred", () => {
    mockReducedMotion(true);

    render(<ImageGallery title="Impact gallery" images={images} />);

    expect(slideForImage(images[0].alt)).not.toHaveClass("transition-opacity", "duration-500");
  });

  it("does not auto-advance when time passes", () => {
    jest.useFakeTimers();
    render(<ImageGallery title="Impact gallery" images={images} />);

    jest.advanceTimersByTime(30000);

    expect(slideForImage(images[0].alt)).toHaveAttribute("aria-hidden", "false");
  });
});
