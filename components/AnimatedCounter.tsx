'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);
  const resetDoneRef = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formatNumber = (num: number) => {
    const roundedNum = Math.floor(num);
    if (isMobile) {
      if (roundedNum >= 1000000) {
        return (roundedNum / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (roundedNum >= 1000) {
        return Math.floor(roundedNum / 1000) + 'k';
      }
    }
    return roundedNum.toLocaleString('en-US');
  };

  const startAnimation = () => {
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Reset to 0 first
          if (!resetDoneRef.current) {
            resetDoneRef.current = true;
            setCount(0);
          }

          // Small delay to ensure DOM updates before animation starts
          setTimeout(() => {
            startAnimation();
          }, 50);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Fallback: check if already visible on mount
    const checkVisibility = () => {
      if (elementRef.current && !hasAnimated) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHasAnimated(true);
          if (!resetDoneRef.current) {
            resetDoneRef.current = true;
            setCount(0);
          }
          setTimeout(() => {
            startAnimation();
          }, 50);
          observer.disconnect();
        }
      }
    };

    // Check after a short delay to ensure layout is stable
    const timer = setTimeout(checkVisibility, 200);

    // Also check on scroll
    const handleScroll = () => {
      if (!hasAnimated && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHasAnimated(true);
          if (!resetDoneRef.current) {
            resetDoneRef.current = true;
            setCount(0);
          }
          setTimeout(() => {
            startAnimation();
          }, 50);
          observer.disconnect();
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef} suppressHydrationWarning className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}