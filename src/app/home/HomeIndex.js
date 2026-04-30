"use client";

import ChaosSection from "@/components/home/ChaosSection";
import PremiumCounsellingUI from "@/components/home/CounsellingSection";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import PricingCards from "@/components/home/PricingCards";
import SupportSection from "@/components/home/SupportSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";


export default function HomeIndex() {
  return (
    <>
      <HeroSection />

      <ChaosSection />

      <PremiumCounsellingUI />

      <SupportSection />

      <TestimonialSlider />

      <PricingCards />

      <CtaSection/>

      <FaqSection/>

    </>
  );
}
