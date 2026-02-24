import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Book a Fitting",
      desc: "Schedule a private consultation at our atelier. We take comprehensive measurements to ensure your garment is an extension of your form.",
    },
    {
      num: "02",
      title: "Material Selection",
      desc: "Choose from our curated collection or bring your own cherished fabric. We work with everything from delicate silks to robust wools.",
    },
    {
      num: "03",
      title: "Design Consultation",
      desc: "Select a silhouette from our archive, send a sample design, or collaborate on a fully bespoke creation.",
    },
    {
      num: "04",
      title: "Craft & Delivery",
      desc: "Once complete, collect your garment in-person for a final fit check or have it securely delivered to you globally.",
    },
  ];

  return (
    <section
      className="bg-[#0A0A0A] text-[#EAEAEA] py-16 lg:py-40 px-6 lg:px-12 
    border-b border-[#EAEAEA]/10 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40 md:gap-32">
        <div className="h-full flex flex-col justify-between sticky top-20">
          <div>
            <h2 className="font-['Instrument_Serif'] italic text-5xl lg:text-7xl mb-8 tracking-tighter">
              The Process
            </h2>
            <p
              className="font-['Outfit'] text-lg md:text-xl  
            text-[#EAEAEA]/60 max-w-md tracking-wide"
            >
              From concept to creation, our bespoke tailored experience is
              designed around precision, personalization, and timeless craft.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-[1px] bg-[#D4AF37]/30 mb-8" />
            <div className="font-['Space_Mono'] text-xs text-[#D4AF37] uppercase tracking-[0.2em]">
              Est. Port-Harcourt 2023.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-['Space_Mono'] text-[#D4AF37] text-xs">
                  {step.num}
                </span>
                <h3 className="font-['Instrument_Serif'] text-3xl lg:text-4xl italic text-[#EAEAEA]">
                  {step.title}
                </h3>
              </div>
              <p className="font-['Outfit'] font-light text-[#EAEAEA]/70 leading-relaxed max-w-md border-l border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors duration-500 pl-6">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
