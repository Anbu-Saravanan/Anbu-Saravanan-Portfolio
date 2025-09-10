import data from "../contents/projects.json";

type Project = {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  github: string;
  demo?: string;
  image?: string;
};

export default function Projects() {
  const projects = data as Project[];
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((p) => (
          <div className="col" key={p.id}>
            <article className="card h-100 border-0 shadow-sm project">
              {/* Image or placeholder */}
              <div className="ratio ratio-16x9 bg-light-subtle">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="object-fit-cover rounded-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center text-secondary">
                    <span className="small">No preview</span>
                  </div>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-1 text-truncate">{p.name}</h5>

                {/* 2–3 line clamp, consistent height */}
                <p className="card-text text-secondary project__summary">
                  {p.summary}
                </p>

                {/* Tech chips: wrap nicely, scroll on xs if overflow */}
                <div className="d-flex flex-wrap gap-2 overflow-auto pe-1 mb-3">
                  {p.stack.map((s) => (
                    <span key={s} className="badge rounded-pill text-bg-secondary">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions pinned to bottom */}
                <div className="mt-auto d-grid gap-2 d-sm-flex">
                  <a
                    className="btn btn-primary btn-sm"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} source code on GitHub`}
                  >
                    Code
                  </a>
                  {p.demo && (
                    <a
                      className="btn btn-outline-secondary btn-sm"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live demo`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* minimal polish */}
      <style>{`
        .project { transition: transform .15s ease, box-shadow .15s ease; }
        .project:hover { transform: translateY(-3px); box-shadow: 0 .75rem 1.25rem rgba(0,0,0,.08); }
        .project__summary {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 3; /* md+ we keep 3 lines */
          min-height: 3.6em;     /* reserve space to align cards */
        }
        @media (max-width: 575.98px) {
          .project__summary { -webkit-line-clamp: 2; min-height: 2.4em; }
        }
        .object-fit-cover { object-fit: cover; width: 100%; height: 100%; }
      `}</style>
    </>
  );
}
