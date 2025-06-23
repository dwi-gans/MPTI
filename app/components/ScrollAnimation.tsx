'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  threshold?: number;
}

const directionVariants = {
  up: { y: 50, opacity: 0, scale: 0.95 },
  down: { y: -50, opacity: 0, scale: 0.95 },
  left: { x: 50, opacity: 0, scale: 0.95 },
  right: { x: -50, opacity: 0, scale: 0.95 },
  fade: { opacity: 0, scale: 0.95 },
  default: { y: 50, opacity: 0, scale: 0.95 },
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6, // seconds for framer-motion
  threshold = 0.1,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay: delay / 1000, // convert ms to s
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });
    }
  }, [controls, inView, delay, duration]);

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div
        initial={directionVariants[direction] || directionVariants.default}
        animate={controls}
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;