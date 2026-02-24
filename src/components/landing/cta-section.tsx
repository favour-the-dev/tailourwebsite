export const CTASection = () => {
  return (
    <section className="bg-[#D4AF37] text-[#0A0A0A] py-32 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
      <h2 className="font-['Instrument_Serif'] italic text-5xl lg:text-7xl mb-8 tracking-tighter">
        Ready to find your perfect fit?
      </h2>
      <p className="font-['Outfit'] text-lg font-light leading-relaxed max-w-xl mb-12 opacity-90">
        Experience bespoke tailoring that celebrates your unique form. Schedule
        your personal consultation today.
      </p>
      <button className="bg-[#0A0A0A] text-[#D4AF37] px-8 py-4 lg:px-16 lg:py-5 font-['Space_Mono'] text-[12px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
        Book A Fitting
      </button>
    </section>
  );
};
