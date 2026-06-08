import React, { useRef, useState } from "react";

const coachesData = [
  {
    id: 1,
    name: "Ffion Davies",
    role: "Head Coach",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop", 
    bio: "World ADCC & CJI Champion - whether gi or no-gi, Ffion is unequivocally one of the best grapplers in the world. She brings an unrivaled skillset to Lewisburg BJJ, helping to develop students at all levels from introductory foundations to elite competitive structures.",
  },
  {
    id: 2,
    name: "Sam Gibson",
    role: "Head Gi Coach",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    bio: "Deeply technical instructor specializing in traditional Gi mechanics, absolute framing systems, and dynamic submission chains. Dedicated to crafting structured progress paths for practitioners of all body types.",
  },
  {
    id: 3,
    name: "Stuart Cooper",
    role: "No-Gi Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Renowned black belt instructor with vast international competitive experience. Stuart targets hyper-efficient leg locks, precision guard passing systems, and high-intensity structural positioning loops.",
  },
  {
    id: 4,
    name: "Coach Four",
    role: "Striking Coach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Specializing in fundamental stand-up mechanics, structural balance, and heavy bag/padwork conditioning to seamlessly supplement combat arts mobility tracks.",
  },
  {
    id: 5,
    name: "Coach Five",
    role: "Youth Program Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Focused on building life skills, team safety structures, and introductory coordination drilling metrics across our youth training architectures.",
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
          
          {/* 🥋 UPPER TAGLINE
              - Changed phone screens from text-5xl down to text-xl
              - Changed desktop screens up to text-3xl for optimal balance
          */}
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
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {coachesData.map((coach) => {
            const isBioOpen = activeBioId === coach.id;

            return (
              <div
                key={coach.id}
                className="relative flex-none w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[26vw] aspect-[3/4] rounded-3xl overflow-hidden group snap-start bg-zinc-950 border border-zinc-900 shadow-xl"
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