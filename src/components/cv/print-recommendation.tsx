/* Carta de recomendación — EurekaSigma letterhead */

const REC_BLUE = "#2563EB";

/* ── Línea tecnológica decorativa (SVG inline) ── */
function TechLine() {
  return (
    <svg
      viewBox="0 0 420 36"
      xmlns="http://www.w3.org/2000/svg"
      className="rec-tech-line"
      aria-hidden
    >
      {/* Línea principal horizontal */}
      <line x1="0" y1="18" x2="370" y2="18" stroke={REC_BLUE} strokeWidth="1.8" />
      {/* Quiebre a 135° */}
      <line x1="370" y1="18" x2="398" y2="4" stroke={REC_BLUE} strokeWidth="1.8" />
      {/* Segmento final horizontal */}
      <line x1="398" y1="4" x2="412" y2="4" stroke={REC_BLUE} strokeWidth="1.8" />
      {/* Punto final */}
      <circle cx="412" cy="4" r="3.5" fill={REC_BLUE} />
    </svg>
  );
}

/* ── Patrón de puntos (4×6 grid) ── */
function DotPattern() {
  const cols = 6;
  const rows = 4;
  const gap = 14;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + 3}
          cy={r * gap + 3}
          r="1.5"
          fill="#E5E7EB"
          fillOpacity="0.7"
        />,
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${(cols - 1) * gap + 6} ${(rows - 1) * gap + 6}`}
      xmlns="http://www.w3.org/2000/svg"
      className="rec-dot-pattern"
      aria-hidden
    >
      {dots}
    </svg>
  );
}

export function PrintRecommendation() {
  return (
    <div id="cv-rec" className="print-only rec-document" aria-label="Carta de recomendación">
      {/* ── Encabezado ── */}
      <header className="rec-header">
        <div className="rec-header-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/eurekasigma-logo.png"
            alt="EurekaSigma"
            className="rec-logo"
          />
        </div>
        <div className="rec-header-line">
          <TechLine />
        </div>
        <DotPattern />
      </header>

      {/* ── Línea separadora bajo encabezado ── */}
      <div className="rec-header-rule" aria-hidden />

      {/* ── Cuerpo ── */}
      <main className="rec-body">
        <p className="rec-date">Guadalajara, Jalisco a 17 de Junio de 2026</p>

        <div className="rec-addressee">
          <p className="rec-addressee-label">A quien corresponda:</p>
        </div>

        <div className="rec-content">
          <p>
            Por medio de la presente, yo <strong>Mario Fernando Dávalos Navarro</strong>,
            Fundador de EurekaSigma, recomiendo ampliamente al Ing.{" "}
            <strong>Francisco Alejandro Galván</strong>, quien formó parte de nuestro
            equipo como Developer Full Stack durante más de 3 años, de septiembre de 2022
            a mayo de 2026.
          </p>

          <p>
            A lo largo de este tiempo, Francisco Alejandro demostró ser un desarrollador
            comprometido, autodidacta y con criterio técnico sólido. Su capacidad para
            adaptarse a distintos proyectos, tecnologías y necesidades del negocio fue una
            constante durante su estancia en la empresa.
          </p>

          <p>
            Lo que más destacó de él fue su responsabilidad, su disposición para asumir
            retos y su habilidad para entregar resultados en entornos de trabajo reales y
            exigentes. Sin duda, será un activo valioso para cualquier equipo al que se
            integre.
          </p>

          <p>Quedo a disposición para cualquier referencia adicional.</p>

          <p className="rec-sign-off">Atentamente.</p>

          <div className="rec-signature">
            <p className="rec-signer-name">Mario Fernando Dávalos Navarro</p>
            <p className="rec-signer-role">Fundador, EurekaSigma</p>
            <p className="rec-signer-detail">Tel: (+52) 33 2384 1347</p>
            <p className="rec-signer-detail">Guadalajara, Jalisco, México</p>
          </div>
        </div>
      </main>
    </div>
  );
}
