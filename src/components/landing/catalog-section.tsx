import { motion } from "framer-motion";
import { seriesSamples } from "@/lib/mock/data";

export const CatalogSection = () => {
  return (
    <section
      id="collection"
      className="bg-[#F5F5F7] text-[#0A0A0A] py-16 lg:py-32 px-6 lg:px-12"
    >
      <div className="grid grid-cols-10 sm:grid-cols-12 gap-8">
        <div className="col-span-10 sm:col-span-12 lg:col-span-4">
          <h2 className="font-['Instrument_Serif'] italic text-6xl tracking-tighter mb-12">
            The Collection
          </h2>
          <p className="text-xl md:text3xl font-['Outfit']">
            See our collection of beskpoke African centered clothing series that
            suit all fashion styles and preferences.
          </p>
          <button
            className="mt-8 border-2 border-[#0A0A0A] px-8 py-4 lg:px-16 lg:py-5 
          font-['Space_Mono'] text-[12px] uppercase tracking-[0.25em] hover:bg-white 
          hover:text-black transition-all duration-300 cursor-pointer"
          >
            Book A Fitting
          </button>
        </div>

        {/* Vertical Split Panes */}
        {seriesSamples.map((sample) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: sample.id * 0.05 }}
            className="col-span-10 sm:col-span-12 md:col-span-6 lg:col-span-4 group cursor-crosshair"
          >
            <div className="aspect-[1/1] md:aspect-[8/9] lg:aspect-[4/5] overflow-hidden transition-all duration-700">
              <img
                src={sample.imageUrl}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                alt="Archive piece"
              />
            </div>
            <div className="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
              <span className="font-['Space_Mono'] text-[10px] uppercase">
                {sample.series}
              </span>
              <span className="font-['Instrument_Serif'] italic text-xl sm:text-2xl">
                {sample.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
