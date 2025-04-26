'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Counter({ from = 0, to = 1000, duration = 2 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = 0;
    const end = to;
    const totalFrames = duration * 60;
    const counter = setInterval(() => {
      start++;
      const progress = start / totalFrames;
      const currentCount = Math.floor(from + (end - from) * progress);
      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(counter);
      }
    }, 1000 / 60); // ~60fps

    return () => clearInterval(counter);
  }, [from, to, duration]);

  return (
    <motion.div className="text-[7vw] md:text-[2.5vw] text-center">
      {count}
    </motion.div>
  );
}
