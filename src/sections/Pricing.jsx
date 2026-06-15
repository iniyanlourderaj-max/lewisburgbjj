import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants/index.jsx";

const categories = [
  ["all-in-membership", "All-in"],
  ["base-membership", "Base"],
  ["kids-membership", "Kids"],
  ["womens-only-membership", "Women"],
  ["available-separately", "Specialty"],
  ["trials-short-term", "Trials"],
  ["drop-in-passes", "Drop-ins"],
];

const womenPlan = {
  id: "womens-only-bjj",
  title: "Women's Only BJJ",
  caption: "Dedicated Brazilian Jiu-Jitsu training in a focused, supportive setting.",
  price: 35,
  period: "/ mo",
  features: ["Women's BJJ access", "Dedicated coaching", "Community events"],
  gymdeskSlug: "womens-only",
  isHighlighted: true,
};

const signupUrl = (plan) =>
  `https://lewisburg-bjj.gymdesk.com/signup?plan=${plan.gymdeskSlug}`;

const supportingPosition = (index) => ({
  gridColumn: index % 2 === 0 ? 1 : 3,
  gridRow: Math.floor(index / 2) + 1,
});

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("all-in-membership");
  const visiblePlans =
    activeCategory === "womens-only-membership"
      ? [womenPlan]
      : plans.filter((plan) => plan.category === activeCategory);

  const [featuredPlan, ...supportingPlans] = visiblePlans;
  const supportingRows = Math.max(1, Math.ceil(Math.max(supportingPlans.length, 1) / 2));

  return (
    <Element name="pricing">
      <section id="pricing" className="section section--black pricing-section">
        <div className="page-frame">
          <div className="pricing-header">
            <div>
              <p className="eyebrow">Investment</p>
              <h2>Membership menu</h2>
            </div>

            <div className="pricing-tabs" role="tablist" aria-label="Membership types">
              {categories.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === id}
                  className={activeCategory === id ? "is-active" : ""}
                  onClick={() => setActiveCategory(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {featuredPlan && (
            <div className="membership-layout">
              {/* Featured Card */}
              <article
                className="membership-card membership-card--featured"
                style={{ gridRow: `1 / span ${supportingRows}` }}
              >
                <div className="membership-card__top">
                  <div>
                    <p>{featuredPlan.isHighlighted ? "Best value" : "Featured plan"}</p>
                    <h3>{featuredPlan.title}</h3>
                  </div>
                  <div className="membership-price">
                    <span>{featuredPlan.isHighlighted ? "Recommended" : "Membership"}</span>
                    <strong><sup>$</sup>{featuredPlan.price}</strong>
                    <small>{featuredPlan.period || "/ mo"}</small>
                  </div>
                </div>

                <p className="membership-card__description">{featuredPlan.caption}</p>

                <ul className="membership-features">
                  {featuredPlan.features.map((feature) => (
                    <li key={feature}><span>+</span>{feature}</li>
                  ))}
                </ul>

                <a
                  className="membership-card__button"
                  href={signupUrl(featuredPlan)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Secure membership
                </a>
              </article>

              {/* Supporting Cards */}
              {supportingPlans.map((plan, index) => (
                <article
                  className="membership-card membership-card--supporting"
                  key={plan.id}
                  style={supportingPosition(index)}
                >
                  <div className="membership-card__top">
                    <div>
                      <p>Membership option</p>
                      <h3>{plan.title}</h3>
                    </div>
                    <div className="membership-price">
                      <strong><sup>$</sup>{plan.price}</strong>
                      <small>{plan.period || "/ mo"}</small>
                    </div>
                  </div>
                  
                  <p className="membership-card__description">{plan.caption}</p>
                  
                  <ul className="membership-features">
                    {plan.features.map((feature) => (
                      <li key={feature}><span>+</span>{feature}</li>
                    ))}
                  </ul>
                  
                  <a
                    className="membership-card__button membership-card__button--outline"
                    href={signupUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select plan
                  </a>
                </article>
              ))}

            </div>
          )}

          <aside className="family-note">
            <span>Family discount</span>
            <div className="family-note__content">
              <p>
                Train together and save. Dependents receive 50% off their
                respective membership track.
              </p>
              <div className="family-note__example">
                <div>
                  <span>Parent · All-In, 18 months</span>
                  <strong>$135 / mo</strong>
                </div>
                <div>
                  <span>Each child · 18 months</span>
                  <strong>$40 / mo <small>50% of $80</small></strong>
                </div>
              </div>
            </div>
            <a
              href="https://lewisburg-bjj.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore family options <span aria-hidden="true">+</span>
            </a>
          </aside>
        </div>
      </section>
    </Element>
  );
};

export default Pricing;
