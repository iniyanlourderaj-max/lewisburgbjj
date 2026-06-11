import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        // Added -translate-y-2 to physically lift the card, and a heavy shadow to create the 3D floating depth.
        // On hover, it transitions seamlessly to rise even higher (-translate-y-4) and casts a wider shadow.
        "relative p-6 rounded-2xl bg-[#3D4A26] border border-[#4A5A30] w-full transition-all duration-500 ease-out group",
        "-translate-y-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] hover:border-[#5A6E3B]",
        containerClassName
      )}
    >
      {/* Decorative Quote Mark Watermark Asset Accent */}
      <div className="absolute top-4 right-6 text-[#2D371C] font-serif text-6xl select-none pointer-events-none opacity-40 group-hover:text-[#E9E151]/20 transition-colors duration-500">
        “
      </div>

      {/* ⭐ Dynamic 5-Star Rating Badge Block */}
      <div className="flex items-center gap-0.5 mb-4 text-[#E9E151] text-sm drop-shadow-sm">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>

      {/* Testimonial Review Body Content */}
      <p className="text-zinc-100 font-normal text-sm leading-relaxed mb-5 relative z-10 font-sans">
        "{item.comment}"
      </p>

      <hr className="border-[#4A5A30]/60 my-4" />

      {/* User Information Stack */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="flex flex-col">
          <h4 className="text-white font-extrabold text-sm tracking-wide uppercase font-poppins">
            {item.name}
          </h4>
          <p className="text-zinc-300/80 text-[11px] font-medium tracking-wider uppercase mt-0.5">
            {item.role}
          </p>
        </div>

        {/* Verification Subtle Badge element */}
        <span className="text-[10px] bg-[#2D371C] text-zinc-300 px-2 py-1 rounded-md uppercase font-bold tracking-tight border border-[#4A5A30]/30 shadow-inner">
          Verified
        </span>
      </div>
    </div>
  );
};

export default TestimonialItem;