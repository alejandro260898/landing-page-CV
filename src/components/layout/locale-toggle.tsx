"use client";

import { useLocale, useTranslations } from "next-intl";
import { useIsClient } from "@/hooks/use-is-client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function getOtherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function LocaleToggle() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LocaleToggle");
  const mounted = useIsClient();

  if (!mounted) {
    return (
      <div
        className="inline-flex h-9 shrink-0 items-center rounded-full border border-border p-0.5"
        aria-hidden
      >
        <span className="size-7 rounded-full" />
        <span className="size-7 rounded-full" />
      </div>
    );
  }

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(pathname, { locale: next });
    if (hash) {
      window.requestAnimationFrame(() => {
        window.history.replaceState(null, "", hash);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      });
    }
  };

  const nextLocale = getOtherLocale(locale);

  return (
    <button
      type="button"
      onClick={() => switchTo(nextLocale)}
      aria-label={nextLocale === "en" ? t("switchToEn") : t("switchToEs")}
      title={nextLocale === "en" ? t("switchToEn") : t("switchToEs")}
      className={cn(
        "inline-flex h-9 shrink-0 cursor-pointer items-center rounded-full border border-border bg-background/80 p-0.5",
        "transition-[border-color,background-color] duration-200",
        "hover:border-foreground/20 hover:bg-muted/50",
      )}
    >
      {routing.locales.map((code) => {
        const isActive = code === locale;
        return (
          <span
            key={code}
            aria-hidden
            className={cn(
              "inline-flex size-7 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-wide transition-colors",
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground",
            )}
          >
            {code}
          </span>
        );
      })}
    </button>
  );
}
