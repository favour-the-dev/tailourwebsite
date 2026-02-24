import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#EAEAEA] p-6 lg:p-12 lg:h-[60vh] flex flex-col justify-between border-t border-[#EAEAEA]/10">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="font-['Instrument_Serif'] italic text-[10vw] tracking-tighter leading-none text-[#F5F5F7]">
            Stitch <br /> & Soul.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mt-12 lg:mt-0">
        <div className="font-['Space_Mono'] text-[9px] uppercase tracking-widest opacity-40">
          Design by Favour Odili // 2026
        </div>
        <button className="bg-[#D4AF37] text-black px-12 py-4 font-['Space_Mono'] text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer">
          Book Appointment
        </button>
      </div>
    </footer>
  );
};
