import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="container my-5 text-center">
      <div className="p-4 bg-light rounded shadow-sm">
        {/* Icon */}
        <FileText size={48} className="text-primary mb-3" />

        {/* Heading & Subtitle */}
        <h2 className="fw-bold mb-2">My Resume</h2>
        <p className="text-muted mb-4">
          A quick overview of my journey as a{" "}
          <span className="fw-semibold text-dark">Java Full Stack Developer</span>.
          Download the PDF to explore my skills, experience, and projects in detail.
        </p>

        {/* Button */}
        <a
          className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2"
          href="/APSaravananResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} />
          View / Download Resume
        </a>
      </div>

      {/* Small polish */}
      <style>{`
        section .btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        section .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
