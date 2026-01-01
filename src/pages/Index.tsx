import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DANK Salon | Premium Men's Grooming & Styling</title>
        <meta
          name="description"
          content="DANK Salon - Where modern artistry meets precision grooming. Premium haircuts, skin treatments, groom packages, and styling services in a sophisticated urban environment."
        />
        <meta
          name="keywords"
          content="salon, men's grooming, haircut, skin treatment, groom package, hair styling, beard grooming, keratin treatment"
        />
        <meta property="og:title" content="DANK Salon | Premium Men's Grooming & Styling" />
        <meta
          property="og:description"
          content="Elevate your style at DANK Salon. Premium grooming services including haircuts, facials, groom packages, and professional styling."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://danksalon.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
