import { Bluetooth, FileText, Pen, Sparkles, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { className?: string };

/* ── Brand SVGs ── */

const ReactIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <circle cx="12" cy="12" r="2.15" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="9.8" ry="3.3" stroke="#61DAFB" strokeWidth="1.15" />
    <ellipse cx="12" cy="12" rx="9.8" ry="3.3" stroke="#61DAFB" strokeWidth="1.15" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.8" ry="3.3" stroke="#61DAFB" strokeWidth="1.15" transform="rotate(120 12 12)" />
  </svg>
);

const NextJsIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("shrink-0", className)} aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.623 0 5.05-.842 7.032-2.27L9.439 6.937A.5.5 0 0 0 8.5 7.25v8.25H7V7.25a2 2 0 0 1 3.756-.97l7.53 11.263A11.966 11.966 0 0 0 24 12c0-6.627-5.373-12-12-12zm4.5 17.5H15V7h1.5v10.5z" />
  </svg>
);

const TypeScriptIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={cn("shrink-0", className)} aria-hidden>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="700"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
    >
      TS
    </text>
  </svg>
);

const TailwindIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path
      d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C13.248 10.39 14.28 11.46 16.5 11.46c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C15.252 7.07 14.22 6 12 6zM7.5 11.46C5.1 11.46 3.6 12.66 3 15.06c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215 .888.934 1.92 2.004 4.135 2.004 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C10.752 12.53 9.72 11.46 7.5 11.46z"
      fill="#06B6D4"
    />
  </svg>
);

const FlutterIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path d="M3.8 12L10.5 5.3H18.5L11.8 12L18.5 18.7H10.5L3.8 12Z" fill="#54C5F8" />
    <path d="M10.5 12L18.5 18.7H14.8L7.1 12L10.5 12Z" fill="#01579B" opacity="0.85" />
    <path d="M10.5 12L14.8 18.7L11.2 18.7L7.5 15L10.5 12Z" fill="#29B6F6" />
  </svg>
);

const CapacitorIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#119EFF" opacity="0.8" />
    <path d="M2 17l10 5 10-5" stroke="#119EFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 12l10 5 10-5" stroke="#119EFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PWAIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#5A0FC8" />
    <path d="M6 8l3 8 3-5 3 5 3-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BLEIcon = ({ className }: Props) => (
  <Bluetooth className={cn("shrink-0 text-[#0082FC]", className)} aria-hidden />
);

const NodeIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <polygon points="12,2 21.5,7.2 21.5,16.8 12,22 2.5,16.8 2.5,7.2" fill="#339933" />
    <path d="M8 8.5v7l1.4-.8V12l2.2 2.8 2.2-2.8v2.7l1.4.8v-7l-1.4.8-2.2 2.8-2.2-2.8z" fill="white" />
  </svg>
);

const LaravelIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path
      d="M23.5 5.6c.02.1.03.2.03.3v5.3a.4.4 0 0 1-.2.34l-4.46 2.56v5.08a.4.4 0 0 1-.2.34L10 23.97a.4.4 0 0 1-.4 0L.87 19.03A.4.4 0 0 1 .67 18.7V5.9c0-.07.02-.14.05-.2a.4.4 0 0 1 .15-.16L5.5.54a.4.4 0 0 1 .4 0L10.55 3.5c.13.07.2.21.2.35v9.84l3.85-2.22V6.4a.4.4 0 0 1 .2-.34l4.66-2.68a.4.4 0 0 1 .4 0L23.3 5.46c.08.04.14.1.18.17z"
      fill="#FF2D20"
    />
  </svg>
);

const RestApiIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <rect x="2" y="8" width="20" height="8" rx="2" stroke="#6366F1" strokeWidth="1.6" />
    <path d="M6 12h2M10 12h2M14 12h4" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const DockerIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path d="M13.5 5.5h2v2h-2zM11 5.5h2v2h-2zM8.5 5.5h2v2h-2zM8.5 8h2v2h-2zM11 8h2v2h-2zM13.5 8h2v2h-2zM16 8h2v2h-2z" fill="#2496ED" />
    <path d="M21.6 10.2c-.5-.3-1.6-.5-2.5-.3-.1-.9-.7-1.7-1.5-2.1l-.5-.3-.3.5c-.3.6-.4 1.4-.3 2 .1.3.2.7.4.9-.5.3-1.1.4-1.6.4H2.4c-.2 1 .1 2.2.7 3.1.7 1 1.7 1.5 3 1.8.6.1 1.1.2 1.7.2 1 0 2-.2 2.8-.7.6-.3 1.2-.9 1.6-1.5h1.4c.2 0 .5-.2.7-.4l.3-.5.2.5c.1.2.4.4.7.4h1.1c.2 0 .4 0 .6-.1.5-.2.9-.6 1.1-1.2.2-.5.2-1 .1-1.4.3-.2.7-.3.9-.4z" fill="#2496ED" />
  </svg>
);

const KubernetesIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <circle cx="12" cy="12" r="10" stroke="#326CE5" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="2.4" fill="#326CE5" />
    <line x1="12" y1="3.6" x2="12" y2="9.6" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="12" y1="14.4" x2="12" y2="20.4" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="3.6" y1="12" x2="9.6" y2="12" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14.4" y1="12" x2="20.4" y2="12" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="6.1" y1="6.1" x2="10.2" y2="10.2" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="13.8" y1="13.8" x2="17.9" y2="17.9" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="17.9" y1="6.1" x2="13.8" y2="10.2" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="10.2" y1="13.8" x2="6.1" y2="17.9" stroke="#326CE5" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const VercelIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("shrink-0", className)} aria-hidden>
    <path d="M12 2L2 19.5h20L12 2z" />
  </svg>
);

const NeonIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <rect x="2" y="6" width="20" height="12" rx="3" fill="#00E699" opacity="0.15" stroke="#00E699" strokeWidth="1.5" />
    <path d="M6 12h4l2-3 2 6 2-3h2" stroke="#00E699" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PythonIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
    <path d="M11.9 2C9 2 7.2 3.4 7.2 5.3v2h4.7v.8H5.5C3.6 8.1 2 9.7 2 12s1.6 4 3.5 4.1l1.9-.1v-2.1l-.4-.1c-.8 0-1.1-.5-1.1-1.1s.3-1.1 1.1-1.1h4.8c2 0 3-1.4 3-3.1V5.3C14.8 3.4 13.9 2 11.9 2zm-1.3 2.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
    <path d="M12.1 22c2.9 0 4.7-1.4 4.7-3.3v-2h-4.7v-.8h6.4C20.4 15.9 22 14.3 22 12s-1.6-4-3.5-4.1l-1.9.1v2.1l.4.1c.8 0 1.1.5 1.1 1.1s-.3 1.1-1.1 1.1h-4.8c-2 0-3 1.4-3 3.1v3.4C9.2 20.6 10.1 22 12.1 22zm1.3-2.3a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B" />
  </svg>
);

const CursorIcon = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("shrink-0", className)} aria-hidden>
    <rect width="24" height="24" rx="5" fill="#1a1a1a" />
    <path d="M7 4l10 8-5 1-2 5L7 4z" fill="white" />
  </svg>
);

const AIIcon = ({ className }: Props) => (
  <Sparkles className={cn("shrink-0 text-violet-400", className)} aria-hidden />
);

const DebugIcon = ({ className }: Props) => (
  <Wrench className={cn("shrink-0 text-orange-400", className)} aria-hidden />
);

const UIGenIcon = ({ className }: Props) => (
  <Pen className={cn("shrink-0 text-pink-400", className)} aria-hidden />
);

const DocIcon = ({ className }: Props) => (
  <FileText className={cn("shrink-0 text-sky-400", className)} aria-hidden />
);

/* ── Map ── */

const iconMap: Record<string, React.ComponentType<Props>> = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  TailwindCSS: TailwindIcon,
  Flutter: FlutterIcon,
  Capacitor: CapacitorIcon,
  PWAs: PWAIcon,
  BLE: BLEIcon,
  Laravel: LaravelIcon,
  "Node.js": NodeIcon,
  "REST APIs": RestApiIcon,
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
  Vercel: VercelIcon,
  Neon: NeonIcon,
  Python: PythonIcon,
  Cursor: CursorIcon,
  "Debugging asistido": DebugIcon,
  "Generación UI": UIGenIcon,
  "Documentación técnica": DocIcon,
  AI: AIIcon,
};

type TechIconProps = { tech: string; className?: string };

export function TechIcon({ tech, className }: TechIconProps) {
  const Icon = iconMap[tech];
  if (!Icon) return null;
  return <Icon className={cn("size-4", className)} />;
}
