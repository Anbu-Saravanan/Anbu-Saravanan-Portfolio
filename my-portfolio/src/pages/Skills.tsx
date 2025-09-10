import skills from "../contents/skills.json";

export default function Skills() {
  return (
    <section className="container my-4">
      <h2 className="fw-bold text-center mb-4">Skills</h2>

      {/* 🔹 changed row layout to auto columns */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {Object.entries(skills).map(([group, list]) => (
          <div className="col d-flex" key={group}>
            <div className="card h-100 shadow-sm border-0 w-100">
              <div className="card-body">
                {/* 🔹 group name styled as pill header */}
                <h5 className="text-center text-uppercase fw-semibold mb-3">
                  <span className="badge rounded-pill bg-dark-subtle text-dark px-3 py-2">
                    {group}
                  </span>
                </h5>

                {/* 🔹 replaced badges with a clean list */}
                <ul className="list-unstyled d-grid gap-2 mb-0 text-center">
                  {(list as string[]).map((s) => (
                    <li key={s} className="fw-medium text-secondary">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 removed badge hover, added list polish */}
      <style>{`
        .card h5 {
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        li {
          padding: 0.25rem 0;
        }
        li:hover {
          color: #000;
        }
      `}</style>
    </section>
  );
}
