"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const CounsellingCta = ({
    title,
    highlight,
    subtitle,
    primaryBtn = "Get Started",
    secondaryBtn = "Explore More",
    points = [],
    reverse = false,
}) => {
    return (
        <section className="py-5">
            <Container>
                <div
                    className="p-4 p-lg-5 rounded-4 text-white" data-aos="zoom-in"
                    style={{
                        background:
                            "linear-gradient(135deg, #095d9e 0%, #0d6efd 50%, #1bc612 100%)",
                    }}
                >
                    <Row
                        className={`align-items-center g-4 ${reverse ? "flex-row-reverse" : ""
                            }`}
                    >
                        {/* LEFT CONTENT */}
                        <Col lg="7" data-aos="zoom-in">

                            <h2 className="fw-bold mb-3">
                                {title}{" "}
                                <span className="text-warning">{highlight}</span>
                            </h2>

                            <p className="mb-4 text-white">{subtitle}</p>

                            {/* BUTTONS */}
                            <div className="d-flex flex-wrap gap-3">
                                <Button
                                    href="/contact"
                                    className="px-4 py-2 rounded-pill d-flex align-items-center fw-semibold"
                                    color="light"
                                >
                                    {primaryBtn} <FaArrowRight className="ms-2" />
                                </Button>

                                <Button
                                    outline
                                    color="light"
                                    className="px-4 py-2 rounded-pill fw-semibold"
                                >
                                    {secondaryBtn}
                                </Button>
                            </div>
                        </Col>

                        {/* RIGHT CONTENT (POINTS) */}
                        <Col lg="5" data-aos="zoom-in">
                            <div className="bg-white bg-opacity-10 rounded-4 p-4 h-100">

                                {points.map((point, i) => (
                                    <div
                                        key={i}
                                        className="d-flex align-items-start mb-3"
                                    >
                                        <FaCheckCircle className="me-2 mt-1 text-warning" />
                                        <span>{point}</span>
                                    </div>
                                ))}

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default CounsellingCta;