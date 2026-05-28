"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TechIcon } from "@/components/shared/tech-icon";
import { heroTechnologies } from "@/data/hero";
import { transitionMedium } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroTechPillsProps = { className?: string };

export function HeroTechPills({ className }: HeroTechPillsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className={cn(
        "mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-2",
        className,
      )}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.045,
            delayChildren: reduceMotion ? 0 : 0.34,
          },
        },
      }}
      aria-label="Tecnologías principales"
    >
      {heroTechnologies.map((tech) => (
        <motion.li
          key={tech}
          variants={{
            hidden: { opacity: 0, y: 10, scale: 0.94 },
            show: { opacity: 1, y: 0, scale: 1, transition: transitionMedium },
          }}
        >
          <span
            className={cn(
              "group inline-flex cursor-default items-center gap-1.5 rounded-full",
              "border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur-sm",
              "text-[11.5px] font-medium tracking-wide text-muted-foreground",
              "transition-[color,background-color,border-color,box-shadow,transform] duration-300",
              "hover:-translate-y-px hover:border-border hover:bg-background/90 hover:text-foreground",
              "hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]",
            )}
          >
            <TechIcon
              tech={tech}
              className="size-3.5 transition-transform duration-300 group-hover:scale-110"
            />
            {tech}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
