"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

type HeroScrollIndicatorProps = {
  className?: string;
};

export function HeroScrollIndicator({ className }: HeroScrollIndicatorProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex justify-center", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.5, ease: easePremium }}
    >
      <a
        href="#sobre-mi"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#sobre-mi");
        }}
        className={cn(
          "group flex cursor-pointer flex-col items-center gap-1.5 rounded-full px-3 py-2",
          "text-foreground/55 transition-colors duration-300",
          "hover:text-foreground/80",
        )}
        aria-label="Ir a la sección Sobre mí"
      >
        <span
          className={cn(
            "relative flex h-8 w-[18px] items-start justify-center rounded-full border-2 pt-1.5",
            "border-foreground/35 transition-[border-color] duration-300",
            "group-hover:border-foreground/65",
          )}
          aria-hidden
        >
          <span
            className={cn(
              "size-1 rounded-full bg-foreground/60 transition-colors duration-300",
              "group-hover:bg-foreground/80",
              "motion-reduce:animate-none animate-[hero-scroll-chevron_2.2s_ease-in-out_infinite]",
            )}
          />
        </span>
        <ChevronDown
          className={cn(
            "size-4 stroke-[2.5] text-foreground/50 transition-colors duration-300",
            "group-hover:text-foreground/70",
            "motion-reduce:animate-none animate-[hero-scroll-chevron_2.2s_ease-in-out_infinite]",
          )}
          aria-hidden
        />
      </a>
    </motion.div>
  );
}
