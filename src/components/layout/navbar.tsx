import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 p-6 mix-blend-difference flex justify-between items-center text-[#EAEAEA]">
      <div className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase">
        Lagos // London
      </div>
      <div className="flex gap-8 font-['Space_Mono'] text-[10px] uppercase tracking-widest hidden md:flex">
        <a href="#" className="hover:text-[#D4AF37] transition-colors">
          The Collection
        </a>
        <a href="#" className="hover:text-[#D4AF37] transition-colors">
          The Process
        </a>
        <a href="#" className="hover:text-[#D4AF37] transition-colors">
          Book a Fitting
        </a>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#EAEAEA] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-[#EAEAEA] flex flex-col items-center py-4 md:hidden">
          <a
            href="#"
            className="py-2 hover:text-[#D4AF37] transition-colors font-['Space_Mono'] text-[10px] uppercase tracking-widest"
          >
            The Collection
          </a>
          <a
            href="#"
            className="py-2 hover:text-[#D4AF37] transition-colors font-['Space_Mono'] text-[10px] uppercase tracking-widest"
          >
            The Process
          </a>
          <a
            href="#"
            className="py-2 hover:text-[#D4AF37] transition-colors font-['Space_Mono'] text-[10px] uppercase tracking-widest"
          >
            Book a Fitting
          </a>
        </div>
      )}
    </nav>
  );
};
