"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Section } from "@/components/shared/section";
import { SectionReveal } from "@/components/shared/section-reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <Section
      id="colaboraciones"
      className="scroll-mt-16 pt-8 pb-14 md:pt-10 md:pb-16"
    >
      <SectionReveal>
      {/* Header */}
      <FadeIn>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
          Colaboraciones
        </p>
        <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl md:text-[2.05rem]">
          Plataformas y productos
        </h2>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          He participado en el desarrollo de productos digitales reales en
          entornos empresariales de producción, colaborando en equipos
          multidisciplinarios.
        </p>
        <span className="mt-5 block h-px w-10 bg-indigo-400/60" aria-hidden />
      </FadeIn>

      {/* Project list */}
      <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.05}>
            <article
              className={cn(
                "group grid overflow-hidden rounded-2xl border border-border/70 bg-card",
                "grid-cols-1 lg:grid-cols-[14rem_minmax(0,1fr)_18rem] lg:items-stretch",
                "shadow-[0_2px_12px_-6px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300",
                "hover:border-indigo-200/50 hover:shadow-[0_6px_24px_-8px_rgba(99,102,241,0.12)]",
                "dark:shadow-[0_2px_12px_-6px_rgba(0,0,0,0.35)] dark:hover:border-indigo-500/25",
              )}
            >
              {/* Identity */}
              <div className="flex items-center gap-3 border-b border-border/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10"
                  aria-hidden
                >
                  <span className="size-2 rounded-full bg-indigo-500" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Participación
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-foreground">
                      {project.name}
                    </h3>
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-[opacity,color] duration-200 group-hover:opacity-100 hover:text-foreground"
                        aria-label={`Más sobre ${project.name}`}
                      >
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex min-w-0 items-center border-b border-border/60 px-5 py-4 lg:border-b-0 lg:border-r lg:px-6 lg:py-5">
                <p className="text-[0.8125rem] leading-[1.65] text-muted-foreground sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* Stack pills */}
              <div className="flex w-full flex-wrap content-center items-center gap-2 p-5 lg:w-[18rem] lg:justify-start lg:p-6">
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
        ))}
      </div>
      </SectionReveal>
    </Section>
  );
}
