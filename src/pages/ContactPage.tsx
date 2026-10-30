import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout pageTitle="İletişim">
      <section className="container section-pad">
        <div className="contact-box">
          <a href="https://drmvolkandemir.com" target="_blank" rel="noreferrer">
            drmvolkandemir.com
          </a>
          <a href="mailto:demir190714@gmail.com">demir190714@gmail.com</a>
        </div>
      </section>
    </Layout>
  );
}
