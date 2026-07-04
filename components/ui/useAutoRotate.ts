import { useEffect, useRef, useState } from "react";

/**
 * Drives an auto-advancing index for carousels / tab switchers.
 * - Advances every `delay` ms (default 10s).
 * - Pauses while the pointer is over the switching area (spread `hoverProps`).
 * - Skips entirely for a single item or when the user prefers reduced motion.
 *
 * Returns the current `index`, a `setIndex` for manual controls, and `hoverProps`
 * to attach to the element that should pause rotation on hover.
 */
export function useAutoRotate(count: number, delay = 10000) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (count <= 1) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % count);
    }, delay);
    return () => window.clearInterval(id);
  }, [count, delay]);

  const hoverProps = {
    onMouseEnter: () => {
      paused.current = true;
    },
    onMouseLeave: () => {
      paused.current = false;
    },
  };

  return { index, setIndex, hoverProps };
}
