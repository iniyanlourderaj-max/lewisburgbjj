import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";

const Pricing = () => {
  // Category tabs switcher state
  const [activeCategory, setActiveCategory] = useState("adult");
  // Month-to-Month vs 12-Month plan switch state
  const [isNoCommitment, setIsNoCommitment] = useState(false);

  // Categories list layout array
  const categories = [
    { id: "adult", label: "Adult BJJ" },
    { id: "kids", label: "Kids Program" },
    { id: "specialty", label: "Specialty Access" },
    { id: "passes", label: "Passes & Trials" },
  ];

  return (
    // 🎯 FIXED: Added id="pricing" here so your standard header nav links work perfectly on click!
    <section id="pricing" className="bg-zinc-950 text-white py-24 overflow-hidden font-poppins">
      <Element name="pricing">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header Layout Info */}
          <div className="relative mx-auto max-w-3xl text-center mb-12 z-2">
            <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              Membership Options
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Explore our full directory of training options. Use the program tabs and commitment slider to map out your rate.
            </p>
          </div>

          {/* Category Tab Selector Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto relative z-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-[#D4AF37] text-zinc-950 border-[#D4AF37] shadow-md"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Commit Track Toggle Pill Container */}
          <div className="relative mx-auto flex w-[340px] md:w-[380px] rounded-full border border-zinc-800 bg-zinc-900 p-1.5 backdrop-blur-md mb-20 z-2">
            <button
              className={clsx(
                "relative z-4 w-1/2 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 rounded-full font-poppins cursor-pointer",
                isNoCommitment ? "text-zinc-950 font-black" : "text-zinc-400 hover:text-white"
              )}
              onClick={() => setIsNoCommitment(true)}
            >
              Month-To-Month
            </button>
            <button
              className={clsx(
                "relative z-4 w-1/2 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 rounded-full font-poppins cursor-pointer",
                !isNoCommitment ? "text-zinc-950 font-black" : "text-zinc-400 hover:text-white"
              )}
              onClick={() => setIsNoCommitment(false)}
            >
              12-Month Plan
            </button>

            {/* Slider Background Fill */}
            <div
              className={clsx(
                "absolute left-1.5 top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] bg-[#D4AF37] rounded-full transition-transform duration-300 ease-out",
                !isNoCommitment && "translate-x-full"
              )}
            />
          </div>

          {/* Pricing Grid Layout Array */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center relative z-2">
            {plans.map((plan) => {
              // Check if the current card belongs to the selected tab
              const isVisible = plan.category === activeCategory;

              return (
                <div
                  key={plan.id}
                  className={clsx(
                    "relative flex-col justify-between rounded-3xl p-8 transition-all duration-300",
                    
                    // Controls visibility via Tailwind layout utilities instead of mounting/unmounting elements
                    isVisible ? "flex opacity-100 scale-100" : "hidden opacity-0 scale-95 pointer-events-none",
                    
                    plan.isHighlighted 
                      ? "bg-zinc-900 border-t-8 border-x-2 border-b-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.08)]" 
                      : "bg-zinc-900/50 border-2 border-zinc-800 hover:border-zinc-700"
                  )}
                >
                  {/* Upper Body Area */}
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Styled Minimalist Badge Icon */}
                    <div className="mb-6">
                      <div className={clsx(
                        "flex items-center justify-center size-14 rounded-full border text-sm font-bold tracking-wider",
                        plan.isHighlighted 
                          ? "border-[#D4AF37] bg-[#D4AF37] text-zinc-950 font-black" 
                          : "border-zinc-800 bg-zinc-900 text-white"
                      )}>
                        {plan.badge}
                      </div>
                    </div>

                    <div
                      className={clsx(
                        "text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6",
                        plan.isHighlighted ? "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5" : "border-zinc-800 text-zinc-400"
                      )}
                    >
                      {plan.title}
                    </div>

                    {/* Core Numeric Layout */}
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={clsx("text-2xl font-bold mr-1", plan.isHighlighted ? "text-[#D4AF37]" : "text-white")}>$</span>
                      <span className={clsx("text-6xl font-black tracking-tight", plan.isHighlighted ? "text-[#D4AF37]" : "text-white")}>
                        <CountUp
                          // Forcing a complete mount reset when EITHER the tab or the commitment switch changes
                          key={`${plan.id}-${activeCategory}-${isNoCommitment}`}
                          
                          // Forces the animation to start counting from 0 up to the price on tab shuffles
                          start={0}
                          end={isNoCommitment ? plan.priceMonthly : plan.priceYearly}
                          duration={0.4}
                          useEasing={true}
                        />
                      </span>
                      <span className="text-zinc-400 text-xs uppercase font-semibold tracking-wider ml-2">
                        {plan.category === "passes" && !isNoCommitment ? "/ pass" : "/ mo"}
                      </span>
                    </div>

                    <div className="text-sm text-zinc-400 font-medium mb-8 min-h-[20px]">
                      {plan.category === "passes" && !isNoCommitment ? "Casual Mat Pass Rate" : plan.caption}
                    </div>
                  </div>

                  {/* Features Mapping List */}
                  <ul className="space-y-4 border-t border-zinc-800 pt-8 mb-8 flex-grow font-inter">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3.5 text-sm">
                        <div className="flex items-center justify-center size-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 mt-0.5 shrink-0">
                          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-zinc-300 leading-tight text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Trigger Action Buttons */}
                  <div className="w-full">
                    <button 
                      className={clsx(
                        "w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 font-poppins cursor-pointer",
                        plan.isHighlighted 
                          ? "bg-[#D4AF37] text-zinc-950 hover:bg-white shadow-md" 
                          : "bg-zinc-950 text-white border border-zinc-800 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      )}
                    >
                      Select Track
                    </button>

                    {/* Footnote string fields */}
                    {plan.footnote && (
                      <p className="text-[11px] text-zinc-500 text-center mt-4 leading-normal italic font-inter">
                        {plan.footnote}
                      </p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </Element>
    </section>
  );
};

export default Pricing;