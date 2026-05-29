"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
    FaUser,
    FaChartPie,
    FaMapMarkerAlt,
    FaBuilding,
} from "react-icons/fa";

const GrowthSection = () => {
    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="align-items-center g-4">
                    <Col lg="5" data-aos="zoom-in">
                        <h2 className="fw-bold mb-3">
                            Scaling Impact,
                            <br />
                            Empowering Aspirants
                        </h2>
                        <p className="text-secondary">
                            From guiding individual students to supporting thousands nationwide,
                            we continue to simplify NEET counselling with reliable insights,
                            real-time updates, and smarter decision-making tools.
                        </p>
                    </Col>

                    <Col lg="7">
                        <div className="d-flex flex-column gap-3">
                            <div
                                className="d-flex justify-content-between align-items-center bg-white rounded-3 p-3 shadow-sm"
                                data-aos="fade-up"
                            >
                                <div>
                                    <h5 className="fw-bold mb-1">1.5L+</h5>
                                    <small className="text-secondary">
                                        Students onboarded from across multiple states
                                    </small>
                                </div>
                                <FaUser className="text-secondary fs-4" />
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center text-white rounded-3 p-3 st-bg-two"
                                data-aos="fade-up"
                            >
                                <div>
                                    <h5 className="fw-bold mb-1">60%</h5>
                                    <small>
                                        A significant share of NEET PG aspirants rely on our platform
                                    </small>
                                </div>
                                <FaChartPie className="fs-4" />
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center bg-white rounded-3 p-3 shadow-sm"
                                data-aos="fade-up"
                            >
                                <div>
                                    <h5 className="fw-bold mb-1">2 Offices</h5>
                                    <small className="text-secondary">
                                        Operating from key hubs to support nationwide counselling
                                    </small>
                                </div>
                                <FaMapMarkerAlt className="text-secondary fs-4" />
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center text-white rounded-3 p-3 st-bg-two"
                                data-aos="zoom-in"
                            >
                                <div>
                                    <h5 className="fw-bold mb-1">60+</h5>
                                    <small>
                                        Experts working across tech, data, and student support
                                    </small>
                                </div>
                                <FaBuilding className="fs-4" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default GrowthSection;