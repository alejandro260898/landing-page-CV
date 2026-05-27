import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section id="sobre-mi">
      <SectionHeader
        label="Sobre mí"
        title="Ingeniería orientada a producto"
        description="Developer full stack con enfoque práctico: construir software que funcione en producción y resuelva problemas reales."
      />

      <FadeIn>
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>{profile.summary}</p>
          <p>{profile.description}</p>
        </div>
      </FadeIn>
    </Section>
  );
}
