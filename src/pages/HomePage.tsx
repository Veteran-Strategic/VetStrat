import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { LawFirmsSection } from "@/components/home/LawFirmsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Veteran Strategic | Law Firm Security & Audit Readiness"
        description="We help law firms pass client security audits and cyber insurance reviews. When corporate clients ask about your security controls, you'll have the answers."
      />
      <HeroSection />
      <WhatWeDoSection />
      <LawFirmsSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
