"use client";

import React, { useEffect, useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Button,
} from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
    FaStar,
    FaQuoteRight,
} from "react-icons/fa";

const testimonialData = [
    {
        name: "Priya Sharma",
        college: "AIIMS Delhi",
        image:
            "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "Outstanding NEET counseling support and admission guidance.",
        rank: "AIR 2150",
    },
    {
        name: "Rahul Verma",
        college: "KMC Manipal",
        image:
            "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Very professional team for choice filling and counseling.",
        rank: "AIR 3890",
    },
     {
        name: "Rahul Verma",
        college: "KMC Manipal",
        image:
            "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Very professional team for choice filling and counseling.",
        rank: "AIR 3890",
    },
];

const TestimonialSlider = () => {

    const [testimonials, setTestimonials] = useState([]);
    
        const fetchTestimonials = async () => {
            const res = await fetch("/api/website/testimonials");
            const data = await res.json();
        
            setTestimonials(data);
          };
        
          useEffect(() => {
            fetchTestimonials();
          }, []);

    return (
        <section className="pb-5">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="text-center mb-5">
                            <Button className="btn btn-primary btn-sm rounded-pill">
                                Student Reviews
                            </Button>
                            <h2
                                className="fw-bold"
                                style={{
                                    fontSize:
                                        "clamp(2rem,5vw,3.3rem)",
                                }}
                            >
                                What Students Say
                            </h2>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Navigation, Autoplay]}
                        >

                            {testimonials.map((item, index) => (

                                <SwiperSlide key={index}>
                                    <Card
                                        className="border-0 h-100"
                                        style={{
                                            borderRadius: "35px",
                                            boxShadow:
                                                "0 20px 60px rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        <CardBody className="p-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="d-flex gap-1 text-warning">
                                                    {[...Array(item.rating)].map((star, index) => (
                                                        <FaStar key={index} />
                                                    ))}
                                                </div>
                                                <FaQuoteRight
                                                    style={{
                                                        fontSize: "42px",
                                                        color: "#0d6efd",
                                                    }}
                                                />
                                            </div>
                                            <p
                                                className="text-muted"
                                                style={{
                                                    lineHeight: "2",
                                                }}
                                            >
                                                {item.description}
                                            </p>
                                            <div
                                                className="mt-4 p-3"
                                                style={{
                                                    background: "#f8fbff",
                                                    borderRadius: "22px",
                                                }}
                                            >
                                                <div className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{
                                                            width: "75px",
                                                            height: "75px",
                                                            borderRadius: "50%",
                                                        }}
                                                    />
                                                    <div>
                                                        <h5 className="fw-bold mb-1">
                                                            {item.name}
                                                        </h5>
                                                        <p className="mb-1 text-primary">
                                                            {item.college}
                                                        </p>
                                                        <small className="text-muted">
                                                            {item.rank}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TestimonialSlider;