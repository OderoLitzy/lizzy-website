import { expect, test, type Locator, type Page } from "@playwright/test";

const visualProperties = [
  "backgroundColor",
  "borderTopColor",
  "borderTopStyle",
  "borderTopWidth",
  "borderRadius",
  "boxShadow",
  "color",
  "height",
  "outlineStyle",
  "width",
] as const;

async function computedStyles(locator: Locator) {
  return locator.evaluate((element, properties) => {
    const styles = window.getComputedStyle(element);
    return Object.fromEntries(properties.map((property) => [property, styles[property]]));
  }, visualProperties);
}

async function clearPointerState(page: Page) {
  await page.mouse.move(0, 0);
  await page.waitForTimeout(200);
}

async function hoverAndSettle(locator: Locator) {
  await locator.hover();
  await locator.page().waitForTimeout(200);
}

async function focusAndSettle(locator: Locator) {
  await locator.focus();
  await locator.page().waitForTimeout(200);
}

test("testimonial carousel arrow controls use matched visual styles", async ({ page }) => {
  await page.goto("/");

  const carousel = page.getByLabel("Testimonials");
  const previous = carousel.getByRole("button", { name: "Previous testimonial" });
  const next = carousel.getByRole("button", { name: "Next testimonial" });

  await expect(previous).toBeVisible();
  await expect(next).toBeVisible();

  await expect(computedStyles(previous)).resolves.toEqual(await computedStyles(next));

  const [previousBox, nextBox] = await Promise.all([previous.boundingBox(), next.boundingBox()]);
  expect(previousBox, "previous control should have a pointer hit target").not.toBeNull();
  expect(nextBox, "next control should have a pointer hit target").not.toBeNull();
  expect(previousBox!.width).toBeGreaterThanOrEqual(40);
  expect(previousBox!.height).toBeGreaterThanOrEqual(40);
  expect(nextBox!.width).toBeGreaterThanOrEqual(40);
  expect(nextBox!.height).toBeGreaterThanOrEqual(40);

  await hoverAndSettle(previous);
  const hoveredPreviousStyles = await computedStyles(previous);
  await clearPointerState(page);

  await hoverAndSettle(next);
  const hoveredNextStyles = await computedStyles(next);
  await clearPointerState(page);

  expect(hoveredPreviousStyles).toEqual(hoveredNextStyles);

  await focusAndSettle(previous);
  const focusedPreviousStyles = await computedStyles(previous);

  await focusAndSettle(next);
  const focusedNextStyles = await computedStyles(next);

  expect(focusedPreviousStyles).toEqual(focusedNextStyles);
});

test("image gallery arrow controls match the testimonial carousel arrow design", async ({ page }) => {
  await page.goto("/");

  const carousel = page.getByLabel("Testimonials");
  const testimonialPrevious = carousel.getByRole("button", { name: "Previous testimonial" });
  const galleryPrevious = page.getByRole("button", { name: "Previous image" });
  const galleryNext = page.getByRole("button", { name: "Next image" });

  await expect(testimonialPrevious).toBeVisible();
  await expect(galleryPrevious).toBeVisible();
  await expect(galleryNext).toBeVisible();

  const testimonialStyles = await computedStyles(testimonialPrevious);
  await expect(computedStyles(galleryPrevious)).resolves.toEqual(testimonialStyles);
  await expect(computedStyles(galleryNext)).resolves.toEqual(testimonialStyles);

  await hoverAndSettle(testimonialPrevious);
  const hoveredTestimonialStyles = await computedStyles(testimonialPrevious);
  await clearPointerState(page);

  await hoverAndSettle(galleryPrevious);
  const hoveredGalleryStyles = await computedStyles(galleryPrevious);
  await clearPointerState(page);

  expect(hoveredGalleryStyles).toEqual(hoveredTestimonialStyles);

  await focusAndSettle(testimonialPrevious);
  const focusedTestimonialStyles = await computedStyles(testimonialPrevious);

  await focusAndSettle(galleryNext);
  const focusedGalleryStyles = await computedStyles(galleryNext);

  expect(focusedGalleryStyles).toEqual(focusedTestimonialStyles);
});
