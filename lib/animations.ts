import { Variants } from 'framer-motion';

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -20, scale: 1.02 },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ["-200% 0", "200% 0"],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

export const scrollReveal: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const counterVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const cardHover: Variants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const buttonVariants: Variants = {
  tap: { scale: 0.95, transition: { duration: 0.1 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export const textReveal: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const floating: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const smoothEntrance: Variants = {
  initial: { opacity: 0, y: 30, rotateX: 10 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Parallax — le paramètre speed est intentionnellement réservé
// pour une intégration future avec useScroll de Framer Motion
export const parallaxVariants = (_speed: number = 0.5): Variants => ({
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: { y: { stiffness: 100, damping: 10 } },
  },
});

export const typewriter: Variants = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const glow: Variants = {
  animate: {
    boxShadow: [
      "0 0 5px rgba(37, 99, 235, 0.3)",
      "0 0 20px rgba(37, 99, 235, 0.6)",
      "0 0 5px rgba(37, 99, 235, 0.3)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const animationPresets = {
  fadeInUp,
  fadeInDown: { ...fadeInUp, initial: { ...fadeInUp.initial, y: -60 } },
  fadeInLeft: { ...slideInLeft },
  fadeInRight: { ...slideInRight },
  scaleIn,
  bounceIn,
  smoothEntrance,
};

export const scrollAnimationConfig = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

export const optimizedAnimation = {
  layout: false,
  transition: { type: "spring", stiffness: 400, damping: 40 },
};
