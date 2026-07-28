import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import LogementsSection from "@/components/LogementsSection";
import JourneySection from "@/components/JourneySection";
import GallerySection from "@/components/GallerySection";
import ServicesAccordion from "@/components/ServicesAccordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogementsSection />
      <Intro />
      <GallerySection />
      <JourneySection />
      <ServicesAccordion />
      <TestimonialsSection />
      <ContactCta />
      <Footer />
      <FloatingContact />
    </main>
  );
}
