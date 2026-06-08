import React, { useEffect } from "react";
import { Element } from "react-scroll";

const Schedule = () => {
  useEffect(() => {
    // 🛠️ Local host bypass hooks for ngrok environment
    window.ND_API_URL = "https://app.gymdesk.com";
    window.ND_URL = "https://gymdesk.com";
    
    if (!window.ND) {
      window.ND = {
        api_url: "https://app.gymdesk.com",
        site_url: "https://gymdesk.com"
      };
    }

    // Load Gymdesk script
    const script = document.createElement("script");
    script.src = "https://app.gymdesk.com/js/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="schedule" className="bg-[#222222] text-white py-24 px-4 md:px-12 border-t border-zinc-800/40 relative overflow-hidden">
      
      {/* 🔥 DEEP INJECTOR: Overrides the green container verified in image_a5becb.png */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. Target the top wrapper div containing the green header block */
        div.gymdesk-schedule,
        div.nd-widget,
        div[id^="nd-"] {
          background: transparent !important;
          background-color: transparent !important;
        }

        /* 2. Target the exact internal schedule headers and structural dividers */
        .nd-widget * {
          --nd-primary-color: #ffffff; /* Forces internal text calculations to white */
        }
        
        .nd-widget-header, 
        .nd-schedule-header, 
        .nd-schedule-days,
        .nd-day-name, 
        .nd-date-range,
        .nd-schedule-days div {
          color: #ffffff !important;
          background: transparent !important;
          background-color: transparent !important;
        }

        /* 3. Re-tint the main calendar wrapper container background to fit your dark aesthetic */
        .nd-schedule-grid, 
        table.nd-schedule-table {
          background-color: rgba(9, 9, 11, 0.4) !important;
          border: 1px solid rgba(63, 63, 70, 0.4) !important;
          border-radius: 1.5rem !important;
        }

        /* 4. Fix navigation chevron buttons and calendar dropdown filters text */
        .nd-schedule-header button,
        .nd-schedule-header select,
        .nd-dropdown-menu {
          color: #ffffff !important;
          background-color: #18181b !important;
          border: 1px solid #3f3f46 !important;
        }
      `}} />

      <Element name="schedule">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Typography Section */}
          <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
            
            {/* 🥋 PRIMARY HEADER: Changed to use 'Oswald', rendered pure white, upper-cased, with responsive sizing */}
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase select-none"
              style={{ 
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "-0.01em"
              }}
            >
              Class Times
            </h2>

            {/* 🥋 SUB-TAGLINE: Changed to use 'Oswald', rendered pure white, with adjusted scale */}
            <p 
              className="text-base md:text-lg uppercase font-medium text-white block pt-1"
              style={{ 
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em"
              }}
            >
              Find your session. Step onto the mats.
            </p>
          </div>

          {/* 📋 GYMDESK CONTAINER CARD */}
          <div className="bg-zinc-950/40 border border-zinc-800/40 rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-md min-h-[650px]">
            <div 
              className="gymdesk-schedule" 
              attr-gym="65vm3" 
              attr-program="all"
            >
              {/* Dynamic script calendar loads here */}
            </div>
          </div>

        </div>
      </Element>
    </section>
  );
};

export default Schedule;