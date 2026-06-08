import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

// Array targeting the local high-res slide assets from your image folder structure
const slideshowImages = [
  "/images/lbjj_4k_2.png",
  "/images/lbjj_4k_3.jpg",
  "/images/lbjj_4k_4.png"
];

const Features = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-advance slideshow loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    /* 🎨 BACKDROP: Low-contrast dark charcoal (#222222) */
    <section id="features" className="bg-[#222222] py-20 transition-colors duration-300">
      <Element name="features">
        <div className="container">
          
          {/* Main Grid Wrapper */}
          {/* 🎨 REVERTED: Swapped the card wrapper background back to rich pitch black (bg-zinc-950) */}
          <div className="relative flex md:flex-wrap flex-nowrap border border-zinc-800 bg-zinc-950 rounded-3xl md:overflow-hidden max-md:flex-col max-md:border-none max-md:rounded-none max-md:gap-4 shadow-2xl">
            
            {features.map(({ id, caption, title, text, image, button }, index) => (
              <div
                key={id}
                /* 🎨 REVERTED: Re-applied bg-zinc-950 to the individual grid cells and adjusted borders */
                className="relative z-2 md:p-12 p-6 flex-50 border-r border-b border-zinc-800/60 last:border-r-0 max-md:bg-zinc-950 max-md:border max-md:border-zinc-800 max-md:rounded-2xl max-md:flex-320"
              >
                <p className="caption text-zinc-400 tracking-widest font-bold uppercase text-xs mb-3">
                  {caption}
                </p>
                
                <h2 className="max-w-400 mb-5 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                  {title}
                </h2>
                
                <p className="mb-6 text-zinc-400 text-base leading-relaxed max-md:text-sm">
                  {text}
                </p>

                {/* Image Box Container */}
                {image && (
                  <div className="relative mb-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50 aspect-[16/10] w-full">
                    {index === 0 ? (
                      /* 🎬 SLIDESHOW DISPLAY: Only renders inside the 1st feature card block (index 0) */
                      slideshowImages.map((slideSrc, slideIndex) => (
                        <img
                          key={slideSrc}
                          src={slideSrc}
                          alt={`${title} view ${slideIndex + 1}`}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                            slideIndex === currentSlideIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-102"
                          }`}
                        />
                      ))
                    ) : (
                      /* 🖼️ STATIC FALLBACK: Renders default image layout logic for all remaining features */
                      <img 
                        src={image} 
                        alt={title} 
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                )}
                
                <Button icon={button?.icon}>{button?.title}</Button>
              </div>
            ))}

            {/* Bottom details row */}
            <ul className="relative flex justify-around flex-grow px-[3%] border-t border-zinc-800 bg-zinc-950/40 w-full max-md:hidden">
              {details.map(({ id, title }) => (
                <li key={id} className="relative py-6 px-3 flex flex-col items-center justify-center flex-1">
                  
                  {/* 🎨 UPDATED TO BAD BRUSH CUSTOM:
                      - Assigned 'Bad Brush Custom' as the principal family.
                      - Kept font size punchy (text-base) and lowered tracking back to normal since script fonts shouldn't stretch out too far.
                      - Kept leading tight to maintain your compact row layout requirements.
                  */}
                  <h3 
                    className="relative z-2 max-w-64 mx-auto my-0 text-white text-base lg:text-lg font-normal tracking-normal uppercase text-center leading-tight select-none"
                    style={{ 
                      fontFamily: "'Bad Brush Custom', sans-serif"
                    }}
                  >
                    {title}
                  </h3>
                  
                </li>
              ))}
            </ul>

          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;