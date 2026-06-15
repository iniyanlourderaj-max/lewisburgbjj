import { useEffect, useRef } from "react";
import { Element } from "react-scroll";

const Inquiry = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.gymdesk.com/js/widgets.js";
    script.async = true;

    const formDiv = document.createElement("div");
    formDiv.className = "maonrails-form";
    formDiv.setAttribute("attr-ref", "DjyRJ");
    formDiv.setAttribute("attr-gym", "65vm3");

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
      containerRef.current.appendChild(formDiv);
    }

    script.onload = () => window.maonrails_init?.();
    const fallback = setTimeout(() => window.maonrails_init?.(), 250);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <Element name="contact">
      <section id="contact" className="section section--black inquiry-section">
        <div className="page-frame">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Take the first step</p>
              <h2>Inquire now.</h2>
            </div>
            <p>
              New to Jiu-Jitsu or not sure which membership fits? Send us a
              note and we will point you in the right direction.
            </p>
          </div>

          <div className="inquiry-grid">
            <div className="inquiry-form">
              <div ref={containerRef} className="gymdesk-form-wrapper" />
            </div>

            <div className="location-card">
              <iframe
                title="Lewisburg BJJ Academy location"
                src="https://maps.google.com/maps?q=1722%20W%20Market%20St,%20Lewisburg,%20PA%2017837&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="location-card__details">
                <div>
                  <span>Lewisburg BJJ</span>
                  <p>1722 W Market St<br />Lewisburg, PA 17837</p>
                </div>
                <a
                  href="https://maps.google.com/?q=1722+W+Market+St,+Lewisburg,+PA+17837"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions +
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Inquiry;
