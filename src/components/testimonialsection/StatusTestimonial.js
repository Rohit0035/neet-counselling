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
    FaUserGraduate,
    FaAward,
    FaCheckCircle,
} from "react-icons/fa";

const statsData = [
    {
        title: "25K+",
        sub: "Students Guided",
        icon: <FaUserGraduate />,
        color: "#0d6efd",
    },
    {
        title: "5000+",
        sub: "Medical Admissions",
        icon: <FaAward />,
        color: "#198754",
    },
    {
        title: "98%",
        sub: "Success Ratio",
        icon: <FaCheckCircle />,
        color: "#fd7e14",
    },
];

const StatusTestimonial = () => {
    return (
        <section className="py-3">
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
                                            fontSize: "32px",
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

export default StatusTestimonial;