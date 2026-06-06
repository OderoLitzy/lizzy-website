import { expect, test } from "@playwright/test";

const pages = [
  { path: "/about", heading: "About Us", eyebrow: "About CHAKE" },
  { path: "/services", heading: "Our Services", eyebrow: "What we offer" },
  { path: "/projects", heading: "Projects", eyebrow: "Community work" },
  { path: "/skills", heading: "Skills Development", eyebrow: "Training pathways" },
  { path: "/initiatives", heading: "Our Initiatives", eyebrow: "Focus areas" },
  { path: "/enroll", heading: "Apply for Training", eyebrow: "Join a cohort" },
  { path: "/donate", heading: "Your Support Changes Lives", eyebrow: "Give with purpose" },
  { path: "/volunteer", heading: "Be the Change", eyebrow: "Get involved" },
] as const;

for (const pageInfo of pages) {
  test(`${pageInfo.path} uses the shared editorial hero`, async ({ page }) => {
    await page.goto(pageInfo.path);

    const heading = page.getByRole("heading", { level: 1, name: pageInfo.heading });
    const hero = heading.locator("xpath=ancestor::section[1]");

    await expect(heading).toBeVisible();
    await expect(hero.getByText(pageInfo.eyebrow)).toBeVisible();
    await expect(hero).toHaveCSS("background-color", "rgb(13, 92, 87)");
    await expect(hero.locator("p")).toHaveCount(1);
    await expect(hero.locator("a")).toHaveCount(0);
  });
}
