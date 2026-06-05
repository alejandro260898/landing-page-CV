"use client";

import {
  Activity,
  ArrowUpRight,
  Building2,
  MapPinned,
  ScanFace,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { projectsMeta } from "@/data/projects-meta";
import { cn } from "@/lib/utils";

const projectIcons: Record<
  string,
  { Icon: LucideIcon; iconClass: string; bgClass: string }
> = {
  sirane: {
    Icon: Building2,
    iconClass: "text-slate-600 dark:text-slate-300",
    bgClass: "bg-slate-100 dark:bg-slate-500/15",
  },
  faceticket: {
    Icon: ScanFace,
    iconClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 dark:bg-violet-500/15",
  },
  laurier: {
    Icon: ShoppingBag,
    iconClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-500/15",
  },
  recommend: {
    Icon: MapPinned,
    iconClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-500/15",
  },
  ballskore: {
    Icon: Activity,
    iconClass: "text-sky-600 dark:text-sky-400",
    bgClass: "bg-sky-50 dark:bg-sky-500/15",
  },
};

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const tc = useTranslations("Common");

  return (
    <Section
      id="colaboraciones"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
      containerClassName="max-w-7xl"
    >
      <SectionReveal>
      <FadeIn>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
          {t("eyebrow")}
        </p>
        <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-4xl text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          {t("intro")}
        </p>
        <span className="mt-5 block h-px w-10 bg-indigo-400/60" aria-hidden />
      </FadeIn>

      <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
        {projectsMeta.map((project, index) => {
          const { Icon, iconClass, bgClass } =
            projectIcons[project.id] ?? projectIcons.sirane;

          return (
          <FadeIn key={project.id} delay={index * 0.05}>
            <article
              className={cn(
                "group grid overflow-hidden rounded-2xl border border-border/70 bg-card",
                "grid-cols-1 lg:grid-cols-[11.5rem_minmax(22rem,2.5fr)_15rem] lg:items-stretch",
                "shadow-[0_2px_12px_-6px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300",
                "hover:border-indigo-200/50 hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.12)]",
                "dark:shadow-[0_2px_12px_-6px_rgba(0,0,0,0.35)] dark:hover:border-indigo-500/25",
              )}
            >
              <div className="flex items-center gap-3 border-b border-border/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl",
                    bgClass,
                  )}
                  aria-hidden
                >
                  <Icon className={cn("size-5", iconClass)} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-foreground">
                      {project.name}
                    </h3>
                    {"href" in project && project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-[opacity,color] duration-200 group-hover:opacity-100 hover:text-foreground"
                        aria-label={tc("moreAbout", { name: project.name })}
                      >
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 items-center border-b border-border/60 px-5 py-4 lg:min-w-[22rem] lg:border-b-0 lg:border-r lg:px-6 lg:py-5">
                <div className="text-pretty text-[0.8125rem] leading-[1.7] text-muted-foreground sm:text-sm">
                  <p>{t(`items.${project.id}.description`)}</p>
                  <p className="mt-2">
                    <span className="font-semibold text-foreground/80">{t("myRole")}: </span>
                    {t(`items.${project.id}.role`)}
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-wrap content-center items-center gap-2 p-5 lg:w-[15rem] lg:shrink-0 lg:justify-start lg:p-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={cn(
                      "inline-flex shrink-0 items-center rounded-full border border-border/70 bg-muted/30 px-2.5 py-1",
                      "text-[11px] font-medium leading-none whitespace-nowrap text-muted-foreground",
                      "transition-colors duration-200",
                      "group-hover:border-indigo-200/40 group-hover:bg-indigo-50/50 group-hover:text-foreground",
                      "dark:group-hover:border-indigo-500/20 dark:group-hover:bg-indigo-500/[0.06]",
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
          );
        })}
      </div>
      </SectionReveal>
    </Section>
  );
}
