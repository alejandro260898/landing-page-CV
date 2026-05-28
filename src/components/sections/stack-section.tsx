"use client";

import { Cloud, Monitor, Server, Smartphone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { TechIcon } from "@/components/shared/tech-icon";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { stackCategories } from "@/data/stack";
import { formatStackLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

type CategoryMeta = {
  icon: LucideIcon;
  description: string;
};

const categoryMeta: Record<string, CategoryMeta> = {
  frontend: {
    icon: Monitor,
    description: "Construyo interfaces modernas, rápidas y accesibles.",
  },
  mobile: {
    icon: Smartphone,
    description: "Desarrollo aplicaciones móviles multiplataforma y nativas.",
  },
  backend: {
    icon: Server,
    description: "APIs robustas, seguras y escalables.",
  },
  infra: {
    icon: Cloud,
    description: "Despliegue, contenedores y servicios en la nube.",
  },
  ai: {
    icon: Sparkles,
    description: "Potencio mi flujo de trabajo con inteligencia artificial.",
  },
};

/** Posición en grid de 6 columnas (3 cards arriba, 2 centradas abajo). */
const cardPlacement: Record<string, string> = {
  frontend: "lg:col-span-2",
  mobile: "lg:col-span-2",
  backend: "lg:col-span-2",
  infra: "lg:col-span-2 lg:col-start-2",
  ai: "lg:col-span-2 lg:col-start-4",
};

export function StackSection() {
  return (
    <Section
      id="stack"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
    >
      <SectionReveal>
      <FadeIn>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
          Tecnologías
        </p>
        <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
          Mi stack tecnológico
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          Conjunto de herramientas y tecnologías que utilizo para desarrollar
          productos escalables, modernos y eficientes.
        </p>
        <span className="mt-5 block h-px w-10 bg-indigo-400/60" aria-hidden />
      </FadeIn>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
        {stackCategories.map((category, index) => {
          const meta = categoryMeta[category.id];
          const Icon = meta?.icon ?? Monitor;
          const pillCols =
            category.technologies.length <= 3 ? "grid-cols-1" : "grid-cols-2";

          return (
            <FadeIn key={category.id} delay={index * 0.05}>
              <article
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 sm:p-6",
                  "transition-[border-color,box-shadow] duration-300",
                  "hover:border-indigo-200/60 hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.14)]",
                  "dark:hover:border-indigo-500/25 dark:hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.2)]",
                  cardPlacement[category.id],
                )}
              >
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>

                <p className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
                  {category.title}
                </p>
                {meta?.description && (
                  <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted-foreground">
                    {meta.description}
                  </p>
                )}

                <span className="my-4 block h-px w-full bg-border/70" aria-hidden />

                <ul className={cn("grid gap-2", pillCols)}>
                  {category.technologies.map((tech) => (
                    <li key={tech} className="min-w-0">
                      <span
                        className={cn(
                          "flex w-full min-w-0 items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-2 py-1.5",
                          "text-[11px] font-medium leading-tight text-muted-foreground",
                          "transition-[color,border-color,background-color] duration-200",
                          "group-hover:border-indigo-200/50 group-hover:bg-indigo-50/60 group-hover:text-foreground",
                          "dark:group-hover:border-indigo-500/20 dark:group-hover:bg-indigo-500/[0.06]",
                        )}
                      >
                        <TechIcon tech={tech} className="size-3.5 shrink-0" />
                        <span className="truncate">{tech}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="sr-only">{formatStackLabel(category.technologies)}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>
      </SectionReveal>
    </Section>
  );
}
