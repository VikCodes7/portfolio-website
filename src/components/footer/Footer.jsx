import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">&lt;SV /&gt;</span>
            <p className="footer__tagline">
              Crafting intelligent systems & robust software architectures.
            </p>
          </div>

          <div className="footer__links">
            <a href="#profile">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className="footer__back-to-top" aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Sai Vikas Chinthirla. All rights reserved.</p>
          {/* <p className="footer__tech-note">Built with React & Vite • Hosted on GitHub Pages</p> */}
        </div>
      </div>
    </footer>
  );
}
