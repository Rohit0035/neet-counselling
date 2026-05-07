"use client";

import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Badge,
    Modal,
    ModalBody,
    Button,
} from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaPlay } from "react-icons/fa";

const videoTestimonials = [
    {
        title: "AIIMS Delhi Success Story",
        thumbnail:
            "https://randomuser.me/api/portraits/men/32.jpg",
        youtube:
            "https://www.youtube.com/embed/Tn6-PIqc4UM",
    },
    {
        title: "AIIMS Delhi Success Story",
        thumbnail:
            "https://randomuser.me/api/portraits/men/32.jpg",
        youtube:
            "https://www.youtube.com/embed/Tn6-PIqc4UM",
    },
    {
        title: "AIIMS Delhi Success Story",
        thumbnail:
            "https://randomuser.me/api/portraits/men/32.jpg",
        youtube:
            "https://www.youtube.com/embed/Tn6-PIqc4UM",
    },

];

const VideoSlider = () => {

    const [modal, setModal] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");

    const openVideo = (url) => {
        setActiveVideo(url);
        setModal(true);
    };

    const closeVideo = () => {
        setModal(false);
        setActiveVideo("");
    };

    return (
        <>
            <section className="pb-5">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <Button className="btn btn-primary rounded-pill">
                                    Video Testimonials
                                </Button>

                                <h2
                                    className="fw-bold"
                                    style={{
                                        fontSize:
                                            "clamp(2rem,5vw,3.3rem)",
                                    }}
                                >
                                    Student Success Stories
                                </h2>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
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

                                {videoTestimonials.map((item, index) => (

                                    <SwiperSlide key={index}>

                                        <div
                                            className="position-relative overflow-hidden"
                                            style={{
                                                borderRadius: "35px",
                                            }}
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                style={{
                                                    width: "100%",
                                                    height: "450px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <div
                                                className="d-flex flex-column justify-content-end"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    padding: "30px",
                                                    background:
                                                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
                                                }}
                                            >
                                                <div className="d-flex justify-content-between align-items-center">

                                                    <h5 className="fw-bold text-white">
                                                        {item.title}
                                                    </h5>
                                                    <div>
                                                        <div
                                                            onClick={() =>
                                                                openVideo(item.youtube)
                                                            }
                                                            className="d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: "80px",
                                                                height: "80px",
                                                                borderRadius: "100px",
                                                                background:
                                                                    "rgba(255,255,255,0.15)",
                                                                color: "#fff",
                                                                fontSize: "30px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <FaPlay />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                        </Col>

                    </Row>

                </Container>

            </section>

            <Modal
                isOpen={modal}
                toggle={closeVideo}
                centered
                size="lg"
            >

                <ModalBody className="p-0">

                    <div className="ratio ratio-16x9">

                        <iframe
                            src={activeVideo}
                            title="Video"
                            allowFullScreen
                        />

                    </div>

                </ModalBody>

            </Modal>
        </>
    );
};

export default VideoSlider;