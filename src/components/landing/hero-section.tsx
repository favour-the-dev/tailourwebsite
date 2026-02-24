import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const fashionTerms = useMemo(
    () => ["Bespoke", "Elegant", "Culture", "Timeless", "Artisanal"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === fashionTerms.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, fashionTerms]);

  return (
    <section
      className="relative min-h-screen grid grid-cols-12 gap-0 overflow-hidden 
    bg-[#0A0A0A] text-[#EAEAEA] py-6"
    >
      {/* Background Sparkles - Gold Dust */}
      {/* Manual Grid Effect reused from reference for structure */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none 
      bg-[radial-gradient(#D4AF37_0.5px,transparent_0.5px)] [background-size:32px_32px]"
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#D4AF37"
        />
      </div>

      {/* Left Column: Text-on-Image Overlap */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-center px-6 lg:px-12 z-20 pt-20 lg:pt-0">
        <div className="overflow-visible h-[14vw] lg:h-[12rem] flex items-center">
          <h1
            className="font-['Instrument_Serif'] italic text-[20vw] 
          lg:text-[10rem] leading-[0.8] tracking-tighter relative w-full"
          >
            <span className="opacity-0 invisible">Placeholder</span>{" "}
            {/* Height preserve */}
            <AnimatePresence>
              {fashionTerms.map((term, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{
                    y:
                      titleNumber === index
                        ? 0
                        : titleNumber > index
                          ? -150
                          : 150,
                    opacity: titleNumber === index ? 1 : 0,
                    rotateX: titleNumber === index ? 0 : -90,
                  }}
                  transition={{ type: "spring", stiffness: 50 }}
                  className="absolute inset-0 block text-center lg:text-left"
                >
                  {term}
                </motion.span>
              ))}
            </AnimatePresence>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-sm"
        >
          <p
            className="font-['Outfit'] text-center lg:text-start text-lg font-light 
          leading-relaxed tracking-tight text-[#EAEAEA]/80"
          >
            Forging African heritage into structured silhouettes. A dialogue
            between raw textile and refined architecture.
          </p>
          <div className="w-full md:w-fit text-center lg:text-start mt-5 md:mt-10">
            <a
              href="#collection"
              className="group font-['Space_Mono'] text-[11px] uppercase tracking-widest 
              inline-block text-[#EAEAEA]"
            >
              View the Collection
              <div
                className="h-[1px] w-full bg-[#D4AF37] mt-1 scale-x-0 group-hover:scale-x-100 
              transition-transform origin-left duration-500"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Large Offset Image Grid (Ref: Visa) */}
      <div className="col-span-12 lg:col-span-7 h-[50vh] lg:h-full relative p-6 lg:p-12">
        <div className="relative w-full h-full group">
          {/* rotaed  box behind */}
          <div
            className="absolute top-0 right-[3px] w-full lg:w-[75%] h-full border-2 border-[#D4AF37] 
          rotate-10 origin-center transition-all duration-1000 group-hover:rotate-0"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute lg:right-0 top-0 w-full lg:w-3/4 h-full lg:h-[80vh] 
             transition-all duration-1000 group overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Craftsmanship"
            />
          </motion.div>
          {/* Metadata overlay (Ref: Ultra) */}
          <div className="hidden lg:block absolute top-1/2 left-0 font-['Space_Mono'] text-[10px] rotate-90 origin-left text-[#D4AF37]">
            SS/2026 SERIES // 004
          </div>
        </div>
      </div>
    </section>
  );
};
