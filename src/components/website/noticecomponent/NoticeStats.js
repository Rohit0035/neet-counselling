// ==========================================
// components/notice/NoticeStatsSection.jsx
// ==========================================

"use client";

import React from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";

import {
    FaBell,
    FaCalendarAlt,
    FaUniversity,
} from "react-icons/fa";

const statsData = [
    {
        title: "500+",
        sub: "Latest Notices",
        icon: <FaBell />,
        color: "#0d6efd",
    },
    {
        title: "50+",
        sub: "Counseling Updates",
        icon: <FaCalendarAlt />,
        color: "#198754",
    },
    {
        title: "200+",
        sub: "Medical Colleges",
        icon: <FaUniversity />,
        color: "#fd7e14",
    },
];

const NoticeStats = () => {

    return (
        <section className="py-5 bg-light">

            <Container>

                <Row className="g-4">

                    {statsData.map((item, index) => (

                        <Col lg="4" md="6" key={index}>

                            <Card
                                className="border-0 h-100"
                                data-aos="zoom-in-up"
                                style={{
                                    borderRadius: "35px",
                                    boxShadow:
                                        "0 20px 60px rgba(0,0,0,0.06)",
                                }}
                            >

                                <CardBody className="p-5 text-center">

                                    <div
                                        className="mx-auto d-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "30px",
                                            background: item.color,
                                            color: "#fff",
                                            fontSize: "40px",
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <h2
                                        className="fw-bold mb-2"
                                        style={{
                                            fontSize: "52px",
                                        }}
                                    >
                                        {item.title}
                                    </h2>

                                    <p className="text-muted mb-0">
                                        {item.sub}
                                    </p>

                                </CardBody>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
    );
};

export default NoticeStats;