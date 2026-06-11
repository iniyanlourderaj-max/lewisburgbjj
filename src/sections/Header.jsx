import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 📋 UPDATED NAVIGATION ORDER & SCROLL TARGET FIXES */
  const navLinks = [
    { title: "About Us", target: "features" },
    { title: "Pricing", target: "pricing" },
    { title: "FAQ", target: "faq" },
    { title: "Coaches", target: "coaches" },
    { title: "Schedule", target: "schedule" }, // 🛠️ FIX: Changed from 'calendar' to 'schedule' to fix constant underlining
    { title: "Learn More", target: "contact" }, // 🛠️ FIX: Replaced Contact with Learn More, routing to contact section
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 antialiased transition-all duration-300">
      
      {/* CONTAINER FRAME */}
      <div 
        className={`w-full mx-auto border-b border-zinc-900/40 flex items-center justify-between min-h-[64px] px-6 md:px-12 transition-all duration-300 ease-out ${
          isScrolled 
            ? "bg-[#1A1A1A]/80 backdrop-blur-md py-2 shadow-md" 
            : "bg-[#1A1A1A] py-3"
        }`}
      >
        
        {/* 🥋 LEFT ZONE: Brand Block */}
        <div className="flex items-center gap-3">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="flex items-center cursor-pointer justify-center transition-transform duration-200 hover:scale-105"
          >
            {/* 
              ⚡ LOGO SIZE & VISIBILITY BOOST:
              Changed src to target your public image file name exactly from Main_Outlined.JPG.
              Increased sizes to h-12 (48px) and md:h-14 (56px) so details are visible.
              Removed invert classes so white outer ring renders accurately.
            */}
            <img 
              src="/images/BJJ_logo.JPG" 
              alt="Lewisburg BJJ Logo" 
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain block shadow-md" 
            />
          </Link>
          <div 
            className="flex flex-col text-white font-bold leading-none tracking-tighter text-xs md:text-sm"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <span>LEWISBURG</span>
            <span className="text-[#E9E151]">BJJ.</span>
          </div>
        </div>

        {/* RIGHT STACK OVERLAY */}
        <div className="flex items-center h-full">
          
          {/* CENTER LINKS MATCHING THE NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 pr-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-75} // Adjusted slightly to give breathing room for the bigger header height
                duration={500}
                activeClass="text-white underline underline-offset-4"
                className="text-zinc-300 hover:text-white text-sm lg:text-[15px] font-medium transition-colors duration-200 cursor-pointer hover:underline underline-offset-4 decoration-1 uppercase whitespace-nowrap"
                style={{ 
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "-0.01em"
                }}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* ⚡ SIGN UP CALL TO ACTION */}
          <div className="hidden md:flex items-center h-full border-l border-zinc-800/50 py-2 pl-5 lg:pl-7 group">
            <a
              href="https://lewisburg-bjj.gymdesk.com/signup" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-300 flex items-center gap-1.5 text-sm md:text-[15px] font-bold transition-colors duration-200 hover:underline underline-offset-4 uppercase"
              style={{ 
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "-0.01em"
              }}
            >
              Sign Up
              <span className="text-xs transform group-hover:translate-x-0.5 transition-transform duration-200 no-underline inline-block">
                &rarr;
              </span>
            </a>
          </div>

        </div>

        {/* MOBILE DRAWER TRIGGER */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none cursor-pointer flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

      </div>

      {/* DYNAMIC MOBILE DRAWER PANEL MENU */}
      <div className={`absolute top-[100%] left-0 w-full bg-[#1A1A1A]/95 backdrop-blur-lg border-b border-zinc-900 p-5 flex flex-col gap-3 shadow-2xl origin-top transform transition-all duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.target}
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white text-base font-medium py-1.5 border-b border-zinc-900/60 cursor-pointer block uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {link.title}
          </Link>
        ))}

        <a
          href="https://lewisburg-bjj.gymdesk.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full text-center text-white border border-zinc-800 font-bold text-base py-2.5 rounded-lg mt-1 block hover:bg-zinc-900 transition-colors uppercase"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Sign Up &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;