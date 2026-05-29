"use client";

import React from "react";

import {
    Container,
    Row,
    Col,
    Badge,
    Card,
    CardBody,
    Button,
} from "reactstrap";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaClock,
    FaUserAlt,
    FaArrowRight,
    FaBookmark,
} from "react-icons/fa";
import Image from "next/image";
import BlogCommentForm from "@/components/website/blogsection/BlogCommentForm";


const relatedBlogs = [
    {
        id: 1,
        title: "NEET 2026 Smart Preparation Strategy",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },

    {
        id: 2,
        title: "Top Biology Books for NEET Aspirants",
        image:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
    },

    {
        id: 3,
        title: "Medical Career Opportunities After MBBS",
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    },
];

const BlogDetail = () => {
    return (
        <section className="bg-light py-5">
            <Container>
                <Row className="">
                    <Col lg="8" className="mb-3">
                        <div className="position-relative mb-4">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop"
                                alt="blog"
                                className="w-100 rounded-5 shadow-lg"
                                width={100}
                                height={100}
                                style={{
                                    height: "500px",
                                    objectFit: "cover",
                                }}
                            />
                            <Badge
                                color="info"
                                pill
                                className="position-absolute top-0 start-0 m-4 px-4 py-3 fs-6"
                            >
                                NEET UG
                            </Badge>
                        </div>
                        <div className="mb-4">

                            <div className="d-flex flex-wrap align-items-center gap-4 mb-3 text-secondary">

                                <div className="d-flex align-items-center gap-2">
                                    <FaUserAlt />
                                    <span className="fw-semibold">
                                        Iknowledge Team
                                    </span>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <FaClock />
                                    <span>8 min read</span>
                                </div>

                            </div>

                            <h1 className="fs-1 fw-bold text-dark mb-4">
                                NEET 2026 Preparation Strategy:
                                Complete Guide for Top Rank
                            </h1>

                            <p className="text-secondary">
                                Discover the ultimate NEET 2026 preparation
                                roadmap with smart study plans, revision
                                techniques, topper strategies, and expert
                                guidance for medical aspirants.
                            </p>

                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-5">

                            <span className="fw-bold text-dark">
                                Share:
                            </span>

                            <Button
                                color="primary"
                                className="rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                }}
                            >
                                <FaFacebookF />
                            </Button>

                            <Button
                                color="info"
                                className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                }}
                            >
                                <FaTwitter />
                            </Button>

                            <Button
                                color="primary"
                                className="rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "#0A66C2",
                                    border: "none",
                                }}
                            >
                                <FaLinkedinIn />
                            </Button>

                            <Button
                                color="danger"
                                className="rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                }}
                            >
                                <FaInstagram />
                            </Button>

                        </div>

                        {/* BLOG CONTENT */}
                        <div className="bg-white rounded-5 shadow-sm p-3">

                            <h2 className="fw-bold mb-4">
                                Why Early Preparation Matters
                            </h2>

                            <p className="text-secondary mb-4">
                                NEET is one of India’s most competitive
                                medical entrance examinations. Starting
                                preparation early helps students build strong
                                concepts, revise effectively, and improve
                                speed and accuracy.
                            </p>

                            <p className="text-secondary mb-5">
                                Students should focus on NCERT books,
                                regular mock tests, strategic revision,
                                time management, and consistency to
                                secure top ranks in NEET 2026.
                            </p>

                            <div className="bg-warning-subtle rounded-4 p-4 border border-warning mb-5">

                                <h4 className="fw-bold mb-3">
                                    Pro Tip for NEET Aspirants
                                </h4>

                                <p className="mb-0 text-dark ">
                                    Revise Biology daily and solve at least
                                    100 MCQs every day for better accuracy
                                    and confidence.
                                </p>

                            </div>

                            <h2 className="fw-bold mb-4">
                                Best Study Strategy
                            </h2>

                            <p className="text-secondary  mb-4">
                                Divide your preparation into concept
                                building, practice sessions, mock tests,
                                and revision cycles. Make short notes
                                for quick last-minute revision.
                            </p>

                            <img
                                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop"
                                alt="study"
                                className="w-100 rounded-5 shadow mb-5"
                                style={{
                                    height: "450px",
                                    objectFit: "cover",
                                }}
                            />

                            <h2 className="fw-bold mb-4">
                                Final Thoughts
                            </h2>

                            <p className="text-secondary">
                                Consistency, smart planning, and regular
                                practice are the keys to cracking NEET
                                with a top rank. Stay motivated and
                                follow a disciplined routine.
                            </p>


                            <BlogCommentForm/>

                        </div>
                    </Col>
                    <Col lg="4" className="mb-3">
                        <div
                            className="position-sticky"
                            style={{
                                top: "100px",
                            }}
                        >

                            {/* AUTHOR CARD */}
                            {/* <Card className="border-0 shadow-lg rounded-5 mb-4">
                                <CardBody className="p-4 text-center">

                                    <img
                                        src="https://i.pravatar.cc/150"
                                        alt="author"
                                        className="rounded-circle mb-3 shadow"
                                        width="100"
                                        height="100"
                                    />

                                    <h4 className="fw-bold">
                                        Iknowledge Team
                                    </h4>

                                    <p className="text-secondary">
                                        Expert mentors helping students crack
                                        medical entrance exams with confidence.
                                    </p>

                                    <Button
                                        color="dark"
                                        className="rounded-pill px-4 py-2"
                                    >
                                        Follow Author
                                    </Button>

                                </CardBody>
                            </Card> */}
                            <Card className="border-0 shadow-lg rounded-5 mb-4">
                                <CardBody className="p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h4 className="fw-bold mb-0">
                                            Related Blogs
                                        </h4>
                                    </div>
                                    {relatedBlogs.map((blog) => (
                                        <div
                                            key={blog.id}
                                            className="d-flex gap-3 mb-4"
                                        >
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                className="rounded-4 shadow-sm"
                                                width="100"
                                                height="90"
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />

                                            <div>

                                                <h6 className="fw-bold lh-base txt-st-hide">
                                                    {blog.title}
                                                </h6>

                                                <Button
                                                    color="link"
                                                    className="p-0 text-decoration-none fw-semibold btn-sm text-st"
                                                >
                                                    Read More
                                                    <FaArrowRight className="ms-2" />
                                                </Button>

                                            </div>
                                        </div>
                                    ))}

                                </CardBody>
                            </Card>

                            {/* NEWSLETTER */}
                            <Card className="border-0 shadow-lg rounded-5 bg-dark text-white">
                                <CardBody className="p-5 text-center">

                                    <h3 className="fw-bold mb-3">
                                        Subscribe Newsletter
                                    </h3>

                                    <p className="text-light mb-4">
                                        Get latest NEET updates, counselling
                                        alerts and preparation tips directly
                                        in your inbox.
                                    </p>

                                    <Button
                                        className="rounded-pill px-4 py-3 fw-bold btn btn-primary"
                                    >
                                        Subscribe Now
                                    </Button>

                                </CardBody>
                            </Card>

                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default BlogDetail;