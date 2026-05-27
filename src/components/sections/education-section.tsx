import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="educacion">
      <SectionHeader
        label="Educación"
        title="Formación académica"
      />

      <div className="mx-auto max-w-3xl">
        {education.map((item, index) => (
          <FadeIn key={item.degree} delay={index * 0.05}>
            <article className="rounded-lg border border-border/80 bg-card/50 p-6 transition-colors hover:border-foreground/15 hover:bg-muted/20">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.institution}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
