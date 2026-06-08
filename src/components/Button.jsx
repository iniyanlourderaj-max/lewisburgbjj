import clsx from "clsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
}) => {
  const Inner = () => (
    <>
      {/* 
        Keeps the exact original inner padding and rounded-2xl geometry.
        Swapped 'g4' for 'bg-zinc-900' to clear the navy, and text color to white.
      */}
      <span className="relative flex items-center min-h-[60px] px-6 bg-zinc-900 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden w-full justify-center">
        
        {/* OBLITERATED ONLY: The absolute marker component is gone */}

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        {/* Restored the original typography styles (base-bold) and made the text white */}
        <span className="relative z-2 font-poppins base-bold text-white uppercase">
          {children}
        </span>
      </span>

      {/* Restored the template's signature glowing layer styles */}
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      /* 
        Restored the original pill container structure, shadow-500, and rounded-2xl.
        Swapped the gradient 'g5' border out for a clean, deep matte zinc container border.
      */
      className={clsx(
        "relative p-0.5 bg-zinc-800 rounded-2xl shadow-500 group inline-block",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 bg-zinc-800 rounded-2xl shadow-500 group inline-block",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;