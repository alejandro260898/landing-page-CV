import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { projects } from "@/data/projects";
import { formatStackLabel } from "@/lib/format";
import { cn } from "@/lib/utils";
import { ProjectMockup } from "./project-mockup";

export function ProjectsSection() {
  return (
    <Section id="proyectos">
      <SectionHeader
        label="Proyectos"
        title="Plataformas y productos"
        description="Experiencia participando en el desarrollo de productos digitales reales — no como proyectos personales, sino en contextos empresariales de producción."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.05}>
            <article
              className={cn(
                "group flex h-full flex-col overflow-hidden rounded-lg border border-border/80 bg-card transition-all duration-200",
                "hover:border-foreground/20 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]",
              )}
            >
              <ProjectMockup
                variant={project.variant}
                className="rounded-none border-0 border-b border-border/60"
              />
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      Participación
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                      aria-label={`Más sobre ${project.name}`}
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : null}
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <p className="mt-4 border-t border-border/60 pt-4 font-mono text-xs text-muted-foreground">
                  {formatStackLabel(project.stack)}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
