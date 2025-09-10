import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Anbu Saravanan"s Dashboard
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div id="mainNav" className="collapse navbar-collapse">
          <div className="navbar-nav ms-auto">
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
            <NavLink to="/experience" className="nav-link">
              Experience
            </NavLink>
            <NavLink to="/resume" className="nav-link">
              Resume
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Custom styles for hover/active */}
      <style>{`
        .navbar-nav .nav-link {
          margin-left: .75rem;
          margin-right: .75rem;
          color: #f8f9fa;
          transition: color .2s ease, border-bottom .2s ease;
        }
        .navbar-nav .nav-link:hover {
          color: #ffc107; /* yellow on hover */
          border-bottom: 2px solid #ffc107;
        }
        .navbar-nav .nav-link.active {
          color: #ffc107;
          font-weight: 600;
          border-bottom: 2px solid #ffc107;
        }
      `}</style>
    </nav>
  );
}
