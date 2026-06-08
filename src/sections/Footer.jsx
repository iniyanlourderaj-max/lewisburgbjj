import React, { useState } from "react";
import { socials } from "../constants/index.jsx";
import LegalModal from "../components/LegalModal.jsx";

const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    /* 🎨 BACKGROUND: Premium olive-gray that looks incredible with the black button elements */
    <footer className="bg-[#D2D2C6] text-[#1A1A1A] border-t border-[#B9B9AC]">
      <div className="container max-w-6xl mx-auto px-5 py-12 flex flex-col items-center text-center">
        
        {/* 🥋 1. STACKED BRAND HEADING */}
        <h2 
          className="uppercase text-4xl sm:text-5xl font-black tracking-tighter leading-[1.05] mb-8 text-center flex flex-col items-center select-none"
          style={{ 
            fontFamily: "'Oswald', sans-serif"
          }}
        >
          <span className="text-[#1A1A1A]">Lewisburg</span>
          <span className="text-[#8A811F]">
            BJJ<span className="text-[#8A811F]">.</span>
          </span>
        </h2>

        {/* 🔗 2. LEGAL NAVIGATION LINKS */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-8 text-sm sm:text-base text-zinc-800 font-medium">
          <p 
            onClick={() => setModalType("privacy")}
            className="transition-colors duration-300 hover:text-[#8A811F] cursor-pointer"
          >
            Privacy Policy
          </p>
          <p 
            onClick={() => setModalType("terms")}
            className="transition-colors duration-300 hover:text-[#8A811F] cursor-pointer"
          >
            Terms of Use
          </p>
        </div>

        {/* 📱 3. SOCIAL ICONS GRID ROW */}
        <ul className="flex justify-center items-center gap-4 mb-10">
          {socials.map(({ id, url, icon, title }) => (
            <li key={id}>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 bg-black rounded-xl hover:bg-zinc-900 transition-all duration-300 shadow-md group"
                title={title}
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-5 h-5 object-contain opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ➖ 4. HORIZONTAL SEPARATOR DIVIDER */}
        <div className="w-full border-t border-[#B9B9AC] mb-6" />

        {/* 📝 5. ATTRIBUTION & COPYRIGHT METADATA ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-zinc-700 gap-y-2">
          <p>© {new Date().getFullYear()} Lewisburg BJJ. All rights reserved.</p>
          
          {/* 🌐 LINKED ATTRIBUTION */}
          <p className="opacity-80 tracking-wide">
            Made by{" "}
            <a 
              href="https://iniyanlourderaj.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-900 font-semibold underline underline-offset-2 hover:text-[#8A811F] transition-colors duration-300"
            >
              Iniyan Lourderaj
            </a>
          </p>
        </div>

      </div>

      {/* LEGAL LAYER COMPONENT SYSTEM */}
      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType} 
      />
    </footer>
  );
};

export default Footer;