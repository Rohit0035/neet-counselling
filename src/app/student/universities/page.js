"use client";

import React, { useMemo, useState, useEffect } from "react";
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
    FaUniversity,
    FaMapMarkerAlt,
    FaArrowRight,
    FaGraduationCap,
    FaAward,
    FaGlobe,
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const UniversitiesPage = () => {
    const universities = [
        {
            id: 1,
            name: "Postgraduate Institute of Medical Education & Research",
            state: "Chandigarh",
            type: "Central Autonomous",
            accreditation: "NAAC A++",
            slug: "pgimer",
        },
        {
            id: 2,
            name: "All India Institute of Medical Sciences, New Delhi",
            state: "Delhi",
            type: "Central Autonomous",
            accreditation: "NAAC A++",
            slug: "aiims-delhi",
        },
        {
            id: 3,
            name: "National Institute of Mental Health & Neuro Sciences",
            state: "Karnataka",
            type: "Central Autonomous",
            accreditation: "NAAC A+",
            slug: "nimhans",
        },
        {
            id: 4,
            name: "Sree Chitra Tirunal Institute",
            state: "Kerala",
            type: "Central Autonomous",
            accreditation: "NAAC A+",
            slug: "sctimst",
        },
        {
            id: 5,
            name: "Jawaharlal Institute of Postgraduate Medical Education",
            state: "Puducherry",
            type: "Central Autonomous",
            accreditation: "NAAC A+",
            slug: "jipmer",
        },
        {
            id: 6,
            name: "Delhi University",
            state: "Delhi",
            type: "Central University",
            accreditation: "NAAC A++",
            slug: "du",
        },
        {
            id: 7,
            name: "Jawaharlal Nehru University",
            state: "Delhi",
            type: "Central University",
            accreditation: "NAAC A++",
            slug: "jnu",
        },
        {
            id: 8,
            name: "Banaras Hindu University",
            state: "Uttar Pradesh",
            type: "Central University",
            accreditation: "NAAC A++",
            slug: "bhu",
        },
        {
            id: 9,
            name: "Aligarh Muslim University",
            state: "Uttar Pradesh",
            type: "Central University",
            accreditation: "NAAC A+",
            slug: "amu",
        },
        {
            id: 10,
            name: "University of Hyderabad",
            state: "Telangana",
            type: "Central University",
            accreditation: "NAAC A+",
            slug: "uoh",
        },
        {
            id: 11,
            name: "Panjab University",
            state: "Punjab",
            type: "State University",
            accreditation: "NAAC A++",
            slug: "pu",
        },
        {
            id: 12,
            name: "Anna University",
            state: "Tamil Nadu",
            type: "State University",
            accreditation: "NAAC A+",
            slug: "anna",
        },
    ];

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [state, setState] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    const filteredData = useMemo(() => {
        return universities.filter((item) => {
            const searchMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const typeMatch = !type || item.type === type;
            const stateMatch = !state || item.state === state;

            return searchMatch && typeMatch && stateMatch;
        });
    }, [search, type, state]);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, type, state]);

    const totalPages = Math.ceil(
        filteredData.length / itemsPerPage
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
            <Container>
                <Card
                    className="border-0 shadow-sm rounded-4 mb-4 mt-3"
                    data-aos="fade-down"
                >
                    <CardBody className="p-3 p-lg-3">
                        <Row className="justify-content-center">

                            <Col lg={4}>
                                <InputGroup size="sm">
                                    <InputGroupText>
                                        <FaSearch />
                                    </InputGroupText>
                                    <Input
                                    className="py-2"
                                        placeholder="Search universities..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </Col>
                            <Col lg={4}>
                                <Input
                                    type="select"
                                    value={type}
                                    onChange={(e) =>
                                        setType(e.target.value)
                                    }
                                >
                                    <option value="">
                                        University Type
                                    </option>

                                    {[...new Set(
                                        universities.map(
                                            (u) => u.type
                                        )
                                    )].map((item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                                </Input>
                            </Col>
                            <Col lg={4}>
                                <Input
                                    type="select"
                                    value={state}
                                    onChange={(e) =>
                                        setState(e.target.value)
                                    }
                                >
                                    <option value="">
                                        State
                                    </option>

                                    {[...new Set(
                                        universities.map(
                                            (u) => u.state
                                        )
                                    )].map((item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                                </Input>
                            </Col>
                        </Row>
                        <div className="text-start mt-2">
                            {/* <Badge
                                color="primary"
                                pill
                                className="px-4 py-2"
                            >
                                {filteredData.length} Universities Found
                            </Badge> */}
                        </div>
                    </CardBody>

                </Card>

                <Row className="g-4 mb-4">

                    <Col md={4}>
                        <Card
                            className="border-0 shadow-sm rounded-4"
                            data-aos="zoom-in"
                        >
                            <CardBody className="text-center py-4">
                                <FaUniversity
                                    size={28}
                                    className="text-primary mb-3"
                                />
                                <h3 className="fw-bold">
                                    {universities.length}
                                </h3>
                                <div className="text-muted">
                                    Universities
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            className="border-0 shadow-sm rounded-4"
                            data-aos="zoom-in"
                        >
                            <CardBody className="text-center py-4">
                                <FaMapMarkerAlt
                                    size={28}
                                    className="text-danger mb-3"
                                />
                                <h3 className="fw-bold">
                                    {
                                        [
                                            ...new Set(
                                                universities.map(
                                                    (u) => u.state
                                                )
                                            ),
                                        ].length
                                    }
                                </h3>
                                <div className="text-muted">
                                    States Covered
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            className="border-0 shadow-sm rounded-4"
                            data-aos="zoom-in"
                        >
                            <CardBody className="text-center py-4">
                                <FaAward
                                    size={28}
                                    className="text-success mb-3"
                                />
                                <h3 className="fw-bold">
                                    100%
                                </h3>
                                <div className="text-muted">
                                    Accredited
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Row className="g-4">

                    {paginatedData.map((item, index) => (
                        <Col
                            xl={4}
                            lg={4}
                            md={6}
                            key={item.id}
                        >
                            <Card
                                className="border-0 shadow-sm rounded-4 h-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <CardBody className="p-4 d-flex flex-column">

                                    <div className="d-flex justify-content-between mb-4">

                                        <div
                                            className="
                      bg-primary
                      bg-opacity-10
                      rounded-4
                      p-3
                      "
                                        >
                                            <FaUniversity
                                                size={22}
                                                className="text-primary"
                                            />
                                        </div>

                                        <small className="text-st">
                                            {item.accreditation}
                                        </small>

                                    </div>

                                    <h5
                                        className="fw-bold mb-3"
                                        style={{
                                            minHeight: "70px",
                                        }}
                                    >
                                        {item.name}
                                    </h5>

                                    <div className="mb-2 text-muted small">
                                        <FaMapMarkerAlt className="me-2" />
                                        {item.state}
                                    </div>

                                    <div className="mb-3 text-muted small">
                                        <FaGraduationCap className="me-2" />
                                        {item.type}
                                    </div>

                                    <div className="mb-4">
                                        <Badge
                                            color="light"
                                            className="text-dark me-2"
                                        >
                                            UGC Approved
                                        </Badge>

                                        <Badge
                                            color="light"
                                            className="text-dark"
                                        >
                                            Recognized
                                        </Badge>
                                    </div>

                                    <div className="mt-auto">

                                        <Link
                                            href={`/student/university-detail`}
                                        >
                                            <Button
                                                color="primary"
                                                size="sm"
                                                className="w-100 rounded-pill"
                                            >
                                                View University
                                                <FaArrowRight className="ms-2" />
                                            </Button>
                                        </Link>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    ))}

                </Row>

                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">

                        <ul className="pagination shadow-sm">

                            <li
                                className={`page-item ${currentPage === 1
                                    ? "disabled"
                                    : ""
                                    }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        setCurrentPage(
                                            currentPage - 1
                                        )
                                    }
                                >
                                    Previous
                                </button>
                            </li>

                            {[...Array(totalPages)].map(
                                (_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${currentPage ===
                                            index + 1
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(
                                                    index + 1
                                                )
                                            }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                )
                            )}

                            <li
                                className={`page-item ${currentPage ===
                                    totalPages
                                    ? "disabled"
                                    : ""
                                    }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        setCurrentPage(
                                            currentPage + 1
                                        )
                                    }
                                >
                                    Next
                                </button>
                            </li>

                        </ul>

                    </div>
                )}

            </Container>
        </StudentLayoutWrapper>

    );
};

export default UniversitiesPage;