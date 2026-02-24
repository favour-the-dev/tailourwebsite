import { motion } from "framer-motion";

export const CatalogSection = () => {
  const images = [
    "/assets/catalogue/catalogue-1.png",
    "/assets/catalogue/catalogue-2.png",
    "/assets/catalogue/catalogue-3.png",
    "/assets/catalogue/catalogue-4.png",
    "/assets/catalogue/catalogue-5.png",
    "/assets/catalogue/catalogue-6.png",
    "/assets/catalogue/catalogue-7.jpg",
    "/assets/catalogue/catalogue-8.png",
    "/assets/catalogue/catalogue-9.jpg",
    "/assets/catalogue/catalogue-10.png",
    "/assets/catalogue/catalogue-11.png",
    "/assets/catalogue/catalogue-12.png",
    "/assets/catalogue/catalogue-13.png",
  ];

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
        </div>

        {/* Vertical Split Panes */}
        {images.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="col-span-10 sm:col-span-12 md:col-span-6 lg:col-span-4 group cursor-crosshair"
          >
            <div className="aspect-[1/1] md:aspect-[8/9] lg:aspect-[4/5] overflow-hidden transition-all duration-700">
              <img
                src={imageSrc}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                alt="Archive piece"
              />
            </div>
            <div className="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
              <span className="font-['Space_Mono'] text-[10px] uppercase">
                Series {index + 1}
              </span>
              <span className="font-['Instrument_Serif'] italic text-2xl">
                Refined Structure
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
