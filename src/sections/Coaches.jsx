import { useState } from "react";
import { Element } from "react-scroll";

const coaches = [
  {
    name: "Ben Schneider",
    role: "Strength & Conditioning",
    image: "/images/coach1.jpg",
    bio: "Specializes in developing sport-specific endurance, explosive power, and injury-prevention protocols. Ben designs tailored longevity programs that help athletes and hobbyists improve their performance both on and off the mats.",
  },
  {
    name: "John Rohrbach",
    role: "Head BJJ Coach",
    image: "/images/coach2.jpg",
    bio: "Dedicated to teaching foundational mechanics, pressure passing systems, and high-efficiency submissions. John builds a structured curriculum that makes technical grappling accessible and effective for every body type and experience level.",
  },
  {
    name: "Nick Cashdollar",
    role: "MMA Coach",
    image: "/images/coach3.jpg",
    bio: "Combines striking, wrestling, and ground transitions into one cohesive martial arts system. Nick emphasizes distance management, purposeful conditioning, and strategic control for both self-defense and competition.",
  },
  {
    name: "Alison Busch",
    role: "Yoga Instructor",
    image: "/images/coach4.jpg",
    bio: "Focuses on mobility, athletic recovery, and core stability. Alison's classes help students reduce tightness, restore movement quality, and build the functional flexibility needed for consistent high-impact training.",
  },
  {
    name: "Hadassah Lehman",
    role: "Women's Coach",
    image: "/images/coach5.jpg",
    bio: "Creates an empowering, supportive, and technical environment for women in martial arts. Hadassah emphasizes leverage-based self-defense, focused drilling, and building lasting confidence through skill development.",
  },
];

const Coaches = () => {
  const [activeCoach, setActiveCoach] = useState(null);

  return (
    <Element name="coaches">
      <section id="coaches" className="section section--bone coaches-section">
        <div className="page-frame">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">The people behind the practice</p>
              <h2>Meet the team.</h2>
            </div>
            <p>
              Experienced coaches with a shared standard: teach clearly, train
              intelligently, and make every student better.
            </p>
          </div>

          <div className="coach-grid">
            {coaches.map((coach, index) => {
              const isOpen = activeCoach === index;

              return (
                <article
                  key={coach.name}
                  className={`coach-card ${isOpen ? "coach-card--open" : ""}`}
                >
                  <img src={coach.image} alt={coach.name} />

                  <div className="coach-card__details">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{coach.role}</p>
                    <h3>{coach.name}</h3>
                  </div>

                  <div className="coach-card__bio" aria-hidden={!isOpen}>
                    <span>About {coach.name}</span>
                    <p>{coach.bio}</p>
                  </div>

                  <button
                    type="button"
                    className="coach-card__toggle"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Close" : "View"} ${coach.name}'s biography`}
                    onClick={() => setActiveCoach(isOpen ? null : index)}
                  >
                    <span>{isOpen ? "Close" : "View bio"}</span>
                    <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                  </button>
                </article>
              );
            })}
          </div>

          <p className="coach-scroll-hint">Swipe to meet the full team →</p>
        </div>
      </section>
    </Element>
  );
};

export default Coaches;
