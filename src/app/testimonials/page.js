"use client";

import HeroTestimonial from "@/components/testimonialsection/HeroTestimonial";
import StatusTestimonial from "@/components/testimonialsection/StatusTestimonial";
import TestimonialSlider from "@/components/testimonialsection/TestimonialSlider";
import VideoSlider from "@/components/testimonialsection/VideoSlider";
// import VideoTestimonial from "@/components/testimonialsection/videoTestimonial";
import React, { useEffect } from "react";



const Testimonials = () => {

    return (
        <>
            <HeroTestimonial/>
            <StatusTestimonial/>
            <TestimonialSlider/>
            <VideoSlider/>
        </>
    );
};

export default Testimonials;