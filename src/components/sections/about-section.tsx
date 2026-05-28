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
      "Creo soluciones que resuelven problemas reales y generan valor desde el primer día.",
  },
  {
    icon: Code2,
    title: "Desarrollo integral",
    description:
      "Experiencia de extremo a extremo: frontend, backend, APIs, cloud e integraciones.",
  },
  {
    icon: BarChart2,
    title: "Mentalidad de mejora",
    description:
      "Siempre aprendiendo, optimizando procesos y adoptando tecnologías que marcan la diferencia.",
  },
  {
    icon: Users,
    title: "Colaboración efectiva",
    description:
      "Me gusta trabajar en equipo, aportar ideas y construir productos de los que todos se sientan orgullosos.",
  },
] as const;

const stats = [
  { icon: CalendarDays, value: "2+ años", label: "Experiencia profesional" },
  { icon: Box, value: "3+ productos", label: "En producción" },
  { icon: Code2, value: "10+ tecnologías", label: "Dominadas" },
  { icon: Zap, value: "En constante evolución", label: "Aprendiendo cada día" },
] as const;

export function AboutSection() {
  return (
    <Section
      id="sobre-mi"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
    >
      <SectionReveal>
      {/* ── Two-column layout ── */}
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        {/* Left column */}
        <FadeIn className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
            Sobre mí
          </p>

          <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
            Ingeniería orientada
            <br className="hidden sm:block" /> a resultados
          </h2>

          <p className="mt-4 text-[0.9375rem] leading-[1.72] text-muted-foreground md:text-base">
            Desarrollo software que funciona en producción y genera impacto
            real. Me enfoco en construir soluciones escalables, eficientes y
            centradas en las necesidades del usuario y del negocio.
          </p>

          <span className="mt-6 block h-px w-10 bg-border" aria-hidden />

          <p className="mt-6 text-[0.9375rem] leading-[1.72] text-muted-foreground md:text-base">
            {profile.summary}
          </p>
        </FadeIn>

        {/* Right column — 2×2 feature cards */}
        <FadeIn delay={0.08} className="grid grid-cols-2 gap-3 sm:gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col rounded-2xl border border-border/70 bg-card p-5",
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
              <p className="text-[0.8125rem] leading-[1.65] text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>

      {/* ── Stats row ── */}
      <FadeIn delay={0.14} className="mt-8 md:mt-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className={cn(
                "flex flex-col items-center gap-2 rounded-2xl px-4 py-5 text-center",
                "bg-indigo-50/70 dark:bg-indigo-500/[0.07]",
                "border border-indigo-100/80 dark:border-indigo-500/15",
              )}
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-indigo-500 shadow-sm dark:bg-indigo-500/15 dark:text-indigo-400">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <p className="text-[0.875rem] font-bold tracking-[-0.01em] text-foreground sm:text-base">
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
