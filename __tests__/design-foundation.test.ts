import fs from "node:fs";
import path from "node:path";

import tailwindConfig from "../tailwind.config";

const colors = tailwindConfig.theme?.extend?.colors as Record<
  string,
  string | Record<string, string>
>;

const globalsCss = fs.readFileSync(
  path.join(process.cwd(), "app/globals.css"),
  "utf8",
);

describe("design token foundation", () => {
  it("exposes semantic color tokens while preserving literal palette tokens", () => {
    expect(colors.surface).toEqual({
      section: "#f0fdfa",
      hero: "#fffbeb",
      footer: "#1c1917",
    });
    expect(colors.text).toEqual({
      body: "#44403c",
    });

    expect(colors.teal).toMatchObject({
      primary: "#0f766e",
      light: "#14b8a6",
      dark: "#0d5c57",
    });
    expect(colors.amber).toMatchObject({
      accent: "#d97706",
      light: "#f59e0b",
    });
    expect(colors.stone).toMatchObject({
      bg: "#fafaf9",
    });
  });

  it("defines animation utilities without the stale scaffold dark-mode block", () => {
    expect(globalsCss).not.toContain("@media (prefers-color-scheme: dark)");
    expect(globalsCss).toContain("@keyframes fadeInUp");
    expect(globalsCss).toContain("@keyframes slideInRight");
    expect(globalsCss).toContain(".animate-fade-in-up");
    expect(globalsCss).toContain("animation: fadeInUp 0.5s ease-out");
    expect(globalsCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(globalsCss).toContain(".animate-fade-in-up");
    expect(globalsCss).toContain("animation: none");
  });

  it("publishes custom color tokens to the Tailwind CSS theme", () => {
    expect(globalsCss).toContain("--color-surface-section: #f0fdfa");
    expect(globalsCss).toContain("--color-surface-hero: #fffbeb");
    expect(globalsCss).toContain("--color-surface-footer: #1c1917");
    expect(globalsCss).toContain("--color-text-body: #44403c");
    expect(globalsCss).toContain("--color-teal-primary: #0f766e");
    expect(globalsCss).toContain("--color-teal-light: #14b8a6");
    expect(globalsCss).toContain("--color-teal-dark: #0d5c57");
    expect(globalsCss).toContain("--color-amber-accent: #d97706");
    expect(globalsCss).toContain("--color-amber-light: #f59e0b");
    expect(globalsCss).toContain("--color-stone-bg: #fafaf9");
  });
});
