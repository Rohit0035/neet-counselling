"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

import {
    FaSearch,
    FaPlayCircle,
    FaEllipsisV,
    FaBookmark,
    FaShare,
    FaArrowRight,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import ThumbImg from "../../../assets/images/neetug-h1.jpg";

const VideosList = () => {
    const videos = [
        {
            id: 1,
            title: "INCET JAN 2025 - Rules Of Counselling",
            image: ThumbImg,
            duration: "35 Min",
            date: "2025-01-15",
            counselling: "INCET",
            language: "English",
            category: "rules",
            slug: "incet-jan-2025-rules",
        },
        {
            id: 2,
            title: "Round Wise Rules For INCET July 2024",
            image: ThumbImg,
            duration: "42 Min",
            date: "2024-07-12",
            counselling: "INCET",
            language: "English",
            category: "roundwise",
            slug: "round-wise-rules",
        },
        {
            id: 3,
            title: "Choice Filling Strategy For NEET PG",
            image: ThumbImg,
            duration: "48 Min",
            date: "2024-09-22",
            counselling: "NEET PG",
            language: "English",
            category: "choicefilling",
            slug: "choice-filling-strategy",
        },
        {
            id: 4,
            title: "Closing Rank Analysis",
            image: ThumbImg,
            duration: "31 Min",
            date: "2024-10-15",
            counselling: "NEET PG",
            language: "Hindi",
            category: "eligibility",
            slug: "closing-rank-analysis",
        },
        {
            id: 5,
            title: "College Selection Pointers",
            image: ThumbImg,
            duration: "38 Min",
            date: "2024-11-10",
            counselling: "NEET PG",
            language: "English",
            category: "pointers",
            slug: "college-selection",
        },
        {
            id: 6,
            title: "Roster Information Explained",
            image: ThumbImg,
            duration: "29 Min",
            date: "2024-08-05",
            counselling: "INCET",
            language: "English",
            category: "roster",
            slug: "roster-information",
        },
        {
            id: 7,
            title: "Medical Seat Matrix Analysis",
            image: ThumbImg,
            duration: "40 Min",
            date: "2025-02-01",
            counselling: "NEET PG",
            language: "English",
            category: "rules",
            slug: "seat-matrix-analysis",
        },
        {
            id: 8,
            title: "Round Wise Counselling Analysis",
            image: ThumbImg,
            duration: "36 Min",
            date: "2024-12-20",
            counselling: "INCET",
            language: "English",
            category: "roundwise",
            slug: "roundwise-analysis",
        },
        {
            id: 9,
            title: "MCC Counselling Masterclass",
            image: ThumbImg,
            duration: "54 Min",
            date: "2025-01-25",
            counselling: "NEET PG",
            language: "English",
            category: "choicefilling",
            slug: "mcc-masterclass",
        },
        {
            id: 10,
            title: "Eligibility Rules Explained",
            image: ThumbImg,
            duration: "27 Min",
            date: "2024-09-05",
            counselling: "NEET PG",
            language: "Hindi",
            category: "eligibility",
            slug: "eligibility-rules",
        },
    ];

    const categories = [
        "roster",
        "pointers",
        "eligibility",
        "roundwise",
        "rules",
        "choicefilling",
    ];

    const VIDEOS_PER_PAGE = 8;

    const [search, setSearch] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [counselling, setCounselling] = useState("");
    const [language, setLanguage] = useState("");
    const [activeCategory, setActiveCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const filteredVideos = useMemo(() => {
        return videos.filter((video) => {
            const searchMatch = video.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const videoDate = new Date(video.date);

            const fromMatch =
                !fromDate ||
                videoDate >= new Date(fromDate);

            const toMatch =
                !toDate ||
                videoDate <= new Date(toDate);

            const counsellingMatch =
                !counselling ||
                video.counselling === counselling;

            const languageMatch =
                !language ||
                video.language === language;

            const categoryMatch =
                !activeCategory ||
                video.category === activeCategory;

            return (
                searchMatch &&
                fromMatch &&
                toMatch &&
                counsellingMatch &&
                languageMatch &&
                categoryMatch
            );
        });
    }, [
        search,
        fromDate,
        toDate,
        counselling,
        language,
        activeCategory,
    ]);

    const totalPages = Math.ceil(
        filteredVideos.length / VIDEOS_PER_PAGE
    );

    const currentVideos = filteredVideos.slice(
        (currentPage - 1) * VIDEOS_PER_PAGE,
        currentPage * VIDEOS_PER_PAGE
    );

    return (
        <Container fluid className="py-4">
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    Video Library
                </h2>
                <p className="text-muted">
                    Watch counselling guides,
                    admission strategies,
                    college analysis and webinars.
                </p>
            </div>
            <Row className="justify-content-center mb-3">
                <Col lg="4">
                    <div className="position-relative">
                        <Input
                            placeholder="Search Video"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="ps-5"
                        />
                        <FaSearch
                            className="position-absolute"
                            style={{
                                left: "15px",
                                top: "12px",
                                color: "#999",
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="g-2 justify-content-center mb-4">
                <Col lg="2" md="6">
                    <Input
                        type="date"
                        value={fromDate}
                        onChange={(e) => {
                            setFromDate(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </Col>
                <Col lg="2" md="6">
                    <Input
                        type="select"
                        value={counselling}
                        onChange={(e) => {
                            setCounselling(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="">
                            Select Counselling
                        </option>

                        <option value="INCET">
                            INCET
                        </option>

                        <option value="NEET PG">
                            NEET PG
                        </option>
                    </Input>
                </Col>
                <Col lg="2" md="6">
                    <Input
                        type="select"
                        value={language}
                        onChange={(e) => {
                            setLanguage(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="">
                            All Languages
                        </option>

                        <option value="English">
                            English
                        </option>
                    </Input>
                </Col>
            </Row>
            <div className="text-center mb-4">
                {categories.map((item) => (
                    <Button
                        key={item}
                        size="sm"
                        outline
                        color={
                            activeCategory === item
                                ? "primary"
                                : "secondary"
                        }
                        className="rounded-pill me-2 mb-2"
                        onClick={() => {
                            setActiveCategory(
                                activeCategory === item
                                    ? ""
                                    : item
                            );

                            setCurrentPage(1);
                        }}
                    >
                        #{item}
                    </Button>
                ))}
            </div>
            <Row className="g-3">
                {currentVideos.map((video) => (
                    <Col
                        xl="3"
                        lg="3"
                        md="6"
                        sm="6"
                        xs="12"
                        key={video.id}
                    >
                        <Card
                            className="border-0 shadow-sm h-100"
                            data-aos="fade-up"
                            style={{
                                overflow: "visible",
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <Link
                                href="/student/video-details"
                            >
                                <Image
                                    src={video.image}
                                    alt={video.title}
                                    className="img-fluid rounded-top"
                                />
                            </Link>

                            <CardBody>
                                <div className="d-flex align-items-center mb-2">
                                    <UncontrolledDropdown
                                        className=""
                                    >
                                        <DropdownToggle
                                            color=""
                                            caret={false}
                                            className="border-0 p-0 shadow-none bg-transparent"
                                        >
                                            <FaEllipsisV />
                                        </DropdownToggle>

                                        <DropdownMenu
                                            end

                                        >
                                            <DropdownItem>
                                                <Link href="#" className="small text-dark">
                                                    <FaBookmark className="me-2" />
                                                    Save
                                                </Link>
                                            </DropdownItem>

                                            <DropdownItem>
                                                <Link href="#" className="small text-dark">
                                                    <FaShare className="me-2" />
                                                    Share
                                                </Link>

                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <span className="badge bg-primary ms-auto">
                                        <FaPlayCircle className="me-1" />
                                        {video.duration}
                                    </span>
                                </div>

                                <Link
                                    href="/student/video-details"
                                    className="text-decoration-none"
                                >
                                    <h6
                                        className="fw-semibold text-dark"
                                        style={{
                                            minHeight: "55px",
                                        }}
                                    >
                                        {video.title}
                                    </h6>
                                </Link>

                                <small className="text-muted d-block mb-3">
                                    {video.date}
                                </small>

                                <Link
                                    href="/student/video-details"
                                >
                                    <Button
                                        color="light"
                                        size="sm"
                                        className="w-100"
                                    >
                                        Watch Now
                                        <FaArrowRight className="ms-2" />
                                    </Button>
                                </Link>

                            </CardBody>
                        </Card>
                    </Col>
                ))}

            </Row>
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-5">

                    <Pagination>

                        <PaginationItem
                            disabled={currentPage === 1}
                        >
                            <PaginationLink
                                previous
                                onClick={() =>
                                    setCurrentPage(
                                        currentPage - 1
                                    )
                                }
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map(
                            (_, index) => (
                                <PaginationItem
                                    key={index}
                                    active={
                                        currentPage ===
                                        index + 1
                                    }
                                >
                                    <PaginationLink
                                        onClick={() =>
                                            setCurrentPage(
                                                index + 1
                                            )
                                        }
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}

                        <PaginationItem
                            disabled={
                                currentPage === totalPages
                            }
                        >
                            <PaginationLink
                                next
                                onClick={() =>
                                    setCurrentPage(
                                        currentPage + 1
                                    )
                                }
                            />
                        </PaginationItem>

                    </Pagination>

                </div>
            )}

        </Container>
    );
};

export default VideosList;