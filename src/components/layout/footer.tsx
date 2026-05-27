import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div>
            <p className="text-sm font-medium">{profile.tagline}</p>
            <p className="text-xs text-muted-foreground">{profile.location}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} {profile.name}
        </p>
        <Link
          href="#contacto"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Contacto
        </Link>
      </div>
    </footer>
  );
}
