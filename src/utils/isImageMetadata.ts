import type { ImageMetadata } from "astro";

export function isImageMetadata(value: unknown): value is ImageMetadata {
  return (
    typeof value === "object" &&
    value !== null &&
    "src" in value &&
    "width" in value &&
    "height" in value
  );
}
