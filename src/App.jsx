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
    </main>
  );
};

export default App;
