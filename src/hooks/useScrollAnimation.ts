/**
 * Scroll Animation Hook - IEEE Professional Website
 * Manages intersection observer for scroll-triggered animations
 */

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const { threshold = 0.2, rootMargin = '0px', once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};

export default useScrollAnimation;
