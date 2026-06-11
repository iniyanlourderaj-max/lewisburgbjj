import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    /* Changed background hex to match the dark charcoal (#222222) */
    <section className="relative z-2 py-24 md:py-28 lg:py-40 bg-[#222222] font-poppins">
      <div className="container block lg:flex items-start mx-auto px-4">
        
        {/* Left Side Header Text */}
        <div className="testimonials_head-res relative z-2 lg:mr-16 flex-300 text-left max-lg:mb-16">
          {/* ⚡ FIX: Restored color to gold (#D4AF37) with the Oswald font layout */}
          <p className="font-oswald text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
            Wall of Love
          </p>
          
          {/* Clean Oswald off-white main heading */}
          <h3 
            className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl tracking-tighter mb-4 mt-2"
            style={{ color: "#EAE6DF" }}
          >
            Words From Our Fans
          </h3>
        </div>

        <div className="relative flex flex-col md:flex-row items-start max-lg:static gap-6 w-full">
          
          {/* Column 1 - First Half */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          {/* Column 2 - Second Half */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;