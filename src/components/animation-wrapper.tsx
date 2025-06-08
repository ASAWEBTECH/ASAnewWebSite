"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function AnimationWrapper({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimationWrapperProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Set up directional variants
  let initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  
  if (direction === "up") {
    initial = { ...initial, y: 50 };
  } else if (direction === "down") {
    initial = { ...initial, y: -50 };
  } else if (direction === "left") {
    initial = { ...initial, x: 50 };
  } else if (direction === "right") {
    initial = { ...initial, x: -50 };
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        },
      });
    }
  }, [controls, isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}