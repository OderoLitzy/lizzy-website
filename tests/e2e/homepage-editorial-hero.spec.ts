import { expect, test } from "@playwright/test";

test("homepage hero uses the editorial header pattern", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const heading = page.getByRole("heading", { level: 1, name: "Define Your Limits" });
  const hero = heading.locator("xpath=ancestor::section[1]");

  await expect(heading).toBeVisible();
  await expect(hero.getByText("CHAKE")).toBeVisible();
  await expect(
    hero.getByText(
      "Change Ambassadors Kenya walks with young people, women, and vulnerable families through mentorship, health education, leadership, and livelihood pathways rooted in local community life.",
    ),
  ).toBeVisible();

  await expect(hero).toHaveCSS("background-color", "rgb(13, 92, 87)");
  await expect(hero.locator("img")).toHaveCount(0);

  const box = await hero.boundingBox();
  expect(box, "homepage hero should have a browser layout box").not.toBeNull();
  expect(box!.height).toBeLessThan(500);
});
