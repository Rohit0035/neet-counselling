"use client";

import React, { useEffect, useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Badge,
    Button,
} from "reactstrap";

import {
    FaSearch,
    FaArrowRight,
    FaCalendarAlt,
} from "react-icons/fa";

import AOS from "aos";

const categories = [
    "All",
    "NEET UG",
    "NEET PG",
    "INI CET",
    "DNB PDCET",
];

const blogs = [
    {
        id: 1,
        category: "NEET UG",
        title: "NEET 2026 Preparation Strategy",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
        date: "15 July 2026",
        desc: "Smart preparation roadmap for NEET aspirants.",
    },

    {
        id: 2,
        category: "NEET UG",
        title: "Best Biology Books for NEET",
        image:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
        date: "17 July 2026",
        desc: "Top NCERT and reference books for NEET preparation.",
    },

    {
        id: 3,
        category: "NEET PG",
        title: "NEET PG Smart Revision Plan",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
        date: "20 July 2026",
        desc: "High-yield revision techniques for NEET PG.",
    },

    {
        id: 4,
        category: "INI CET",
        title: "INI CET Exam Pattern Explained",
        image:
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
        date: "10 July 2026",
        desc: "Complete INI CET syllabus and exam structure.",
    },
];

const Blog = () => {
    const [activeCategory, setActiveCategory] =
        useState("All");

    const [search, setSearch] = useState("");


    const filteredBlogs = blogs.filter((blog) => {
        const categoryMatch =
            activeCategory === "All" ||
            blog.category === activeCategory;

        const searchMatch =
            blog.title
                .toLowerCase()
                .includes(search.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <>
            <section className="st-bg py-5">
                <Container>
                    <div
                        className="text-center "
                        data-aos="fade-up"
                    >
                        <h2 className="fw-bold fs-1 text-white">
                             Blogs
                        </h2>

                        <p className="text-secondary mt-3 text-white">
                            Explore latest NEET and medical education blogs.
                        </p>

                        <div className="position-relative mx-auto mt-4 w-50">
                            <FaSearch
                                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                            />

                            <Input
                                placeholder="Search blogs..."
                                className="rounded-pill ps-5 py-3 border-0 shadow"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-5 bg-light overflow-hidden">
                <Container>
                    <div
                        className="d-flex gap-3 overflow-auto pb-3 mb-5"
                        style={{
                            scrollbarWidth: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {categories.map((item, index) => (
                            <Button
                                key={index}
                                color={
                                    activeCategory === item
                                        ? "info"
                                        : "light"
                                }
                                className="rounded-pill px-4 py-2  small fw-semibold border-0 shadow-sm"
                                onClick={() =>
                                    setActiveCategory(item)
                                }
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                    <Row>
                        {filteredBlogs.map((blog) => (
                            <Col
                                lg="4"
                                md="6"
                                className="mb-4"
                                key={blog.id}
                            >
                                <Card
                                    className="border-0 shadow rounded-5 h-100 overflow-hidden"
                                    data-aos="zoom-in-up"
                                >

                                    <div className="position-relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-100"
                                            style={{
                                                height: "240px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <Badge
                                            color="info"
                                            pill
                                            className="position-absolute top-0 start-0 m-3 px-3 py-2"
                                        >
                                            {blog.category}
                                        </Badge>
                                    </div>

                                    {/* CONTENT */}
                                    <CardBody className="p-4 d-flex flex-column">

                                        <div className="d-flex align-items-center gap-2 text-secondary small mb-3">
                                            <FaCalendarAlt />
                                            {blog.date}
                                        </div>

                                        <h4 className="fw-bold mb-3 ">
                                            {blog.title}
                                        </h4>

                                        <p className="text-secondary flex-grow-1">
                                            {blog.desc}
                                        </p>

                                        <Button
                                            color="dark"
                                            href="/blog-detail"
                                            className="rounded-pill px-4 py-2 mt-3 d-flex align-items-center gap-2 st-bg "
                                        >
                                            Read More
                                            <FaArrowRight />
                                        </Button>

                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Container>
            </section>
        </>

    );
};

export default Blog;