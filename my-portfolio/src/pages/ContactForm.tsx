import { useState } from "react";

export default function ContactForm() {
  const ENDPOINT = import.meta.env.VITE_FORMSPREE as string;

  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(f),
      });

      if (res.ok) {
        setStatus("ok");
        setF({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold text-center mb-3">Get in Touch</h2>
          <p className="text-center text-muted mb-4">
            Have a question, collaboration idea, or just want to say hello? Fill out the form below and
            I’ll get back to you soon.
          </p>

          <form className="vstack gap-3" onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                id="name"
                className="form-control"
                name="name"
                placeholder="Your name"
                value={f.name}
                onChange={onChange}
                required
                minLength={2}
                maxLength={80}
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={f.email}
                onChange={onChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={f.message}
                onChange={onChange}
                required
                minLength={10}
                maxLength={2000}
              />
            </div>

            {/* Anti-bot honeypot (hidden to humans) */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button className="btn btn-primary w-100" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "ok" && (
              <div className="alert alert-success my-2 text-center">
                ✅ Thanks! I’ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger my-2 text-center">
                ⚠️ {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
