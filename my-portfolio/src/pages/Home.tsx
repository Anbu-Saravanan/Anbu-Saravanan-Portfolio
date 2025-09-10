import site from "../contents/site.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    
    <section className="py-5" style={{ backgroundColor: "#f7fafdff" }}> 
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left: Profile Photo */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={site.photo}
              alt={site.name}
              className="rounded-circle shadow"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
                border: "5px solid #ffc107",
              }}
            />
          </div>

          {/* Right: Developer Texts */}
          <div className="col-md-8 text-center text-md-start">
            <h1 className="fw-bold">{site.name}</h1>
            <h4 className="text-warning">{site.role}</h4>

            <p className="text-muted mt-3">
              Passionate about building <strong>secure backends</strong> with{" "}
              <span className="text-dark">Java & Spring Boot</span>, and creating{" "}
              <strong>interactive frontends</strong> using{" "}
              <span className="text-dark">React & Bootstrap</span>.
            </p>
            <p className="text-muted">
              Skilled in <strong>REST APIs, JWT authentication, MySQL,</strong> and{" "}
              <strong>responsive UI design</strong>. Always learning, always coding 🚀
            </p>

            {/* Buttons */}
            <div className="d-flex gap-2 justify-content-center justify-content-md-start mt-3">
              <Link className="btn btn-warning text-dark fw-semibold" to="/projects">
                🚀 View Projects
              </Link>
              <Link className="btn btn-outline-dark fw-semibold" to="/resume">
                📄 Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
