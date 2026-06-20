import { Element, Link } from "react-scroll";

const Hero = () => (
  <Element name="hero">
    <section className="hero-section">
      <img
        className="hero-section__image"
        src="/images/IMG_4426.jpg"
        alt="Lewisburg BJJ striking class training on the mats"
      />
      <div className="hero-section__overlay" />
      <div className="hero-section__grain" />

      <div className="page-frame hero-section__content">
        <p className="eyebrow">Lewisburg, PA / Established in 2022</p>
        <h1>
          A new standard
          <br />
          of <span>discipline.</span>
        </h1>
        <p className="hero-section__copy">
          Expert Brazilian Jiu-Jitsu, striking, strength, and recovery in a
          welcoming academy built for every experience level.
        </p>
        <div className="hero-section__actions">
          <a
            className="button button--gold"
            href="https://lewisburg-bjj.gymdesk.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start your journey
          </a>
          <Link className="text-link" to="schedule" smooth offset={-70}>
            View class times <span aria-hidden="true">+</span>
          </Link>
        </div>
      </div>

      <div className="hero-section__index" aria-hidden="true">
        <span>01</span>
        <i />
        <span>07</span>
      </div>
    </section>
  </Element>
);

export default Hero;
