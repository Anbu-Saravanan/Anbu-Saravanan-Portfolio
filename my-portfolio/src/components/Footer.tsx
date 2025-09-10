export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="py-4 bg-dark text-light border-top">
        <div className="container text-center">
          <h6 className="mb-2">Java Full-Stack Developer</h6>
          <p className="mb-3 text-secondary">
            I build secure REST APIs with Spring Boot and clean React UIs backed by MySQL.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
            {["Java 17","Spring Boot","Spring Security & JWT","REST APIs","React","MySQL","Hibernate/JPA","Docker","Git/GitHub"].map(t => (
              <span key={t} className="badge rounded-pill border footer-badge">{t}</span>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3 mb-2">
            <a className="footer-link" href="https://github.com/Anbu-Saravanan" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="footer-link" href="https://www.linkedin.com/in/saravanan-anbu-486351112/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="footer-link" href="mailto:you@example.com">Email</a>
          </div>

          <small className="text-secondary">
            © {new Date().getFullYear()} A.P Saravanan • Let’s build something scalable.
          </small>
        </div>
      </div>

      {/* tiny interactive styles */}
      <style>{`
        .footer-badge {
          color: #e9ecef;
          border-color: #6c757d !important;
          padding: 0.55rem 0.8rem;
          transition: transform .15s ease, border-color .15s ease, color .15s ease;
        }
        .footer-badge:hover { transform: translateY(-2px); border-color: #adb5bd !important; color: #fff; }
        .footer-link {
          color: #66b2ff; 
          text-decoration: none; 
          transition: color .15s ease, text-shadow .15s ease;
        }
        .footer-link:hover { color: #b8dcff; text-shadow: 0 0 6px rgba(102,178,255,.5); }
      `}</style>
    </footer>
  );
}
