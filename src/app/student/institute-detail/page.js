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
  FaHospital,
  FaAward,
  FaUsers,
  FaGraduationCap,
  
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const InstituteDetailPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const institute = {
    name: "All India Institute of Medical Sciences, Bathinda",
    state: "Punjab",
    authority: "AIIMS",
    type: "Institute of National Importance",
    established: "2019",
    website: "https://aiimsbathinda.edu.in",
    email: "info@aiimsbathinda.edu.in",
    phone: "+91-164-2866000",
  };

  return (
    <StudentLayoutWrapper>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem >
          Institute
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Institute Detail
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="py-3">
        <Container>
          <div
            className="st-bg rounded-4 mb-4"
            style={{ height: "230px" }}
          >
            <Container className="h-100">
              <div className="d-flex align-items-center h-100 text-white">

                <div data-aos="zoom-in">

                  <Badge
                    color="warning"
                    pill
                    className="mb-3 px-3 py-2"
                  >
                    Institute of National Importance
                  </Badge>

                  <h3 className="fw-bold">
                    {institute.name}
                  </h3>

                  <p className="mb-0 text-white">
                    Excellence in Medical Education,
                    Research & Healthcare
                  </p>

                </div>

              </div>
            </Container>
          </div>

          <Card
            className="border-0 rounded-4 mt-n5"
            data-aos="fade-up"
          >
            <CardBody className="p-4 p-lg-5">

              <Row className="align-items-center">

                <Col lg={8}>

                  <div className="d-flex">

                    <div
                      className="
                    bg-primary
                    bg-opacity-10
                    rounded-4
                    p-4
                    me-4
                    d-flex
                    align-items-center
                    justify-content-center
                    "
                    >
                      <FaUniversity
                        size={50}
                        className="text-primary"
                      />
                    </div>

                    <div>

                      <h4 className="fw-bold mb-2">
                        {institute.name}
                      </h4>

                      <div className="d-flex flex-wrap gap-2">

                        <Badge color="primary">
                          AIIMS
                        </Badge>

                        <Badge color="success">
                          Punjab
                        </Badge>

                        <Badge color="info">
                          Autonomous
                        </Badge>

                      </div>

                    </div>

                  </div>

                </Col>

                <Col lg={4} className="text-lg-end mt-4 mt-lg-0">

                  <Button
                    color="primary"
                    size="sm"
                    className="rounded-pill px-4 "
                  >
                    Apply Now
                  </Button>

                </Col>

              </Row>

            </CardBody>
          </Card>


          <Row className="g-4 mt-2">

            <Col md={3}>
              <Card
                className="border-0 shadow-sm rounded-4"
                data-aos="zoom-in"
              >
                <CardBody className="text-center">
                  <FaAward
                    size={28}
                    className="text-primary mb-3"
                  />
                  <h6>Authority</h6>
                  <div className="fw-semibold">
                    AIIMS
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                className="border-0 shadow-sm rounded-4"
                data-aos="zoom-in"
              >
                <CardBody className="text-center">
                  <FaMapMarkerAlt
                    size={28}
                    className="text-danger mb-3"
                  />
                  <h6>State</h6>
                  <div className="fw-semibold">
                    Punjab
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                className="border-0 shadow-sm rounded-4"
                data-aos="zoom-in"
              >
                <CardBody className="text-center">
                  <FaHospital
                    size={28}
                    className="text-success mb-3"
                  />
                  <h6>Type</h6>
                  <div className="fw-semibold">
                    INI
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md={3}>
              <Card
                className="border-0 shadow-sm rounded-4"
                data-aos="zoom-in"
              >
                <CardBody className="text-center">
                  <FaUsers
                    size={28}
                    className="text-warning mb-3"
                  />
                  <h6>Established</h6>
                  <div className="fw-semibold">
                    2019
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>


          <Card
            className="border-0 shadow-sm rounded-4 mt-4"
            data-aos="fade-up"
          >
            <CardBody>

              <Nav pills className="gap-2">

                <NavItem>
                  <NavLink
                    active={activeTab === "1"}
                    onClick={() =>
                      setActiveTab("1")
                    }
                    className="rounded-pill"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Overview
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    active={activeTab === "2"}
                    onClick={() =>
                      setActiveTab("2")
                    }
                    className="rounded-pill"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Courses
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    active={activeTab === "3"}
                    onClick={() =>
                      setActiveTab("3")
                    }
                    className="rounded-pill"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Closing Ranks
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    active={activeTab === "4"}
                    onClick={() =>
                      setActiveTab("4")
                    }
                    className="rounded-pill"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Facilities
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    active={activeTab === "5"}
                    onClick={() =>
                      setActiveTab("5")
                    }
                    className="rounded-pill"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Contact
                  </NavLink>
                </NavItem>

              </Nav>

              <hr />

              <TabContent activeTab={activeTab}>

                <TabPane tabId="1">

                  <h4 className="fw-bold mb-3">
                    About Institute
                  </h4>

                  <p className="text-muted">
                    AIIMS Bathinda is one of India's
                    leading medical institutions,
                    providing quality healthcare,
                    education, and research.
                  </p>

                </TabPane>

                <TabPane tabId="2">

                  <Row className="g-3">

                    {[
                      "MBBS",
                      "MD",
                      "MS",
                      "DM",
                      "M.Ch",
                    ].map((course) => (
                      <Col md={4} key={course}>
                        <Card className="border">
                          <CardBody>
                            <FaGraduationCap className="text-primary me-2" />
                            {course}
                          </CardBody>
                        </Card>
                      </Col>
                    ))}

                  </Row>

                </TabPane>

                <TabPane tabId="3">

                  <Card className="border">
                    <CardBody>
                      NEET UG Round 1 Closing Rank:
                      <strong> 950</strong>
                    </CardBody>
                  </Card>

                </TabPane>

                <TabPane tabId="4">

                  <Row className="g-3">

                    {[
                      "Hospital",
                      "Hostel",
                      "Library",
                      "Sports",
                      "Labs",
                      "Research Center",
                    ].map((item) => (
                      <Col md={4} key={item}>
                        <Card className="border">
                          <CardBody>
                            {item}
                          </CardBody>
                        </Card>
                      </Col>
                    ))}

                  </Row>

                </TabPane>

                <TabPane tabId="5">

                  <Row className="g-4">

                    <Col md={4}>
                      <Card>
                        <CardBody>
                          <FaPhone className="me-2" />
                          {institute.phone}
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md={4}>
                      <Card>
                        <CardBody>
                          <FaEnvelope className="me-2" />
                          {institute.email}
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md={4}>
                      <Card>
                        <CardBody>
                          <FaGlobe className="me-2" />
                          {institute.website}
                        </CardBody>
                      </Card>
                    </Col>

                  </Row>

                </TabPane>

              </TabContent>

            </CardBody>
          </Card>

        </Container>
      </div>
    </StudentLayoutWrapper>

  );
};

export default InstituteDetailPage;