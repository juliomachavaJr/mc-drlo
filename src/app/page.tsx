import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import WhyHireMe from "@/components/WhyHireMe";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Agenda from "@/components/Agenda";
import BookingSystem from "@/components/BookingSystem";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. WHY HIRE ME */}
      <WhyHireMe />

      {/* 5. SERVICES */}
      <Services />

      {/* 6. SHOWREEL */}
      <Showreel />

      {/* 7. GALLERY */}
      <Gallery />

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 9. AGENDA */}
      <Agenda />

      {/* 10. BOOKING SYSTEM */}
      <BookingSystem />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. BLOG */}
      <Blog />

      {/* 12. CONTACT */}
      <Contact />
    </main>
  );
}
