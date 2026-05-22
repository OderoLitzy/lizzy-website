import { act, render, screen } from "@testing-library/react";
import { useInView } from "@/hooks/useInView";

type ObserverCallback = IntersectionObserverCallback;

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number>;
  callback: ObserverCallback;
  observed = new Set<Element>();

  constructor(callback: ObserverCallback, options?: IntersectionObserverInit) {
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

describe("useInView", () => {
  const originalIntersectionObserver = global.IntersectionObserver;

  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
  });

  it("starts out of view and becomes in view when the observed element intersects", () => {
    function Probe() {
      const { ref, inView } = useInView();

      return (
        <section ref={ref} data-testid="target">
          {inView ? "visible" : "hidden"}
        </section>
      );
    }

    render(<Probe />);

    expect(screen.getByTestId("target")).toHaveTextContent("hidden");

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
    });

    expect(screen.getByTestId("target")).toHaveTextContent("visible");
  });

  it("uses a 0.15 threshold by default", () => {
    function Probe() {
      const { ref } = useInView();

      return <section ref={ref}>content</section>;
    }

    render(<Probe />);

    expect(MockIntersectionObserver.instances[0].thresholds).toEqual([0.15]);
  });

  it("stays in view after intersecting once by default", () => {
    function Probe() {
      const { ref, inView } = useInView();

      return (
        <section ref={ref} data-testid="target">
          {inView ? "visible" : "hidden"}
        </section>
      );
    }

    render(<Probe />);

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
      MockIntersectionObserver.instances[0].trigger(false);
    });

    expect(screen.getByTestId("target")).toHaveTextContent("visible");
  });

  it("can leave view again when triggerOnce is false", () => {
    function Probe() {
      const { ref, inView } = useInView({ triggerOnce: false });

      return (
        <section ref={ref} data-testid="target">
          {inView ? "visible" : "hidden"}
        </section>
      );
    }

    render(<Probe />);

    act(() => {
      MockIntersectionObserver.instances[0].trigger(true);
    });

    expect(screen.getByTestId("target")).toHaveTextContent("visible");

    act(() => {
      MockIntersectionObserver.instances[0].trigger(false);
    });

    expect(screen.getByTestId("target")).toHaveTextContent("hidden");
  });

  it("is immediately in view when disabled", () => {
    function Probe() {
      const { ref, inView } = useInView({ disabled: true });

      return (
        <section ref={ref} data-testid="target">
          {inView ? "visible" : "hidden"}
        </section>
      );
    }

    render(<Probe />);

    expect(screen.getByTestId("target")).toHaveTextContent("visible");
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });
});
