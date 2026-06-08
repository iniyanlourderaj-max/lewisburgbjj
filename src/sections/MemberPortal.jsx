import React, { useEffect } from "react";
import { Element } from "react-scroll";

const MemberPortal = () => {
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

    // Load Gymdesk script engine dynamically
    const script = document.createElement("script");
    script.src = "https://app.gymdesk.com/js/widgets.js";
    script.async = true;
    
    // 🔥 FORCE RENDER: Explicitly tells Gymdesk to draw this specific widget the millisecond it loads
    script.onload = () => {
      if (window.NDWidget && typeof window.NDWidget.init === "function") {
        window.NDWidget.init();
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="portal" className="bg-[#222222] text-white py-24 px-4 md:px-12 border-t border-zinc-800/40 relative overflow-hidden">
      <Element name="portal">
        <div className="max-w-4xl mx-auto">
          
          {/* Layout Typography Header */}
          <div className="flex flex-col items-center justify-center text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider uppercase text-white leading-tight">
              Account <span className="font-normal text-zinc-400">Access</span>
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase pt-2">
              Manage your membership or sign up for a profile below.
            </p>
          </div>

          {/* 📋 LIVE PORTAL INJECTOR */}
          <div className="bg-zinc-950/40 border border-zinc-800/40 rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-md min-h-[500px]">
            <div 
              className="gymdesk-member" 
              attr-gym="65vm3" 
              attr-type="login"
            >
              {/* Login fields and registration elements mount right here */}
            </div>
          </div>

        </div>
      </Element>
    </section>
  );
};

export default MemberPortal;