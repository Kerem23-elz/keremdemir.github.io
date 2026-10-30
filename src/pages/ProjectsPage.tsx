import Layout from '../components/Layout';

const projectUrl = 'https://drmvolkandemir.com';

export default function ProjectsPage() {
  return (
    <Layout pageTitle="Projeler">
      <section className="container section-pad">
        <div className="project-list">
          <article className="project-card featured">
            <span className="badge">Ana Proje</span>
            <h3>drmvolkandemir.com</h3>
            <p>Yaptığım web çalışmasının yer aldığı ana projem ve yayınlanan sayfam.</p>
            <a href={projectUrl} target="_blank" rel="noreferrer">
              Siteyi aç
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
