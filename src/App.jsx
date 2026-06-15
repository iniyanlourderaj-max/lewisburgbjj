import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Coaches from "./sections/Coaches.jsx";
import Schedule from "./sections/Schedule.jsx";
import Faq from "./sections/Faq.jsx";
import Inquiry from "./sections/Inquiry.jsx";
import Footer from "./sections/Footer.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";

const HomePage = () => (
  <main className="site-shell">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <Coaches />
    <Schedule />
    <Faq />
    <Inquiry />
    <Footer />
  </main>
);

const App = () =>
  window.location.pathname.replace(/\/+$/, "") === "/facilities"
    ? <FacilitiesPage />
    : <HomePage />;

export default App;
