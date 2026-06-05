"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TechIcon } from "@/components/shared/tech-icon";
import { heroTechnologies } from "@/data/hero";
import { transitionMedium } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

type HeroTechPillsProps = { className?: string };

export function HeroTechPills({ className }: HeroTechPillsProps) {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("Common");

  return (
    <motion.ul
      className={cn(
        "mt-5 flex max-w-full flex-row flex-wrap items-center justify-center gap-2",
        "sm:mt-7 sm:max-w-2xl sm:gap-2",
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
      aria-label={t("mainTechnologies")}
    >
      {heroTechnologies.map((tech) => (
        <motion.li
          key={tech}
          variants={{
            hidden: { opacity: 0, y: 10, scale: 0.94 },
            show: { opacity: 1, y: 0, scale: 1, transition: transitionMedium },
          }}
        >
          <button
            type="button"
            title={tech}
            aria-label={t("goToStack", { tech })}
            onClick={() => scrollToSection("#stack")}
            className={cn(
              "group inline-flex size-9 cursor-pointer items-center justify-center rounded-xl",
              "border border-border/60 bg-background/70 backdrop-blur-sm",
              "transition-[color,background-color,border-color,box-shadow,transform] duration-300",
              "hover:-translate-y-px hover:border-border hover:bg-background/90",
              "hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]",
              "active:translate-y-0",
              "sm:size-auto sm:gap-1.5 sm:rounded-full sm:px-3 sm:py-1.5",
              "sm:text-[11.5px] sm:font-medium sm:tracking-wide sm:text-muted-foreground",
              "sm:hover:text-foreground",
            )}
          >
            <TechIcon
              tech={tech}
              className="size-[1.125rem] transition-transform duration-300 group-hover:scale-110 sm:size-3.5"
            />
            <span className="hidden sm:inline">{tech}</span>
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}
