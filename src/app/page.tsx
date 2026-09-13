import Link from "next/link";
import { Play } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyHireMe from "@/components/WhyHireMe";
import Services from "@/components/Services";
import Agenda from "@/components/Agenda";
import Showreel from "@/components/Showreel";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingSystem from "@/components/BookingSystem";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION */}
      <AboutSection />

      {/* 3. WHY HIRE ME */}
      <WhyHireMe />

      {/* 4. SERVICES */}
      <Services />

      {/* 5. AGENDA */}
      <Agenda />

      {/* 6. SHOWREEL */}
      <Showreel />

      {/* 7. GALLERY */}
      <Gallery />

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. BOOKING SYSTEM */}
      <BookingSystem />

      {/* 10. CONTACT */}
      <Contact />
    </main>
  );
}
