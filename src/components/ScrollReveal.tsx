import { motion } from 'motion/react';
import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  key?: any;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 30,
  blur = true,
}: ScrollRevealProps) {
  const getVariants = () => {
    const initialY = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
    const initialX = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

    return {
      hidden: {
        opacity: 0,
        y: initialY,
        x: initialX,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier transition
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      variants={getVariants()}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
