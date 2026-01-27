import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { RegulatedSMBsSection } from "@/components/home/RegulatedSMBsSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { GovernmentContractorsSection } from "@/components/home/GovernmentContractorsSection";
import { WhoThisIsForSection } from "@/components/home/WhoThisIsForSection";

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Veteran Strategic | Secure Systems for Regulated Businesses" 
        description="Veteran Strategic designs custom software and automation for finance, healthcare, and legal teams that need solutions quickly without exposing sensitive data or creating compliance risk."
      />
      <HeroSection />
      <WhatWeDoSection />
      <RegulatedSMBsSection />
      <HowWeWorkSection />
      <GovernmentContractorsSection />
      <WhoThisIsForSection />
    </>
  );
}
