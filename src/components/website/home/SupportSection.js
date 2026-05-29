"use client";

import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaHeadset, FaUserFriends, FaInfinity } from "react-icons/fa";
import AOS from "aos";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const SupportSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const cardStyle = {
        borderRadius: "20px",
        padding: "32px 24px",
        height: "100%",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
    };

    const handleHover = (e, type) => {
        if (type === "enter") {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
            e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.12)";
        } else {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06)";
        }
    };

    const floatingCircle = (color) => ({
        position: "absolute",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: color,
        bottom: "-30px",
        right: "-30px",
        opacity: 0.15,
    });

    return (
        <section
            className="py-5 bg-light bg-opacity-50" >
            <Container>
                {/* Header */}
                <div className="mb-4 text-center">
                    <h2 style={{ fontWeight: 800 }}>
                        Need something more personal?
                    </h2>
                    <p style={{ color: "#64748b" }}>
                        Real conversations. Real support. No scripts.
                    </p>

                    <div
                        style={{
                            marginTop: "15px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="tel:8008003000"
                            className="badge  st-bg rounded-pill px-3 py-2 text-decoration-none me-2"
                        >
                            <FaPhone className="me-1" />  1231231231
                        </a>

                        <a
                            href="mailto:hello@supporthub.dev"
                            className="badge  st-bg rounded-pill px-3 py-2 text-decoration-none"
                        >
                            <FaEnvelope className="me-1" />  hello@supporthub.dev
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <Row>
                    <Col md="4" data-aos="zoom-in">
                        <div
                            style={{ ...cardStyle, background: "rgba(220,252,231,0.7)" }}
                            onMouseEnter={(e) => handleHover(e, "enter")}
                            onMouseLeave={(e) => handleHover(e, "leave")}
                        >
                            <h5 style={{ fontWeight: 700 }}>Anything goes</h5>
                            <p style={{ fontSize: "14px", color: "#475569" }}>
                                Ask anything—we’re here for all of it.
                            </p>

                            <FaHeadset color="#16a34a" size={26} />
                            <div style={floatingCircle("#22c55e")} />
                        </div>
                    </Col>

                    <Col md="4" data-aos="zoom-in" data-aos-delay="150">
                        <div
                            style={{ ...cardStyle, background: "rgba(219,234,254,0.7)" }}
                            onMouseEnter={(e) => handleHover(e, "enter")}
                            onMouseLeave={(e) => handleHover(e, "leave")}
                        >
                            <h5 style={{ fontWeight: 700 }}>Human-first support</h5>
                            <p style={{ fontSize: "14px", color: "#475569" }}>
                                No bots—just real people who listen.
                            </p>

                            <FaUserFriends color="#2563eb" size={26} />
                            <div style={floatingCircle("#3b82f6")} />
                        </div>
                    </Col>

                    <Col md="4" data-aos="zoom-in" data-aos-delay="300">
                        <div
                            style={{ ...cardStyle, background: "rgba(254,243,199,0.7)" }}
                            onMouseEnter={(e) => handleHover(e, "enter")}
                            onMouseLeave={(e) => handleHover(e, "leave")}
                        >
                            <h5 style={{ fontWeight: 700 }}>No limits</h5>
                            <p style={{ fontSize: "14px", color: "#475569" }}>
                                Talk as long as you need.
                            </p>

                            <FaInfinity color="#f59e0b" size={26} />
                            <div style={floatingCircle("#fbbf24")} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SupportSection;