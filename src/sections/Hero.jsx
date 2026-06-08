import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-zinc-950 overflow-hidden">
      
      {/* 📸 FULL BLEED BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1920&q=80" 
          alt="Lewisburg BJJ Academy"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay mask to maintain high typographical contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <Element name="hero" className="relative z-2 w-full">
        <div className="container flex flex-col items-center justify-center">
          
          {/* 🎯 CENTERING WRAPPER: Changed text to text-center and added mx-auto */}
          <div className="relative z-2 max-w-2xl text-center mx-auto flex flex-col items-center">
            
            {/* Tagline / Location */}
            <div className="caption small-2 uppercase tracking-widest text-zinc-400 font-bold mb-3">
              Lewisburg, PA
            </div>
            
            {/* Headline */}
            <h1 className="mb-6 h1 text-white uppercase font-black tracking-tighter max-lg:mb-7 max-lg:text-6xl max-md:mb-4 max-md:text-4xl max-md:leading-none">
              Brazilian Jiu-Jitsu
            </h1>
            
            {/* Description Subtext */}
            <p className="max-w-md mb-12 text-xl text-zinc-400 leading-relaxed font-light max-md:mb-10 max-md:text-lg">
              Martial Arts & Self-Defense Training for Everyone.
            </p>
            
            {/* CTA Button Updated to "Join Today" */}
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button>find out more</Button>
            </LinkScroll>
            
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;