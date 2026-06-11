import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

// First card slideshow assets
const slideshowImages1 = [
  "/images/lbjj_4k_3.jpg",
  "/images/lbjj_4k_4.png"
];

// Second card slideshow assets
const slideshowImages2 = [
  "/images/lbjj_4k_2.png"
];

// 3. New hardcoded array ensuring your 4 exact required footer titles show up perfectly
const customFooterDetails = [
  { id: "footer-1", title: "Expert Instruction" },
  { id: "footer-2", title: "Beginner Friendly Classes" },
  { id: "footer-3", title: "Clean, Safe & Welcoming" },
  { id: "footer-4", title: "Flexible and Affordable Plans" }
];

const Features = () => {
  const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);

  // Independent auto-advance loops
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlideIndex1((prev) => (prev + 1) % slideshowImages1.length);
    }, 4000);
    
    const interval2 = setInterval(() => {
      setCurrentSlideIndex2((prev) => (prev + 1) % slideshowImages2.length);
    }, 4000);
    
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    /* 🎨 BACKDROP: Beautiful, warm off-white canvas (#EAE6DF) */
    <section id="features" className="bg-[#EAE6DF] py-20 transition-colors duration-300">
      <Element name="features">
        <div className="container">
          
          {/* Main Grid Wrapper */}
          <div className="relative flex md:flex-wrap flex-nowrap border border-zinc-800/50 bg-zinc-900/95 backdrop-blur-md rounded-3xl md:overflow-hidden max-md:flex-col max-md:border-none max-md:rounded-none max-md:gap-4 shadow-[0_25px_60px_-15px_rgba(24,24,27,0.2)]">
            
            {features.map(({ id, caption, title, text, image, button }, index) => (
              /* 
                2. FIX: Added 'flex flex-col justify-between' so text stays up top 
                and images line up perfectly on the exact same row baseline across desktop views.
              */
              <div
                key={id}
                className="relative z-2 md:p-12 p-6 flex-50 flex flex-col justify-between border-r border-b border-zinc-800/40 last:border-r-0 max-md:bg-zinc-900/95 max-md:border max-md:border-zinc-800/40 max-md:rounded-2xl max-md:flex-320"
              >
                {/* Wrap layout text block together to keep separate from bottom image block node element */}
                <div>
                  <p className="caption text-[#8B9676] tracking-[0.15em] font-bold uppercase text-xs mb-3">
                    {caption}
                  </p>
                  
                  {/* 🎨 Card main titles */}
                  <h2 
                    className="max-w-400 mb-5 text-2xl md:text-3xl font-black uppercase tracking-tight leading-none"
                    style={{ color: "#EAE6DF" }}
                  >
                    {title}
                  </h2>
                  
                  {/* 🎨 Card body descriptions */}
                  <p 
                    className="mb-8 text-base font-light leading-relaxed max-md:text-sm opacity-90"
                    style={{ color: "#EAE6DF" }}
                  >
                    {text}
                  </p>
                </div>

                {/* Image Box Container - Pushed to the bottom edge uniformly */}
                {image && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/30 aspect-[16/10] w-full mt-auto">
                    
                    {/* 🎬 SLIDESHOW 1 */}
                    {index === 0 && (
                      slideshowImages1.map((slideSrc, slideIndex) => (
                        <img
                          key={slideSrc}
                          src={slideSrc}
                          alt={`${title} view ${slideIndex + 1}`}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                            slideIndex === currentSlideIndex1 ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-102"
                          }`}
                        />
                      ))
                    )}

                    {/* 🎬 SLIDESHOW 2 */}
                    {index === 1 && (
                      slideshowImages2.map((slideSrc, slideIndex) => (
                        <img
                          key={slideSrc}
                          src={slideSrc}
                          alt={`${title} group view ${slideIndex + 1}`}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                            slideIndex === currentSlideIndex2 ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-102"
                          }`}
                        />
                      ))
                    )}

                    {/* 🖼️ STATIC FALLBACK */}
                    {index !== 0 && index !== 1 && (
                      <img 
                        src={image} 
                        alt={title} 
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
                        loading="lazy"
                      />
                    )}

                  </div>
                )}
              </div>
            ))}

            {/* 🎛️ FEATURES BOTTOM DETAILS BAR */}
            <ul className="relative grid grid-cols-2 justify-items-center w-full border-t border-zinc-800/60 bg-zinc-950/20 p-4 gap-y-4 gap-x-2 md:flex md:justify-around md:flex-grow md:px-[3%] md:py-0 md:gap-0 max-md:bg-zinc-900 max-md:border max-md:rounded-2xl">
              
              <div className="block md:hidden absolute left-1/2 top-4 bottom-4 w-px bg-zinc-800/40 transform -translate-x-1/2 pointer-events-none" />

              {/* 3. Mapping your custom specified labels directly */}
              {customFooterDetails.map(({ id, title }) => (
                <li 
                  key={id} 
                  className="relative py-3 px-3 flex flex-col items-center justify-center text-center w-full md:py-6 md:flex-1"
                >
                  <h3 
                    className="font-oswald relative z-2 max-w-64 mx-auto my-0 text-sm sm:text-base lg:text-lg font-bold tracking-wide uppercase text-center leading-tight select-none"
                    style={{ color: "#EAE6DF" }}
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