"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  disabled?: boolean;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLElement>(
  options: UseInViewOptions = {},
) {
  const { disabled = false, threshold = 0.15, triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = Boolean(entry?.isIntersecting);

      if (isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          observer.disconnect();
        }
        return;
      }

      if (!triggerOnce) {
        setInView(false);
      }
    }, { threshold });

    observer.observe(node);
    return () => observer.disconnect();
  }, [disabled, threshold, triggerOnce]);

  return { ref, inView };
}
