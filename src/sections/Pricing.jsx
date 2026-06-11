import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";

const Pricing = () => {
  // Defaults to primary base program contract views
  const [activeCategory, setActiveCategory] = useState("base-membership");

  // Top level heavy core configuration types
  const coreSections = [
    { id: "base-membership", label: "📋 Base Membership" },
    { id: "all-in-membership", label: "All-In Membership" },
    { id: "available-separately", label: "🔍 Available Separately" },
    { id: "kids-membership", label: "🧒 Kids Membership" },
  ];

  // Secondary sub-level smaller tracking buttons
  const minorSections = [
    { id: "trials-short-term", label: "🔥 Trials (2 Weeks)" },
    { id: "drop-in-passes", label: "🎟️ Drop-In Passes" },
  ];

  const filteredPlans = plans.filter((plan) => plan.category === activeCategory);

  return (
    /* 🎨 BACKDROP: Original dark charcoal background retained */
    <section id="pricing" className="bg-[#222222] py-24 font-poppins">
      <Element name="pricing">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header titles layout block */}
          <div className="text-center mb-12">
            {/* ⚡ OFF-WHITE TEXT */}
            <h3 
className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl tracking-tighter mb-4 mt-2"              style={{ color: "#EAE6DF" }}
            >
              Membership Menu
            </h3>
            {/* ⚡ OFF-WHITE TEXT (Muted variation for description) */}
            <p 
              className="text-sm md:text-base max-w-xl mx-auto font-light"
              style={{ color: "rgba(234, 230, 223, 0.75)" }}
            >
              Choose an option below. Standard long-term packages display sequentially down to upfront seasonal plans.
            </p>
          </div>

          {/* TAB WRAPPER DECK CONTAINER */}
          <div className="flex flex-col items-center gap-4 mb-16 border-b border-zinc-900/60 pb-8 max-w-4xl mx-auto">
            
            {/* 1. PRIMARY CORE MEMBERSHIP HEADING TABS */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {coreSections.map((tab) => (
                <div 
                  key={tab.id} 
                  className="relative flex-1 min-w-[160px] max-w-[220px]"
                >
                  {/* STATIC "POPULAR" BADGE PLACED EXACTLY AT THE TOP-RIGHT CORNER EDGE */}
                  {tab.id === "all-in-membership" && (
                    <div className="absolute -top-2.5 -right-1 z-20 pointer-events-none select-none">
                      <span className="bg-[#D4AF37] text-zinc-950 text-[9px] font-black tracking-widest px-2 py-0.5 rounded uppercase shadow-md border border-zinc-950">
                        Popular
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveCategory(tab.id)}
                    className={clsx(
                      "w-full h-full px-5 py-3.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer justify-center text-center relative",
                      activeCategory === tab.id
                        ? "bg-[#D4AF37] text-zinc-950 border-[#D4AF37] shadow-lg scale-102"
                        : "bg-zinc-950 border-zinc-900 hover:bg-zinc-900 transition-colors"
                    )}
                    style={activeCategory !== tab.id ? { color: "#EAE6DF" } : {}}
                  >
                    {tab.label}
                  </button>
                </div>
              ))}
            </div>

            {/* 2. SMALLER PASSTHROUGH TRIALS AND DROP-IN BUTTON HEADINGS */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl mt-2">
              {minorSections.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wide transition-all duration-300 border cursor-pointer",
                    activeCategory === tab.id
                      ? "bg-[#EAE6DF] text-zinc-950 border-[#EAE6DF] font-black shadow-md"
                      : "bg-zinc-950/60 border-zinc-900/50 hover:text-white"
                  )}
                  style={activeCategory !== tab.id ? { color: "rgba(234, 230, 223, 0.6)" } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* LIST SELECTION VIEW LOOP DISPLAY FRAME */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto min-h-[300px]">
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
                  {/* Subtle Premium Background Glow Effect for highlighted tracks */}
                  {plan.isHighlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3D4A26]/0 via-[#3D4A26]/10 to-[#3D4A26]/0 opacity-100 pointer-events-none" />
                  )}
                  
                  {/* LEFT: Metadata Text Block */}
                  <div className="flex-1 text-center md:text-left relative z-10">
                    {/* ⚡ OFF-WHITE TEXT (Plan Title) */}
                    <div 
                      className="text-lg md:text-xl font-black tracking-wider uppercase mb-1 font-poppins transition-colors duration-300"
                      style={{ color: "#EAE6DF" }}
                    >
                      {plan.title}
                    </div>
                    {/* ⚡ OFF-WHITE TEXT (Plan Description Subtext) */}
                    <p 
                      className="text-xs md:text-sm font-normal leading-relaxed mb-4 max-w-xl font-sans"
                      style={{ color: "rgba(234, 230, 223, 0.7)" }}
                    >
                      {plan.caption}
                    </p>
                    
                    {/* Inline small feature tags */}
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

                  {/* MIDDLE: Pricing Metrics Display Frame */}
                  {/* ⚡ OFF-WHITE TEXT (Price values) */}
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

                  {/* RIGHT: High Contrast Action Button Segment */}
                  <div className="w-full md:w-auto shrink-0 relative z-10">
                    <a
                      href={`https://lewisburg-bjj.gymdesk.com/signup?plan=${plan.gymdeskSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "block text-center w-full md:w-44 py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-[0.15em] border transition-all duration-300 cursor-pointer shadow-lg active:scale-98",
                        plan.isHighlighted
                          ? "bg-[#D4AF37] text-zinc-950 border-[#D4AF37] hover:bg-[#EAE6DF] hover:border-[#EAE6DF] hover:shadow-[0_10px_25px_rgba(212,175,55,0.25)]"
                          : "bg-zinc-900 border-zinc-800 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]"
                      )}
                      style={!plan.isHighlighted ? { color: "#EAE6DF" } : {}}
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

          {/* Family Plan rules footnote framework layouts */}
          <div className="mt-20 border border-zinc-900 bg-zinc-950 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4A5A30]" />
            <h4 className="text-lg font-black uppercase tracking-wider text-[#D4AF37] mb-2 text-center md:text-left font-poppins">
              Family Discount 
            </h4>
            {/* ⚡ OFF-WHITE TEXT (Footnote description) */}
            <p 
              className="text-sm mb-6 text-center md:text-left font-sans"
              style={{ color: "rgba(234, 230, 223, 0.75)" }}
            >
              Dependents qualify for a 50% discount on their respective training tracks. Review the sample breakdown from the official documentation:
            </p>
            {/* ⚡ OFF-WHITE TEXT (Code blocks / breakdowns) */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono border-t border-zinc-900 pt-6"
              style={{ color: "#EAE6DF" }}
            >
              <div className="flex justify-between bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
                <span style={{ color: "rgba(234, 230, 223, 0.8)" }}>Parent - All In, 18 mo:</span>
                <span className="font-bold">$135 / mo</span>
              </div>
              <div className="flex justify-between bg-zinc-900/40 p-3 rounded-xl border border-zinc-900">
                <span style={{ color: "rgba(234, 230, 223, 0.8)" }}>Each Child - Base, 18 mo:</span>
                <span className="text-[#D4AF37] font-bold">$40 / mo (50% of $80)</span>
              </div>
            </div>
          </div>

        </div>
      </Element>
    </section>
  );
};

export default Pricing;