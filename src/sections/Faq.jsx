import React, { useState } from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    // 🎨 Background matching the exact bone/beige hex code from image_89ed62.png
    <section id="faq" className="bg-[#EAE6DF] text-zinc-950 py-24 antialiased">
      <Element name="faq" className="max-w-4xl mx-auto px-6">
        
        {/* Main Section Header Layout */}
        <div className="mb-10">
          {/* ⚡ FIXED FONT: Styled to look identical to the "FAQS" title in image_89e63f.jpg */}
          <h2 
            className="text-4xl md:text-5xl font-bold uppercase tracking-normal text-zinc-900 mb-4"
            style={{ fontFamily: "'Oswald', 'Bebas Neue', sans-serif", transform: "scaleY(1.05)" }}
          >
            FAQS
          </h2>
          
          {/* ⚡ PRODUCT INFO: Dull muted gold/brown subheader as seen in image_89e63f.jpg */}
          <p 
            className="text-[#9A8454] text-sm md:text-base font-bold uppercase tracking-wide"
            style={{ fontFamily: "'Oswald', 'Bebas Neue', sans-serif" }}
          >
            You've got questions, we've got answers.
          </p>
        </div>

        {/* Minimalist Flat List Container */}
        <div className="border-t border-zinc-500/80">
          {faq.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div 
                key={item.id} 
                className="border-b border-zinc-500/80"
              >
                {/* Clickable Header Row */}
                <div 
                  className="flex items-center justify-between gap-6 py-4 cursor-pointer group select-none"
                  onClick={() => toggleItem(item.id)}
                >
                  {/* ⚡ QUESTION STYLING: Bold, compact, flat-edged compressed sans-serif */}
                  <h3 
                    className="text-lg md:text-xl font-bold uppercase tracking-wide text-zinc-900 group-hover:text-black transition-colors duration-200 leading-none"
                    style={{ fontFamily: "'Oswald', 'Bebas Neue', sans-serif" }}
                  >
                    {item.question}
                  </h3>

                  {/* Clean text-based tracking '+' token from image_89e63f.jpg */}
                  <span 
                    className={`text-xl md:text-2xl font-light text-zinc-600 group-hover:text-black transition-transform duration-300 shrink-0 select-none ${
                      isOpen ? "rotate-45 text-black" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Animated Answer Collapse Tray */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden max-w-3xl">
                    {/* BODY TEXT: Simple fallback clean text matching your second screen reference */}
                    <p className="text-zinc-800 text-sm md:text-base font-normal leading-relaxed font-sans">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Element>
    </section>
  );
};

export default Faq;