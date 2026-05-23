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

function relativeLuminance(hex: string) {
  const [red, green, blue] = hex
    .match(/[a-f0-9]{2}/gi)!
    .map((channel) => parseInt(channel, 16) / 255)
    .map((value) => (
      value <= 0.03928
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4
    ));

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(foreground: string, background: string) {
  const [lighter, darker] = [
    relativeLuminance(foreground),
    relativeLuminance(background),
  ].sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
}

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
      accent: "#b45309",
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
    expect(globalsCss).toContain("--color-amber-accent: #b45309");
    expect(globalsCss).toContain("--color-amber-light: #f59e0b");
    expect(globalsCss).toContain("--color-stone-bg: #fafaf9");
  });

  it("publishes the editorial fluid type scale to the Tailwind CSS theme", () => {
    expect(globalsCss).toContain("--text-editorial-sm: clamp(3rem, 6vw, 5rem)");
    expect(globalsCss).toContain("--text-editorial-sm--line-height: 1.05");
    expect(globalsCss).toContain("--text-editorial-md: clamp(4rem, 8vw, 6.5rem)");
    expect(globalsCss).toContain("--text-editorial-md--line-height: 1");
    expect(globalsCss).toContain("--text-editorial-lg: clamp(5rem, 10vw, 8rem)");
    expect(globalsCss).toContain("--text-editorial-lg--line-height: 0.95");
    expect(globalsCss).toContain("--text-editorial-xl: clamp(5.5rem, 12vw, 8rem)");
    expect(globalsCss).toContain("--text-editorial-xl--line-height: 0.9");
  });

  it("keeps brand text colors at WCAG AA contrast on white", () => {
    const teal = colors.teal as Record<string, string>;
    const amber = colors.amber as Record<string, string>;

    expect(contrastRatio(teal.primary, "#ffffff")).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(teal.dark, "#ffffff")).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(amber.accent, "#ffffff")).toBeGreaterThanOrEqual(4.5);
  });

  it("defines the marquee utility at the specified duration", () => {
    expect(globalsCss).toContain("@keyframes marquee");
    expect(globalsCss).toContain(".animate-marquee { animation: marquee 25s linear infinite; }");
    expect(globalsCss).toContain(".animate-marquee         { animation-play-state: paused; }");
  });

  it("safelists the editorial clip-path utility for Tailwind generation", () => {
    expect(globalsCss).toContain(
      '@source inline("[clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]")',
    );
  });
});
