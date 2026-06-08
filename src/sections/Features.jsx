import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    /* 🎨 BACKDROP: Low-contrast dark charcoal (#222222) */
    <section id="features" className="bg-[#222222] py-20 transition-colors duration-300">
      <Element name="features">
        <div className="container">
          
          {/* Main Grid Wrapper */}
          {/* 🎨 REVERTED: Swapped the card wrapper background back to rich pitch black (bg-zinc-950) */}
          <div className="relative flex md:flex-wrap flex-nowrap border border-zinc-800 bg-zinc-950 rounded-3xl md:overflow-hidden max-md:flex-col max-md:border-none max-md:rounded-none max-md:gap-4 shadow-2xl">
            
            {features.map(({ id, caption, title, text, image, button }) => (
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

                {/* Image Box */}
                {image && (
                  <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50 aspect-[16/10] w-full">
                    <img 
                      src={image} 
                      alt={title} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <Button icon={button?.icon}>{button?.title}</Button>
              </div>
            ))}

            {/* Bottom details row */}
            {/* 🎨 REVERTED: Flipped the bottom list row background back to match the black card container */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-t border-zinc-800 bg-zinc-950/40 w-full max-md:hidden">
              {details.map(({ id, title }) => (
                <li key={id} className="relative pt-10 px-4 pb-10 flex flex-col items-center justify-center">
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 text-zinc-400 text-xs font-bold tracking-widest uppercase text-center">
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