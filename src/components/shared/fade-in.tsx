"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const hidden = isMobile ? { opacity: 0 } : { opacity: 0, y: 14 };
  const visible = isMobile ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? false : hidden}
      whileInView={visible}
      viewport={
        isMobile
          ? { once: true, amount: 0.08, margin: "0px 0px -4% 0px" }
          : { once: true, amount: 0.2, margin: "0px 0px -6% 0px" }
      }
      style={isMobile ? { overflowAnchor: "none" } : undefined}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: easePremium }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
