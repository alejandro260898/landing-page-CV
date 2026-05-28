"use client";

import { CalendarDays, GraduationCap, Info, Plus } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <Section
      id="educacion"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
    >
      <SectionReveal>
      {/* Header */}
      <FadeIn>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
          Educación
        </p>
        <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
          Formación académica
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          Mi formación académica y aprendizaje continuo que respaldan mi
          desarrollo profesional.
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
            <div className="relative z-10 flex size-5 items-center justify-center">
              <span className="absolute size-5 rounded-full bg-indigo-100/80 dark:bg-indigo-500/20" />
              <span className="relative size-2.5 rounded-full bg-indigo-500 ring-4 ring-background" />
            </div>

            <div className="relative my-2 flex min-h-[4.5rem] w-full flex-1 flex-col items-center sm:my-3">
              <div className="absolute inset-y-0 left-1/2 w-0 -translate-x-1/2 border-l-2 border-indigo-200/80 dark:border-indigo-500/30" />
            </div>

            <div className="z-10 flex size-5 items-center justify-center rounded-full border-2 border-dashed border-border/80 bg-background" />
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1 space-y-4">
            {education.map((item, index) => (
              <article
                key={`${item.degree}-${index}`}
                className={cn(
                  "flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center sm:gap-5 sm:p-6",
                  "dark:shadow-[0_2px_12px_-6px_rgba(0,0,0,0.35)]",
                )}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <GraduationCap className="size-5" strokeWidth={1.75} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold tracking-[-0.02em] text-foreground sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                  <span className="mt-2.5 inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    Formación profesional
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 self-start text-muted-foreground sm:self-center">
                  <CalendarDays className="size-3.5 shrink-0 text-foreground/45" />
                  <span className="text-sm font-medium">{item.period}</span>
                </div>
              </article>
            ))}

            {/* Placeholder — próximamente */}
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border/70 px-5 py-8 text-center sm:flex-row sm:py-10",
              )}
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-muted/20">
                <Plus className="size-4 text-muted-foreground/60" strokeWidth={2} />
              </span>
              <p className="text-sm text-muted-foreground/70">
                Más estudios o certificaciones próximamente
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Footer note */}
      <FadeIn delay={0.14}>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground/70 md:mt-10">
          <Info className="size-3.5 shrink-0 text-indigo-400/80" strokeWidth={2} />
          En constante aprendizaje y crecimiento profesional.
        </p>
      </FadeIn>
      </SectionReveal>
    </Section>
  );
}
