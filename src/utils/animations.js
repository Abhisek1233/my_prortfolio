// Professional Animation Variants and Utilities
import { cubicBezier } from 'framer-motion';

// Custom easing functions
export const easings = {
  smooth: cubicBezier(0.4, 0, 0.2, 1),
  bounce: cubicBezier(0.68, -0.55, 0.265, 1.55),
  elastic: cubicBezier(0.175, 0.885, 0.32, 1.275),
  dramatic: cubicBezier(0.25, 0.46, 0.45, 0.94),
};

// Professional fade variants
export const fadeVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: easings.smooth }
  }
};

// Slide variants with different directions
export const slideVariants = {
  left: {
    initial: { x: -60, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: easings.smooth }
    },
    exit: { 
      x: -60, 
      opacity: 0,
      transition: { duration: 0.5, ease: easings.smooth }
    }
  },
  right: {
    initial: { x: 60, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: easings.smooth }
    },
    exit: { 
      x: 60, 
      opacity: 0,
      transition: { duration: 0.5, ease: easings.smooth }
    }
  },
  up: {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: easings.smooth }
    },
    exit: { 
      y: 60, 
      opacity: 0,
      transition: { duration: 0.5, ease: easings.smooth }
    }
  },
  down: {
    initial: { y: -60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: easings.smooth }
    },
    exit: { 
      y: -60, 
      opacity: 0,
      transition: { duration: 0.5, ease: easings.smooth }
    }
  }
};

// Scale animations with bounce
export const scaleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: easings.bounce }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: easings.smooth }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: easings.smooth }
  },
  exit: { 
    scale: 0.8, 
    opacity: 0,
    transition: { duration: 0.4, ease: easings.smooth }
  }
};

// Stagger container variants
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerItem = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

// Card hover animations
export const cardHover = {
  initial: {},
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easings.smooth
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: easings.smooth
    }
  }
};

// Text reveal animations
export const textReveal = {
  initial: {
    y: 100,
    opacity: 0,
    clipPath: "inset(0 0 100% 0)"
  },
  animate: {
    y: 0,
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
      ease: easings.dramatic
    }
  }
};

// Typewriter effect
export const typewriterVariants = {
  initial: { width: 0 },
  animate: {
    width: "auto",
    transition: {
      duration: 2,
      ease: easings.smooth,
      delay: 0.5
    }
  }
};

// Parallax scroll variants
export const parallaxVariants = {
  initial: { y: 0 },
  animate: (custom) => ({
    y: custom * -50,
    transition: {
      duration: 0,
      ease: "linear"
    }
  })
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easings.smooth
    }
  }
};

// Button hover effects
export const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2,
      ease: easings.smooth
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: easings.smooth
    }
  }
};

// Page transitions
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easings.smooth
    }
  }
};

// Morphing shapes
export const morphVariants = {
  initial: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  animate: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { duration: 2, ease: easings.smooth },
      fill: { duration: 1, delay: 1, ease: easings.smooth }
    }
  }
};

// Floating animation
export const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glitch effect
export const glitchVariants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -2, 2, 0],
    y: [0, 2, -2, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

// Professional scroll reveal with intersection observer
export const createScrollVariant = (direction = 'up', distance = 60) => ({
  initial: {
    opacity: 0,
    ...(direction === 'up' && { y: distance }),
    ...(direction === 'down' && { y: -distance }),
    ...(direction === 'left' && { x: distance }),
    ...(direction === 'right' && { x: -distance }),
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth
    }
  }
});

// Advanced stagger with custom timing
export const createStaggerVariant = (staggerDelay = 0.1, childDelay = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    }
  }
});

const animations = {
  fadeVariants,
  slideVariants,
  scaleVariants,
  staggerContainer,
  staggerItem,
  cardHover,
  textReveal,
  typewriterVariants,
  parallaxVariants,
  loadingSpinner,
  pulseVariants,
  buttonVariants,
  pageVariants,
  morphVariants,
  floatingVariants,
  glitchVariants,
  createScrollVariant,
  createStaggerVariant,
  easings
};

export default animations;
