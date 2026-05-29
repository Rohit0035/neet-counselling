"use client";

import HeroTestimonial from "@/components/website/testimonialsection/HeroTestimonial";
import StatusTestimonial from "@/components/website/testimonialsection/StatusTestimonial";
import TestimonialSlider from "@/components/website/testimonialsection/TestimonialSlider";
import VideoSlider from "@/components/website/testimonialsection/VideoSlider";
// import VideoTestimonial from "@/components/website/testimonialsection/videoTestimonial";
import React, { useEffect } from "react";



const TestimonialPage = () => {

    return (
        <>
            <HeroTestimonial/>
            <StatusTestimonial/>
            <TestimonialSlider/>
            <VideoSlider/>
        </>
    );
};

export default TestimonialPage;