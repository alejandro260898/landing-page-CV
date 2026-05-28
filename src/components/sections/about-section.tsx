"use client";

import {
  BarChart2,
  Box,
  CalendarDays,
  Code2,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Rocket,
    title: "Enfoque práctico",
    description:
      "Construyo soluciones funcionales enfocadas en resolver necesidades reales.",
  },
  {
    icon: Code2,
    title: "Desarrollo integral",
    description:
      "Experiencia trabajando frontend, backend, APIs, cloud e integraciones móviles.",
  },
  {
    icon: BarChart2,
    title: "Mejora continua",
    description:
      "Optimizo procesos y adopto tecnologías que aportan valor al desarrollo.",
  },
  {
    icon: Users,
    title: "Trabajo colaborativo",
    description:
      "Participación en equipos multidisciplinarios orientados a productos reales.",
  },
] as const;

const stats = [
  { icon: CalendarDays, value: "Experiencia en producción", label: "Entornos reales" },
  { icon: Box, value: "Aplicaciones desplegadas", label: "Web y móvil" },
  { icon: Code2, value: "Stack moderno", label: "Frontend a cloud" },
  { icon: Zap, value: "Aprendizaje continuo", label: "Evolución constante" },
] as const;

export function AboutSection() {
  return (
    <Section
      id="sobre-mi"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
      containerClassName="max-w-7xl"
    >
      <SectionReveal>
      {/* ── Two-column layout ── */}
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* Left column */}
        <FadeIn className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
            Sobre mí
          </p>

          <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
            Ingeniería orientada
            <br className="hidden sm:block" /> a resultados
          </h2>

          <p className="mt-4 text-pretty text-[0.9375rem] leading-[1.75] text-muted-foreground md:text-base md:leading-[1.72]">
            Desarrollo software enfocado en productos reales y entornos de
            producción. Me especializo en aplicaciones web y móviles escalables,
            integraciones API, PWAs y soluciones conectadas con hardware BLE.
          </p>

          <span className="mt-6 block h-px w-10 bg-border" aria-hidden />

          <p className="mt-6 max-w-2xl text-pretty text-[0.9375rem] leading-[1.75] text-muted-foreground md:max-w-none md:text-base md:leading-[1.72]">
            {profile.summary}
          </p>
        </FadeIn>

        {/* Right column — 2×2 feature cards */}
        <FadeIn delay={0.08} className="grid grid-cols-2 items-stretch gap-3 sm:gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={cn(
                "flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5",
                "transition-[border-color,box-shadow] duration-300",
                "hover:border-indigo-200/60 hover:shadow-[0_4px_20px_-6px_rgba(99,102,241,0.12)]",
                "dark:hover:border-indigo-500/25 dark:hover:shadow-[0_4px_20px_-6px_rgba(99,102,241,0.18)]",
              )}
            >
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <p className="mb-1.5 text-sm font-semibold tracking-[-0.01em] text-foreground">
                {title}
              </p>
              <p className="flex-1 text-pretty text-[0.8125rem] leading-[1.72] text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>

      {/* ── Stats row ── */}
      <FadeIn delay={0.14} className="mt-8 md:mt-10">
        <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className={cn(
                "flex h-full flex-col items-center justify-center gap-2 rounded-2xl px-3 py-5 text-center sm:px-4",
                "bg-indigo-50/70 dark:bg-indigo-500/[0.07]",
                "border border-indigo-100/80 dark:border-indigo-500/15",
              )}
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-indigo-500 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-400">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <p className="text-pretty text-[0.8125rem] font-bold leading-snug tracking-[-0.01em] text-foreground sm:text-[0.875rem]">
                {value}
              </p>
              <p className="text-[0.75rem] leading-snug text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
      </SectionReveal>
    </Section>
  );
}
