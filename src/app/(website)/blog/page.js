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
import Link from "next/link";
import { format } from "date-fns";

// const categories = [
//     "All",
//     "NEET UG",
//     "NEET PG",
//     "INI CET",
//     "DNB PDCET",
// ];

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
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [activeCategory, setActiveCategory] =
        useState("All");

    const [search, setSearch] = useState("");

    const fetchCategories = async () => {
        const res = await fetch("/api/website/blog-categories");
        const data = await res.json();

        setCategories([{ name: "All" }, ...data]);
    };

    const fetchBlogs = async () => {
        const res = await fetch("/api/website/blogs");
        const data = await res.json();

        setBlogs(data);
    };

    useEffect(() => {
        fetchCategories();
        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter((blog) => {
        const categoryMatch =
            activeCategory === "All" ||
            blog.category?.name.toLowerCase() === activeCategory.toLowerCase();

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
                                    activeCategory === item.name
                                        ? "info"
                                        : "light"
                                }
                                className="rounded-pill px-4 py-2  small fw-semibold border-0 shadow-sm"
                                onClick={() =>
                                    setActiveCategory(item.name)
                                }
                            >
                                {item.name}
                            </Button>
                        ))}
                    </div>
                    <Row>
                        {filteredBlogs.map((blog, index) => (
                            <Col
                                lg="4"
                                md="6"
                                className="mb-4"
                                key={blog._id}
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
                                            {blog.category?.name}
                                        </Badge>
                                    </div>

                                    {/* CONTENT */}
                                    <CardBody className="p-4 d-flex flex-column">

                                        <div className="d-flex align-items-center gap-2 text-secondary small mb-3">
                                            <FaCalendarAlt />
                                            {format(new Date(blog.createdAt.slice(0, 10)), "dd MMMM yyyy")}
                                        </div>

                                        <h4 className="fw-bold mb-3 ">
                                            {blog.title}
                                        </h4>

                                        <div className="text-secondary flex-grow-1">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        blog.description.length > 100
                                                            ? blog.description.slice(0, 100) + "..."
                                                            : blog.description,
                                                }}
                                            />
                                        </div>

                                        <Link
                                            color="dark"
                                            href={`/blog/${blog.slug}`}
                                            className="rounded-pill px-4 py-2 mt-3 d-flex align-items-center gap-2 st-bg text-white"
                                        >
                                            Read More
                                            <FaArrowRight />
                                        </Link>

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