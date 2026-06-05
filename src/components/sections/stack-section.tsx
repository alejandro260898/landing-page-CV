"use client";

import { Cloud, Monitor, Server, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/fade-in";
import { TechIcon } from "@/components/shared/tech-icon";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { stackCategoryMeta } from "@/data/stack-meta";
import { formatStackLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Monitor,
  mobile: Smartphone,
  backend: Server,
  infra: Cloud,
};

export function StackSection() {
  const t = useTranslations("Stack");

  return (
    <Section
      id="stack"
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
        <p className="mt-3 max-w-3xl text-pretty text-[0.9375rem] leading-[1.75] text-muted-foreground md:text-base md:leading-[1.72]">
          {t("intro")}
        </p>
        <span className="mt-5 block h-px w-10 bg-indigo-400/60" aria-hidden />
      </FadeIn>

      <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
        {stackCategoryMeta.map((category, index) => {
          const Icon = categoryIcons[category.id] ?? Monitor;
          const techCount = category.technologies.length;
          const useTwoCols = techCount > 1;

          return (
            <FadeIn
              key={category.id}
              delay={index * 0.05}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] lg:max-w-none"
            >
              <article
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 sm:p-6",
                  "transition-[border-color,box-shadow] duration-300",
                  "hover:border-indigo-200/60 hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.14)]",
                  "dark:hover:border-indigo-500/25 dark:hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.2)]",
                )}
              >
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>

                <p className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
                  {t(`categories.${category.id}.title`)}
                </p>
                <p className="mt-1 text-pretty text-[0.8125rem] leading-[1.65] text-muted-foreground">
                  {t(`categories.${category.id}.description`)}
                </p>

                <span className="my-4 block h-px w-full bg-border/70" aria-hidden />

                <ul
                  className={cn(
                    "grid gap-2",
                    useTwoCols ? "grid-cols-2" : "grid-cols-1",
                  )}
                >
                  {category.technologies.map((tech, techIndex) => {
                    const isLastOdd =
                      useTwoCols &&
                      techCount % 2 === 1 &&
                      techIndex === techCount - 1;

                    return (
                      <li
                        key={tech}
                        className={cn(
                          "min-w-0",
                          isLastOdd && "col-span-2 flex justify-center",
                        )}
                      >
                        <span
                          className={cn(
                            "flex min-w-0 items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-2 py-1.5",
                            "text-[11px] font-medium leading-tight text-muted-foreground",
                            "transition-[color,border-color,background-color] duration-200",
                            "group-hover:border-indigo-200/50 group-hover:bg-indigo-50/60 group-hover:text-foreground",
                            "dark:group-hover:border-indigo-500/20 dark:group-hover:bg-indigo-500/[0.06]",
                            isLastOdd ? "w-[calc(50%-0.25rem)]" : "w-full",
                          )}
                        >
                          <TechIcon tech={tech} className="size-3.5" />
                          <span>{tech}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="sr-only">{formatStackLabel([...category.technologies])}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>
      </SectionReveal>
    </Section>
  );
}
