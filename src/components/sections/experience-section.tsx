"use client";

import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
      containerClassName="max-w-7xl"
    >
      <SectionReveal>
      {/* Header */}
      <FadeIn>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
          Experiencia
        </p>
        <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
          Experiencia profesional
        </h2>
        <p className="mt-3 max-w-4xl text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          Mi recorrido profesional y los proyectos que han marcado mi crecimiento.
        </p>
        <span className="mt-5 block h-px w-10 bg-indigo-400/60" aria-hidden />
      </FadeIn>

      {/* Timeline + cards */}
      <FadeIn delay={0.08} className="mt-8 md:mt-10">
        <div className="flex gap-5 sm:gap-8 md:gap-10">
          {/* Timeline rail */}
          <aside
            className="relative flex w-10 shrink-0 flex-col items-center sm:w-12"
            aria-hidden
          >
            <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] sm:size-11 aspect-square">
              <Briefcase
                className="size-[18px] text-indigo-500 sm:size-5"
                strokeWidth={1.75}
              />
            </div>

            <div className="relative my-2 flex min-h-[calc(100%-5.5rem)] w-full flex-1 flex-col items-center sm:my-3">
              <div className="absolute inset-y-0 left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-indigo-300/70 dark:border-indigo-500/35" />
              <div className="relative z-10 my-auto size-2.5 shrink-0 rounded-full bg-indigo-500 ring-4 ring-background" />
            </div>

            <div className="z-10 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-border/80 bg-background" />
          </aside>

          {/* Experience cards */}
          <div className="min-w-0 flex-1 space-y-6">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${index}`}
                className={cn(
                  "rounded-2xl border border-border/70 bg-card p-5 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.06)] sm:p-6",
                  "dark:shadow-[0_2px_16px_-6px_rgba(0,0,0,0.35)]",
                )}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-foreground sm:text-lg">
                      {item.role}
                    </h3>
                    {item.company ? (
                      <p className="mt-0.5 text-sm font-medium text-indigo-500 dark:text-indigo-400">
                        {item.company}
                      </p>
                    ) : null}
                  </div>
                  {item.tenure ? (
                    <span className="inline-flex w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                      {item.tenure}
                    </span>
                  ) : null}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground">
                    <CalendarDays className="size-3 shrink-0 text-foreground/45" />
                    {item.period}
                  </span>
                  <span
                    className="hidden text-muted-foreground/40 sm:inline"
                    aria-hidden
                  >
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground">
                    <MapPin className="size-3 shrink-0 text-foreground/45" />
                    {item.location}
                  </span>
                </div>

                <span className="my-5 block h-px w-full bg-border/70" aria-hidden />

                <ul className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-[0.8125rem] leading-[1.65] text-muted-foreground sm:text-sm"
                    >
                      <span
                        className="mt-[0.45rem] size-1.5 shrink-0 rounded-[2px] bg-indigo-500"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>
      </SectionReveal>
    </Section>
  );
}
