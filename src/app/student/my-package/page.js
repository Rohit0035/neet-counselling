"use client";

import React, { useEffect } from "react";
import {
    Container,
    Card,
    CardBody,
    Row,
    Col,
    Badge,
    Button,
    Progress,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaCrown,
    FaCheckCircle,
    FaCalendarAlt,
    FaBolt,
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const MyPackagePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const currentPlan = {
        name: "Premium Plan",
        amount: "₹499",
        duration: "Monthly",
        expiry: "20 Dec 2025",
        usage: 75,
        active: true,
    };

    const features = [
        "Unlimited Mock Tests",
        "Question Bank Access",
        "Advanced Analytics",
        "Priority Support",
        "Premium Courses",
    ];

    return (
        <StudentLayoutWrapper>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    Profile
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    My Package
                </BreadcrumbItem>
            </Breadcrumb>
            <Container className="py-3">
                <div
                    data-aos="zoom-in"
                   
                >

                    <Card
                        className="border-0 mb-4"
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg,#4F46E5,#7C3AED,#9333EA)",
                                padding: "28px",
                                color: "#fff",
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="fw-bold mb-1">
                                        {currentPlan.name}
                                    </h3>

                                    <p className="mb-0 text-white">
                                        Active Subscription
                                    </p>
                                </div>

                                <Badge
                                    pill
                                    color="success"
                                    style={{
                                        padding: "10px 18px",
                                        fontSize: "14px",
                                    }}
                                >
                                    ACTIVE
                                </Badge>
                            </div>
                        </div>

                        <CardBody className="p-4">
                            <Row>
                                <Col md={6}>
                                    <h2 className="fw-bold">
                                        {currentPlan.amount}
                                        <small className="text-muted">
                                            /{currentPlan.duration}
                                        </small>
                                    </h2>

                                    <div className="mt-3">
                                        <FaCalendarAlt className="me-2 text-primary" />
                                        Expires on {currentPlan.expiry}
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="mb-2 fw-semibold">
                                        Usage Progress
                                    </div>

                                    <Progress
                                        value={currentPlan.usage}
                                        color="success"
                                        style={{
                                            height: "12px",
                                            borderRadius: "20px",
                                        }}
                                    />

                                    <small className="text-muted">
                                        {currentPlan.usage}% Used
                                    </small>
                                </Col>
                            </Row>

                            <hr />

                            <Row>
                                {features.map((item, index) => (
                                    <Col md={6} key={index} className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <FaCheckCircle
                                                className="text-success me-2"
                                            />
                                            {item}
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <div className="d-flex gap-2 mt-3">
                                <Button color="primary">
                                    Renew Plan
                                </Button>

                                <Button outline color="dark">
                                    <FaBolt className="me-2" />
                                    Upgrade
                                </Button>
                            </div>
                        </CardBody>
                    </Card>


                    <h4 className="fw-bold mb-3">
                        Subscription History
                    </h4>

                    <Card
                        className="border-0 shadow-sm"
                        style={{
                            borderRadius: "20px",
                        }}
                    >
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="fw-bold mb-1">
                                        Premium Plan
                                    </h6>

                                    <small className="text-muted">
                                        Purchased on 20 Nov 2025
                                    </small>
                                </div>

                                <div className="text-end">
                                    <div className="fw-bold text-success">
                                        ₹499
                                    </div>

                                    <Badge color="success">
                                        Active
                                    </Badge>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Container>
        </StudentLayoutWrapper>

    );
};

export default MyPackagePage;