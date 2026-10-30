import Layout from '../components/Layout';

const projectUrl = 'https://drmvolkandemir.com';

export default function HomePage() {
  return (
    <Layout>
      <section className="hero section-pad">
        <div className="container hero-inner">
          <p className="eyebrow">Merhaba, ben</p>
          <h2 className="hero-title">Kerem Demir</h2>
          <p className="lead">
            Web Geliştirme ve web tasarımı alanında çalışıyorum.
          </p>

          <div className="button-row">
            <a className="primary-btn" href={projectUrl} target="_blank" rel="noreferrer">
              drmvolkandemir.com
            </a>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="section-header">
          <p className="eyebrow">Hakkımda</p>
          <h3>Web tasarımı ve dijital çözümler üzerine çalışıyorum.</h3>
        </div>

        <div className="card-grid">
          <article className="info-card">
            <h4>Merkez</h4>
            <p>Modern ve kullanıcı odaklı sayfa çözümleri üretmek.</p>
          </article>
          <article className="info-card">
            <h4>Odak</h4>
            <p>Web tasarımı, düzen ve profesyonel görünüm.</p>
          </article>
          <article className="info-card">
            <h4>Proje</h4>
            <p>drmvolkandemir.com benim öncelikli yayınlanan web çalışmam.</p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
