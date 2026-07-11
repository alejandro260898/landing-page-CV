"use client";

import { Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { applyPrintMode, printCv } from "@/lib/print-cv";
import { cn } from "@/lib/utils";

type DownloadRecommendationButtonProps = {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  label?: string;
};

export function DownloadRecommendationButton({
  variant = "outline",
  size = "default",
  className,
  label = "Carta de recomendación",
}: DownloadRecommendationButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    applyPrintMode("rec");
    setTimeout(() => {
      printCv("rec");
      setTimeout(() => setLoading(false), 800);
    }, 250);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("cursor-pointer", className)}
      onClick={handleClick}
      disabled={loading}
      title="Descargar carta de recomendación"
    >
      <Award data-icon="inline-start" className="shrink-0" />
      {label}
    </Button>
  );
}
