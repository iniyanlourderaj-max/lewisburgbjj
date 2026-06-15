import { useEffect } from "react";
import { Element } from "react-scroll";

const Schedule = () => {
  useEffect(() => {
    window.ND_API_URL = "https://app.gymdesk.com";
    window.ND_URL = "https://gymdesk.com";
    window.ND ||= {
      api_url: "https://app.gymdesk.com",
      site_url: "https://gymdesk.com",
    };

    const script = document.createElement("script");
    script.src = "https://app.gymdesk.com/js/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <Element name="schedule">
      <section id="schedule" className="section section--ink schedule-section">
        <div className="page-frame">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Weekly training</p>
              <h2>Find your class.</h2>
            </div>
            <p>
              Pick a session, arrive a few minutes early, and our team will
              help you get oriented before you step onto the mats.
            </p>
          </div>

          <div className="schedule-frame">
            <div className="schedule-frame__rail">
              <span>Live schedule</span>
              <i />
              <span>Updated by Gymdesk</span>
            </div>
            <div className="schedule-frame__widget">
              <div
                className="gymdesk-schedule"
                {...{ "attr-gym": "65vm3", "attr-program": "all" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Schedule;
