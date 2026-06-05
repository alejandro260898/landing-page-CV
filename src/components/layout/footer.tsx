"use client";

import {
  ArrowUp,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GitHubIcon, LinkedInIcon } from "@/components/cv/cv-icons";
import { Logo } from "@/components/shared/logo";
import { profile } from "@/data/profile";
import { useNavItems } from "@/hooks/use-nav-items";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

function formatPhoneDisplay(phone: string) {
  const match = phone.match(/\(\+\d+\)\s*(\d{3})(\d{3})(\d{4})/);
  if (!match) return phone;
  return `(+52) ${match[1]} ${match[2]} ${match[3]}`;
}

function getWhatsAppUrl(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

const contactLinkDefs = [
  {
    icon: Mail,
    labelKey: null as null,
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Phone,
    labelKey: null as null,
    value: formatPhoneDisplay(profile.phone),
    href: getWhatsAppUrl(profile.phone),
    external: true,
  },
  {
    icon: LinkedInIcon,
    labelKey: "linkedin" as const,
    value: null,
    href: profile.linkedin,
    external: true,
    isSvg: true,
  },
  {
    icon: GitHubIcon,
    labelKey: "github" as const,
    value: null,
    href: profile.github,
    external: true,
    isSvg: true,
  },
] as const;

function FooterColumn({
  title,
  children,
  className,
  withDivider = true,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  withDivider?: boolean;
}) {
  return (
    <div
      className={cn(
        "px-5 py-8 sm:px-6 lg:px-10 lg:py-10 xl:px-12",
        withDivider && "lg:border-r lg:border-border/60",
        className,
      )}
    >
      {title ? (
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/80">
          {title}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const navItems = useNavItems();
  const t = useTranslations("Common");
  const tp = useTranslations("Profile");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#inicio");
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <footer className="no-print border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)_minmax(0,1.05fr)_minmax(12.5rem,0.95fr)]">
          {/* Identity */}
          <FooterColumn withDivider className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-3">
              <Logo size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-bold tracking-[-0.01em] text-foreground">
                  {profile.displayName}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {tp("cvHeadline")}
                </p>
              </div>
            </div>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title={t("contact")} withDivider className="min-w-0 lg:overflow-visible">
            <ul className="space-y-3 max-lg:overflow-x-auto max-lg:pb-0.5">
              {contactLinkDefs.map((item) => {
                const Icon = item.icon;
                const label = item.labelKey ? t(item.labelKey) : item.value!;
                const content = (
                  <>
                    <span className="flex size-4 shrink-0 items-center justify-center text-muted-foreground">
                      {"isSvg" in item && item.isSvg ? (
                        <Icon size={14} />
                      ) : (
                        <Icon className="size-3.5" strokeWidth={1.75} />
                      )}
                    </span>
                    <span className="whitespace-nowrap text-[0.8125rem] leading-none text-muted-foreground transition-colors group-hover:text-foreground max-lg:text-xs">
                      {label}
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2.5"
                    >
                      {content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </FooterColumn>

          {/* Location */}
          <FooterColumn title={t("location")} withDivider className="min-w-[11rem] lg:min-w-0">
            <p className="flex items-center gap-2.5 whitespace-nowrap text-[0.8125rem] text-muted-foreground">
              <MapPin className="size-3.5 shrink-0 text-foreground/50" strokeWidth={1.75} />
              {profile.location}
            </p>
          </FooterColumn>

          {/* Explore */}
          <FooterColumn
            title={t("explore")}
            withDivider={false}
            className="min-w-0 lg:px-6 xl:px-8"
          >
            <ul className="w-full space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="group flex w-full items-center justify-between gap-4 text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="min-w-0 pr-1">{item.label}</span>
                    <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground/70" />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-border/60 px-5 py-5 sm:px-6 lg:px-10 xl:px-12">
          <p className="text-center text-[11px] text-muted-foreground/80">
            © {year} {profile.displayName}. {t("copyright")}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className={cn(
              "absolute top-1/2 right-5 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border/70 bg-card sm:right-6 lg:right-10 xl:right-12",
              "text-muted-foreground transition-[color,background-color,border-color,transform] duration-200",
              "hover:border-foreground/20 hover:bg-muted/50 hover:text-foreground",
            )}
            aria-label={t("backToTop")}
          >
            <ArrowUp className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
