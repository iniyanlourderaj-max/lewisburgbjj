import { testimonials } from "../constants/index.jsx";

const Testimonials = () => {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="section section--ink testimonials-section">
      <div className="page-frame">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">From the academy</p>
            <h2>What our members say.</h2>
          </div>
          <p>
            Real experiences from students and families who train, learn, and
            grow together at Lewisburg BJJ.
          </p>
        </div>

        <div className="testimonial-layout">
          <article className="testimonial-featured">
            <div className="testimonial-stars" aria-label="5 out of 5 stars">
              ★ ★ ★ ★ ★
            </div>
            <blockquote>“{featured.comment}”</blockquote>
            <footer>
              <span>{featured.name}</span>
              <small>Verified member</small>
            </footer>
            <span className="testimonial-featured__mark" aria-hidden="true">“</span>
          </article>

          <div className="testimonial-grid">
            {supporting.map((testimonial, index) => (
              <article className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-card__meta">
                  <span>{String(index + 2).padStart(2, "0")}</span>
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                </div>
                <blockquote>“{testimonial.comment}”</blockquote>
                <footer>
                  <span>{testimonial.name}</span>
                  <small>Verified member</small>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
