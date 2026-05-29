import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import dockerSvg from "@/img/Docker.svg";
import flutterSvg from "@/img/Flutter.svg";
import kubernetesSvg from "@/img/Kubernetes.svg";
import mysqlSvg from "@/img/MySQL.svg";
import postgresSvg from "@/img/PostgresSQL.svg";
import typescriptSvg from "@/img/TypeScript.svg";

type BrandIconProps = { className?: string };

function createBrandIcon(src: StaticImageData) {
  return function BrandIcon({ className }: BrandIconProps) {
    return (
      <img
        src={src.src}
        alt=""
        width={src.width}
        height={src.height}
        aria-hidden
        draggable={false}
        className={cn("aspect-square shrink-0 object-contain", className)}
      />
    );
  };
}

export const FlutterBrandIcon = createBrandIcon(flutterSvg);
export const DockerBrandIcon = createBrandIcon(dockerSvg);
export const KubernetesBrandIcon = createBrandIcon(kubernetesSvg);
export const TypeScriptBrandIcon = createBrandIcon(typescriptSvg);
export const PostgreSQLBrandIcon = createBrandIcon(postgresSvg);
export const MySQLBrandIcon = createBrandIcon(mysqlSvg);
