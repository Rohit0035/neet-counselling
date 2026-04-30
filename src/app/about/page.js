"use client";
import AbtHero from "@/components/aboutus/AbtHero";
import AbtJourney from "@/components/aboutus/AbtJourney";
import AwardedSection from "@/components/aboutus/AwardedSection";
import FaqSection from "@/components/aboutus/FaqSection";
import GrowthSection from "@/components/aboutus/GrowthSection";
import OurTeamInfo from "@/components/aboutus/OurTeamInfo";
import TestimonialMarqueeSection from "@/components/aboutus/TestimonialMarquee";
import TimelineSection from "@/components/aboutus/TimelineSection";
import VisionMission from "@/components/aboutus/VisionMission";

export default function AboutUs() {
  return (
    <>
      <AbtHero/>
      <TimelineSection/>
      <VisionMission/>
      <GrowthSection/>
      <AwardedSection/>
      <OurTeamInfo/>
      <TestimonialMarqueeSection/>
      <AbtJourney/>
      <FaqSection/>
    </>
  );
}
