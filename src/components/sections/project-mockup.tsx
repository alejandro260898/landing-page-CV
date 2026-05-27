import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/** Mockups abstractos monocromáticos — sin assets propietarios. */
export function ProjectMockup({
  variant,
  className,
}: {
  variant: Project["variant"];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] overflow-hidden bg-muted/80",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.06)_1px,transparent_1px)] bg-size-[10px_10px] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)]" />

      {variant === "dashboard" && (
        <div className="absolute inset-4 grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded-sm bg-foreground/10" />
          <div className="rounded-sm bg-foreground/10" />
          <div className="col-span-3 rounded-sm bg-foreground/8" />
        </div>
      )}

      {variant === "mobile" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[72%] w-[36%] rounded-xl border border-foreground/15 bg-background/40 p-2">
            <div className="mb-2 h-1 w-6 rounded-full bg-foreground/20" />
            <div className="space-y-1">
              <div className="h-4 rounded-sm bg-foreground/10" />
              <div className="h-8 rounded-sm bg-foreground/12" />
            </div>
          </div>
        </div>
      )}

      {variant === "enterprise" && (
        <div className="absolute inset-4 space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-5 rounded-sm bg-foreground/10"
              style={{ width: `${88 - i * 8}%` }}
            />
          ))}
        </div>
      )}

      {variant === "network" && (
        <>
          <div className="absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15" />
          <div className="absolute top-[28%] left-[30%] size-2 rounded-full bg-foreground/25" />
          <div className="absolute right-[28%] bottom-[32%] size-2 rounded-full bg-foreground/25" />
        </>
      )}

      {variant === "hardware" && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
          <div className="h-10 w-2 rounded-t-sm bg-foreground/15" />
          <div className="h-14 w-2 rounded-t-sm bg-foreground/22" />
          <div className="h-8 w-2 rounded-t-sm bg-foreground/15" />
        </div>
      )}
    </div>
  );
}
