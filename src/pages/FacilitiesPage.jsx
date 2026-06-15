import { useEffect } from "react";
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";

const facilityFacts = [
  ["01", "Purpose-built mat space"],
  ["02", "Strength & conditioning"],
  ["03", "Cold plunge & sauna"],
  ["04", "Changing areas & showers"],
];

const FacilitiesPage = () => {
  useEffect(() => {
    document.title = "Facilities | Lewisburg Brazilian Jiu-Jitsu";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="site-shell facilities-page">
      <Header />

      <section className="facilities-hero">
        <img
          src="/images/lbjj_4k_4.png"
          alt="Brazilian Jiu-Jitsu training at Lewisburg BJJ"
        />
        <div className="facilities-hero__overlay" />
        <div className="page-frame facilities-hero__content">
          <p className="eyebrow">Built for the work</p>
          <h1>
            Facilities.
            <br />
            <span>Everything you need.</span>
          </h1>
          <p>
            A focused martial arts and performance environment built for
            technical training, physical development, and serious recovery.
          </p>
        </div>
      </section>

      <div className="facility-facts">
        <div className="page-frame">
          {facilityFacts.map(([number, label]) => (
            <div key={number}>
              <span>{number}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="training-space" className="section section--ink facility-intro">
        <div className="page-frame">
          <div className="facility-intro__grid">
            <div>
              <p className="eyebrow">The academy floor</p>
              <h2>Jiu-Jitsu mat space.</h2>
              <p>
                Our academy is designed around the work that matters: clear
                instruction, safe drilling, live training, and room for every
                student to progress. The training floor supports adult BJJ,
                kids classes, striking, and focused technical sessions.
              </p>
              <ul>
                <li>Sanitized training surfaces</li>
                <li>Beginner-friendly class environment</li>
                <li>Space for technical and live training</li>
                <li>Adult and youth programs</li>
              </ul>
            </div>
            <figure>
              <img src="/images/F2.png" alt="Lewisburg BJJ academy mat space" />
              <figcaption>Train with purpose / Lewisburg, PA</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="performance" className="section section--black performance-section">
        <div className="page-frame">
          <div className="facility-centered-heading">
            <p className="eyebrow">More than mat time</p>
            <h2>The performance lab.</h2>
            <p>
              Build the strength, durability, and conditioning that support
              better movement on the mats and beyond.
            </p>
          </div>

          <p className="facility-swipe-hint">
            Swipe to explore the training spaces
          </p>
          <div
            className="performance-grid"
            role="region"
            aria-label="Performance training facilities"
            tabIndex={0}
          >
            <article className="performance-card performance-card--image">
              <img
                src="/images/facility-kettlebell-4k.jpg"
                alt="Kettlebell strength training at Lewisburg BJJ"
              />
              <div>
                <span>01 / Strength</span>
                <h3>Functional training</h3>
                <p>
                  Develop useful strength and athletic capacity with coaching
                  that complements martial arts practice.
                </p>
              </div>
            </article>
            <article className="performance-card performance-card--image">
              <img
                src="/images/facility-padwork-4k.jpg"
                alt="Padwork and technical striking training at Lewisburg BJJ"
              />
              <div>
                <span>02 / Conditioning</span>
                <h3>Train for longevity</h3>
                <p>
                  Improve work capacity while prioritizing intelligent
                  progress, movement quality, and injury prevention.
                </p>
              </div>
            </article>
          </div>

          <div
            className="training-gallery"
            role="region"
            aria-label="Training gallery"
            tabIndex={0}
          >
            <figure>
              <img
                src="/images/F3.png"
                alt="Brazilian Jiu-Jitsu guard training at Lewisburg BJJ"
              />
              <figcaption>
                <span>Technical practice</span>
                <strong>Build timing, control, and confident movement.</strong>
              </figcaption>
            </figure>
            <div className="training-gallery__copy">
              <p className="eyebrow">Technique under pressure</p>
              <h3>Room to learn the details.</h3>
              <p>
                The academy floor supports focused drilling, positional work,
                and live rounds. Students have the space to study technique
                closely and apply it against real resistance.
              </p>
            </div>
            <figure>
              <img
                src="/images/F4.png"
                alt="Brazilian Jiu-Jitsu back control training at Lewisburg BJJ"
              />
              <figcaption>
                <span>Live application</span>
                <strong>Turn instruction into dependable skill.</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="recovery" className="section section--ink recovery-section">
        <div className="page-frame recovery-grid">
          <div className="recovery-copy">
            <p className="eyebrow">Reset and return</p>
            <h2>Wellness &amp; recovery.</h2>
            <p>
              Hard training works best when recovery is part of the plan. Our
              facility includes recovery amenities that help members cool
              down, reset, and prepare for the next session.
            </p>
            <ul>
              <li><span>01</span> Cold plunge</li>
              <li><span>02</span> Sauna</li>
              <li><span>03</span> Showers and changing areas</li>
            </ul>
          </div>

          <div className="recovery-visuals">
            <article className="recovery-card--image">
              <img
                src="/images/facility-cold-heat-ai.png"
                alt="Cold plunge and sauna recovery area"
              />
              <div>
                <span>Cold / Heat</span>
                <strong>Recover with intention.</strong>
              </div>
            </article>
            <figure className="recovery-chamber">
              <img
                src="/images/facility-cold-plunge-4k.jpg"
                alt="Cold plunge recovery at Lewisburg BJJ"
              />
              <figcaption>
                <span>Cold plunge</span>
                <strong>Reset after the work.</strong>
              </figcaption>
            </figure>
            <article className="recovery-card--image">
              <img
                src="/images/facility-reset-restore-ai.png"
                alt="Post-training recovery bench and equipment"
              />
              <div>
                <span>Reset / Restore</span>
                <strong>Leave ready to return.</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--bone member-space">
        <div className="page-frame member-space__grid">
          <div>
            <p className="eyebrow">The full experience</p>
            <h2>Space to prepare, train, and recover.</h2>
            <p>
              From changing areas and showers to the community that fills the
              room, the facility is built to make consistent training easier.
              Arrive, get settled, do the work, and leave better than you came.
            </p>
          </div>
          <img src="/images/lbjj_4k_2.png" alt="Lewisburg BJJ academy community" />
        </div>
      </section>

      <section className="facility-cta">
        <div className="page-frame">
          <p className="eyebrow">See it for yourself</p>
          <h2>Ready to enter the academy?</h2>
          <div>
            <a
              className="button button--gold"
              href="https://lewisburg-bjj.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start training
            </a>
            <a className="text-link" href="/#contact">
              Ask a question <span>+</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FacilitiesPage;
