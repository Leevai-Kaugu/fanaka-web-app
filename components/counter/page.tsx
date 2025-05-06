'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollCounterProps {
  target?: number;
  duration?: number;
}

const ScrollCounter: React.FC<ScrollCounterProps> = ({ target = 100, duration = 2000 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState<number>(0);
  const observer = useRef<IntersectionObserver | null>(null);

  const animateCounter = () => {
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (ref.current && observer.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return (
    <div
      ref={ref}
      className="text-[7vw] md:text-[2.5vw] text-center"
    >
      {count}%
    </div>
  );
};

export default ScrollCounter;



