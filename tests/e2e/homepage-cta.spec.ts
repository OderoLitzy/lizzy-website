import { expect, test } from "@playwright/test";
import type { BoundingBox } from "@playwright/test";

type Box = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1000 },
] as const;

function boxesOverlap(a: Box, b: Box) {
  return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
}

function toBox(box: BoundingBox): Box {
  return {
    left: box.x,
    right: box.x + box.width,
    top: box.y,
    bottom: box.y + box.height,
  };
}

for (const viewport of viewports) {
  test(`homepage CTA keeps heading and actions separated on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");

    const section = page.locator('section[aria-label="Call to action"]');
    const heading = section.getByRole("heading", {
      name: "Help a young person meet the next open door.",
    });
    const actions = section.getByTestId("cta-actions");

    await expect(heading).toBeVisible();
    await expect(actions).toBeVisible();
    await expect(actions.getByRole("link", { name: "Donate Now" })).toBeVisible();
    await expect(actions.getByRole("link", { name: "Volunteer" })).toBeVisible();

    const [headingBox, actionsBox] = await Promise.all([
      heading.boundingBox(),
      actions.boundingBox(),
    ]);

    expect(headingBox, "CTA heading should have a browser layout box").not.toBeNull();
    expect(actionsBox, "CTA actions should have a browser layout box").not.toBeNull();
    expect(boxesOverlap(toBox(headingBox!), toBox(actionsBox!))).toBe(false);
  });
}
