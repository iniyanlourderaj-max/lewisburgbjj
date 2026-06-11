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
      
      {/* 🚀 FLOATING SIGN UP BUTTON - Bigger, bold, signature high-contrast premium gold/yellow layout */}
      <div className="fixed bottom-6 left-6 z-50 pointer-events-auto font-poppins">
        <a 
          href="https://lewisburg-bjj.gymdesk.com/signup"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#D4AF37] hover:bg-[#EAE6DF] text-zinc-950 font-black uppercase tracking-widest text-xs md:text-sm px-5 py-3 md:px-7 md:py-4 rounded-xl transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:translate-y-0 border border-zinc-950/10"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
};

export default App;