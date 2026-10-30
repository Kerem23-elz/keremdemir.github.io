import { Link } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link to="/" className="brand">
            Kerem Demir
          </Link>
          <nav className="main-nav" aria-label="Ana menü">
            <Link to="/">Ana Sayfa</Link>
            <Link to="/projects">Projeler</Link>
            <Link to="/contact">İletişim</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {pageTitle ? (
          <div className="container page-heading">
            <p className="eyebrow">Kerem Demir</p>
            <h1>{pageTitle}</h1>
          </div>
        ) : null}
        {children}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Kerem Demir</p>
        </div>
      </footer>
    </div>
  );
}
