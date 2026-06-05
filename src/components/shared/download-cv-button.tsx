"use client";

import { FileText } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { CvModal } from "@/components/shared/cv-modal";
import { cn } from "@/lib/utils";

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
  const t = useTranslations("Common");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn("cursor-pointer", className)}
        onClick={() => setModalOpen(true)}
        title={t("printHint")}
      >
        <FileText data-icon="inline-start" />
        {t("downloadCv")}
      </Button>

      <CvModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
