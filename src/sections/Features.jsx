import { Element } from "react-scroll";

const pillars = [
  ["01", "Expert instruction"],
  ["02", "Beginner friendly"],
  ["03", "Clean and welcoming"],
  ["04", "Training for every goal"],
];

const Features = () => (
  <Element name="features">
    <section id="features" className="section section--ink academy-section">
      <div className="page-frame">
        <div className="academy-grid">
          <div className="academy-collage">
            <img
              className="academy-collage__main"
              src="/images/lbjj_4k_4.png"
              alt="Brazilian Jiu-Jitsu stand-up training at Lewisburg BJJ"
            />
            <img
              className="academy-collage__inset"
              src="/images/lbjj_4k_2.png"
              alt="Lewisburg BJJ academy team"
            />
            <span className="academy-collage__stamp">LBJJ / PA</span>
          </div>

          <div className="academy-copy">
            <p className="eyebrow">More than a gym</p>
            <h2>Built on skill. Held together by community.</h2>
            <p>
              Lewisburg BJJ is a place to learn difficult things with good
              people. Our academy combines technical instruction, practical
              self-defense, hard training, and genuine respect for everyone
              who steps onto the mat.
            </p>
            <p>
              Whether your goal is confidence, competition, fitness, or a new
              discipline, you will find a clear path forward here.
            </p>
            <a
              className="text-link"
              href="https://lewisburg-bjj.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Train with us <span aria-hidden="true">+</span>
            </a>
          </div>
        </div>

        <div className="academy-descriptions">
          <article>
            <p className="eyebrow">Premier martial arts</p>
            <h3>Lewisburg BJJ &amp; striking</h3>
            <p>
              Home of Lewisburg&apos;s premier Brazilian Jiu-Jitsu. Whether
              you are looking for high-level BJJ training, dynamic boxing and
              striking classes, practical self-defense, or a rewarding way to
              get in shape, Lewisburg BJJ gives you a place to build real
              skill.
            </p>
            <a className="academy-card__button" href="#testimonials">
              Member stories
            </a>
          </article>

          <article>
            <p className="eyebrow">Our academy values</p>
            <h3>A family environment for all</h3>
            <p>
              At Lewisburg BJJ, you will find a family environment grounded in
              the traditional martial arts values of honor, respect, and
              mutual welfare. From mastering the ground game to sharpening
              your stand-up skills, we offer well-rounded training for every
              experience level.
            </p>
            <a
              className="academy-card__button"
              href="/facilities/"
            >
              Explore facilities
            </a>
          </article>
        </div>

        <div className="pillar-grid">
          {pillars.map(([number, title]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Element>
);

export default Features;
