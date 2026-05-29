"use client";

import ChaosSection from "@/components/website/home/ChaosSection";
import CollegeList from "@/components/website/home/CollegeList";
import PremiumCounsellingUI from "@/components/website/home/CounsellingSection";
import CtaSection from "@/components/website/home/CtaSection";
import FaqSection from "@/components/website/home/FaqSection";
import HeroSection from "@/components/website/home/HeroSection";
import HomeSlider from "@/components/website/home/HomeSlider";
import PricingCards from "@/components/website/home/PricingCards";
import SupportSection from "@/components/website/home/SupportSection";
import TestimonialSlider from "@/components/website/home/TestimonialSlider";


export default function HomeIndex() {
  return (
    <>
      <HeroSection />

      <HomeSlider/>

      <ChaosSection />

      <CollegeList/>

      <PremiumCounsellingUI />

      <SupportSection />

      <TestimonialSlider />

      <PricingCards />

      <CtaSection/>

      <FaqSection/>

    </>
  );
}
