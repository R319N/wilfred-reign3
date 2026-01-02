"use client";
import { Variants } from "framer-motion";

// Define the direction and animation types
type Direction = "left" | "right" | "up" | "down";
type AnimationType = "spring" | "tween";

// interface TransitionConfig {
//   type: AnimationType;
//   stiffness?: number;
//   damping?: number;
//   delay?: number;
//   duration?: number;
//   ease?: string;
//   repeat?: number;
//   repeatType?: string;
// }

// Variants for nav animations
export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};


export const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};
// Slide-in animation
export const slideIn = (
  direction: Direction = "up",
  type: AnimationType = "spring",
  delay: number = 0,
  duration: number = 0.5
): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Stagger container animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Text variant animation
export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

// Text container animation
export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

// Second text variant animation
export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

// Fade-in animation
export const fadeIn = (
  direction: Direction = "up",
  type: AnimationType = "spring",
  delay: number = 0,
  duration: number = 1
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Planet variants animation
export const planetVariants = (direction: Direction): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

// Slider variants
export const sliderVariantLeft: Variants = {
  initial: { x: "100%" },
  animate: {
    x: "-100%",
    transition: {
      duration: 15,
      // speed:1,
      ease: "linear",
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};
export const scrollButtonVariant = {
  opacity: 0,
  y: 10,
  transition: {
    duration: 3,
    repeat: Infinity
  },

};
// export const scrollButtonVariant = {
//   opacity: 0,
//   y: 10,
//   transition: {
//     duration: 2,
//     repeat: Infinity
//   }
// };
export const sliderVariantLeft2: Variants = {
  initial: { x: "100%" },
  animate: {
    x: "-100%",
    transition: {
      duration: 30,
      repeatType: "mirror",
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const sliderVariantRight: Variants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const sliderVariantRight2: Variants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      duration: 40,
      repeatType: "mirror",
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Zoom-in animation
export const zoomIn = (
  delay: number = 0,
  duration: number = 1
): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Footer variants animation
export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
