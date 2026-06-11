import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Coaches from "./sections/Coaches.jsx";
import Inquiry from "./sections/Inquiry.jsx";
import Schedule from "./sections/Schedule.jsx";
import MemberPortal from "./sections/MemberPortal.jsx";

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
            <Coaches />
            <Schedule/>
            <Inquiry/>
      <Footer />
        {/* FLOATING SIGN UP BUTTON - Transparent, bottom-left, responsive */}
        <div className="fixed bottom-4 left-4 z-50 pointer-events-auto font-poppins">
          <a 
            href="https://lewisburg-bjj.gymdesk.com/signup"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-black uppercase tracking-wider text-[10px] md:text-xs lg:text-sm px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3.5 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:translate-y-0 border border-white/20"
          >
            Sign Up
          </a>
        </div>
    </main>
  );
};

export default App;
