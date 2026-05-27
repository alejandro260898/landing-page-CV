import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { stackCategories } from "@/data/stack";
import { formatStackLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

export function StackSection() {
  return (
    <Section id="stack">
      <SectionHeader
        label="Stack"
        title="Stack tecnológico"
        description="Herramientas con las que desarrollo productos web, móviles e infraestructura."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.04}>
            <article
              className={cn(
                "group rounded-lg border border-border/80 bg-card p-5 transition-colors duration-200",
                "hover:border-foreground/20 hover:bg-muted/30",
                category.id === "ai" && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <h3 className="text-sm font-medium text-foreground">
                {category.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {category.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge
                      variant="outline"
                      className="border-border/80 bg-transparent font-normal text-muted-foreground transition-colors group-hover:border-foreground/15 group-hover:text-foreground"
                    >
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
              <p className="sr-only">{formatStackLabel(category.technologies)}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
