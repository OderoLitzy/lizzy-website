import { brandPlaceholderImage } from "./data";
import type { ImageMetadata } from "./types";

interface ResolvedContentImage {
  image: ImageMetadata;
  alt: string;
  objectFitClassName: "object-cover" | "object-contain";
  isPlaceholder: boolean;
}

export function getOptionalContentImage(
  image: ImageMetadata | undefined,
  placeholderContext: string,
): ResolvedContentImage {
  if (image) {
    return {
      image,
      alt: image.alt,
      objectFitClassName: "object-cover",
      isPlaceholder: false,
    };
  }

  return {
    image: brandPlaceholderImage,
    alt: `CHAKE logo placeholder for ${placeholderContext}.`,
    objectFitClassName: "object-contain",
    isPlaceholder: true,
  };
}
