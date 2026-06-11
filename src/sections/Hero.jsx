import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    /* 
      ⚡ THE FIX: Added 'pt-24 md:pt-32' to ensure your large "Brazilian Jiu Jitsu" title
      clears the taller fixed navigation bar perfectly across all devices.
    */
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden pt-24 md:pt-32 pb-16">
      
      {/* 📸 FULL BLEED BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/lbjj___.png" 
          alt="Lewisburg BJJ Academy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
      </div>

      <Element name="hero" className="relative z-10 w-full px-5">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          
          {/* 🎨 MAIN HEADLINE (Bad Brush Custom) - NOW SAFE FROM NAV COVERAGE */}
          <h1 
            className="text-white uppercase text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-normal tracking-normal leading-[1.05] md:leading-[1.0] mb-5 md:mb-6 select-none"
            style={{ 
              fontFamily: "'Bad Brush Custom', sans-serif",
              display: "unset",
              textShadow: "rgba(0, 0, 0, 0.6) 0px 0px 25.5px"
            }}
          >
            Brazilian <br /> Jiu Jitsu
          </h1>

          {/* 🏛️ BRAND ANCHOR TEXT (Oswald) */}
          <h2 
            className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl tracking-tighter mb-4 mt-2"
            style={{ 
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "-0.03em" 
            }}
          >
            Lewisburg BJJ<span className="text-[#E9E151]">.</span>
          </h2>
          
          {/* 📝 SECONDARY SUBTEXT DESCRIPTION */}
          <p className="max-w-md text-zinc-300 text-xs sm:text-sm md:text-base font-normal tracking-normal leading-relaxed mb-8 md:mb-10 font-sans">
            Premium Martial Arts Academy in Lewisburg, PA
          </p>
          
          {/* ⚡ THE ACTION BUTTON */}
          <LinkScroll to="pricing" offset={-75} spy smooth>
            <button 
              className="bg-[#E9E151] hover:bg-[#d6ce43] text-black text-xs md:text-sm font-bold uppercase tracking-wider py-3.5 px-10 md:py-4 md:px-12 transition-all duration-200 transform active:scale-95 shadow-xl cursor-pointer"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Explore memberships 
            </button>
          </LinkScroll>
          
        </div>
      </Element>
    </section>
  );
};

export default Hero;