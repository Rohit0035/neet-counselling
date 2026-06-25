"use client";

import { useEffect } from "react";
import {
    Container,
    Button,
    Card,
    CardBody,
    Input,
    Row,
    Col,
} from "reactstrap";

import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DashAnnouncements = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const announcements = [
        {
            month: "JUN",
            date: "12",
            type: "Registration",
            title: "NEET UG Round 1 Registration",
            description:
                "Online registration process for Round 1 counselling has started.",
        },
        {
            month: "JUN",
            date: "15",
            type: "Schedule",
            title: "Choice Filling & Locking",
            description:
                "Candidates can fill and lock their preferred colleges.",
        },
        {
            month: "JUN",
            date: "20",
            type: "Seat Matrix",
            title: "Updated Seat Matrix Released",
            description:
                "College-wise MBBS and BDS seat matrix has been published.",
        },
        {
            month: "JUN",
            date: "25",
            type: "Result",
            title: "Round 1 Allotment Result",
            description:
                "Seat allotment results are now available for download.",
        },
        {
            month: "JUL",
            date: "05",
            type: "Verification",
            title: "Document Verification Schedule",
            description:
                "Verification dates announced for shortlisted candidates.",
        },
        {
            month: "JUL",
            date: "08",
            type: "Reporting",
            title: "Institute Reporting Begins",
            description:
                "Candidates allotted seats must report to colleges.",
        },
        {
            month: "JUL",
            date: "12",
            type: "Merit List",
            title: "Updated Merit List Released",
            description:
                "Category-wise revised merit list is available now.",
        },
        {
            month: "JUL",
            date: "18",
            type: "Round 2",
            title: "Round 2 Registration Open",
            description:
                "Fresh registrations and choice filling have started.",
        },
    ];

    return (
        <section className="py-3 mt-4 bg-white">
            <Container>
                <div className="text-start mb-3">
                    <h4 className="fw-bold mb-2">
                        Get Timely Updates
                    </h4>
                    <p className="text-secondary mb-0 mt-">
                        Stay updated with counselling schedules,
                        registrations, seat allotments and important
                        NEET announcements.
                    </p>
                </div>
                <div className="bg-white p-3 mb-3">
                    <Row>
                        <Col md="6" className="mb-2">
                            <h5 className="fw-bold mb-0">
                                Announcements
                            </h5>
                        </Col>
                        <Col md="6">
                            <div className="d-flex justify-content-end">
                                <Input type="select" className="small me-2" style={{ width: "150px" }}>
                                    <option>All</option>
                                    <option>Registration</option>
                                    <option>Result</option>
                                    <option>Seat Matrix</option>
                                    <option>Verification</option>
                                </Input>

                                <Button
                                    color="primary"
                                    className="fw-semibold btn-sm st-bg btn-sm"
                                >
                                    View All
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {announcements.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                className="border-0 shadow-sm h-100 mb-3 bg-light"
                                data-aos="zoom-in"
                            >
                                <CardBody>
                                    <Row>
                                        <Col xs="4">
                                            <div className="bg-light border rounded text-center px-2 py-2 flex-shrink-0">
                                                <div className="small fw-bold text-danger">
                                                    {item.month}
                                                </div>

                                                <div className="fs-4 fw-bold lh-1">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="8">
                                            <div className="flex-grow-1">
                                                <div className="small text-primary fw-semibold mb-1">
                                                    {item.type}
                                                </div>

                                                <h6 className="fw-bold mb-2 st-txt-o">
                                                    {item.title}
                                                </h6>

                                                <p className="small text-muted mb-3 st-txt-o">
                                                    {item.description}
                                                </p>

                                                <Button
                                                    color="link"
                                                    size="sm"
                                                    className="p-0 text-decoration-none fw-semibold"
                                                >
                                                    View Notice
                                                    <FaExternalLinkAlt
                                                        size={10}
                                                        className="ms-1"
                                                    />
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default DashAnnouncements;