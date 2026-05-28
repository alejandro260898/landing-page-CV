"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const PRINT_TITLE = profile.displayName;

type DownloadCvButtonProps = {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  /** En móvil solo icono; texto visible desde `sm`. */
  iconOnlyOnMobile?: boolean;
};

export function DownloadCvButton({
  variant = "default",
  size = "default",
  className,
  iconOnlyOnMobile = false,
}: DownloadCvButtonProps) {
  const handleDownload = () => {
    const previousTitle = document.title;
    document.title = PRINT_TITLE;

    const restoreTitle = () => {
      document.title = previousTitle;
    };

    window.addEventListener("afterprint", restoreTitle, { once: true });

    /* Vista previa de impresión: solo el CV, sin UI de la landing */
    window.print();
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("cursor-pointer", className)}
      onClick={handleDownload}
      aria-label={iconOnlyOnMobile ? "Descargar CV" : undefined}
      title="Impresión: tamaño Carta, márgenes ninguno, sin encabezados/pies, con gráficos de fondo"
    >
      <FileText
        {...(iconOnlyOnMobile ? {} : { "data-icon": "inline-start" })}
        className={iconOnlyOnMobile ? "size-5 sm:size-4" : undefined}
      />
      <span className={iconOnlyOnMobile ? "hidden sm:inline" : undefined}>Descargar CV</span>
    </Button>
  );
}
