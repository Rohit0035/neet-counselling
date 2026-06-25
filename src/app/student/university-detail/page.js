"use client";

import { useState } from "react";
import Link from "next/link";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import {
    FaUniversity,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaGlobe,
    FaUsers,
    FaGraduationCap,
    FaAward,
} from "react-icons/fa";

import StudentLayoutWrapper from "../components/StudentLayout";

const UniversityDetailPage = () => {
    const [activeTab, setActiveTab] = useState("1");

    const university = {
        name: "University of Delhi",
        state: "Delhi",
        type: "Central University",
        ranking: "#12 NIRF",
        established: "1922",
        website: "https://du.ac.in",
        email: "info@du.ac.in",
        phone: "+91-11-27667725",
        description:
            "University of Delhi is one of India’s premier universities known for academic excellence, research, and innovation across disciplines.",
    };

    return (
        <StudentLayoutWrapper>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    Explore
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Institutes
                </BreadcrumbItem>
            </Breadcrumb>

            <Container className="py-3">
                <Row className="g-4">

                    <Col lg={8}>
                        <Card
                            className="border-0 shadow-sm rounded-4"
                            data-aos="zoom-in"
                        >
                            <CardBody className="p-4">

                                <div className="d-flex align-items-start">

                                    <div className="bg-primary bg-opacity-10 rounded-4 p-4 me-4">
                                        <FaUniversity size={50} className="text-primary" />
                                    </div>

                                    <div>

                                        <Badge color="success" pill className="mb-2">
                                            {university.type}
                                        </Badge>

                                        <h2 className="fw-bold mb-2">
                                            {university.name}
                                        </h2>

                                        <p className="text-muted mb-3">
                                            {university.description}
                                        </p>

                                        <div className="d-flex flex-wrap gap-2">

                                            <Badge color="primary">UGC Approved</Badge>
                                            <Badge color="warning">NAAC A++</Badge>
                                            <Badge color="info">{university.ranking}</Badge>

                                        </div>

                                    </div>

                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card
                            className="border-0 shadow-sm rounded-4 h-100"
                            data-aos="zoom-in"
                        >
                            <CardBody className="p-4">

                                <h6 className="fw-bold mb-3">Quick Actions</h6>

                                <Button color="primary" className="w-100 rounded-pill mb-2">
                                    Apply Now
                                </Button>

                                <Button outline color="success" className="w-100 rounded-pill mb-2">
                                    Download Brochure
                                </Button>

                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Row className="g-4 mt-2">

                    <Col md={3}>
                        <Card className="border-0 shadow-sm rounded-4" data-aos="zoom-in">
                            <CardBody className="text-center">
                                <FaUsers size={26} className="text-primary mb-2" />
                                <h4 className="fw-bold">50K+</h4>
                                <div className="text-muted">Students</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="border-0 shadow-sm rounded-4" data-aos="zoom-in">
                            <CardBody className="text-center">
                                <FaGraduationCap size={26} className="text-success mb-2" />
                                <h4 className="fw-bold">250+</h4>
                                <div className="text-muted">Courses</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="border-0 shadow-sm rounded-4" data-aos="zoom-in">
                            <CardBody className="text-center">
                                <FaAward size={26} className="text-warning mb-2" />
                                <h4 className="fw-bold">#12</h4>
                                <div className="text-muted">NIRF Ranking</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className="border-0 shadow-sm rounded-4" data-aos="zoom-in">
                            <CardBody className="text-center">
                                <FaMapMarkerAlt size={26} className="text-danger mb-2" />
                                <h4 className="fw-bold">120 Acres</h4>
                                <div className="text-muted">Campus</div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Card className="border-0 shadow-sm rounded-4 mt-4" data-aos="zoom-in">
                    <CardBody>

                        <Nav pills className="gap-2 flex-wrap">

                            {[
                                ["1", "Overview"],
                                ["2", "Courses"],
                                ["3", "Colleges"],
                                ["4", "Placements"],
                                ["5", "Facilities"],
                                ["6", "Contact"],
                            ].map(([id, label]) => (
                                <NavItem key={id}>
                                    <NavLink
                                        className="rounded-pill py-1 small"
                                        active={activeTab === id}
                                        onClick={() => setActiveTab(id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {label}
                                    </NavLink>
                                </NavItem>
                            ))}

                        </Nav>

                        <hr />

                        <TabContent activeTab={activeTab}>

                            <TabPane tabId="1">

                                <Row>

                                    <Col lg={8}>
                                        <Card className="border-0 bg-light rounded-4">
                                            <CardBody>
                                                <h5 className="fw-bold mb-2">About University</h5>
                                                <p className="text-muted mb-0">
                                                    {university.description}
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg={4}>
                                        <Card className="border-0 bg-light rounded-4">
                                            <CardBody>
                                                <h6 className="fw-bold mb-3">Quick Info</h6>

                                                <div className="mb-2"><b>Established:</b> {university.established}</div>
                                                <div className="mb-2"><b>Type:</b> {university.type}</div>
                                                <div className="mb-2"><b>State:</b> {university.state}</div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                </Row>

                            </TabPane>

                            <TabPane tabId="2">
                                <Row className="g-3">

                                    {["B.Tech", "MBA", "B.Sc", "M.Tech", "PhD"].map((c) => (
                                        <Col md={4} key={c}>
                                            <Card className="border rounded-4">
                                                <CardBody className="text-center">
                                                    <FaGraduationCap className="text-primary mb-2" />
                                                    <div className="fw-semibold">{c}</div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}

                                </Row>
                            </TabPane>

                            <TabPane tabId="3">
                                <Card className="border">
                                    <CardBody>
                                        Affiliated colleges list will be shown here.
                                    </CardBody>
                                </Card>
                            </TabPane>

                            <TabPane tabId="4">
                                <Card className="border">
                                    <CardBody>
                                        Highest Package: ₹58 LPA <br />
                                        Average Package: ₹12 LPA
                                    </CardBody>
                                </Card>
                            </TabPane>

                            <TabPane tabId="5">
                                <Row className="g-3">

                                    {["Library", "Hostel", "Sports", "Labs"].map((f) => (
                                        <Col md={3} key={f}>
                                            <Card className="border text-center">
                                                <CardBody>{f}</CardBody>
                                            </Card>
                                        </Col>
                                    ))}

                                </Row>
                            </TabPane>

                            <TabPane tabId="6">
                                <Row className="g-3">

                                    <Col md={4}>
                                        <Card className="border">
                                            <CardBody>
                                                <FaPhone className="me-2" />
                                                {university.phone}
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="border">
                                            <CardBody>
                                                <FaEnvelope className="me-2" />
                                                {university.email}
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="border">
                                            <CardBody>
                                                <FaGlobe className="me-2" />
                                                {university.website}
                                            </CardBody>
                                        </Card>
                                    </Col>

                                </Row>
                            </TabPane>

                        </TabContent>

                    </CardBody>
                </Card>

            </Container>

        </StudentLayoutWrapper>
    );
};

export default UniversityDetailPage;