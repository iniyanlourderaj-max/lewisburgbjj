import { useState } from "react";
import { socials } from "../constants/index.jsx";
import LegalModal from "../components/LegalModal.jsx";

const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <footer className="site-footer">
      <div className="page-frame">
        <div className="site-footer__top">
          <div>
            <p className="eyebrow">Lewisburg Brazilian Jiu-Jitsu</p>
            <h2>Show up. Learn. Get better.</h2>
          </div>
          <a
            className="button button--gold"
            href="https://lewisburg-bjj.gymdesk.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start training
          </a>
        </div>

        <div className="site-footer__grid">
          <div>
            <img src="/images/BJJ_logo.JPG" alt="Lewisburg BJJ" />
            <p>1722 W Market St<br />Lewisburg, PA 17837</p>
          </div>
          <div>
            <span>Explore</span>
            <a href="/#features">About</a>
            <a href="/#pricing">Memberships</a>
            <a href="/#schedule">Schedule</a>
          </div>
          <div>
            <span>Follow</span>
            {socials.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
                {social.title}
              </a>
            ))}
          </div>
          <div>
            <span>Legal</span>
            <button type="button" onClick={() => setModalType("privacy")}>Privacy policy</button>
            <button type="button" onClick={() => setModalType("terms")}>Terms of use</button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Lewisburg BJJ</p>
          <p>Built by <a href="https://iniyanlourderaj.com" target="_blank" rel="noopener noreferrer">Iniyan Lourderaj</a></p>
        </div>
      </div>

      <LegalModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </footer>
  );
};

export default Footer;
