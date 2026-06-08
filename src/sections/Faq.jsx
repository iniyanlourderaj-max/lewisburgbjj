import React, { useState } from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderQuestionItem = (item, index) => {
    const isOpen = !!openItems[item.id];
    
    // 🔢 CHANGED: Offset the index by +1 so numbering starts at "01" instead of "00"
    const formattedNumber = String(index + 1).padStart(2, "0");

    return (
      // 🃏 CHANGED: Converted from a flat line into a high-contrast floating card container
      <div 
        key={item.id} 
        className="relative bg-zinc-900/30 border border-zinc-800/40 rounded-2xl p-5 md:p-6 mb-4 shadow-xl backdrop-blur-md hover:border-zinc-700/50 transition-all duration-300 last:mb-0"
      >
        <div 
          className="flex items-start justify-between gap-4 cursor-pointer group select-none"
          onClick={() => toggleItem(item.id)}
        >
          <div className="space-y-1.5 flex-1">
            <span className="text-[11px] tracking-widest text-zinc-500 block font-medium">
              {formattedNumber}
            </span>
            <h3 className="text-lg md:text-xl font-normal tracking-wide text-zinc-100 group-hover:text-white transition-colors duration-300">
              {item.question}
            </h3>
          </div>

          <button
            className={`size-10 rounded-full border flex items-center justify-center text-xl font-light transition-all duration-300 shrink-0 ${
              isOpen 
                ? "bg-white text-zinc-950 border-white rotate-45" 
                : "bg-zinc-900/80 border-zinc-800 text-zinc-400 group-hover:border-zinc-500 group-hover:text-white"
            }`}
            aria-label={isOpen ? "Close question" : "Open question"}
          >
            +
          </button>
        </div>

        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4 mt-2 border-t border-zinc-800/30" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden pr-4">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed tracking-wide">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="bg-[#222222] text-white relative overflow-hidden transition-colors duration-300">
      <Element name="faq" className="relative">
        
        {/* Header Block Container */}
        <div className="container relative z-2 pt-24 pb-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider uppercase text-white leading-tight">
              Am I too old? Will I get hurt? <br className="max-md:hidden" /> Do I need to be in shape?
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase pt-2">
              You've got questions, we've got answers.
            </p>
          </div>
        </div>

        {/* Questions List Section Frame Grid */}
        <div className="relative z-2 border-y border-zinc-800/60 bg-zinc-950/10 backdrop-blur-sm pb-24">
          <div className="container flex gap-6 lg:gap-10 max-lg:flex-col relative">
            
            {/* Center Badge Accent */}
            <div className="rounded-full absolute -top-10 left-[calc(50%-40px)] z-10 flex size-20 items-center justify-center border border-zinc-800 bg-zinc-950 shadow-2xl max-lg:hidden">
              <img 
                src="/images/lbjj.svg" 
                alt="Lewisburg BJJ" 
                className="size-11 object-contain" 
              />
            </div>

            {/* Left Column Stack */}
            <div className="relative flex-1 pt-12 md:pt-16 flex flex-col gap-4">
              {faq.slice(0, halfLength).map((item, index) => renderQuestionItem(item, index))}
            </div>

            {/* Right Column Stack */}
            <div className="relative flex-1 lg:pt-16 flex flex-col gap-4">
              {faq.slice(halfLength).map((item, index) => renderQuestionItem(item, halfLength + index))}
            </div>
          </div>

          {/* Minimalist Vertical Center Divider Wire (Hidden on Mobile) */}
          <div className="absolute left-[calc(50%-0.5px)] top-0 -z-1 h-full w-px bg-zinc-800/20 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;