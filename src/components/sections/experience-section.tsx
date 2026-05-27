import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experiencia">
      <SectionHeader
        label="Experiencia"
        title="Experiencia profesional"
        description="Desarrollo full stack en productos digitales con operación real en entornos empresariales."
      />

      <div className="mx-auto max-w-3xl">
        {experience.map((item, index) => (
          <FadeIn key={item.role} delay={index * 0.06}>
            <article className="relative border-l border-foreground/15 pl-7 pb-10 last:pb-0">
              <span
                className="absolute top-1.5 -left-[5px] size-2 rounded-full bg-foreground ring-4 ring-background"
                aria-hidden
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">
                    {item.role}
                  </h3>
                  {item.company ? (
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.company}
                    </p>
                  ) : null}
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {item.period} · {item.location}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
