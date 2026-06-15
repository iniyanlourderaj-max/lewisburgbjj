import { useState } from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";

const faqCopy = {
  "0": {
    question: "Do I need to be in shape to start training?",
    answer: "Absolutely not. Training Jiu-Jitsu helps you get into shape. Our classes let you pace yourself while building functional strength, flexibility, and cardiovascular endurance.",
  },
  "1": {
    question: "I have zero martial arts experience. Will I fit in?",
    answer: "Yes. Most of our members started exactly where you are today. Our fundamentals classes introduce beginners to Jiu-Jitsu in a safe, ego-free, and welcoming environment.",
  },
  "2": {
    question: "Do I need to compete to fit in?",
    answer: "Not at all. Most members are professionals, students, and parents. Our culture is built around mutual growth, safety, and support, whether you want to compete or simply enjoy training.",
  },
  "3": {
    question: "Is Brazilian Jiu-Jitsu safe?",
    answer: "Student safety is our highest priority. We emphasize controlled drilling, mutual respect, and tapping early. You remain in control of your training intensity.",
  },
  "4": {
    question: "Do you offer a free trial?",
    answer: "We do not offer a free trial. We offer a one-time $20 drop-in and a $59 two-week trial that includes a free gi, or training uniform.",
  },
  "5": {
    question: "Where is the gym located?",
    answer: "We are located at 1722 W Market St, Lewisburg, PA 17837. Our renovated facility features sanitized mats, changing areas, showers, a cold plunge, and a sauna.",
  },
  "6": {
    question: "Can I upgrade my plan?",
    answer: "Absolutely. You can upgrade your plan at any time, and eligible changes are prorated so you receive the proper value from your membership.",
  },
  "8": {
    question: "Do you offer training for individuals and teams?",
    answer: "Yes. Whether you want to improve your fitness, learn practical self-defense, or prepare for competition, our classes can support your goals at your own pace.",
  },
  "9": {
    question: "Can I train with previous injuries or limited mobility?",
    answer: "Often, yes. Many members begin in their 30s, 40s, or 50s. Tell your coaches about any conditions or limitations before class so they can help you modify techniques safely.",
  },
};

const Faq = () => {
  const [openItem, setOpenItem] = useState(faq[0]?.id ?? null);

  return (
    <Element name="faq">
      <section id="faq" className="section section--bone faq-section">
        <div className="page-frame">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Before your first class</p>
              <h2>FAQ</h2>
            </div>
            <p>
              Everything you need to know about starting, training safely, and
              finding the right path at Lewisburg BJJ.
            </p>
          </div>

          <div className="faq-layout">
            <aside className="faq-aside">
              <span>Need more help?</span>
              <p>
                Send us a message and our team will help you choose the right
                class or membership.
              </p>
              <a href="#contact">Ask a question +</a>
            </aside>

            <div className="faq-list">
              {faq.map((item, index) => {
                const isOpen = openItem === item.id;
                const answerId = `faq-answer-${item.id}`;
                const copy = faqCopy[item.id] ?? item;

                return (
                  <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenItem(isOpen ? null : item.id)}
                    >
                      <span className="faq-item__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{copy.question}</h3>
                      <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                    </button>

                    <div className="faq-item__answer" id={answerId}>
                      <div>
                        <p>{copy.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Faq;
