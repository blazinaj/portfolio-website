"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Ref: https://stackoverflow.com/a/65008608
 *
 * @param ref
 */
export const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting),
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref]);

  return isIntersecting;
};
