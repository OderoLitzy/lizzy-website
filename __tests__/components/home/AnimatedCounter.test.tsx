import { act, render, screen } from "@testing-library/react";
import AnimatedCounter from "@/components/home/AnimatedCounter";

let mockInView = false;

jest.mock("@/hooks/useInView", () => ({
  useInView: () => ({ ref: jest.fn(), inView: mockInView }),
}));

describe("AnimatedCounter", () => {
  beforeEach(() => {
    mockInView = false;
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("renders zero until it enters the viewport", () => {
    render(<AnimatedCounter value={40} suffix="+" />);

    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it("counts to the target value after entering the viewport", () => {
    jest.useFakeTimers();
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      return window.setTimeout(() => callback(performance.now()), 16);
    });
    jest.spyOn(window, "cancelAnimationFrame").mockImplementation((handle) => {
      window.clearTimeout(handle);
    });
    mockInView = true;

    render(<AnimatedCounter value={40} suffix="+" duration={1200} />);

    act(() => {
      jest.advanceTimersByTime(1300);
    });

    expect(screen.getByText("40+")).toBeInTheDocument();
  });

  it("renders the final value immediately when reduced motion is preferred", () => {
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

    render(<AnimatedCounter value={18} />);

    expect(screen.getByText("18")).toBeInTheDocument();
  });
});
