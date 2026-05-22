"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

function prefersReducedMotion() {
  return typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  style,
}: AnimatedSectionProps) {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const { ref, inView } = useInView<HTMLDivElement>({ disabled: reducedMotion });

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  const animationClass = inView && !reducedMotion ? "animate-fade-in-up" : "";
  const classes = [className, animationClass].filter(Boolean).join(" ");
  const animationStyle = !reducedMotion && delay > 0
    ? { ...style, animationDelay: `${delay}ms` }
    : style;

  return (
    <div ref={ref} className={classes || undefined} style={animationStyle}>
      {children}
    </div>
  );
}

export default AnimatedSection;
