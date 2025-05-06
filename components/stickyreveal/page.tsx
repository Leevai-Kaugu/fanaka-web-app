'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from '@/components/stickyReveal.module.css';

interface StickyRevealProps {
  children: React.ReactNode;
  className?: string;
}

const StickyReveal: React.FC<StickyRevealProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      const start = scrollY + rect.top;
      const end = start + rect.height - window.innerHeight;
      const current = scrollY;

      const percent = Math.min(Math.max((current - start) / (end - start), 0), 1);
      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.stickyWrapper} ${className}`} ref={containerRef}>
      <div
        className={styles.stickyInner}
        style={{
          transform: `translateY(${(1 - progress) * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StickyReveal;
