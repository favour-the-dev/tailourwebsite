import React from "react";
import { motion } from "framer-motion";

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
  ];

  return (
    <section className="py-20 lg:py-40 px-6 lg:px-12 border-t border-[#EAEAEA]/10 bg-[#0A0A0A] text-[#EAEAEA]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="py-16 border-b border-[#EAEAEA]/10 flex flex-col md:flex-row justify-between items-start group hover:bg-[#EAEAEA]/5 transition-colors duration-500 px-4"
            >
              <blockquote className="font-['Instrument_Serif'] italic text-5xl md:text-7xl max-w-2xl leading-tight">
                "{t.q}"
              </blockquote>
              <cite className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.4em] mt-8 md:mt-0 opacity-50 oldstyle-nums group-hover:text-[#D4AF37] transition-colors">
                — {t.a}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
