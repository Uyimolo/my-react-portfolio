/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Slide = ({ children, slideClass, slideVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const defaultVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        damping: 8,
        delay: 0.2,
        stiffness: 100,
      },
    },
  };

  const variants = slideVariants ? slideVariants : defaultVariants;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
      className={slideClass}>
      {children}
    </motion.div>
  );
};

export default Slide;
