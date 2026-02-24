import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { CatalogSection } from "@/components/landing/catalog-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { Footer } from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen selection:bg-[#D4AF37] selection:text-black scroll-smooth">
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
