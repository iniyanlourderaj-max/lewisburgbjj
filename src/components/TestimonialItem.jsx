import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        // Replicating the card styling from image_10c607.jpg exactly
        "relative bg-[#131316] border border-zinc-800/60 rounded-2xl px-8 py-8 md:px-10 md:py-9 shadow-2xl flex flex-col justify-between h-full font-poppins w-full",
        containerClassName
      )}
    >
      {/* Testimonial Quote - Left aligned, crisp white body typography */}
      <blockquote className="text-zinc-200 text-sm md:text-[15px] font-normal leading-relaxed text-left mb-6">
        "{item.comment}"
      </blockquote>

      {/* 🛑 DELETED THE THIN SEPARATION DIV THAT WAS HERE */}

      {/* User Branding Bottom Layout Group */}
      <div className="flex items-center text-left">
        {/* Avatar frame structure */}
        <div className="mr-4 size-14 shrink-0 rounded-full border border-zinc-800 bg-zinc-950 p-0.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover rounded-full"
          />
        </div>
        
        {/* User Identity blocks */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wide font-poppins">
            {item.name}
          </h4>
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest font-inter mt-1">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;