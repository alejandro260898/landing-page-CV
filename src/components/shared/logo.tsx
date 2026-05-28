"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsClient } from "@/hooks/use-is-client";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "header" | "md" | "lg";
  priority?: boolean;
};

const sizeMap = {
  sm: { container: "size-9", image: 36 },
  header: { container: "size-11", image: 44 },
  md: { container: "size-10", image: 40 },
  lg: { container: "size-[4.5rem]", image: 72 },
};

export function Logo({ className, size = "md", priority = false }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useIsClient();

  const isDark = mounted && resolvedTheme === "dark";
  const logoSrc = isDark ? "/logo_dark.png" : "/logo.png";

  const dimensions = sizeMap[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-border/50",
        isDark ? "bg-black" : "bg-[#f2f3f5]",
        dimensions.container,
        className,
      )}
      aria-label="Francisco Galván"
    >
      {mounted ? (
        <Image
          src={logoSrc}
          alt="Logo Francisco Galván"
          width={dimensions.image}
          height={dimensions.image}
          className="size-full object-cover"
          priority={priority}
        />
      ) : (
        <span
          className="block size-full bg-muted/40"
          aria-hidden
        />
      )}
    </div>
  );
}
