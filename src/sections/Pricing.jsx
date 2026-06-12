import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("all-in-membership");

  // Main Core categories mapped with priority tiers for layout scaling
  const allCoreSections = [
    { id: "all-in-membership", label: "All-In Membership", tier: "primary" },
    { id: "base-membership", label: "Base Membership", tier: "standard" },
    { id: "kids-membership", label: "Kids Membership", tier: "standard" },
    { id: "womens-only-membership", label: "Women's Only", tier: "standard" },
    { id: "available-separately", label: "Available Separately", tier: "utility" },
  ];

  // Group configurations dynamically for the mobile 2-column fallback
  const mobileGridSections = [
    allCoreSections[0], // All-In
    allCoreSections[1], // Base
    allCoreSections[2], // Kids
    allCoreSections[4], // Available Separately
  ];
  const mobileCenterSection = allCoreSections[3]; // Women's Only centered

  // Bottom secondary utility links
  const minorSections = [
    { id: "trials-short-term", label: "Trials (2 Weeks)" },
    { id: "drop-in-passes", label: "Drop-In Passes" },
  ];

  const sanitizePlanTitle = (title) => {
    return title.replace(/\s*\(\d+[A-Z]\)\s*/g, " ").trim();
  };

  const filteredPlans = activeCategory === "womens-only-membership" 
    ? [
        {
          id: "womens-only-bjj",
          title: "Women's Only BJJ Membership",
          caption: "Access to Women's only Brazilian Jiu-Jitsu training tracks and specialized structured sessions.",
          price: 35,
          period: "/ MO",
          features: ["Access to Women's only BJJ", "Dedicated coaching", "Community events"],
          gymdeskSlug: "womens-only",
          isHighlighted: true
        }
      ]
    : plans
        .filter((plan) => plan.category === activeCategory)
        .map((plan) => ({
          ...plan,
          title: sanitizePlanTitle(plan.title)
        }));

  const showFamilyDiscount = ![
    "available-separately", 
    "trials-short-term", 
    "drop-in-passes",
    "womens-only-membership"
  ].includes(activeCategory);

  return (
    <section id="pricing" className="bg-[#222222] py-16 md:py-24 font-poppins">
      <Element name="pricing">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header titles */}
          <div className="text-center mb-12">
            <h3 
              className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl tracking-tighter mb-3 mt-2" 
              style={{ color: "#EAE6DF" }}
            >
              Membership Menu
            </h3>
            <p 
              className="text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light"
              style={{ color: "rgba(234, 230, 223, 0.75)" }}
            >
              Select a track to view packages. Premium comprehensive programs featured prominently.
            </p>
          </div>

          {/* TAB WRAPPER DECK CONTAINER */}
          <div className="flex flex-col items-center gap-4 mb-12 border-b border-zinc-900/60 pb-8 max-w-6xl mx-auto w-full">
            
            {/* 💻 LAPTOP & DESKTOP LAYOUT (Clean, Tiered Row Hierarchy Fixed) */}
            <div className="hidden md:flex flex-row items-center justify-center gap-3 w-full">
              {allCoreSections.map((tab) => {
                const isActive = activeCategory === tab.id;
                
                return (
                  <div 
                    key={tab.id} 
                    className={clsx(
                      "relative transition-all duration-300",
                      tab.tier === "primary" ? "flex-[1.15] max-w-[230px] min-w-[190px] z-10" : "flex-1 max-w-[210px] min-w-[170px]"
                    )}
                  >
                    {/* POPULAR ACCENT TAG */}
                    {tab.tier === "primary" && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none w-max">
                        <span className="bg-[#D4AF37] text-zinc-950 text-[8px] font-black tracking-widest px-2 py-0.5 rounded-sm uppercase shadow-md">
                          Best Value
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => setActiveCategory(tab.id)}
                      className={clsx(
                        "w-full rounded-xl uppercase tracking-wider border cursor-pointer transition-all duration-300 text-center flex items-center justify-center shadow-md",
                        // Tier 1: Primary Button Style (Slightly taller & gold-focused)
                        tab.tier === "primary" && (isActive 
                          ? "h-20 text-xs font-black bg-zinc-950 text-white border-[#D4AF37] scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.2)]" 
                          : "h-20 text-xs font-black bg-zinc-900/90 text-[#D4AF37] border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-900"),
                        
                        // Tier 2: Standard Button Style
                        tab.tier === "standard" && (isActive 
                          ? "h-16 text-xs font-black bg-zinc-950 text-white border-[#D4AF37]" 
                          : "h-16 text-xs font-black bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-white"),
                        
                        // Tier 3: Utility Style (Fixes the camouflage in image_2837e0.png)
                        tab.tier === "utility" && (isActive 
                          ? "h-16 text-[11px] font-black bg-zinc-950 text-white border-[#D4AF37]" 
                          : "h-16 text-[11px] font-bold bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-white")
                      )}
                    >
                      {tab.label}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* 📱 MOBILE LAYOUT BLOCK (2x2 Balanced Grid Fallback) */}
            <div className="block md:hidden w-full space-y-3">
              <div className="grid grid-cols-2 gap-3 w-full">
                {mobileGridSections.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <div key={tab.id} className="relative w-full">
                      {tab.id === "all-in-membership" && (
                        <div className="absolute -top-2 right-4 z-20 pointer-events-none select-none">
                          <span className="bg-[#D4AF37] text-zinc-950 text-[8px] font-black tracking-widest px-1.5 py-0.5 rounded-sm uppercase shadow">
                            Popular
                          </span>
                        </div>
                      )}
                      <button
                        onClick={() => setActiveCategory(tab.id)}
                        className={clsx(
                          "w-full h-14 sm:h-16 px-4 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider border cursor-pointer transition-all duration-300 text-center flex items-center justify-center shadow-md",
                          isActive
                            ? "bg-zinc-950 text-white border-[#D4AF37]"
                            : tab.id === "all-in-membership"
                              ? "bg-zinc-900 text-[#D4AF37] border-zinc-800"
                              : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:border-zinc-700"
                        )}
                      >
                        {tab.label}
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* Centered single option for mobile viewports */}
              <div className="w-full flex justify-center">
                <button
                  onClick={() => setActiveCategory(mobileCenterSection.id)}
                  className={clsx(
                    "w-1/2 min-w-[140px] h-14 sm:h-16 px-4 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider border cursor-pointer transition-all duration-300 text-center flex items-center justify-center shadow-md",
                    activeCategory === mobileCenterSection.id
                      ? "bg-zinc-950 text-white border-[#D4AF37]"
                      : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80"
                  )}
                >
                  {mobileCenterSection.label}
                </button>
              </div>
            </div>

            {/* MINOR TIER SUB-TABS */}
            <div className="flex justify-center gap-3 w-full mt-4">
              {minorSections.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={clsx(
                      "px-4 py-2.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-sm",
                      isActive
                        ? "bg-zinc-950 text-white border-[#D4AF37]"
                        : "bg-zinc-900/40 text-zinc-500 border-zinc-800/40 hover:border-zinc-700 hover:text-zinc-300"
                    )}
                  >
                    <span className={clsx(
                      "w-1 h-1 rounded-full",
                      isActive ? "bg-[#D4AF37]" : "bg-zinc-700"
                    )} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

          </div>

          {/* LIST SELECTION PACKAGES WRAPPER */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto min-h-[250px] px-2">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={clsx(
                    "relative flex flex-col md:flex-row items-center justify-between rounded-3xl transition-all duration-500 p-6 md:p-8 gap-6 w-full border group overflow-hidden",
                    plan.isHighlighted 
                      ? "bg-zinc-950 border-[#4A5A30] shadow-[0_20px_50px_rgba(61,74,38,0.18)]" 
                      : "bg-zinc-950 border-zinc-900 hover:border-zinc-800 shadow-xl"
                  )}
                >
                  {plan.isHighlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3D4A26]/0 via-[#3D4A26]/10 to-[#3D4A26]/0 opacity-100 pointer-events-none" />
                  )}
                  
                  {/* LEFT: Information fields */}
                  <div className="flex-1 text-center md:text-left relative z-10">
                    <div 
                      className="text-lg md:text-xl font-black tracking-wider uppercase mb-1 font-poppins"
                      style={{ color: "#EAE6DF" }}
                    >
                      {plan.title}
                    </div>
                    
                    <p 
                      className="text-xs md:text-sm font-normal leading-relaxed mb-4 max-w-xl font-sans"
                      style={{ color: "rgba(234, 230, 223, 0.7)" }}
                    >
                      {plan.caption}
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {plan.features.map((feat, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-[#3D4A26]/20 border border-[#4A5A30]/30 px-3 py-1 rounded-full backdrop-blur-sm tracking-wide"
                          style={{ color: "#EAE6DF" }}
                        >
                          <span className="text-[#D4AF37] font-bold">✓</span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE: Pricing Display */}
                  <div 
                    className="flex items-baseline justify-center shrink-0 min-w-[150px] relative z-10 font-sans"
                    style={{ color: "#EAE6DF" }}
                  >
                    <span className="text-2xl font-bold text-[#D4AF37] mr-1">$</span>
                    <span className="font-black tracking-tight text-5xl md:text-6xl font-poppins">
                      <CountUp key={plan.id} start={0} end={plan.price} duration={0.3} />
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase ml-2" style={{ color: "rgba(234, 230, 223, 0.5)" }}>
                      {plan.period || "/ MO"}
                    </span>
                  </div>

                  {/* RIGHT: Action Button Segment */}
                  <div className="w-full md:w-auto shrink-0 relative z-10">
                    <a
                      href={`https://lewisburg-bjj.gymdesk.com/signup?plan=${plan.gymdeskSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full md:w-44 py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-[0.15em] border border-zinc-800 bg-zinc-900 text-[#EAE6DF] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer shadow-lg transform active:scale-98"
                    >
                      Select Plan
                    </a>
                  </div>

                </div>
              ))
            ) : (
              <div className="text-center py-12 w-full italic" style={{ color: "rgba(234, 230, 223, 0.4)" }}>
                No pricing fields tracked inside this filter tier arrangement.
              </div>
            )}
          </div>

          {/* Family Plan discount footer container */}
          {showFamilyDiscount && (
            <div className="mt-16 border border-zinc-900 bg-zinc-950 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4A5A30]" />
              
              <h4 className="font-oswald text-xl font-bold uppercase tracking-wider text-[#D4AF37] mb-3 text-center md:text-left select-none">
                Family Discount 
              </h4>
              
              <p 
                className="text-sm mb-6 text-center md:text-left font-sans font-light leading-relaxed"
                style={{ color: "rgba(234, 230, 223, 0.75)" }}
              >
                Dependents qualify for a 50% discount on their respective training tracks. Review the sample breakdown from the official documentation:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans font-bold uppercase tracking-wide border-t border-zinc-900 pt-6">
                <div className="flex justify-between items-center bg-zinc-900/40 p-4 rounded-xl border border-zinc-900">
                  <span className="text-white">Parent - All In, 18-month:</span>
                  <span className="text-[#D4AF37] text-sm">$135 / mo</span>
                </div>
                <div className="flex justify-between items-center bg-zinc-900/40 p-4 rounded-xl border border-zinc-900">
                  <span className="text-white">Each Child - 18-month:</span>
                  <span className="text-[#D4AF37] text-sm">$40 / mo (50% of $80)</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </Element>
    </section>
  );
};

export default Pricing;