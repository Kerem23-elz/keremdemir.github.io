const projectUrl = 'https://drmvolkandemir.com';

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container brand">Kerem Demir</div>
      </header>

      <main className="container hero">
        <div className="card">
          <p className="eyebrow">Merhaba, ben</p>
          <h1>Kerem Demir</h1>
          <p className="subtitle">Web tasarımı ve dijital çalışmalar üretiyorum.</p>

          <a className="cta" href={projectUrl} target="_blank" rel="noreferrer">
            drmvolkandemir.com
          </a>
        </div>
      </main>

      <section className="container projects">
        <div className="section-label">Projeler</div>
        <div className="project-item">
          <span className="badge">Proje</span>
          <h2>drmvolkandemir.com</h2>
          <p>Yaptığım çalışmanın görüldüğü tek ve ana projem.</p>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            Siteyi aç
          </a>
        </div>
      </section>
    </div>
  );
}
