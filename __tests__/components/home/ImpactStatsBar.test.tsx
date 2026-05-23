import { act, render, screen } from "@testing-library/react";
import ImpactStatsBar from "@/components/home/ImpactStatsBar";
import { impactStats } from "@/lib/content/data";

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number>;
  callback: IntersectionObserverCallback;
  observed = new Set<Element>();

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.thresholds = Array.isArray(options?.threshold)
      ? options.threshold
      : [options?.threshold ?? 0];
    MockIntersectionObserver.instances.push(this);
  }

  observe = (target: Element) => {
    this.observed.add(target);
  };

  unobserve = (target: Element) => {
    this.observed.delete(target);
  };

  disconnect = () => {
    this.observed.clear();
  };

  takeRecords = () => [];

  trigger(isIntersecting: boolean) {
    const [target] = this.observed;
    if (!target) return;

    this.callback(
      [
        {
          isIntersecting,
          target,
          intersectionRatio: isIntersecting ? 1 : 0,
        } as IntersectionObserverEntry,
      ],
      this
    );
  }
}

describe("ImpactStatsBar", () => {
  const originalIntersectionObserver = global.IntersectionObserver;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
    window.matchMedia = originalMatchMedia;
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("uses a stone-50 surface for the stats band", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    expect(screen.getByLabelText("Impact statistics")).toHaveClass("bg-stone-50");
  });

  it("renders all impact stat labels", () => {
    render(<ImpactStatsBar stats={impactStats} />);
    for (const stat of impactStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it("renders each number as oversized amber Playfair type", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    for (const stat of impactStats) {
      const label = screen.getByText(stat.label);
      const number = label.previousElementSibling;

      expect(number).toHaveClass("font-serif", "text-7xl", "text-amber-accent");
    }
  });

  it("uses an amber top border rule above each stat", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    for (const stat of impactStats) {
      expect(screen.getByText(stat.label).parentElement).toHaveClass(
        "border-t",
        "border-amber-accent"
      );
    }
  });

  it("renders small teal labels below the numbers", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    for (const stat of impactStats) {
      expect(screen.getByText(stat.label)).toHaveClass(
        "text-xs",
        "text-teal-primary"
      );
    }
  });

  it("lays stats out as two columns on mobile and four columns on desktop", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    expect(screen.getByText(impactStats[0].label).parentElement?.parentElement).toHaveClass(
      "grid-cols-2",
      "md:grid-cols-4"
    );
  });

  it("counts to the stat value for each entry after entering the viewport", () => {
    jest.useFakeTimers();
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      return window.setTimeout(() => callback(performance.now()), 16);
    });
    jest.spyOn(window, "cancelAnimationFrame").mockImplementation((handle) => {
      window.clearTimeout(handle);
    });

    render(<ImpactStatsBar stats={impactStats} />);

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(true);
      }
    });

    act(() => {
      jest.advanceTimersByTime(1300);
    });

    for (const stat of impactStats) {
      const matches = screen.getAllByText(new RegExp(String(stat.value)));
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it("starts stat counters at zero before they enter the viewport", () => {
    render(<ImpactStatsBar stats={impactStats} />);

    expect(screen.getAllByText("0")).toHaveLength(2);
    expect(screen.getAllByText("0+")).toHaveLength(2);
  });

  it("shows final stat values immediately when reduced motion is preferred", () => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    render(<ImpactStatsBar stats={impactStats} />);

    expect(screen.getByText("2018")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getByText("30+")).toBeInTheDocument();
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });
});
