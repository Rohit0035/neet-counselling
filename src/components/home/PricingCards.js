"use client";

import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaUserMd, FaHeartbeat, FaFlask, FaBrain } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
    {
        title: "UG",
        tag: "MEDICAL",
        desc: "MBBS & BDS",
        price: "₹3499",
        color: "#e8e6f8",
        icon: <FaUserMd size={90} color="#6c63ff" />,
        accent: "#6c63ff"
    },
    {
        title: "PG",
        tag: "ADVANCE",
        desc: "Post Graduate",
        price: "₹4499",
        color: "#fde9e2",
        icon: <FaHeartbeat size={90} color="#ff6b3d" />,
        accent: "#ff6b3d"
    },
    {
        title: "RESEARCH",
        tag: "PRO",
        desc: "Clinical Programs",
        price: "₹3999",
        color: "#f6f0db",
        icon: <FaFlask size={90} color="#b08900" />,
        accent: "#b08900"
    },
    {
        title: "FOUNDATION",
        tag: "CORE",
        desc: "Basic Learning",
        price: "₹999",
        color: "#f8dede",
        icon: <FaUserMd size={90} color="#e53935" />,
        accent: "#e53935"
    },
    {
        title: "DIPLOMA",
        tag: "DNB",
        desc: "Entrance Prep",
        price: "₹1299",
        color: "#e4f3df",
        icon: <FaHeartbeat size={90} color="#4caf50" />,
        accent: "#4caf50"
    },
    {
        title: "SUPER",
        tag: "SS",
        desc: "Speciality",
        price: "FREE",
        color: "#dfeaf6",
        icon: <FaBrain size={90} color="#1976d2" />,
        accent: "#1976d2"
    }
];

const PricingCards = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section>
            <Container>

                {/* HEADER */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontWeight: "600" }}>
                        More Than Data, for Less Than You Think
                    </h2>
                    <p style={{ color: "#666" }}>
                        Smart packages with expert insights and real-time data.
                    </p>
                </div>

                <Row>
                    {plans.map((item, index) => (
                        <Col lg="4" md="6" sm="12" key={index} style={{ marginBottom: "20px" }}>

                            <div
                                data-aos="zoom-in"
                                style={{
                                    background: item.color,
                                    borderRadius: "20px",
                                    padding: "25px",
                                    height: "200px",
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer"
                                }}
                            >

                                {/* TOP RIGHT ARROW */}

                                <div
                                    style={{
                                        position: "absolute",
                                        top: "15px",
                                        right: "15px",
                                        background: "#fff",
                                        borderRadius: "50%",
                                        padding: "8px",
                                        width: "40px",
                                        height: "40px",
                                        textAlign: 'center'
                                    }}
                                >
                                    <FaArrowUpRightFromSquare size={12} color={item.accent} />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <p style={{ fontSize: "12px", color: item.accent, margin: 0 }}>
                                        {item.tag}
                                    </p>
                                    <h2 style={{ color: item.accent, margin: "5px 0" }}>
                                        {item.title}
                                    </h2>
                                    <p style={{ fontSize: "12px", color: "#555" }}>
                                        {item.desc}
                                    </p>
                                </div>
                                <div style={{ position: "absolute", bottom: "20px" }}>
                                    <p style={{ margin: 0, fontSize: "13px" }}>Starting from</p>
                                    <h3 style={{ color: item.accent, margin: 0 }}>
                                        {item.price}
                                    </h3>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        right: "-10px",
                                        bottom: "-10px",
                                        opacity: 0.15
                                    }}
                                >
                                    {item.icon}
                                </div>

                            </div>

                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    );
};

export default PricingCards;