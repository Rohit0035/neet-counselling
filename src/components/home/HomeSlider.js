"use client";

import React from "react";

import {
    Container,
} from "reactstrap";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import slider1 from "../../assets/images/sli-1.jpg"
import  slider2 from "../../assets/images/sli-2.jpg"


const sliderImages = [
    slider1,
    slider2,
];

const HomeSlider = () => {

    return (
        <>
            <section className="pb-5 pt-0 bg-white overflow-hidden">

                <Container>

                    <Swiper
                        modules={[
                            Navigation,
                            Autoplay,
                        ]}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                        }}
                        loop={true}
                        spaceBetween={20}
                    >

                        {sliderImages.map((image, index) => (

                            <SwiperSlide key={index}>

                                <div
                                    className="overflow-hidden"
                                    style={{
                                        borderRadius: "35px",
                                        height: "500px",
                                    }}
                                >

                                    <Image
                                        src={image}
                                        alt={`slide-${index}`}
                                        className="w-100 h-100"
                                        width="100"
                                        height="100"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </Container>

            </section>
        </>

    );
};

export default HomeSlider;