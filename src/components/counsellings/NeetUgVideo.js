"use client";

import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    ModalBody,
} from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Thumbnail from "../../assets/images/neetug-h1.jpg"

function NeetUgVideo() {
    const [modal, setModal] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");

    const toggle = () => setModal(!modal);

    const videos = [
        {
            title: "Karnataka State Closing Rank | NEET MDS 2024",
            img: Thumbnail,
            videoId: "ysz5S6PUM-U",
            tag: "Karnataka Counselling",
        },
        {
            title: "Delhi State Closing Rank | NEET MDS 2024",
            img: Thumbnail,
            videoId: "tgbNymZ7vqY",
            tag: "Delhi Counselling",
        },
        {
            title: "Tamil Nadu Closing Rank | NEET MDS 2024",
            img: Thumbnail,
            videoId: "ScMzIvxBSi4",
            tag: "Tamil Nadu Counselling",
        },
        {
            title: "All India Closing Rank | NEET MDS 2024",
            img: Thumbnail,
            videoId: "dQw4w9WgXcQ",
            tag: "All India Counselling",
        },
    ];

    function openVideo(videoId) {
        setActiveVideo(videoId);
        setModal(true);
    }

    return (
        <section className="bg-light">
            <Container>
                <Row className="text-center mb-4">
                    <Col data-aos="zoom-in">
                        <h2 className="fw-bold">
                            Top Videos for Smarter Counseling Decisions
                        </h2>
                        <p className="text-muted">
                            Everything you need to know about NEET MDS 2025 and how it impacts your medical career.
                        </p>
                    </Col>
                </Row>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {videos.map(function (video, index) {
                        return (
                            <SwiperSlide key={index}>
                                <Card
                                    className="border-0 shadow-sm h-100"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openVideo(video.videoId)}
                                >
                                    <div className="position-relative">
                                        <Image
                                            src={video.img}
                                            alt={video.title}
                                            width={400}
                                            height={220}
                                            className="card-img-top"
                                        />

                                        <div className="position-absolute top-50 start-50 translate-middle text-white">
                                            <FaPlay size={30} />
                                        </div>
                                    </div>

                                    <CardBody>
                                        <h6 className="fw-semibold text-dark">
                                            {video.title}
                                        </h6>

                                        <span className="badge bg-warning text-dark mt-2">
                                            {video.tag}
                                        </span>

                                        <p className="text-muted small mt-2 mb-0">
                                            1 year ago
                                        </p>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* ✅ YouTube Modal */}
                <Modal isOpen={modal} toggle={toggle} size="lg" centered>
                    <ModalBody className="p-0">
                        {activeVideo && (
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                    title="YouTube video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </ModalBody>
                </Modal>
            </Container>
        </section>
    );
}

export default NeetUgVideo;