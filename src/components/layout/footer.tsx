export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-[#EAEAEA] p-6 lg:p-12 border-t border-[#EAEAEA]/10 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-32">
        {/* Brand Column */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between">
          <h2 className="font-['Instrument_Serif'] italic text-[15vw] lg:text-[12vw] leading-[0.8] tracking-tighter text-[#F5F5F7] opacity-90">
            Stitch <br /> & Soul.
          </h2>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 pt-4 lg:pt-12">
          <div className="flex flex-col gap-6">
            <h4 className="font-['Space_Mono'] text-xs text-[#D4AF37] uppercase tracking-widest mb-2">
              Explore
            </h4>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              The Collection
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              The Process
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              About Atelier
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              Journal
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-['Space_Mono'] text-xs text-[#D4AF37] uppercase tracking-widest mb-2">
              Contact
            </h4>
            <a
              href="mailto:hello@tailour.com"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              hello@tailour.com
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-sm text-[#EAEAEA]/60 hover:text-[#D4AF37] transition-colors w-fit"
            >
              +234 (0) 123 456 78
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-[#EAEAEA]/10 pt-8">
        <div className="font-['Space_Mono'] text-[10px] uppercase tracking-widest opacity-40">
          Design by Studio Onyx // {currentYear}
        </div>
        <button className="bg-[#D4AF37] text-black px-8 py-3 lg:px-12 lg:py-4 font-['Space_Mono'] text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer w-full md:w-auto">
          Book Appointment
        </button>
      </div>
    </footer>
  );
};
