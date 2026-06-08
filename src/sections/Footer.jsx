import React, { useState } from "react"; // 1. Added useState here
import { socials } from "../constants/index.jsx";
import LegalModal from "../components/LegalModal.jsx"; // 2. Removed curly braces around LegalModal (assuming it's a default export)

const Footer = () => {
  // 3. Added state to track which modal is open ('privacy', 'terms', or null)
  const [modalType, setModalType] = useState(null);

  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Made by Iniyan Lourderaj</p>
          </div>
          
          <div className="flex items-center justify-center sm:ml-auto">
            {/* 4. Added onClick and cursor-pointer to Privacy Policy */}
            <p 
              onClick={() => setModalType("privacy")}
              className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer"
            >
              Privacy Policy
            </p>
            {/* 5. Added onClick and cursor-pointer to Terms of Use */}
            <p 
              onClick={() => setModalType("terms")}
              className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer"
            >
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                {/* 🎨 CHANGED: Added target="_blank" and rel="noopener noreferrer" for new-tab launching */}
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. Added the actual Modal element here to render when a link is clicked */}
      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </footer>
  );
};

export default Footer;