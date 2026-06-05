"use client";

import { CalendarDays, GraduationCap, Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { educationMeta } from "@/data/education-meta";
import { cn } from "@/lib/utils";

export function EducationSection() {
  const t = useTranslations("Education");

  return (
    <Section
      id="educacion"
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

      <FadeIn delay={0.08} className="mt-8 md:mt-10">
        <div className="flex gap-5 sm:gap-8 md:gap-10">
          <aside
            className="relative flex w-10 shrink-0 flex-col items-center sm:w-12"
            aria-hidden
          >
            <div className="relative z-10 flex size-5 items-center justify-center">
              <span className="absolute size-5 rounded-full bg-indigo-100/80 dark:bg-indigo-500/20" />
              <span className="relative size-2.5 rounded-full bg-indigo-500 ring-4 ring-background" />
            </div>

            <div className="relative my-2 flex min-h-[4.5rem] w-full flex-1 flex-col items-center sm:my-3">
              <div className="absolute inset-y-0 left-1/2 w-0 -translate-x-1/2 border-l-2 border-indigo-200/80 dark:border-indigo-500/30" />
            </div>

            <div className="z-10 flex size-5 items-center justify-center rounded-full border-2 border-dashed border-border/80 bg-background" />
          </aside>

          <div className="min-w-0 flex-1 space-y-4">
            {educationMeta.map((item) => (
              <article
                key={item.id}
                className={cn(
                  "flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.06)] sm:items-center sm:gap-5 sm:p-6",
                  "dark:shadow-[0_2px_12px_-6px_rgba(0,0,0,0.35)]",
                )}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400 sm:size-13 sm:rounded-2xl">
                  <GraduationCap className="size-5 sm:size-6" strokeWidth={1.75} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.9375rem] font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-lg">
                    {t(`items.${item.id}.degree`)}
                  </h3>
                  <p className="mt-0.5 text-[0.8125rem] font-semibold text-indigo-500 dark:text-indigo-400">
                    {t(`items.${item.id}.institution`)}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                      {t("badge")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <CalendarDays className="size-3 shrink-0 text-foreground/40" />
                      {t(`items.${item.id}.period`)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.14}>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground/70 md:mt-10">
          <Info className="size-3.5 shrink-0 text-indigo-400/80" strokeWidth={2} />
          {t("footerNote")}
        </p>
      </FadeIn>
      </SectionReveal>
    </Section>
  );
}
