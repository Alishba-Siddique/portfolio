// src/components/Header/animation.js
export const menuSlide = {
  initial: { x: '100%' },
  enter: {
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
  exit: (i) => ({
    x: 80,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

export const scale = {
  open: {
    scale: 1,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

// Responsive animation variants
export const getResponsiveAnimations = (isMobile) => ({
  menuSlide: {
    ...menuSlide,
    enter: {
      ...menuSlide.enter,
      width: isMobile ? '100%' : '31.25rem',
    },
  },
  slide: {
    ...slide,
    enter: (i) => ({
      ...slide.enter(i),
      x: isMobile ? 40 : 80,
    }),
    exit: (i) => ({
      ...slide.exit(i),
      x: isMobile ? 40 : 80,
    }),
  },
});
