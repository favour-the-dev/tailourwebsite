import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      q: "A surgical precision applied to traditional wax prints.",
      a: "London Fashion Review",
    },
    {
      q: "The new standard for the modern African dandy.",
      a: "Bespoke Quarterly",
    },
    {
      q: "Tailoring that speaks a language of heritage and future.",
      a: "Vogue Africa",
    },
    {
      q: "Impeccable structure meets fluid storytelling.",
      a: "GQ Style",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 lg:py-48 px-6 lg:px-12 border-t border-[#EAEAEA]/10 bg-[#0A0A0A] text-[#EAEAEA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto min-h-[400px] flex flex-col justify-center relative">
        <h2
          className="font-['Space_Mono'] text-md md:text-lg text-center mb-12 tracking-[0.3em] 
          text-[#D4AF37] uppercase opacity-80"
        >
          TESTIMONIALS
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <blockquote className="font-['Instrument_Serif'] italic text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight mb-12">
              "{testimonials[currentIndex].q}"
            </blockquote>
            <cite
              className="font-['Space_Mono'] text-xs md:text-sm uppercase 
            tracking-[0.3em] text-[#D4AF37] opacity-80 not-italic"
            >
              — {testimonials[currentIndex].a}
            </cite>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[2px] transition-all duration-300 ${
                currentIndex === idx
                  ? "w-12 bg-[#D4AF37]"
                  : "w-4 bg-[#EAEAEA]/20 hover:bg-[#EAEAEA]/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
