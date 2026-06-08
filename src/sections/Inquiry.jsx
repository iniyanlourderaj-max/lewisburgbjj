import React, { useEffect, useRef } from "react";

const Inquiry = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Create a script node reference to Gymdesk's widget engine
    const script = document.createElement("script");
    script.src = "https://app.gymdesk.com/js/widgets.js";
    script.async = true;

    // 2. Create the widget block with your specific key constraints
    const formDiv = document.createElement("div");
    formDiv.className = "maonrails-form";
    formDiv.setAttribute("attr-ref", "DjyRJ");
    formDiv.setAttribute("attr-gym", "65vm3");

    // 3. Clear out container and safely append nodes directly into the live DOM
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
      containerRef.current.appendChild(formDiv);
    }

    // 4. Force global compilation trigger as soon as script finishes loading
    script.onload = () => {
      if (window.maonrails_init) {
        window.maonrails_init();
      }
    };

    // If script is already cached by browser from hot-reloads, trigger backup compilation tick
    const fallbackTick = setTimeout(() => {
      if (window.maonrails_init) {
        window.maonrails_init();
      }
    }, 200);

    return () => clearTimeout(fallbackTick);
  }, []);

  return (
    /* 🎨 BACKDROP: Updated to a sleek premium dark charcoal (#121214) to match the form's hardcoded text */
    <section id="contact" className="bg-[#121214] text-zinc-100 py-24 px-4 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Clean White/Zinc Typography & Safe Gymdesk Form Node Block */}
        <div className="lg:col-span-6 space-y-10">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium block">
              Got a question?
            </span>
            {/* High-contrast headings so they perfectly match the Gymdesk "Want to Learn More?" title text */}
            <h2 className="text-4xl md:text-5xl font-light tracking-wider uppercase text-zinc-200">
              Inquire <span className="font-semibold text-white">Now</span>
            </h2>
            <p className="text-sm md:text-base font-light text-zinc-400 max-w-md pt-2 leading-relaxed">
              Not sure where to start? Reach out. We're here to help you take the first step.
            </p>
          </div>

          {/* Direct React Ref Target Anchor - Keeps Gymdesk rendering safe from virtual DOM washes */}
          <div 
            ref={containerRef} 
            className="gymdesk-form-wrapper min-h-[400px] w-full"
          >
            {/* Elements injected directly here via DOM lifecycle hooks */}
          </div>
        </div>

        {/* RIGHT COLUMN: Google Maps Container (Stylized Dark Theme) */}
        <div className="lg:col-span-6 w-full h-[400px] sm:h-[450px] lg:h-full lg:min-h-[580px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#1A1A1E] relative group shadow-2xl">
          <iframe
            title="Lewisburg BJJ Academy Location Map"
            src="https://maps.google.com/maps?q=1722%20W%20Market%20St,%20Lewisburg,%20PA%2017837&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            /* Filter combination matches the premium dark look from image_a36dca.jpg */
            className="w-full h-full border-0 invert-[90%] hue-rotate-180 contrast-[110%] brightness-[90%] opacity-40 group-hover:opacity-60 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Premium Floating Dark Context Bar */}
          <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C1E]/90 backdrop-blur-md border border-zinc-800 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 group-hover:border-zinc-700 z-10 shadow-xl">
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                Our Location
              </h4>
              <p className="text-xs md:text-sm text-zinc-200 font-medium tracking-wide">
                1722 W Market St, Lewisburg, PA 17837
              </p>
            </div>
            
            <a 
              href="https://maps.google.com/?q=1722+W+Market+St,+Lewisburg,+PA+17837"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 hover:text-white font-bold transition-colors pl-4 border-l border-zinc-800"
            >
              Get Directions &#8599;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Inquiry;