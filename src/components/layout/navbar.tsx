import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-[#EAEAEA] pointer-events-none">
        <div className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase pointer-events-auto">
          <a href="/">Ibe clothing</a>
        </div>
        <div className="gap-8 font-['Space_Mono'] text-[10px] uppercase tracking-widest hidden md:flex pointer-events-auto">
          <a
            href="/#collection"
            className="hover:text-[#D4AF37] transition-colors"
          >
            The Collection
          </a>
          <a
            href="/#process"
            className="hover:text-[#D4AF37] transition-colors"
          >
            The Process
          </a>
          <a
            href="/book-a-fitting"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Book a Fitting
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#EAEAEA] focus:outline-none pointer-events-auto"
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
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 w-full h-screen bg-black/85 
            z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a
              href="#"
              className="text-3xl font-['Instrument_Serif'] italic text-[#D4AF37] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Collection
            </a>
            <a
              href="#"
              className="text-3xl font-['Instrument_Serif'] italic text-[#D4AF37] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Process
            </a>
            <a
              href="#"
              className="text-3xl font-['Instrument_Serif'] italic text-[#D4AF37] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Fitting
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
