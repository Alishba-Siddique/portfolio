'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Curve() {
  const [dimensions, setDimensions] = useState({ height: 1000 });

  useEffect(() => {
    setDimensions({ height: window.innerHeight });
  }, []);

  const initialPath = `M100 0 L100 ${dimensions.height} Q-100 ${
    dimensions.height / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${dimensions.height} Q100 ${
    dimensions.height / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
