"use client";

import React from "react";
import { Container } from "reactstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {
    FaLightbulb,
    FaUsers,
    FaGlobe,
    FaRocket,
    FaChartLine,
    FaCogs,
    FaBrain,
    FaStar,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const TimelineSection = () => {
    return (
        <section className="py-5 bg-light">
            <Container>

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Evolution Journey</h2>
                    <p className="text-secondary">
                        From basic guidance to an intelligent counselling ecosystem.
                    </p>
                </div>

                <VerticalTimeline lineColor="#dee2e6" data-aos="zoom-in">

                    <VerticalTimelineElement
                        date="2018"
                        icon={<FaLightbulb />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">The Beginning</h5>
                        <p className="text-secondary">
                            Started guiding NEET aspirants with simple counselling awareness
                            and foundational support.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2019"
                        icon={<FaUsers />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Building Community</h5>
                        <p className="text-secondary">
                            Created a strong student network sharing real-time updates,
                            cut-offs, and strategies.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2020"
                        icon={<FaGlobe />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Expanding Reach</h5>
                        <p className="text-secondary">
                            Extended counselling support across multiple states and quotas.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2021"
                        icon={<FaRocket />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Platform Launch</h5>
                        <p className="text-secondary">
                            Introduced a structured digital platform for smarter decision-making.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2022"
                        icon={<FaChartLine />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Data-Driven Insights</h5>
                        <p className="text-secondary">
                            Added analytics, cut-off tracking, and trend-based predictions.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2023"
                        icon={<FaCogs />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Advanced Tools</h5>
                        <p className="text-secondary">
                            Built rank predictors, seat matrix tools, and smart choice filling systems.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2024"
                        icon={<FaBrain />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Smart Automation</h5>
                        <p className="text-secondary">
                            Introduced automation and intelligent suggestions for better outcomes.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        date="2025"
                        icon={<FaStar />}
                        iconStyle={{ background: "#1bc612", color: "#fff" }}
                    >
                        <h5 className="fw-bold text-st-sec">Next-Gen Counselling</h5>
                        <p className="text-secondary">
                            Moving towards AI-powered guidance for precision and confidence.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </Container>
        </section>
    );
};

export default TimelineSection;