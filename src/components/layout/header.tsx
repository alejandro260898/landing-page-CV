"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { DownloadCvButton } from "@/components/shared/download-cv-button";
import { Logo } from "@/components/shared/logo";
import { useActiveSection } from "@/hooks/use-active-section";
import { useNavItems } from "@/hooks/use-nav-items";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";
import { LocaleToggle } from "./locale-toggle";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const navItems = useNavItems();
  const t = useTranslations("Common");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] transition-[background,border-color,box-shadow] duration-300 dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.45)]",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-border/40 bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-5 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
            setOpen(false);
          }}
          aria-label={t("goHome")}
        >
          <Logo size="header" />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label={t("mainNav")}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "relative cursor-pointer rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-foreground"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <div className="hidden md:block">
            <DownloadCvButton
              size="sm"
              className="h-9 cursor-pointer gap-2 rounded-full py-0 pr-4 pl-3.5 text-[13px] has-data-[icon=inline-start]:pl-3.5 [&_svg]:size-3.5"
            />
          </div>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex max-h-[70dvh] flex-col gap-0.5 overflow-y-auto px-4 py-3" aria-label={t("mobileNav")}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative cursor-pointer rounded-full px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1">
              <DownloadCvButton
                className="h-9 w-full cursor-pointer gap-2 rounded-full py-0 pr-4 pl-3.5 text-[13px] has-data-[icon=inline-start]:pl-3.5"
                size="sm"
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
