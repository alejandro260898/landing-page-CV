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

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={
        isMobile
          ? { once: true, amount: 0, margin: "0px 0px 20% 0px" }
          : { once: true, amount: 0.2, margin: "0px 0px -6% 0px" }
      }
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
