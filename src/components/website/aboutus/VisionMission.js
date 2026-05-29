"use client";

import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";

import {
    FaArrowRight,
    FaEye,
    FaBullseye,
    FaGem,
} from "react-icons/fa";

const VisionMission = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <section className="py-5 st-sec-bg">
            <Container>

                <Row>
                    <Col lg="9" className="mx-auto">
                        <div
                            className="bg-white rounded-4 p-4 p-lg-5 shadow"
                            data-aos="zoom-in"
                        >
                            <Row className="align-items-top">
                                <Col lg="5" className="mb-4 mb-lg-0">
                                    <h3 className="fw-bold mb-3">
                                        What Drives Us Forward
                                    </h3>
                                    <p className="text-secondary mb-4">
                                        Our platform is built with a clear purpose — to simplify decisions,
                                        empower students, and bring transparency into counselling.
                                    </p>
                                    <Nav pills vertical className="gap-3">
                                        <NavItem>
                                            <NavLink
                                                className={`d-flex justify-content-between align-items-center rounded-3 st-tab-abt ${activeTab === "1" ? "active bg-primary st-bg text-white" : "text-dark"
                                                    }`}
                                                onClick={() => toggle("1")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <span><FaEye className="me-2" /> Vision</span>
                                                <FaArrowRight />
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={`d-flex justify-content-between align-items-center st-tab-abt rounded-3 ${activeTab === "2" ? "active bg-primary st-bg  text-white" : "text-dark"
                                                    }`}
                                                onClick={() => toggle("2")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <span><FaBullseye className="me-2" /> Mission</span>
                                                <FaArrowRight />
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={`d-flex justify-content-between align-items-center st-tab-abt rounded-3 ${activeTab === "3" ? "active bg-primary st-bg  text-white" : "text-dark"
                                                    }`}
                                                onClick={() => toggle("3")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <span><FaGem className="me-2" /> Principles</span>
                                                <FaArrowRight />
                                            </NavLink>
                                        </NavItem>

                                    </Nav>

                                </Col>
                                <Col lg="7">
                                    <div className="bg-light p-3 w-100 h-100">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <h4 className="fw-bold text-st mb-3">
                                                Our Vision
                                            </h4>
                                            <p className="text-secondary">
                                                To build a future where every NEET aspirant can make confident,
                                                informed decisions without confusion or uncertainty.
                                            </p>
                                            <p className="text-secondary">
                                                We aim to become the most reliable counselling companion,
                                                offering clarity in every step of the journey.
                                            </p>
                                            <p className="text-secondary mb-0">
                                                Our focus is to eliminate guesswork and bring structured
                                                decision-making into medical admissions.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <h4 className="fw-bold text-st mb-3">
                                                Our Mission
                                            </h4>
                                            <p className="text-secondary">
                                                To simplify the entire counselling ecosystem through
                                                data-driven tools and expert-backed guidance.
                                            </p>
                                            <p className="text-secondary">
                                                We provide accurate insights, real-time updates, and
                                                actionable strategies to maximize student success.
                                            </p>
                                            <p className="text-secondary mb-0">
                                                Every feature we build is focused on improving clarity,
                                                speed, and confidence in decision-making.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <h4 className="fw-bold text-st mb-3">
                                                Our Core Principles
                                            </h4>
                                            <ul className="text-secondary ps-3 mb-0">
                                                <li className="mb-2">Transparency in every data point and insight</li>
                                                <li className="mb-2">Student-first approach in all decisions</li>
                                                <li className="mb-2">Continuous innovation in counselling tools</li>
                                                <li>Commitment to accuracy and trust</li>
                                            </ul>
                                        </TabPane>
                                    </TabContent>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VisionMission;