"use client";

import React from "react";
import {
    Container,
    Row,
    Col,
    Badge,
} from "reactstrap";

const HeroTestimonial = () => {
    return (
        <section className="py-5">
            <Container>

                <Row className="justify-content-center">

                    <Col lg="9" className="text-center">

                        <div data-aos="zoom-in">


                            <button className="btn btn-sm btn-primary rounded-pill">
                                ⭐ Trusted By NEET Aspirants
                            </button>

                            <h1
                                className="fw-bold mb-2"
                                style={{
                                    fontSize:
                                        "clamp(2.7rem,5vw,3.3rem)",
                                    lineHeight: "1.2",
                                }}
                            >
                                Real Success Stories From
                                <span className="text-st">
                                    {" "}Medical Students
                                </span>
                            </h1>

                            <p
                                className="text-muted mx-auto"
                                style={{
                                    maxWidth: "850px",
                                    fontSize: "18px",
                                    lineHeight: "1.9",
                                }}
                            >
                                Thousands of students secured admissions into
                                top medical colleges through our NEET counseling.
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default HeroTestimonial;