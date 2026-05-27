"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const PRINT_TITLE = profile.displayName;

type DownloadCvButtonProps = {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function DownloadCvButton({
  variant = "default",
  size = "default",
  className,
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
      className={className}
      onClick={handleDownload}
      title="Impresión: tamaño Carta, márgenes ninguno, sin encabezados/pies, con gráficos de fondo"
    >
      <Download data-icon="inline-start" />
      Descargar CV PDF
    </Button>
  );
}
