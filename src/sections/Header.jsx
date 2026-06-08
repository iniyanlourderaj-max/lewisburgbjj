import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6">
      {/* 🌟 Capsule Container with your original Gold Edge and explicit positioning */}
      <div className="max-w-7xl mx-auto bg-zinc-900/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-full px-6 py-2.5 flex items-center justify-between shadow-xl transition-all duration-300 min-h-[64px]">
        
        {/* 🥋 LEFT ZONE: Fixed Logo alignment without the overlapping text */}
        <div className="flex items-center">
          <a href="#" className="flex items-center cursor-pointer h-10 w-10 justify-center">
            <img 
              src="/images/lbjj.svg" 
              alt="Lewisburg BJJ" 
              className="h-10 w-10 object-contain block max-w-none"
            />
          </a>
        </div>

        {/* CENTER ZONE: Core Nav Tabs */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* RIGHT ZONE: Secure Gateway Routers */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* 🔐 Direct Secure Member Login Portal Link */}
          <a 
            href="https://lewisburg-bjj.gymdesk.com/login" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Account
          </a>

          {/* 🥋 Premium Gold-edged Sign Up Action Trigger */}
          <a
            href="https://lewisburg-bjj.gymdesk.com/signup" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37]/40 bg-zinc-800/40 text-white hover:bg-white hover:text-zinc-950 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            Sign Up
          </a>
        </div>

        {/* MOBILE HAMBURGER TOGGLE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-1 focus:outline-none cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      {/* DYNAMIC MOBILE DRAWER PANEL MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-sm uppercase tracking-widest font-medium py-1 border-b border-zinc-800/50"
            >
              {link.title}
            </a>
          ))}
          
          <div className="h-px bg-zinc-800 my-1" />

          {/* Mobile Login Link */}
          <a
            href="https://lewisburg-bjj.gymdesk.com/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-zinc-300 hover:text-white text-sm uppercase tracking-widest font-medium py-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Student Account
          </a>

          {/* Mobile Sign Up Action Link */}
          <a
            href="https://lewisburg-bjj.gymdesk.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs py-3 rounded-xl mt-2 block transition-transform active:scale-95"
          >
            Sign Up / Register
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;