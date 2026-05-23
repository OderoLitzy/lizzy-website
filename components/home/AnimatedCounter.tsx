"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeOut(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1200,
}: AnimatedCounterProps) {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [displayValue, setDisplayValue] = useState(() => (
    prefersReducedMotion() ? value : 0
  ));
  const { ref, inView } = useInView<HTMLSpanElement>({
    disabled: reducedMotion,
  });

  useEffect(() => {
    if (reducedMotion || !inView || duration <= 0) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.round(value * easeOut(progress)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, inView, reducedMotion, value]);

  const renderedValue = reducedMotion || (inView && duration <= 0)
    ? value
    : displayValue;

  return <span ref={ref}>{renderedValue}{suffix}</span>;
}
