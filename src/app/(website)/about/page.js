"use client";
import AbtHero from "@/components/website/aboutus/AbtHero";
import AbtJourney from "@/components/website/aboutus/AbtJourney";
import AwardedSection from "@/components/website/aboutus/AwardedSection";
import FaqSection from "@/components/website/aboutus/FaqSection";
import GrowthSection from "@/components/website/aboutus/GrowthSection";
import OurTeamInfo from "@/components/website/aboutus/OurTeamInfo";
import TestimonialMarqueeSection from "@/components/website/aboutus/TestimonialMarquee";
import TimelineSection from "@/components/website/aboutus/TimelineSection";
import VisionMission from "@/components/website/aboutus/VisionMission";

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
