'use client';
import React from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

export default function Scroll({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
  );
}
