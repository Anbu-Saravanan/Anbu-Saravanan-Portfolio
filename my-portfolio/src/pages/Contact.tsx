import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <section className="container my-4">
      <h2 className="fw-bold text-center mb-3">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
