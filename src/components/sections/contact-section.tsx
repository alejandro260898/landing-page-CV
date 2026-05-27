import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Section, SectionHeader } from "@/components/shared/section";
import { DownloadCvButton } from "@/components/shared/download-cv-button";
import { profile } from "@/data/profile";
import {
  formatEmail,
  formatGitHubHandle,
  formatLinkedInHandle,
} from "@/lib/format";

const contactItems = [
  {
    label: "Teléfono",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\D/g, "")}`,
    external: false,
  },
  {
    label: "Correo",
    value: formatEmail(profile.email),
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: formatLinkedInHandle(),
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: formatGitHubHandle(),
    href: profile.github,
    external: true,
  },
];

export function ContactSection() {
  return (
    <Section id="contacto" className="pb-20 md:pb-28">
      <SectionHeader
        label="Contacto"
        title="Contacto"
        description="Abierto a oportunidades en desarrollo web, móvil y sistemas empresariales."
        align="center"
        className="mx-auto"
      />

      <FadeIn>
        <ul className="mx-auto mt-2 max-w-lg divide-y divide-border rounded-lg border border-border/80 bg-card">
          {contactItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/40"
              >
                <div className="text-left">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{item.value}</p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground" />
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            {profile.location}
          </li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mt-10 flex justify-center">
          <DownloadCvButton size="lg" />
        </div>
      </FadeIn>

      <FadeIn delay={0.12}>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Mail className="mr-1 inline size-3" />
          {profile.availability}
        </p>
      </FadeIn>
    </Section>
  );
}
