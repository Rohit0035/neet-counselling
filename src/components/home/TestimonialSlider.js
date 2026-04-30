"use client";

import React, { useEffect } from "react";
import { Container } from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        name: "Rahul Sharma",
        image: "",
        short: "Great platform, helped me a lot.",
        full: "This platform helped me prepare effectively and boosted my confidence. Highly recommended for students."
    },
    {
        name: "Anjali Verma",
        image: "",
        short: "Amazing experience overall.",
        full: "The guidance and structured approach made learning easy and engaging. I saw real improvement."
    },
    {
        name: "Amit Kumar",
        image: "",
        short: "Very useful and simple UI.",
        full: "Clean interface and well-organized content made my preparation smooth and stress-free."
    },
    {
        name: "Sneha Patel",
        image: "",
        short: "Loved the content quality.",
        full: "The content is accurate, updated, and explained in a very simple way. Great job!"
    }
];

const TestimonialSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const cardStyle = {
        width: "100%",
        height: "320px",
        perspective: "1000px"
    };

    const innerStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s",
        transformStyle: "preserve-3d"
    };

    const commonSide = {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "18px",
        padding: "20px",
        backfaceVisibility: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
    };

    return (
        <section className="bg-warning bg-opacity-10 ">
            <Container>
                <h3 style={{ textAlign: "center", marginBottom: "35px" }}>
                    Don't take our word for it
                </h3>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                style={cardStyle}
                                data-aos="zoom-in"
                                onMouseEnter={(e) =>
                                (e.currentTarget.children[0].style.transform =
                                    "rotateY(180deg)")
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.children[0].style.transform =
                                    "rotateY(0deg)")
                                }
                            >
                                <div style={innerStyle}>
                                    <div style={{ ...commonSide, background: "#fff" }}>
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: "95px",
                                                    height: "95px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    marginBottom: "12px",
                                                    border: "3px solid #eee"
                                                }}
                                            />
                                        ) : (
                                            <FaUserCircle size={95} color="#ccc" />
                                        )}

                                        <h6 style={{ margin: "8px 0" }}>{item.name}</h6>

                                        {/* ⭐ STARS */}
                                        <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} color="#ffc107" size={14} />
                                            ))}
                                        </div>

                                        <p style={{ fontSize: "13px", color: "#777", textAlign: "center" }}>
                                            {item.short}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            ...commonSide,
                                            background: "#f8f9fa",
                                            transform: "rotateY(180deg)",
                                            padding: "15px"
                                        }}
                                    >
                                        <FaQuoteLeft size={18} color="#999" />
                                        <div style={{ height: "200px", width: "100%", marginTop: "10px" }}>
                                            <PerfectScrollbar>
                                                <p style={{ fontSize: "14px", textAlign: "center", paddingRight: "10px" }}>
                                                    {item.full}
                                                </p>
                                            </PerfectScrollbar>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>

    );
};

export default TestimonialSlider;