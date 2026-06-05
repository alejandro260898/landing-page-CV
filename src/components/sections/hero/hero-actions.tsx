"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { DownloadCvButton } from "@/components/shared/download-cv-button";
import { profile } from "@/data/profile";
import { transitionMedium } from "@/lib/motion";
import { cn } from "@/lib/utils";

const LinkedInSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("shrink-0", className)} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("shrink-0", className)} aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const btnBase = cn(
  "group inline-flex items-center justify-center gap-2 rounded-xl text-white",
  "transition-[transform,box-shadow] duration-300",
  "hover:-translate-y-0.5 active:translate-y-0",
  "size-11 sm:h-11 sm:min-w-[10rem] sm:px-6",
  "text-sm font-semibold tracking-[-0.01em]",
);

export function HeroActions() {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("Common");

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: transitionMedium },
  };

  return (
    <motion.div
      className="mt-5 flex w-full flex-col items-center gap-3 sm:mt-8"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.07,
            delayChildren: reduceMotion ? 0 : 0.54,
          },
        },
      }}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <motion.div variants={itemVariants}>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("linkedin")}
            className={cn(
              btnBase,
              "bg-[#0A66C2] shadow-[0_2px_10px_-2px_rgba(10,102,194,0.35)]",
              "hover:bg-[#0958a8] sm:hover:shadow-[0_4px_14px_-4px_rgba(10,102,194,0.4)]",
            )}
          >
            <LinkedInSvg className="size-5 sm:size-4" />
            <span className="hidden sm:inline">{t("linkedin")}</span>
            <ArrowUpRight className="hidden size-3.5 opacity-70 sm:inline transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("github")}
            className={cn(
              btnBase,
              "bg-[#1a1a2e] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.22)]",
              "hover:bg-[#25253c] sm:hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.28)]",
              "dark:bg-[#161625] dark:hover:bg-[#1e1e30]",
            )}
          >
            <GitHubSvg className="size-5 sm:size-4" />
            <span className="hidden sm:inline">{t("github")}</span>
            <ArrowUpRight className="hidden size-3.5 opacity-70 sm:inline transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Solo móvil: en desktop ya está en el appbar */}
      <motion.div className="flex justify-center sm:hidden" variants={itemVariants}>
        <DownloadCvButton
          variant="outline"
          className={cn(
            "h-11 w-auto shrink-0 gap-2 rounded-xl border border-border/80 px-4 text-sm font-semibold tracking-[-0.01em]",
            "bg-card text-foreground shadow-[0_2px_14px_-4px_rgba(0,0,0,0.1)]",
            "hover:bg-muted",
            "dark:border-white/15 dark:bg-muted dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.55)]",
            "dark:hover:bg-muted/80",
          )}
        />
      </motion.div>
    </motion.div>
  );
}
