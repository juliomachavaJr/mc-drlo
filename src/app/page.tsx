import Link from "next/link";
import { Play } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyHireMe from "@/components/WhyHireMe";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingSystem from "@/components/BookingSystem";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION */}
      <AboutSection />

      {/* 3. WHY HIRE ME */}
      <WhyHireMe />

      {/* 4. SERVICES */}
      <Services />

      {/* 5. SHOWREEL */}
      <Showreel />

      {/* 6. GALLERY */}
      <Gallery />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. BOOKING SYSTEM */}
      <BookingSystem />

      {/* 9. CONTACT */}
      <Contact />
    </main>
  );
}
