import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40 bg-zinc-950 font-poppins">
      <div className="container block lg:flex items-start">
        
        {/* Left Side Header Text */}
        <div className="testimonials_head-res relative z-2 lg:mr-16 flex-300 text-left max-lg:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
            Wall of Love
          </p>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight max-w-xs">
            Words From Our Fans
          </h3>
        </div>

        {/* ✂️ REMOVED "testimonials_inner-after" AND "testimonials_inner-before" FROM THIS DIV */}
        <div className="relative flex flex-col md:flex-row items-start max-lg:static gap-6 w-full">
          
          {/* Column 1 - First Half of data list array */}
          {/* ✂️ REMOVED "testimonials_group-after" FROM THIS DIV */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          {/* Column 2 - Second Half of data list array */}
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