"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useIsClient } from "@/hooks/use-is-client";
import { useThemeTransition } from "@/hooks/use-theme-transition";

export function ThemeToggle() {
  const { buttonRef, toggle, isDark } = useThemeTransition();
  const mounted = useIsClient();
  const t = useTranslations("Hero");

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="size-9 shrink-0 rounded-full"
        aria-label={t("themeLabel")}
        disabled
      />
    );
  }

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="icon"
      className="size-9 shrink-0 rounded-full"
      onClick={toggle}
      aria-label={isDark ? t("themeLight") : t("themeDark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
