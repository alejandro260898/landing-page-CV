import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { DownloadCvButton } from "@/components/shared/download-cv-button";
import { FadeIn } from "@/components/shared/fade-in";
import { GridBackground } from "@/components/shared/grid-background";
import { Logo } from "@/components/shared/logo";
import { Section } from "@/components/shared/section";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section
      id="inicio"
      className="relative border-t-0 py-0"
      containerClassName="relative"
    >
      <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-24 pt-28 md:py-32 md:pt-36">
        <GridBackground />

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <FadeIn>
            <Logo size="lg" className="mb-8" priority />
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {profile.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-3 text-lg font-medium tracking-tight text-foreground md:text-xl">
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                <MapPin className="size-3.5" />
                {profile.location}
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                {profile.availability}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
              <DownloadCvButton size="lg" className="sm:min-w-[200px]" />
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex items-center justify-center gap-1.5",
                )}
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex items-center justify-center gap-1.5",
                )}
              >
                GitHub
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
