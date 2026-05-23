import { act, render, screen } from "@testing-library/react";
import AnimatedSection from "@/components/animation/AnimatedSection";

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number>;
  callback: IntersectionObserverCallback;
  observed = new Set<Element>();

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
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

function mockReducedMotion(matches: boolean) {
  window.matchMedia = jest.fn().mockImplementation((query: string) => ({
    matches: query === "(prefers-reduced-motion: reduce)" && matches,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

describe("AnimatedSection", () => {
  const originalIntersectionObserver = global.IntersectionObserver;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
    mockReducedMotion(false);
  });

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
    window.matchMedia = originalMatchMedia;
  });

  it("renders children and adds the fade-in animation class once in view", () => {
    render(<AnimatedSection>Program highlights</AnimatedSection>);

    const wrapper = screen.getByText("Program highlights");
    expect(wrapper).not.toHaveClass("animate-fade-in-up");

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
    });

    expect(wrapper).toHaveClass("animate-fade-in-up");
  });

  it("applies an optional animation delay inline", () => {
    render(<AnimatedSection delay={150}>Delayed content</AnimatedSection>);

    expect(screen.getByText("Delayed content")).toHaveStyle({
      animationDelay: "150ms",
    });
  });

  it("renders without animation class or delay when reduced motion is preferred", () => {
    mockReducedMotion(true);

    render(<AnimatedSection delay={150}>Reduced motion content</AnimatedSection>);

    const wrapper = screen.getByText("Reduced motion content");
    expect(wrapper).not.toHaveClass("animate-fade-in-up");
    expect(wrapper).not.toHaveStyle({ animationDelay: "150ms" });
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });
});
