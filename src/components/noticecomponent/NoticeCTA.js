// ==========================================
// components/notice/NoticeCTA.jsx
// CLEAN PROFESSIONAL PREMIUM CTA
// ==========================================

"use client";

import React from "react";

import {
    Container,
    Row,
    Col,
    Button,
    Badge,
} from "reactstrap";

import {
    FaArrowRight,
    FaBell,
    FaCheckCircle,
} from "react-icons/fa";

const NoticeCTA = () => {

    return (
        <section
            className="py-5"
            style={{
                background: "#f8fbff",
            }}
        >

            <Container>

                <Row className="justify-content-center">

                    <Col xl="11">

                        <div
                            className="position-relative overflow-hidden"
                            data-aos="fade-up"
                            style={{
                                borderRadius: "36px",
                                background: "#071028",
                                padding: "80px 60px",
                                boxShadow:
                                    "0 25px 80px rgba(7,16,40,0.12)",
                            }}
                        >

                            {/* BACKGROUND LIGHT */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-120px",
                                    right: "-120px",
                                    width: "350px",
                                    height: "350px",
                                    borderRadius: "50%",
                                    background:
                                        "rgba(37,99,235,0.18)",
                                    filter: "blur(50px)",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-100px",
                                    left: "-100px",
                                    width: "250px",
                                    height: "250px",
                                    borderRadius: "50%",
                                    background:
                                        "rgba(99,102,241,0.16)",
                                    filter: "blur(40px)",
                                }}
                            />

                            <Row
                                className="align-items-center position-relative"
                                style={{ zIndex: 2 }}
                            >

                                {/* LEFT CONTENT */}
                                <Col lg="7">

                                    <div data-aos="fade-right">

                                        <Badge
                                            pill
                                            className="px-4 py-2 border-0 mb-4"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                fontSize: "13px",
                                                letterSpacing: ".5px",
                                            }}
                                        >
                                            🔔 IMPORTANT NOTICE ALERTS
                                        </Badge>

                                        <h2
                                            className="fw-bold text-white mb-4"
                                            style={{
                                                fontSize:
                                                    "clamp(2.5rem,5vw,4.8rem)",
                                                lineHeight: "1.15",
                                                letterSpacing: "-1px",
                                            }}
                                        >
                                            Get Instant
                                            <span
                                                style={{
                                                    color: "#60a5fa",
                                                }}
                                            >
                                                {" "}NEET Counseling
                                            </span>
                                            <br />
                                            Updates & Notifications
                                        </h2>

                                        <p
                                            style={{
                                                color:
                                                    "rgba(255,255,255,0.72)",
                                                fontSize: "17px",
                                                lineHeight: "2",
                                                maxWidth: "650px",
                                            }}
                                        >
                                            Stay informed with latest NEET UG
                                            counseling schedules, MCC updates,
                                            seat allotment results,
                                            admission notifications,
                                            scholarship announcements,
                                            and important counseling alerts.
                                        </p>

                                        {/* FEATURES */}
                                        <div className="mt-4 d-flex flex-column gap-3">

                                            {[
                                                "Real-time counseling updates",
                                                "Verified admission notifications",
                                                "Latest MCC & AIQ alerts",
                                            ].map((item, index) => (

                                                <div
                                                    key={index}
                                                    className="d-flex align-items-center gap-3"
                                                >

                                                    <div
                                                        className="d-flex align-items-center justify-content-center"
                                                        style={{
                                                            minWidth: "42px",
                                                            height: "42px",
                                                            borderRadius: "12px",
                                                            background:
                                                                "rgba(255,255,255,0.08)",
                                                            color: "#60a5fa",
                                                            fontSize: "16px",
                                                        }}
                                                    >
                                                        <FaCheckCircle />
                                                    </div>

                                                    <span
                                                        style={{
                                                            color: "#fff",
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {item}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>

                                        {/* BUTTONS */}
                                        <div className="d-flex flex-wrap gap-3 mt-5">

                                            <Button
                                                className="border-0 fw-bold"
                                                style={{
                                                    background:
                                                        "#2563eb",
                                                    borderRadius: "60px",
                                                    padding:
                                                        "16px 36px",
                                                    fontSize: "16px",
                                                    boxShadow:
                                                        "0 15px 35px rgba(37,99,235,0.35)",
                                                }}
                                            >
                                                Subscribe Now
                                                <FaArrowRight className="ms-2" />
                                            </Button>

                                            <Button
                                                outline
                                                className="border-white text-white fw-semibold"
                                                style={{
                                                    borderRadius: "60px",
                                                    padding:
                                                        "16px 36px",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                Explore Notices
                                            </Button>

                                        </div>

                                    </div>

                                </Col>

                                {/* RIGHT CARD */}
                                <Col lg="5">

                                    <div
                                        className="mt-5 mt-lg-0"
                                        data-aos="fade-left"
                                    >

                                        <div
                                            className="position-relative overflow-hidden"
                                            style={{
                                                borderRadius: "30px",
                                                background:
                                                    "rgba(255,255,255,0.06)",
                                                border:
                                                    "1px solid rgba(255,255,255,0.08)",
                                                padding: "35px",
                                                backdropFilter:
                                                    "blur(14px)",
                                            }}
                                        >

                                            {/* ICON */}
                                            <div
                                                className="mx-auto d-flex align-items-center justify-content-center mb-4"
                                                style={{
                                                    width: "90px",
                                                    height: "90px",
                                                    borderRadius: "26px",
                                                    background:
                                                        "linear-gradient(135deg,#2563eb,#4f46e5)",
                                                    color: "#fff",
                                                    fontSize: "38px",
                                                }}
                                            >
                                                <FaBell />
                                            </div>

                                            <div className="text-center">

                                                <h4
                                                    className="fw-bold text-white mb-3"
                                                >
                                                    Live Updates
                                                </h4>

                                                <p
                                                    style={{
                                                        color:
                                                            "rgba(255,255,255,0.68)",
                                                        lineHeight: "1.9",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    Receive instant alerts for
                                                    counseling schedules,
                                                    registration deadlines,
                                                    and seat allotment results.
                                                </p>

                                            </div>

                                            {/* NOTICE ITEMS */}
                                            <div className="mt-4 d-flex flex-column gap-3">

                                                {[
                                                    "NEET UG Registration Started",
                                                    "Round 1 Choice Filling Open",
                                                    "AIQ Seat Allotment Released",
                                                ].map((item, index) => (

                                                    <div
                                                        key={index}
                                                        className="d-flex align-items-center gap-3"
                                                        style={{
                                                            background:
                                                                "rgba(255,255,255,0.05)",
                                                            borderRadius: "16px",
                                                            padding:
                                                                "14px 16px",
                                                        }}
                                                    >

                                                        <div
                                                            style={{
                                                                width: "9px",
                                                                height: "9px",
                                                                borderRadius:
                                                                    "50%",
                                                                background:
                                                                    "#60a5fa",
                                                            }}
                                                        />

                                                        <span
                                                            style={{
                                                                color: "#fff",
                                                                fontSize: "14px",
                                                                lineHeight: "1.7",
                                                            }}
                                                        >
                                                            {item}
                                                        </span>

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

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

export default NoticeCTA;