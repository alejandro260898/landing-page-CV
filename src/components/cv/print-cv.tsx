import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { LinkedInIcon } from "@/components/cv/cv-icons";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { cvProjects } from "@/data/projects";
import { stackCategories } from "@/data/stack";
import { formatStackLabel } from "@/lib/format";

const ICON_SIZE = 13;

function SidebarTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="cv-sidebar-title">
      <span className="cv-title-icon" aria-hidden>
        {icon}
      </span>
      {children}
    </h2>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="cv-contact-item">
      <span className="cv-contact-icon" aria-hidden>
        {icon}
      </span>
      <div className="cv-contact-body">
        <span className="cv-contact-label">{label}</span>
        {children}
      </div>
    </li>
  );
}

export function PrintCv() {
  return (
    <div id="cv-print" className="print-only cv-document" aria-label="CV para impresión">
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <div className="cv-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Logo FG"
              width={112}
              height={112}
              className="cv-logo-img"
            />
          </div>

          <div className="cv-sidebar-stack">
            <section className="cv-sidebar-block">
              <SidebarTitle icon={<UserRound size={ICON_SIZE} strokeWidth={2} />}>
                Contacto
              </SidebarTitle>
              <ul className="cv-contact-list">
                <ContactRow
                  icon={<Phone size={ICON_SIZE} strokeWidth={2} />}
                  label="Teléfono"
                >
                  <a href={`tel:${profile.phone.replace(/\D/g, "")}`}>
                    {profile.phone}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<Mail size={ICON_SIZE} strokeWidth={2} />}
                  label="Email"
                >
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </ContactRow>
                <ContactRow
                  icon={<LinkedInIcon size={ICON_SIZE} />}
                  label="LinkedIn"
                >
                  <a href={profile.linkedin}>{profile.linkedinDisplay}</a>
                </ContactRow>
                <ContactRow
                  icon={<MapPin size={ICON_SIZE} strokeWidth={2} />}
                  label="Ubicación"
                >
                  <span>{profile.locationShort}</span>
                </ContactRow>
              </ul>
            </section>

            <section className="cv-sidebar-block">
              <SidebarTitle
                icon={<GraduationCap size={ICON_SIZE} strokeWidth={2} />}
              >
                Educación
              </SidebarTitle>
              {education.map((item) => (
                <article key={item.degree} className="cv-edu-item">
                  <strong className="cv-edu-degree">{item.degree}</strong>
                  <p className="cv-edu-school">{item.institution}</p>
                  <p className="cv-edu-year">{item.period}</p>
                </article>
              ))}
            </section>
          </div>
        </aside>

        <main className="cv-main">
          <header className="cv-main-header">
            <h1 className="cv-main-name">{profile.displayName}</h1>
            <p className="cv-main-role">{profile.cvHeadline.toUpperCase()}</p>
          </header>

          <section className="cv-main-section">
            <h2 className="cv-main-section-title">Perfil profesional</h2>
            <p className="cv-profile-text">{profile.summary}</p>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-section-title">Experiencia laboral</h2>
            {experience.map((item) => (
              <article key={item.role} className="cv-exp-entry">
                <h3 className="cv-exp-role">{item.role}</h3>
                <p className="cv-exp-company">
                  {item.company ? (
                    <>
                      <strong>{item.company}</strong>
                      <span className="cv-exp-sep"> · </span>
                    </>
                  ) : null}
                  <span>{item.period}</span>
                </p>
                <ul className="cv-exp-list">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="cv-main-section cv-projects-section">
            <h2 className="cv-main-section-title">Proyectos destacados</h2>
            <div className="cv-projects-list">
              {cvProjects.map((project) => (
                <article key={project.id} className="cv-project-item">
                  <h3 className="cv-project-name">{project.name}</h3>
                  <p className="cv-project-desc">{project.description}</p>
                  <p className="cv-project-stack">
                    {formatStackLabel(project.stack)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-main-section cv-stack-section">
            <h2 className="cv-main-section-title">Stack técnico</h2>
            <div className="cv-stack-grid">
              {stackCategories.map((cat) => (
                <div key={cat.id} className="cv-stack-card">
                  <h4 className="cv-stack-cat">{cat.title}</h4>
                  <ul className="cv-stack-items">
                    {cat.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
