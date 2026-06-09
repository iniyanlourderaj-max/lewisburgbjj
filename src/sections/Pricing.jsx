import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";


const Pricing = () => {
  // Defaults to primary base program contract views
  const [activeCategory, setActiveCategory] = useState("base-membership");

  // Top level heavy core configuration types (Clean text labels matching image_6b7c4d.png layout)
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
    <section id="pricing" className="bg-zinc-950 text-white py-24 font-poppins">
      <Element name="pricing">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header titles layout block */}
          <div className="text-center mb-12">
            {/* UPDATED ONLY THIS HEADING TO OSWALD FONT TO MATCH image_6b7c4d.png */}
            <h3 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4 font-oswald">
              Membership Menu
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Choose an option below. Standard long-term packages display sequentially down to upfront seasonal plans.
            </p>
          </div>

          {/* TAB WRAPPER DECK CONTAINER */}
          <div className="flex flex-col items-center gap-4 mb-16 border-b border-zinc-900 pb-8 max-w-4xl mx-auto">
            
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
                      <span className="bg-[#D4AF37] text-zinc-950 text-[9px] font-black tracking-widest px-2 py-0.5 rounded uppercase shadow-md filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-zinc-950">
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
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                    )}
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
                      ? "bg-white text-zinc-950 border-white font-black shadow-md"
                      : "bg-zinc-900/60 border-zinc-800/60 text-zinc-500 hover:text-zinc-300"
                  )}
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
                    "relative flex flex-col md:flex-row items-center justify-between rounded-2xl transition-all duration-300 p-6 gap-6 w-full border",
                    plan.isHighlighted 
                      ? "bg-zinc-900 border-l-8 border-l-[#D4AF37] border-y-zinc-900 border-r-zinc-900 shadow-[0_0_30px_rgba(212,175,55,0.08)]" 
                      : "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800"
                  )}
                >
                  
                  {/* Left Metadata text blocks */}
                  <div className="flex-1 text-center md:text-left">
                    <div className={clsx(
                      "text-sm font-black tracking-wide uppercase mb-1",
                      plan.isHighlighted ? "text-[#D4AF37]" : "text-white"
                    )}>
                      {plan.title}
                    </div>
                    <p className="text-xs text-zinc-400 font-medium mb-3.5">
                      {plan.caption}
                    </p>
                    
                    {/* Inline small tags tracking metrics detail lines */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                      {plan.features.map((feat, idx) => (
                        <span key={idx} className="bg-zinc-950 px-2.5 py-1 text-[10px] text-zinc-400 rounded-md border border-zinc-900/80 font-mono">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle Center Exact Cost metrics framework elements */}
                  <div className="flex items-baseline justify-center shrink-0 min-w-[150px]">
                    <span className="text-xl font-bold text-zinc-500 mr-0.5">$</span>
                    <span className="font-black tracking-tight text-4xl text-white">
                      <CountUp key={plan.id} start={0} end={plan.price} duration={0.3} />
                    </span>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider ml-1.5">
                      {plan.period}
                    </span>
                  </div>

                  {/* Right side check triggers redirected to custom gymdesk parameters */}
                  <div className="w-full md:w-auto shrink-0">
                    <a
                      href={`https://lewisburg-bjj.gymdesk.com/signup?plan=${plan.gymdeskSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "block text-center w-full md:w-auto py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",
                        plan.isHighlighted
                          ? "bg-[#D4AF37] text-zinc-950 hover:bg-white"
                          : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                      )}
                    >
                      Select Plan
                    </a>
                  </div>

                </div>
              ))
            ) : (
              <div className="text-center text-zinc-600 py-12 w-full italic">
                No pricing fields tracked inside this filter tier arrangement.
              </div>
            )}
          </div>

          {/* Family Plan rules footnote framework layouts */}
          <div className="mt-20 border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h4 className="text-lg font-black uppercase tracking-wider text-[#D4AF37] mb-2 text-center md:text-left">
              Family Discount Rule Matrix
            </h4>
            <p className="text-sm text-zinc-400 mb-6 text-center md:text-left">
              Dependents qualify for a 50% discount on their respective training tracks. Review the sample breakdown from the official documentation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-zinc-300 border-t border-zinc-900 pt-6">
              <div className="flex justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-900">
                <span>Parent - All In, 18 mo:</span>
                <span className="text-white font-bold">$135 / mo</span>
              </div>
              <div className="flex justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-900">
                <span>Each Child - Base, 18 mo:</span>
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