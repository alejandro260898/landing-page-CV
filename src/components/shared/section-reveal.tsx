"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { transitionMedium } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Animación de entrada para bloques de sección al entrar en viewport. */
export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const hidden = isMobile ? { opacity: 0 } : { opacity: 0, y: 18 };
  const visible = isMobile ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? false : hidden}
      whileInView={visible}
      viewport={
        isMobile
          ? { once: true, amount: 0.06, margin: "0px 0px -6% 0px" }
          : { once: true, amount: 0.12, margin: "0px 0px -8% 0px" }
      }
      style={isMobile ? { overflowAnchor: "none" } : undefined}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { ...transitionMedium, delay }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
