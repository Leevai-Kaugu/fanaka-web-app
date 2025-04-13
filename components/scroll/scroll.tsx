'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-server-dom-webpack/static.edge'
import { useEffect } from 'react';

export default function ScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-10 bg-indigo-500 text-white rounded-lg shadow-lg"
    >
      Scroll to see me animate!
    </motion.div>
  );
}
