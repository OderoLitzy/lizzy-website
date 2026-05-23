import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import MarqueeTicker from "@/components/editorial/MarqueeTicker";

const phrases = ["Homa Bay County", "Since 2018", "18 Active Programs"];
const rootDir = process.cwd();

describe("MarqueeTicker", () => {
  it("renders every phrase at least once", () => {
    render(<MarqueeTicker phrases={phrases} />);
    phrases.forEach((phrase) => {
      expect(screen.getAllByText(phrase).length).toBeGreaterThan(0);
    });
  });

  it("exposes a live region label for screen readers", () => {
    render(<MarqueeTicker phrases={phrases} />);
    expect(
      screen.getByRole("marquee") ?? screen.getByLabelText(/ticker/i)
    ).toBeInTheDocument();
  });

  it("uses a full-width amber strip treatment", () => {
    render(<MarqueeTicker phrases={phrases} />);

    expect(screen.getByRole("marquee")).toHaveClass(
      "w-full",
      "max-w-full",
      "overflow-hidden",
      "bg-amber-accent"
    );
  });

  it("marks the duplicate strip as aria-hidden to prevent double-reading", () => {
    const { container } = render(<MarqueeTicker phrases={phrases} />);
    const hidden = container.querySelectorAll('[aria-hidden="true"]');
    expect(hidden.length).toBeGreaterThan(0);
  });

  it("uses one animated track with duplicated phrases for a seamless loop", () => {
    const { container } = render(<MarqueeTicker phrases={phrases} />);

    const movingTracks = container.querySelectorAll(".animate-marquee");
    expect(movingTracks).toHaveLength(1);
    expect(movingTracks[0]).toHaveAttribute("aria-hidden", "true");
    phrases.forEach((phrase) => {
      expect(screen.getAllByText(phrase)).toHaveLength(2);
    });
  });

  it("keeps marquee animation in CSS with the accepted timing and reduced-motion pause", () => {
    const globalsCss = readFileSync(join(rootDir, "app/globals.css"), "utf8");
    const componentSource = readFileSync(
      join(rootDir, "components/editorial/MarqueeTicker.tsx"),
      "utf8"
    );

    expect(globalsCss).toContain(".animate-marquee { animation: marquee 25s linear infinite; }");
    expect(globalsCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(globalsCss).toContain(".animate-marquee         { animation-play-state: paused; }");
    expect(componentSource).not.toContain('"use client"');
    expect(componentSource).not.toContain("'use client'");
  });
});
