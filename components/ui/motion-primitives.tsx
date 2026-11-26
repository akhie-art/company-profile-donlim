"use client";

import * as React from "react";
import {
  MotionConfig,
  motion,
  useInView,
  useScroll,
  useSpring,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

export const INDUSTRIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: INDUSTRIAL_EASE }}
    >
      {children}
    </MotionConfig>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-[#0547D4] via-[#0547D4] to-[#FB9704] pointer-events-none"
    />
  );
}

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  children: React.ReactNode;
}

export function Reveal({
  delay = 0,
  y = 18,
  className,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: INDUSTRIAL_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.04,
    },
  }),
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: INDUSTRIAL_EASE,
    },
  },
};

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  children: React.ReactNode;
}

export function StaggerGroup({
  stagger = 0.08,
  className,
  children,
  ...props
}: StaggerGroupProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerVariants}
      custom={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
