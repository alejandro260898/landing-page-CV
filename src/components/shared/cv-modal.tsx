"use client";

import { FileText, LayoutTemplate, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { useIsClient } from "@/hooks/use-is-client";
import { applyPrintMode, printCv, type CvFormat } from "@/lib/print-cv";
import { cn } from "@/lib/utils";

type CvModalProps = {
  open: boolean;
  onClose: () => void;
};

type OptionCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  onDownload: () => void;
  downloadLabel: string;
};

function OptionCard({
  icon,
  title,
  description,
  accent,
  onDownload,
  downloadLabel,
}: OptionCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-all duration-200",
        "hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.45)]",
        accent,
      )}
    >
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted/60 text-foreground/70 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-500 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
            {title}
          </p>
          <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onDownload}
        className={cn(
          "mt-auto inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl",
          "border border-border/70 bg-background/80 px-4 py-2.5",
          "text-[0.8125rem] font-semibold text-foreground transition-all duration-200",
          "hover:border-indigo-300/60 hover:bg-indigo-50 hover:text-indigo-600",
          "dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400",
        )}
      >
        <FileText className="size-3.5" />
        {downloadLabel}
      </button>
    </div>
  );
}

export function CvModal({ open, onClose }: CvModalProps) {
  const t = useTranslations("Cv");
  const backdropRef = useRef<HTMLDivElement>(null);
  const mounted = useIsClient();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  if (!mounted) return null;

  const handleDownload = (format: CvFormat) => {
    applyPrintMode(format);
    onClose();
    setTimeout(() => printCv(format), 250);
  };

  const modal = (
    <div
      ref={backdropRef}
      className="no-print fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl border border-border/70 bg-background shadow-2xl",
          "animate-in fade-in-0 zoom-in-95 duration-200",
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border/60 px-6 py-5">
          <div>
            <h2
              id="cv-modal-title"
              className="text-base font-bold tracking-[-0.02em] text-foreground"
            >
              {t("modalTitle")}
            </h2>
            <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">
              {t("modalSubtitle")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-0.5 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={t("cancelBtn")}
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Options */}
        <div className="grid gap-3 p-5 sm:grid-cols-2">
          <OptionCard
            icon={<LayoutTemplate className="size-5" strokeWidth={1.75} />}
            title={t("normalTitle")}
            description={t("normalDesc")}
            accent="hover:border-indigo-200/60 dark:hover:border-indigo-500/25"
            onDownload={() => handleDownload("normal")}
            downloadLabel={t("downloadBtn")}
          />
          <OptionCard
            icon={<FileText className="size-5" strokeWidth={1.75} />}
            title={t("atsTitle")}
            description={t("atsDesc")}
            accent="hover:border-indigo-200/60 dark:hover:border-indigo-500/25"
            onDownload={() => handleDownload("ats")}
            downloadLabel={t("downloadBtn")}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
