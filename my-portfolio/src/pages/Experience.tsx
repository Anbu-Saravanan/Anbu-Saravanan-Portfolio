import exp from "../contents/experience.json";

type Item = { title: string; org: string; start: string; end: string; bullets: string[] };

export default function Experience() {
  const items = exp as Item[];

  return (
    <section className="container my-4">
      <h2 className="fw-bold text-center mb-4">Experience</h2>

      <div className="timeline position-relative">
        {items.map((e, i) => (
          <article key={i} className="timeline-item ps-4 pb-4">
            {/* dot */}
            <span className="timeline-dot" aria-hidden="true" />
            {/* header */}
            <div className="d-flex flex-wrap align-items-baseline gap-2">
              <h5 className="mb-0">{e.title}</h5>
              <span className="badge text-bg-dark-subtle text-dark">{e.org}</span>
            </div>
            <small className="text-muted d-block mb-2">
              {e.start} – {e.end}
            </small>
            {/* bullets */}
            <ul className="mb-0 ms-3">
              {e.bullets.map((b, idx) => (
                <li key={idx} className="mb-1">{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <style>{`
        /* vertical line */
        .timeline::before {
          content: "";
          position: absolute;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(0,0,0,.1);
        }
        /* each item */
        .timeline-item {
          position: relative;
          margin-left: .5rem;
          border-radius: .5rem;
        }
        /* dot */
        .timeline-dot {
          position: absolute;
          left: 6px;
          top: .35rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffc107;         /* accent */
          box-shadow: 0 0 0 4px rgba(255,193,7,.25);
        }
        /* subtle card feel */
        .timeline-item:hover {
          background: #f8f9fa;
        }

        /* spacing tweaks on small screens */
        @media (max-width: 576px) {
          .timeline::before { left: 12px; }
          .timeline-dot { left: 4px; }
        }
      `}</style>
    </section>
  );
}
