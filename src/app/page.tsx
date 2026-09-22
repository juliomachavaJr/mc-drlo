import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyHireMe from "@/components/WhyHireMe";
import Services from "@/components/Services";
import AgendasSection from "@/components/AgendasSection";
import BriefingSection from "@/components/BriefingSection";
import Showreel from "@/components/Showreel";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. SOBRE */}
      <AboutSection />

      {/* 3. POR QUE CONTRATAR */}
      <WhyHireMe />

      {/* 4. SERVIÇOS */}
      <Services />

      {/* 5. AGENDAS */}
      <AgendasSection />

      {/* 6. BRIEFING */}
      <BriefingSection />

      {/* 7. SHOWREEL */}
      <Showreel />

      {/* 8. GALERIA */}
      <Gallery />

      {/* 9. TESTEMUNHOS */}
      <Testimonials />

      {/* 10. CONTACTO */}
      <Contact />
    </main>
  );
}
