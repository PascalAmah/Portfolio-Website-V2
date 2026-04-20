import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from './useReducedMotion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
}

/**
 * Hook for scroll-based animations with reduced motion support
 * @param animationFn - Function that returns GSAP animation
 * @param options - ScrollTrigger options
 */
const useScrollAnimation = (
  animationFn: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If user prefers reduced motion, show content immediately without animation
    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const animation = animationFn(element);

    const scrollTrigger = ScrollTrigger.create({
      trigger: options.trigger || element,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub || false,
      markers: options.markers || false,
      once: options.once !== undefined ? options.once : true,
      animation: animation,
    });

    return () => {
      scrollTrigger.kill();
      animation.kill();
    };
  }, [animationFn, options, prefersReducedMotion]);

  return elementRef;
};

export default useScrollAnimation;
