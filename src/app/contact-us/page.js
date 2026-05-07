"use client";

import React, { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Input,
    Badge,
} from "reactstrap";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaClock,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaUserGraduate,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaPhoneAlt />,
        title: "Call Us",
        value: "+91 98765 43210",
        bg: "#0d6efd",
    },
    {
        icon: <FaEnvelope />,
        title: "Email Address",
        value: "info@iknowledge.com",
        bg: "#198754",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Office Location",
        value: "Bangalore, India",
        bg: "#fd7e14",
    },
    {
        icon: <FaClock />,
        title: "Working Hours",
        value: "Mon - Sat : 9AM - 7PM",
        bg: "#dc3545",
    },
];

const ContactUs = () => {

    return (
        <>
            <section
                className="py-5 overflow-hidden"
                style={{
                    background:
                        "linear-gradient(to bottom, #f8fbff 0%, #ffffff 100%)",
                }}
            >
                <Container>

                    {/* TOP HEADING */}
                    <Row className="justify-content-center mb-5">

                        <Col lg="8" className="text-center">

                            <div data-aos="zoom-in">

                                <button
                                    className="px-4 py-1 mb-3 st-bg btn btn-primary rounded-pill btn-sm"
                                >
                                    Contact Iknowledge Education
                                </button>

                                <h1
                                    className="fw-bold mb-4 text-st"
                                    style={{
                                        fontSize: "clamp(2.5rem,5vw,3.3rem)",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    Let’s Connect &
                                    <span style={{ color: "#000" }}>
                                        {" "}Build Your Future
                                    </span>
                                </h1>

                                <p
                                    className="text-muted"
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "1.9",
                                    }}
                                >
                                    Have questions about admissions, colleges,
                                    scholarships, or career guidance? Our expert
                                    counselors are here to help you at every step
                                    of your academic journey.
                                </p>

                            </div>

                        </Col>

                    </Row>

                    <Row className="g-4 align-items-stretch">
                        <Col lg="5" className="mb-3">
                            <div className="h-100" data-aos="zoom-in-right">
                                <Card
                                    className="border-0 h-100"
                                    style={{
                                        borderRadius: "35px",
                                        background:
                                            "linear-gradient(135deg,#0d6efd,#001f5b)",
                                        overflow: "hidden",
                                        boxShadow:
                                            "0 25px 60px rgba(13,110,253,0.25)",
                                    }}
                                >
                                    <CardBody className="p-4 p-lg-5 text-white">
                                        <button
                                            className="px-4 py-1 mb-3 btn text-white  rounded-pill btn-sm"
                                            style={{ backgroundColor: '#1bc612' }}
                                        >
                                            Premium Support
                                        </button>
                                        <h2
                                            className="fw-bold mb-4"
                                            style={{
                                                fontSize: "42px",
                                                lineHeight: "1.3",
                                            }}
                                        >
                                            We’re Always Ready To Help You
                                        </h2>
                                        <p
                                            style={{
                                                color: "rgba(255,255,255,0.8)",
                                                lineHeight: "1.9",
                                                fontSize: "17px",
                                            }}
                                        >
                                            Reach out to our admission experts for
                                            personalized guidance regarding college
                                            admissions, course selection, counseling,
                                            scholarships, and career opportunities.
                                        </p>
                                        <div className="mt-5">
                                            {contactInfo.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="d-flex align-items-start gap-3 mb-4"
                                                >

                                                    <div
                                                        className="d-flex align-items-center justify-content-center"
                                                        style={{
                                                            minWidth: "65px",
                                                            height: "65px",
                                                            borderRadius: "20px",
                                                            background: item.bg,
                                                            fontSize: "24px",
                                                        }}
                                                    >
                                                        {item.icon}
                                                    </div>

                                                    <div>

                                                        <h5 className="fw-bold mb-1">
                                                            {item.title}
                                                        </h5>

                                                        <p
                                                            className="mb-0"
                                                            style={{
                                                                color: "rgba(255,255,255,0.8)",
                                                            }}
                                                        >
                                                            {item.value}
                                                        </p>

                                                    </div>

                                                </div>
                                            ))}

                                        </div>
                                        <div className="d-flex gap-3 mt-5">

                                            {[FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                                                (Icon, i) => (
                                                    <div
                                                        key={i}
                                                        className="d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: "55px",
                                                            height: "55px",
                                                            borderRadius: "50%",
                                                            background: "rgba(255,255,255,0.15)",
                                                            cursor: "pointer",
                                                            fontSize: "20px",
                                                            transition: "0.3s",
                                                        }}
                                                    >
                                                        <Icon />
                                                    </div>
                                                )
                                            )}

                                        </div>

                                    </CardBody>

                                </Card>

                            </div>

                        </Col>
                        <Col lg="7">
                            <div className="h-100" data-aos="zoom-in-left">
                                <Card
                                    className="border-0 h-100"
                                    style={{
                                        borderRadius: "35px",
                                        background: "#ffffff",
                                        boxShadow:
                                            "0 20px 60px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <CardBody className="p-4 p-lg-5">
                                        <div className="mb-4">
                                            <button
                                                className="px-4 py-1 mb-3 st-bg btn btn-primary rounded-pill btn-sm"
                                            >
                                                Send Message
                                            </button>
                                            <h2
                                                className="fw-bold"
                                                style={{
                                                    fontSize: "42px",
                                                    color: "#111",
                                                }}
                                            >
                                                Start Your Admission Journey
                                            </h2>
                                        </div>
                                        <Row className="g-4">
                                            <Col md="6">
                                                <Input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="border-0 shadow-none"
                                                    style={{
                                                        height: "65px",
                                                        borderRadius: "18px",
                                                        background: "#f5f7fb",
                                                        paddingLeft: "20px",
                                                    }}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <Input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="border-0 shadow-none"
                                                    style={{
                                                        height: "65px",
                                                        borderRadius: "18px",
                                                        background: "#f5f7fb",
                                                        paddingLeft: "20px",
                                                    }}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    className="border-0 shadow-none"
                                                    style={{
                                                        height: "65px",
                                                        borderRadius: "18px",
                                                        background: "#f5f7fb",
                                                        paddingLeft: "20px",
                                                    }}
                                                />
                                            </Col>
                                            <Col md="6">
                                                <Input
                                                    type="select"
                                                    className="border-0 shadow-none"
                                                    style={{
                                                        height: "65px",
                                                        borderRadius: "18px",
                                                        background: "#f5f7fb",
                                                        paddingLeft: "20px",
                                                    }}
                                                >
                                                    <option>Select Course</option>
                                                    <option>B.Tech</option>
                                                    <option>MBA</option>
                                                    <option>MBBS</option>
                                                    <option>BCA</option>
                                                </Input>
                                            </Col>
                                            <Col md="12">
                                                <Input
                                                    type="textarea"
                                                    placeholder="Write Your Message..."
                                                    className="border-0 shadow-none"
                                                    style={{
                                                        borderRadius: "20px",
                                                        background: "#f5f7fb",
                                                        padding: "20px",
                                                        minHeight: "180px",
                                                    }}
                                                />
                                            </Col>
                                            <Col md="12">
                                                <Button
                                                    className="w-100 border-0 fw-bold"
                                                    style={{
                                                        height: "65px",
                                                        borderRadius: "18px",
                                                        background:
                                                            "linear-gradient(135deg,#0d6efd,#0052cc)",
                                                        fontSize: "18px",
                                                        boxShadow:
                                                            "0 15px 40px rgba(13,110,253,0.3)",
                                                    }}
                                                >
                                                    <FaPaperPlane className="me-2" />
                                                    Send Inquiry
                                                </Button>
                                            </Col>
                                        </Row>
                                        <div
                                            className="mt-5 d-flex flex-wrap gap-4 align-items-center justify-content-between"
                                            style={{
                                                background: "#f8fbff",
                                                borderRadius: "25px",
                                                padding: "25px",
                                            }}
                                        >

                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: "65px",
                                                            height: "65px",
                                                            borderRadius: "18px",
                                                            background:
                                                                "linear-gradient(135deg,#0d6efd,#0052cc)",
                                                            color: "#fff",
                                                            fontSize: "28px",
                                                        }}
                                                    >
                                                        <FaUserGraduate />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="fw-bold mb-1">
                                                        25,000+ Students Guided
                                                    </h5>

                                                    <p className="text-muted mb-0">
                                                        Trusted admission counseling platform
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                outline
                                                color="primary"
                                                className="rounded-pill px-4 py-3 fw-semibold"
                                            >
                                                Explore Courses
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );
};

export default ContactUs;