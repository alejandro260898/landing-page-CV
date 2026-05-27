import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeMap = {
  sm: { container: "size-9", image: 36 },
  md: { container: "size-10", image: 40 },
  lg: { container: "size-16", image: 64 },
};

export function Logo({ className, size = "md", priority = false }: LogoProps) {
  const dimensions = sizeMap[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-border/50 bg-[#f2f3f5] dark:bg-[#f2f3f5]",
        dimensions.container,
        className,
      )}
      aria-label="Francisco Galván"
    >
      <Image
        src="/logo.png"
        alt="Logo Francisco Galván"
        width={dimensions.image}
        height={dimensions.image}
        className="size-full object-cover"
        priority={priority}
      />
    </div>
  );
}
