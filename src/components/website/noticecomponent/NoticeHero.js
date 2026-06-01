// ==========================================
// components/notice/NoticeHero.jsx
// PROFESSIONAL PREMIUM HERO SECTION
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
    FaCalendarAlt,
    FaGraduationCap,
    FaUniversity,
    FaCheckCircle,
} from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

const NoticeHero = ({categories = [],notices = []}) => {

    return (
        <section
            className="position-relative overflow-hidden d-flex align-items-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#071028 0%,#0B1E4D 35%,#122C73 70%,#2563eb 100%)",
            }}
        >

            {/* BACKGROUND BLUR EFFECTS */}
            <div
                style={{
                    position: "absolute",
                    top: "-120px",
                    right: "-100px",
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    background:
                        "rgba(37,99,235,0.35)",
                    filter: "blur(80px)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "-150px",
                    left: "-120px",
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    background:
                        "rgba(99,102,241,0.28)",
                    filter: "blur(90px)",
                }}
            />

            {/* GRID EFFECT */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <Container
                className="position-relative"
                style={{ zIndex: 5 }}
            >

                <Row className="align-items-center gy-5">

                    {/* LEFT CONTENT */}
                    <Col lg="7">

                        <div data-aos="fade-right">

                            {/* TOP BADGE */}
                            <div
                                className="d-inline-flex align-items-center gap-2 mb-4"
                                style={{
                                    background:
                                        "rgba(255,255,255,0.08)",
                                    border:
                                        "1px solid rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(12px)",
                                    padding: "10px 22px",
                                    borderRadius: "60px",
                                }}
                            >

                                <FaBell
                                    style={{
                                        color: "#60a5fa",
                                    }}
                                />

                                <span
                                    style={{
                                        color: "#fff",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        letterSpacing: ".5px",
                                    }}
                                >
                                    LIVE COUNSELING NOTICES & ALERTS
                                </span>

                            </div>

                            {/* MAIN TITLE */}
                            <h1
                                className="fw-bold text-white mb-4"
                                style={{
                                    fontSize:
                                        "clamp(3rem,6vw,3.3rem)",
                                    lineHeight: "1.08",
                                    letterSpacing: "-2px",
                                }}
                            >
                                Latest
                                <span className="text-st">
                                    {" "}NEET Counseling 
                                </span> Notices & Updates
                            </h1>

                            {/* DESCRIPTION */}
                            <p
                                className="text-white "
                            >
                                Stay updated with official NEET UG counseling
                                schedules, MCC registration alerts,
                                seat allotment notifications,
                                medical college cutoff updates,
                                scholarships, and admission announcements —
                                all in one premium dashboard.
                            </p>

                            {/* FEATURE POINTS */}
                            <Row className="g-3 mt-4">

                                {[
                                    {
                                        icon: <FaCalendarAlt />,
                                        title: "Counseling Schedules",
                                    },
                                    {
                                        icon: <FaUniversity />,
                                        title: "College Notifications",
                                    },
                                    {
                                        icon: <FaGraduationCap />,
                                        title: "Admission Alerts",
                                    },
                                    {
                                        icon: <FaCheckCircle />,
                                        title: "Verified Updates",
                                    },
                                ].map((item, index) => (

                                    <Col md="6" key={index}>

                                        <div
                                            className="d-flex align-items-center gap-3"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,0.06)",
                                                border:
                                                    "1px solid rgba(255,255,255,0.08)",
                                                backdropFilter:
                                                    "blur(12px)",
                                                borderRadius: "22px",
                                                padding:
                                                    "18px 20px",
                                            }}
                                        >

                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    minWidth: "55px",
                                                    height: "55px",
                                                    borderRadius: "16px",
                                                    background:
                                                        "linear-gradient(135deg,#2563eb,#4f46e5)",
                                                    color: "#fff",
                                                    fontSize: "22px",
                                                }}
                                            >
                                                {item.icon}
                                            </div>

                                            <div>

                                                <h6
                                                    className="mb-0 text-white fw-semibold"
                                                    style={{
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    {item.title}
                                                </h6>

                                            </div>

                                        </div>

                                    </Col>

                                ))}

                            </Row>

                            {/* BUTTONS */}
                            {/* <div className="d-flex flex-wrap gap-3 mt-5">

                                <Button
                                    className="border-0 fw-bold"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#3b82f6,#2563eb)",
                                        borderRadius: "60px",
                                        padding: "18px 38px",
                                        fontSize: "17px",
                                        boxShadow:
                                            "0 20px 45px rgba(37,99,235,0.35)",
                                    }}
                                >
                                    Explore Notices
                                    <FaArrowRight className="ms-2" />
                                </Button>

                                <Button
                                    outline
                                    className="fw-bold text-white border-white"
                                    style={{
                                        borderRadius: "60px",
                                        padding: "18px 38px",
                                        fontSize: "17px",
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    View Latest Updates
                                </Button>

                            </div> */}

                        </div>

                    </Col>

                    {/* RIGHT SIDE PREMIUM CARD */}
                    <Col lg="5">

                        <div
                            className="position-relative"
                            data-aos="fade-left"
                        >

                            {/* MAIN CARD */}
                            <div
                                className="position-relative overflow-hidden"
                                style={{
                                    borderRadius: "38px",
                                    background:
                                        "rgba(255,255,255,0.08)",
                                    border:
                                        "1px solid rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(18px)",
                                    padding: "35px",
                                    boxShadow:
                                        "0 25px 80px rgba(0,0,0,0.28)",
                                }}
                            >

                                {/* CARD HEADER */}
                                <div className="d-flex align-items-center justify-content-between mb-4">

                                    <div>

                                        <h5
                                            className="text-white fw-bold mb-1"
                                        >
                                            Latest Announcements
                                        </h5>

                                        <small
                                            style={{
                                                color:
                                                    "rgba(255,255,255,0.6)",
                                            }}
                                        >
                                            Updated Today
                                        </small>

                                    </div>

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "65px",
                                            height: "65px",
                                            borderRadius: "18px",
                                            background:
                                                "linear-gradient(135deg,#2563eb,#4f46e5)",
                                            color: "#fff",
                                            fontSize: "28px",
                                        }}
                                    >
                                        <FaBell />
                                    </div>

                                </div>

                                {/* NOTICE ITEMS */}
                                {notices.map((item, index) => (

                                    <div
                                        key={index}
                                        className="mb-3"
                                        style={{
                                            background:
                                                "rgba(255,255,255,0.06)",
                                            borderRadius: "24px",
                                            padding: "20px",
                                            border:
                                                "1px solid rgba(255,255,255,0.06)",
                                        }}
                                    >

                                        <div className="d-flex align-items-start justify-content-between gap-3">

                                            <div>

                                                <Badge
                                                    pill
                                                    className="mb-3"
                                                    style={{
                                                        background:
                                                            "rgba(59,130,246,0.18)",
                                                        color:
                                                            "#93c5fd",
                                                        padding:
                                                            "8px 14px",
                                                    }}
                                                >
                                                    New Update
                                                </Badge>

                                                <h6
                                                    className="text-white fw-semibold"
                                                    style={{
                                                        lineHeight: "1.7",
                                                    }}
                                                >
                                                    {item.title}
                                                </h6>

                                            </div>

                                            <small
                                                style={{
                                                    color:
                                                        "rgba(255,255,255,0.55)",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {formatDistanceToNow(new Date(item.createdAt), {
                                                                            addSuffix: true,
                                                                          })}
                                            </small>

                                        </div>

                                    </div>

                                ))}

                                {/* FOOTER */}
                                <div
                                    className="mt-4 text-center"
                                >

                                    <Button
                                        className="w-100 border-0 fw-bold"
                                        style={{
                                            background:
                                                "linear-gradient(135deg,#3b82f6,#4f46e5)",
                                            borderRadius: "18px",
                                            padding: "16px",
                                            fontSize: "16px",
                                        }}
                                    >
                                        View All Notifications
                                    </Button>

                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default NoticeHero;