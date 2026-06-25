"use client";

import { useState, useMemo, useEffect } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    Nav,
    NavItem,
    NavLink,
    Badge,
    InputGroup,
    InputGroupText,
} from "reactstrap";

import {
    FaSearch,
    FaFilePdf,
    FaDownload,
    FaEye,
    FaFolderOpen,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import StudentLayoutWrapper from "../components/StudentLayout";

const ResourcesPage = () => {
    const [activeTab, setActiveTab] =
        useState("ALL");

    const [search, setSearch] =
        useState("");

    const [month, setMonth] =
        useState("Jul-2026");

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const resources = [
        {
            id: 1,
            category: "INICET",
            title:
                "INICET Jul 2026 Rank List",
            type: "PDF",
            month: "Jul-2026",
            file: "/docs/inicet.pdf",
        },
        {
            id: 2,
            category: "Notification",
            title:
                "Round 1 Counselling Notice",
            type: "PDF",
            month: "Jul-2026",
            file: "/docs/counselling.pdf",
        },
        {
            id: 3,
            category: "Institute",
            title:
                "AIIMS Delhi Seat Matrix",
            type: "PDF",
            month: "Jul-2026",
            file: "/docs/seat.pdf",
        },
        {
            id: 4,
            category: "Institute",
            title:
                "PGIMER Chandigarh Links",
            type: "PDF",
            month: "Jul-2026",
            file: "/docs/pgimer.pdf",
        },
    ];

    const filteredResources =
        useMemo(() => {
            return resources.filter(
                (item) => {
                    const searchMatch =
                        item.title
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            );

                    const monthMatch =
                        item.month === month;

                    const tabMatch =
                        activeTab === "ALL"
                            ? true
                            : item.category ===
                            activeTab;

                    return (
                        searchMatch &&
                        monthMatch &&
                        tabMatch
                    );
                }
            );
        }, [
            search,
            month,
            activeTab,
        ]);

    const handleDownload = (
        fileUrl
    ) => {
        const link =
            document.createElement("a");

        link.href = fileUrl;
        link.download = "";

        document.body.appendChild(
            link
        );

        link.click();

        document.body.removeChild(
            link
        );
    };

    return (
        <StudentLayoutWrapper>
            <Container fluid>
                <Card
                    className="border-0 shadow-sm rounded-4 mb-4 st-bg text-white"
                    data-aos="fade-down"
                >
                    <CardBody className="p-4 p-lg-5">

                        <Row className="align-items-center">

                            <Col lg={8}>
                                <Badge
                                    color="light"
                                    className="text-primary mb-3"
                                >
                                    Resource Hub
                                </Badge>

                                <h2 className="fw-bold">
                                    Medical Resources &
                                    Counselling
                                    Documents
                                </h2>

                                <p className="mb-0 text-white">
                                    Access notifications,
                                    rank lists, seat
                                    matrix, institute
                                    links and official
                                    counselling documents.
                                </p>
                            </Col>

                            <Col
                                lg={4}
                                className="text-lg-end mt-3 mt-lg-0"
                            >
                                <h1 className="fw-bold">
                                    {
                                        filteredResources.length
                                    }
                                </h1>

                                <small>
                                    Resources Available
                                </small>
                            </Col>

                        </Row>

                    </CardBody>
                </Card>

                <Card
                    className="border-0 shadow-sm rounded-4 mb-4"
                    data-aos="fade-up"
                >
                    <CardBody>

                        <Row className="g-3">

                            <Col lg={6}>
                                <InputGroup>

                                    <InputGroupText>
                                        <FaSearch />
                                    </InputGroupText>

                                    <Input
                                        placeholder="Search resources..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(
                                                e.target.value
                                            )
                                        }
                                    />

                                </InputGroup>
                            </Col>

                            <Col lg={3}>
                                <Input
                                    type="select"
                                    value={month}
                                    onChange={(e) =>
                                        setMonth(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option>
                                        Jul-2026
                                    </option>

                                    <option>
                                        Jan-2026
                                    </option>

                                    <option>
                                        Jul-2025
                                    </option>
                                </Input>
                            </Col>

                            <Col lg={3}>
                                <Button
                                    color="primary"
                                    className="w-100"
                                >
                                    Search Resources
                                </Button>
                            </Col>

                        </Row>

                    </CardBody>
                </Card>

                <Nav
                    pills
                    className="gap-2 mb-4"
                >
                    {[
                        "ALL",
                        "INICET",
                        "Notification",
                        "Institute",
                    ].map((tab) => (
                        <NavItem key={tab}>
                            <NavLink
                                className="st-bg small text-white"
                                active={
                                    activeTab === tab
                                }
                                onClick={() =>
                                    setActiveTab(tab)
                                }
                                style={{
                                    cursor:
                                        "pointer",
                                }}
                            >
                                {tab}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>

                <Row className="g-4">

                    {filteredResources.map(
                        (item) => (
                            <Col
                                lg={4}
                                md={6}
                                key={item.id}
                                data-aos="zoom-in"
                            >
                                <Card className="border-0 shadow-sm rounded-4 h-100">

                                    <CardBody className="p-4 d-flex flex-column">

                                        <div className="d-flex justify-content-between mb-3">

                                            <div
                                                className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                                style={{
                                                    width:
                                                        "60px",
                                                    height:
                                                        "60px",
                                                }}
                                            >
                                                <FaFilePdf
                                                    size={
                                                        24
                                                    }
                                                    className="text-primary"
                                                />
                                            </div>


                                            <small className="text-danger fw-bold">
                                                PDF
                                            </small>

                                        </div>

                                        <Badge
                                            color="light"
                                            className="text-dark mb-3"
                                        >
                                            {
                                                item.category
                                            }
                                        </Badge>

                                        <h6 className="fw-bold mb-3">
                                            {item.title}
                                        </h6>

                                        <div className="mt-auto d-flex gap-2">

                                            <Button
                                                color="primary"
                                                className="flex-grow-1"
                                            >
                                                <FaEye className="me-2" />
                                                View
                                            </Button>

                                            <Button
                                                color="success"
                                                onClick={() =>
                                                    handleDownload(
                                                        item.file
                                                    )
                                                }
                                            >
                                                <FaDownload />
                                            </Button>

                                        </div>

                                    </CardBody>

                                </Card>
                            </Col>
                        )
                    )}

                </Row>

            </Container>
        </StudentLayoutWrapper>
    );
};

export default ResourcesPage;