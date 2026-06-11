import React, { useRef, useState } from "react";

const coachesData = [
  {
    id: 1,
    name: "Ben Schneider",
    role: "Head Strength & conditioning Coach",
    image: "/images/coach1.jpg", 
    bio: "Specializes in developing sport-specific endurance, explosive power, and injury-prevention protocols. Ben designs tailored structural longevity tracks to ensure athletes and hobbyists alike optimize their physical performance both on and off the mats.",
  },
  {
    id: 2,
    name: "John Rohrbach",
    role: "Head BJJ Coach",
    image: "/images/coach2.jpg",
    bio: "Dedicated to teaching the foundational mechanics, pressure passing systems, and high-efficiency submissions of Brazilian Jiu-Jitsu. John focuses on a structured curriculum that makes technical grappling accessible and effective for all body types and skill levels.",
  },
  {
    id: 3,
    name: "Nick Cashdollar",
    role: "MMA Coach",
    image: "/images/coach3.jpg",
    bio: "Combines striking, wrestling, and ground transitions into a fluid, cohesive martial arts system. Nick focuses on precision distance management, heavy padwork conditioning, and strategic ring control for both self-defense and competitive arenas.",
  },
  {
    id: 4,
    name: "Alison Busch",
    role: "Yoga Instructor",
    image: "/images/coach4.jpg",
    bio: "Focuses on deep structural mobility, athletic recovery sequences, and core stabilization metrics. Alison's classes are explicitly designed to counteract muscle tightness, restore joint alignment, and enhance functional flexibility for high-impact athletes.",
  },
  {
    id: 5,
    name: "Hadassah Lehman",
    role: "Woman's Coach",
    image: "/images/coach5.jpg",
    bio: "Committed to fostering an empowering, supportive, and technical environment for women in martial arts. Hadassah emphasizes leverage-based self-defense strategies, high-intensity drilling loops, and building confidence through structured skill development.",
  },
];

const Coaches = () => {
  const scrollContainerRef = useRef(null);
  const [activeBioId, setActiveBioId] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; 
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleBio = (id) => {
    setActiveBioId(activeBioId === id ? null : id);
  };

  return (
    <section id="coaches" className="bg-[#222222] text-white py-24 px-4 md:px-12 border-t border-zinc-800/60 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center justify-center text-center mb-14 space-y-4">
          
          {/* 🥋 UPPER TAGLINE */}
          <span 
            className="text-xl md:text-2xl uppercase font-medium text-white block"
            style={{ 
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.06em"
            }}
          >
            Your Journey Starts Here
          </span>

          {/* 🎨 MAIN HEADER */}
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase select-none pt-1"
            style={{ 
              fontFamily: "'Bad Brush Custom', sans-serif",
              textShadow: "rgba(0, 0, 0, 0.5) 0px 0px 20px"
            }}
          >
            Meet The <span className="text-[#E9E151]">Team.</span>
          </h2>
          
          {/* NAVIGATION HANDLES */}
          <div className="flex items-center space-x-3 pt-4">
            <button
              onClick={() => scroll("left")}
              className="size-11 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all duration-300 text-lg font-light"
              aria-label="Scroll left"
            >
              &#8592;
            </button>
            <button
              onClick={() => scroll("right")}
              className="size-11 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all duration-300 text-lg font-light"
              aria-label="Scroll right"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Swipeable & Slidable Horizontal Scroll-Track Container */}
        {/* ⚡ TRACK FIX: Changed container to 'overflow-x-scroll' and used browser automatic 'touch-auto' parsing */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory pb-8 touch-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {coachesData.map((coach) => {
            const isBioOpen = activeBioId === coach.id;

            return (
              <div
                key={coach.id}
                /* ⚡ SLIDE FIX: Changed to 'touch-pan-x' on individual card modules so horizontal swipe gestures register perfectly */
                className="relative flex-none w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[26vw] aspect-[3/4] rounded-3xl overflow-hidden group snap-start bg-zinc-950 border border-zinc-900 shadow-xl touch-pan-x"
              >
                {/* Core Visual Underlay Frame */}
                <img
                  src={coach.image}
                  alt={coach.name}
                  className={`w-full h-full object-cover object-center select-none pointer-events-none transition-all duration-700 ${
                    isBioOpen ? "scale-105 blur-md brightness-[0.25]" : "scale-100 brightness-[0.85] group-hover:scale-102"
                  }`}
                />

                {/* Ambient vignette background mask gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 pointer-events-none" />

                {/* Static Layout Meta Tag Details always anchoring bottom left */}
                <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none text-center flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-2 mb-1">
                    <span 
                      className="text-xs font-normal tracking-wide text-zinc-400 uppercase"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {coach.role}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-medium uppercase text-white truncate max-w-full"
                    style={{ 
                      fontFamily: "'Oswald', sans-serif",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {coach.name}
                  </h3>
                </div>

                {/* Dynamic Overlay Text Content */}
                <div
                  className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-start text-center transition-all duration-500 z-20 ${
                    isBioOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-sm md:text-base font-light text-zinc-300 leading-relaxed tracking-wide pt-4 max-h-[80%] overflow-y-auto scrollbar-hide font-sans">
                    {coach.bio}
                  </p>
                </div>

                {/* Modular Interface Controller Action Button Trigger (+ / x) */}
                <button
                  onClick={() => toggleBio(coach.id)}
                  className={`absolute bottom-5 right-5 size-11 rounded-full border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm text-white flex items-center justify-center text-2xl font-light transition-all duration-300 z-30 shadow-lg ${
                    isBioOpen ? "rotate-0 hover:bg-white hover:text-zinc-950 border-white" : "hover:scale-105 hover:border-zinc-500"
                  }`}
                  aria-label={isBioOpen ? "Close bio" : "Read bio"}
                >
                  {isBioOpen ? "×" : "+"}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Coaches;