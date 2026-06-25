"use client";

import React, { useEffect } from "react";
import {
    Card,
    CardBody,
    Container,
    Row,
    Col,
    Badge,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaChrome,
    FaMobileAlt,
    FaLaptop,
    FaDesktop,
    FaShieldAlt,
    FaSignOutAlt,
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const MyDevices = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const devices = [
        {
            id: 1,
            name: "Chrome - Windows",
            icon: <FaChrome size={28} />,
            type: "Browser",
            active: true,
            location: "Punjab, India",
            loginTime: "Today, 10:25 AM",
        },
        {
            id: 2,
            name: "Android App",
            icon: <FaMobileAlt size={28} />,
            type: "Mobile",
            active: false,
            location: "Punjab, India",
            loginTime: "Yesterday, 08:15 PM",
        },
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
                    My Devices
                </BreadcrumbItem>
            </Breadcrumb>
            <Container className="py-3">
                <div
                    data-aos="zoom-in"
                    style={{
                        maxWidth: "1000px",
                        margin: "auto",
                    }}
                >
                    {/* Header */}

                    <div className="text-center mb-5">
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "20px",
                                background:
                                    "linear-gradient(135deg,#4F46E5,#7C3AED)",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                            }}
                        >
                            <FaLaptop size={35} />
                        </div>

                        <h2 className="fw-bold mt-3">
                            My Devices
                        </h2>

                        <p className="text-muted">
                            Manage devices currently logged into
                            your account.
                        </p>
                    </div>


                    <Card
                        className="border-0 shadow-sm mb-4"
                        style={{
                            borderRadius: "20px",
                        }}
                    >
                        <CardBody>
                            <div className="d-flex gap-3 align-items-start">
                                <FaShieldAlt
                                    size={24}
                                    color="#22C55E"
                                />

                                <div>
                                    <h6 className="fw-bold mb-1">
                                        Device Security
                                    </h6>

                                    <p className="text-muted mb-0">
                                        Only one browser and one mobile
                                        app session can remain active at
                                        the same time.
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>


                    <Row>
                        {devices.map((device) => (
                            <Col md={6} key={device.id} className="mb-3">
                                <Card
                                    className="border-0 shadow-sm mb-4 h-100"
                                    style={{
                                        borderRadius: "20px",
                                        border: device.active
                                            ? "2px solid #22C55E"
                                            : "none",
                                    }}
                                >
                                    <CardBody>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-3">
                                                <div
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        borderRadius: "16px",
                                                        background: "#F8FAFC",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    {device.icon}
                                                </div>

                                                <div>
                                                    <h6 className="fw-bold mb-1">
                                                        {device.name}
                                                    </h6>

                                                    <small className="text-muted">
                                                        {device.type}
                                                    </small>

                                                    <div className="mt-2">
                                                        <small className="d-block text-muted">
                                                            📍 {device.location}
                                                        </small>

                                                        <small className="d-block text-muted">
                                                            🕒 {device.loginTime}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                            {device.active && (
                                                <Badge
                                                    pill
                                                    color="success"
                                                    className="h-100"
                                                >
                                                    Active
                                                </Badge>
                                            )}
                                        </div>

                                        {!device.active && (
                                            <Button
                                                color="danger"
                                                outline
                                                size="sm"
                                                className="mt-3"
                                            >
                                                <FaSignOutAlt className="me-2" />
                                                Logout Device
                                            </Button>
                                        )}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                    <Card
                        className="border-0 shadow-sm"
                        style={{
                            borderRadius: "20px",
                        }}
                    >
                        <CardBody className="text-center">
                            <FaDesktop
                                size={35}
                                color="#4F46E5"
                            />

                            <h5 className="fw-bold mt-3">
                                Account Sessions
                            </h5>

                            <p className="text-muted">
                                Sign out from all devices except
                                your current session.
                            </p>

                            <Button color="danger" size="sm">
                                <FaSignOutAlt className="me-2" />
                                Logout Other Devices
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </Container>
        </StudentLayoutWrapper>

    );
};

export default MyDevices;