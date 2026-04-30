"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { FaUserGraduate, FaUsers, FaUniversity, FaComments } from "react-icons/fa";
import Heroimg1 from "../../assets/images/hero-img1.jpg"
import Image from "next/image";
const HeroSection = () => {
    return (
        <section className="bg-white pb-5 pt-5">
            <Container className="text-center">
                <Row>
                    <Col col-md="8" lg="8" className="mx-auto">
                        <h1 className="display-5 mb-3" style={{ fontWeight: '900' }}>
                            Your Complete Roadmap to <br />
                            <span className="px-3 py-1 text-st rounded-pill">
                                <TypeAnimation
                                    sequence={[
                                        "Medical Counselling", 2000,
                                        "College Selection", 2000,
                                        "Admission Success", 2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>

                            <br /> Made Simple
                        </h1>
                        <p className=" mb-4">
                            Explore top colleges, understand cut-offs, compare fees, and plan your
                            admissions with clarity.
                            Everything you need — all in one place.
                        </p>
                    </Col>
                </Row>
                <Button size="lg" className="btn btn-primary st-bg rounded-pill border-0">
                    Start Exploring
                    <span className="ms-2">
                        <FaArrowUpRightFromSquare />
                    </span>
                </Button>
                <Row className="text-center mt-4">
                    <Col xs="6" md="6" lg="3" className="mb-3" data-aos="zoom-in">
                        <div className="h-100 bg-primary bg-opacity-10 rounded-4 p-4 d-flex flex-column justify-content-center align-items-center">

                            <div className="bg-white text-st-sec d-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{ width: "55px", height: "55px" }}>
                                <FaUserGraduate size={20} />
                            </div>

                            <h4 className="fw-bold mb-1">10+</h4>
                            <p className="mb-0 text-secondary small">Years Guiding Students</p>

                        </div>
                    </Col>

                    <Col xs="6" md="6" lg="3" className="mb-3" data-aos="zoom-in">
                        <div className="h-100 bg-info bg-opacity-10  bg-opacity-10  rounded-4 p-4 d-flex flex-column justify-content-center align-items-center">

                            <div className="bg-white text-st-sec d-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{ width: "55px", height: "55px" }}>
                                <FaUsers size={20} />
                            </div>

                            <h4 className="fw-bold mb-1">80k+</h4>
                            <p className="mb-0 text-secondary small">Aspirants Supported</p>

                        </div>
                    </Col>

                    <Col xs="6" md="6" lg="3" className="mb-3" data-aos="zoom-in">
                        <div className="h-100 bg-warning bg-opacity-10  rounded-4 p-4 d-flex flex-column justify-content-center align-items-center">

                            <div className="bg-white text-st-sec d-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{ width: "55px", height: "55px" }}>
                                <FaUniversity size={20} />
                            </div>

                            <h4 className="fw-bold mb-1">900+</h4>
                            <p className="mb-0 text-secondary small">Colleges Covered</p>

                        </div>
                    </Col>

                    <Col xs="6" md="6" lg="3" className="mb-3" data-aos="zoom-in">
                        <div className="h-100 bg-danger bg-opacity-10 rounded-4 p-4 d-flex flex-column justify-content-center align-items-center">

                            <div className="bg-white text-st-sec d-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{ width: "55px", height: "55px" }}>
                                <FaComments size={20} />
                            </div>

                            <h4 className="fw-bold mb-1">300k+</h4>
                            <p className="mb-0 text-secondary small">Doubts Resolved</p>

                        </div>
                    </Col>
                     <Col xs="12" md="12" lg="12" className="mt-3" data-aos="zoom-in">
                        <Image src={Heroimg1}  alt="hero-img" className="w-100 rounded-5"  />
                     </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;