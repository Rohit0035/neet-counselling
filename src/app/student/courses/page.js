"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    InputGroup,
    InputGroupText,
    Badge,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import {
    FaSearch,
    FaGraduationCap,
    FaClock,
    FaBookOpen,
    FaArrowRight,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import StudentLayoutWrapper from "../components/StudentLayout";

const CoursesPage = () => {
    const courses = [
        {
            id: 1,
            name: "MD Anaesthesiology",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 2,
            name: "MD Anatomy",
            clinicalType: "Pre Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 3,
            name: "MD Bio Chemistry",
            clinicalType: "Pre Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 4,
            name: "MD Community Medicine",
            clinicalType: "Para Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 5,
            name: "MD Dermatology",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 6,
            name: "MD Emergency Medicine",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 7,
            name: "MD General Medicine",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 8,
            name: "MD Microbiology",
            clinicalType: "Para Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 9,
            name: "MD Paediatrics",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 10,
            name: "MS ENT",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 11,
            name: "MS Orthopaedics",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
        {
            id: 12,
            name: "MS General Surgery",
            clinicalType: "Clinical",
            degreeType: "Degree",
            duration: "3 Years",
        },
    ];

    const [search, setSearch] = useState("");
    const [clinicalType, setClinicalType] = useState("");
    const [degreeType, setDegreeType] = useState("");
    const [degreeTerm, setDegreeTerm] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    const filteredCourses = useMemo(() => {
        return courses.filter((item) => {
            const searchMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const clinicalMatch =
                !clinicalType ||
                item.clinicalType === clinicalType;

            const degreeMatch =
                !degreeType ||
                item.degreeType === degreeType;

            const termMatch =
                !degreeTerm ||
                item.duration === degreeTerm;

            return (
                searchMatch &&
                clinicalMatch &&
                degreeMatch &&
                termMatch
            );
        });
    }, [
        search,
        clinicalType,
        degreeType,
        degreeTerm,
    ]);

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
                    Courses
                </BreadcrumbItem>
            </Breadcrumb>

            <section className="py-3">
                <Container >

                    <Card
                        className="border-0 shadow-sm rounded-4 mb-4"
                        data-aos="fade-down"
                    >
                        <CardBody className="p-4">
                            <Row className="g-3 justify-content-center">

                                <Col xl={4} lg={4} md={12}>
                                    <InputGroup>

                                        <InputGroupText>
                                            <FaSearch />
                                        </InputGroupText>

                                        <Input
                                            placeholder="Search Courses..."
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                        />

                                    </InputGroup>
                                </Col>

                                <Col xl={2} lg={2} md={4}>
                                    <Input
                                        type="select"
                                        value={clinicalType}
                                        onChange={(e) =>
                                            setClinicalType(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Clinical Type
                                        </option>

                                        <option value="Clinical">
                                            Clinical
                                        </option>

                                        <option value="Pre Clinical">
                                            Pre Clinical
                                        </option>

                                        <option value="Para Clinical">
                                            Para Clinical
                                        </option>
                                    </Input>
                                </Col>

                                <Col xl={2} lg={2} md={4}>
                                    <Input
                                        type="select"
                                        value={degreeType}
                                        onChange={(e) =>
                                            setDegreeType(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Degree Type
                                        </option>

                                        <option value="Degree">
                                            Degree
                                        </option>
                                    </Input>
                                </Col>

                                <Col xl={2} lg={2} md={4}>
                                    <Input
                                        type="select"
                                        value={degreeTerm}
                                        onChange={(e) =>
                                            setDegreeTerm(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Degree Term
                                        </option>

                                        <option value="3 Years">
                                            3 Years
                                        </option>
                                    </Input>
                                </Col>

                                <Col xl={2} lg={2} md={12}>
                                    <Button
                                        color="danger"
                                        className="w-100 st-bg"
                                        onClick={() => {
                                            setSearch("");
                                            setClinicalType("");
                                            setDegreeType("");
                                            setDegreeTerm("");
                                        }}
                                    >
                                        Reset
                                    </Button>
                                </Col>

                            </Row>



                        </CardBody>
                    </Card>

                    <div className="text-start my-2 ">
                        <Badge
                            color="light"
                            pill
                            className="px-4 py-2 text-dark "
                        >
                            {filteredCourses.length} Courses Found
                        </Badge>
                    </div>
                    <Row className="g-4">

                        {filteredCourses.map((course) => (
                            <Col
                                key={course.id}
                                xxl={3}
                                xl={3}
                                lg={4}
                                md={6}
                                sm={6}
                                xs={12}
                                data-aos="zoom-in"
                            >
                                <Card
                                    className="border-0 shadow-sm rounded-4 h-100"
                                    style={{
                                        transition: "0.3s",
                                    }}
                                >
                                    <CardBody className="p-4 d-flex flex-column">

                                        <div className="d-flex justify-content-between align-items-start mb-3">

                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-4"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    background:
                                                        "rgba(13,110,253,.10)",
                                                }}
                                            >
                                                <FaGraduationCap
                                                    size={24}
                                                    className="text-primary"
                                                />
                                            </div>

                                            <Badge color="info">
                                                {course.clinicalType}
                                            </Badge>

                                        </div>

                                        <h5
                                            className="fw-bold mb-3"
                                            style={{
                                                minHeight: "55px",
                                                lineHeight: "26px",
                                            }}
                                        >
                                            {course.name}
                                        </h5>

                                        <div className="small text-muted mb-2">
                                            <FaBookOpen className="me-2 text-primary" />
                                            {course.degreeType}
                                        </div>

                                        <div className="small text-muted mb-3">
                                            <FaClock className="me-2 text-primary" />
                                            {course.duration}
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                </Container>
            </section>

        </StudentLayoutWrapper>
    );
};

export default CoursesPage;