'use client'

import { Variants } from 'framer-motion'

// Stagger container for page load animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

// Fade in up animation for children
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

// Fade in animation (no vertical movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

// Scale up on hover
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

// Viewport settings for scroll-triggered animations
export const viewportConfig = {
  once: true,
  amount: 0.3,
}

// Transition presets
export const transitions = {
  snappy: { duration: 0.2, ease: 'easeOut' },
  smooth: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 20 },
  springGentle: { type: 'spring', stiffness: 150, damping: 15 },
}

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
