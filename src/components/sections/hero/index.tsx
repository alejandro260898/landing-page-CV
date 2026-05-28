"use client";

import { MapPin, Wifi } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { profile } from "@/data/profile";
import { easePremium, transitionMedium, transitionSlow } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { HeroActions } from "./hero-actions";
import { HeroBackground } from "./hero-background";
import { HeroScrollIndicator } from "./hero-scroll-indicator";
import { HeroTechPills } from "./hero-tech-pills";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex w-full scroll-mt-16 flex-col border-t-0 pt-16 min-h-0 sm:min-h-[100dvh]"
    >
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 sm:px-6 lg:px-8 sm:min-h-[calc(100dvh-4rem)]">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-6 text-center sm:py-12">
          {/* Logo + glow */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduceMotion ? { duration: 0 } : transitionSlow}
            className="relative mb-5 sm:mb-8 md:mb-10"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.1) 50%, transparent 75%)",
              }}
              aria-hidden
            />
            <Logo
              size="lg"
              className="shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)] ring-1 ring-border/40 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]"
              priority
            />
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { ...transitionMedium, delay: 0.1 }
            }
            className={cn(
              "max-w-[16ch] text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground",
              "sm:max-w-none sm:text-[2.7rem] md:text-[3.4rem] md:leading-[1.06]",
            )}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { ...transitionMedium, delay: 0.18 }
            }
            className="mt-3 flex items-center gap-2.5 sm:mt-5 sm:gap-3"
          >
            <span
              className="h-px w-10 bg-gradient-to-r from-transparent via-foreground/25 to-foreground/40 sm:w-16"
              aria-hidden
            />
            <p className="text-sm font-semibold tracking-[0.06em] text-foreground/70 uppercase sm:text-base">
              {profile.cvHeadline}
            </p>
            <span
              className="h-px w-10 bg-gradient-to-l from-transparent via-foreground/25 to-foreground/40 sm:w-16"
              aria-hidden
            />
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.65, ease: easePremium, delay: 0.26 }
            }
            className="mt-3 max-w-[46ch] text-[0.875rem] leading-[1.65] font-normal text-muted-foreground sm:mt-6 sm:text-base sm:leading-[1.72] md:text-[1.05rem]"
          >
            {profile.description}
          </motion.p>

          <HeroTechPills />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.55, ease: easePremium, delay: 0.42 }
            }
            className="mt-4 flex flex-nowrap items-center justify-center gap-2 sm:mt-7"
          >
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-muted-foreground backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
              <MapPin className="size-3 shrink-0 text-foreground/45 sm:size-3.5" />
              {profile.location}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-muted-foreground backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
              <Wifi className="size-3 shrink-0 text-foreground/45 sm:size-3.5" />
              <span className="sm:hidden">Híbrido/remoto</span>
              <span className="hidden sm:inline">{profile.availability}</span>
            </span>
          </motion.div>

          <HeroActions />

          <HeroScrollIndicator className="mt-4 hidden sm:flex sm:mt-7" />
        </div>
      </div>
    </section>
  );
}
