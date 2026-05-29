"use client";

import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Button,
} from "reactstrap";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
    FaImages,
    FaExpand,
    FaPlay,
    FaCameraRetro,
    FaArrowRight,
} from "react-icons/fa";

const galleryImages = [
    {
        image:
            "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
        title: "Campus Life",
        category: "University",
    },
    {
        image:
            "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
        title: "Student Activities",
        category: "Events",
    },
    {
        image:
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
        title: "Classroom Session",
        category: "Education",
    },
    {
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
        title: "Career Counseling",
        category: "Guidance",
    },
    {
        image:
            "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        title: "Scholarship Program",
        category: "Achievement",
    },
    {
        image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
        title: "Seminar Hall",
        category: "Conference",
    },
];

const GalleryIndex = () => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);


    return (
        <>
            <section
                className="py-5 overflow-hidden"
                style={{
                    background:
                        "linear-gradient(to bottom,#f8fbff 0%,#ffffff 100%)",
                }}
            >
                <Container>
                    <Row className="justify-content-center mb-5">

                        <Col lg="8" className="text-center">

                            <div data-aos="zoom-in">
{/* 
                                <button
                                    className="btn btn-primary st-bg py-1 mb-3 rounded-pill"
                                >
                                    <FaImages className="me-2" />
                                    Premium Gallery Showcase
                                </button> */}

                                <h1
                                    className="fw-bold mb-4"
                                    style={{
                                        fontSize: "clamp(2.7rem,5vw,3.3rem)",
                                        lineHeight: "1.2",
                                        color: "#111",
                                    }}
                                >
                                    Explore Our
                                    <span style={{ color: "#0d6efd" }}>
                                        {" "}Gallery
                                    </span>
                                </h1>

                                <p
                                    className="text-muted mx-auto"
                                    style={{
                                        maxWidth: "850px",
                                        fontSize: "18px",
                                        lineHeight: "1.9",
                                    }}
                                >
                                    Discover campus experiences, educational events,
                                    counseling sessions, seminars, achievements,
                                    and unforgettable student moments through our
                                    premium gallery collection.
                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">

                                    <Button
                                        className="border-0 fw-semibold btn btn-primary st-bg px-4 py-2  rounded-pill "

                                    >
                                        Explore Gallery
                                        <FaArrowRight className="ms-2" />
                                    </Button>

                                    <Button
                                        className="border-0 fw-semibold btn px-4 py-2 btn-primary rounded-pill"
                                        style={{
                                            backgroundColor: '#71c146'
                                        }}
                                    >
                                        <FaPlay className="me-2" />
                                        Watch Moments
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" mb-5 mt-5">
                        {[
                            {
                                icon: <FaImages />,
                                title: "5000+ Photos",
                                desc: "Memories & educational moments",
                                color: "#0d6efd",
                            },
                            {
                                icon: <FaCameraRetro />,
                                title: "Premium Quality",
                                desc: "High resolution gallery showcase",
                                color: "#198754",
                            },
                            {
                                icon: <FaPlay />,
                                title: "Event Coverage",
                                desc: "Seminars, campus & workshops",
                                color: "#fd7e14",
                            },
                        ].map((item, index) => (

                            <Col lg="4" md="6" key={index} className="mb-3">

                                <Card
                                    className="border-0 h-100"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={index * 150}
                                    style={{
                                        borderRadius: "30px",
                                        overflow: "hidden",
                                        background: "#fff",
                                        boxShadow:
                                            "0 15px 45px rgba(0,0,0,0.06)",
                                        transition: "0.4s",
                                    }}
                                >

                                    <CardBody className="p-4">

                                        <div
                                            className="d-flex align-items-center justify-content-center mb-4"
                                            style={{
                                                width: "85px",
                                                height: "85px",
                                                borderRadius: "25px",
                                                background: item.color,
                                                color: "#fff",
                                                fontSize: "32px",
                                            }}
                                        >
                                            {item.icon}
                                        </div>

                                        <h3 className="fw-bold mb-3">
                                            {item.title}
                                        </h3>

                                        <p
                                            className="text-muted mb-0"
                                            style={{
                                                lineHeight: "1.8",
                                            }}
                                        >
                                            {item.desc}
                                        </p>

                                    </CardBody>

                                </Card>

                            </Col>

                        ))}

                    </Row>

                    {/* GALLERY GRID */}
                    <Row className="g-4">

                        {galleryImages.map((item, i) => (

                            <Col lg="4" md="6" key={i}>

                                <div
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 100}
                                    style={{
                                        position: "relative",
                                        borderRadius: "30px",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        boxShadow:
                                            "0 20px 50px rgba(0,0,0,0.08)",
                                    }}
                                    onClick={() => {
                                        setIndex(i);
                                        setOpen(true);
                                    }}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "420px",
                                            objectFit: "cover",
                                            transition: "0.5s",
                                        }}
                                    />

                                    {/* OVERLAY */}
                                    <div
                                        className="d-flex flex-column justify-content-end"
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            padding: "30px",
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1))",
                                        }}
                                    >

                                        <div
                                            className="d-flex align-items-center justify-content-between"
                                        >

                                            <div>

                                                <Badge
                                                    pill
                                                    className="mb-3"
                                                    style={{
                                                        background:
                                                            "rgba(255,255,255,0.15)",
                                                        backdropFilter: "blur(10px)",
                                                        padding: "10px 18px",
                                                        fontSize: "13px",
                                                    }}
                                                >
                                                    {item.category}
                                                </Badge>

                                                <h5
                                                    className="fw-bold text-white mb-0"
                                                    // style={{
                                                    //     fontSize: "28px",
                                                    // }}
                                                >
                                                    {item.title}
                                                </h5>

                                            </div>

                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "50%",
                                                    background:
                                                        "rgba(255,255,255,0.18)",
                                                    backdropFilter: "blur(10px)",
                                                    color: "#fff",
                                                    fontSize: "22px",
                                                }}
                                            >
                                                <FaExpand />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                        ))}

                    </Row>

                    <Row className="mt-5">
                        <Col lg="12">

                            <div
                                className="position-relative overflow-hidden"
                                data-aos="zoom-in"
                                style={{
                                    borderRadius: "45px",
                                    background:
                                        "linear-gradient(135deg,#001f5b 0%, #0d6efd 50%, #4f46e5 100%)",
                                    padding: "50px  25px",
                                    boxShadow:
                                        "0 35px 80px rgba(13,110,253,0.30)",
                                }}
                            >

                                {/* GLOW EFFECT */}
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "350px",
                                        height: "350px",
                                        background: "rgba(255,255,255,0.08)",
                                        borderRadius: "50%",
                                        top: "-120px",
                                        right: "-100px",
                                        filter: "blur(10px)",
                                    }}
                                />

                                <div
                                    style={{
                                        position: "absolute",
                                        width: "250px",
                                        height: "250px",
                                        background: "rgba(255,255,255,0.06)",
                                        borderRadius: "50%",
                                        bottom: "-100px",
                                        left: "-80px",
                                        filter: "blur(10px)",
                                    }}
                                />

                                <Container fluid>

                                    <Row className="align-items-center">

                                        {/* LEFT CONTENT */}
                                        <Col lg="8" className="mb-3">

                                            <div
                                                className="position-relative"
                                                style={{ zIndex: 2 }}
                                            >

                                                <Badge
                                                    pill
                                                    className="px-4 py-3 mb-4"
                                                    style={{
                                                        background:
                                                            "rgba(255,255,255,0.15)",
                                                        backdropFilter: "blur(10px)",
                                                        color: "#fff",
                                                        fontSize: "14px",
                                                        letterSpacing: "1px",
                                                    }}
                                                >
                                                    ✨ Premium Educational Gallery
                                                </Badge>

                                                <h2
                                                    className="fw-bold text-white mb-4"
                                                    style={{
                                                        fontSize:
                                                            "clamp(2.5rem,5vw,3.3rem)",
                                                        lineHeight: "1.2",
                                                    }}
                                                >
                                                    Capture Every
                                                    <span
                                                        style={{
                                                            color: "#ffd54f",
                                                        }}
                                                    >
                                                        {" "}Educational Moment
                                                    </span>
                                                </h2>

                                                <p className="text-white">
                                                    Explore premium memories of campus life,
                                                    seminars, student achievements, workshops,
                                                    counseling sessions, cultural activities,
                                                    and unforgettable educational experiences
                                                    through our modern interactive gallery.
                                                </p>

                                                {/* STATS */}
                                                <div className="d-flex flex-wrap gap-4 mt-5">

                                                    {[
                                                        {
                                                            title: "5000+",
                                                            sub: "Gallery Photos",
                                                        },
                                                        {
                                                            title: "120+",
                                                            sub: "Events Covered",
                                                        },
                                                        {
                                                            title: "25K+",
                                                            sub: "Student Memories",
                                                        },
                                                    ].map((item, index) => (

                                                        <div
                                                            key={index}
                                                            style={{
                                                                background:
                                                                    "rgba(255,255,255,0.10)",
                                                                backdropFilter:
                                                                    "blur(10px)",
                                                                border:
                                                                    "1px solid rgba(255,255,255,0.12)",
                                                                borderRadius: "25px",
                                                                padding:
                                                                    "22px 30px",
                                                                minWidth: "190px",
                                                            }}
                                                        >

                                                            <h3
                                                                className="fw-bold mb-1"
                                                                style={{
                                                                    color: "#fff",
                                                                    fontSize: "34px",
                                                                }}
                                                            >
                                                                {item.title}
                                                            </h3>

                                                            <p
                                                                className="mb-0"
                                                                style={{
                                                                    color:
                                                                        "rgba(255,255,255,0.7)",
                                                                }}
                                                            >
                                                                {item.sub}
                                                            </p>

                                                        </div>

                                                    ))}

                                                </div>

                                            </div>

                                        </Col>

                                        {/* RIGHT SIDE */}
                                        <Col lg="4">

                                            <div
                                                className="position-relative text-center"
                                                style={{ zIndex: 2 }}
                                            >

                                                <div
                                                    className="mx-auto d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: "140px",
                                                        height: "140px",
                                                        borderRadius: "35px",
                                                        background:
                                                            "rgba(255,255,255,0.12)",
                                                        backdropFilter: "blur(15px)",
                                                        border:
                                                            "1px solid rgba(255,255,255,0.15)",
                                                        color: "#fff",
                                                        fontSize: "60px",
                                                        marginBottom: "30px",
                                                        boxShadow:
                                                            "0 20px 40px rgba(0,0,0,0.15)",
                                                    }}
                                                >
                                                    📸
                                                </div>

                                                <h3
                                                    className="fw-bold text-white mb-3"
                                                    style={{
                                                        fontSize: "34px",
                                                    }}
                                                >
                                                    Explore Gallery
                                                </h3>

                                                <p
                                                    style={{
                                                        color:
                                                            "rgba(255,255,255,0.75)",
                                                        lineHeight: "1.9",
                                                        fontSize: "17px",
                                                    }}
                                                >
                                                    View premium collections of educational
                                                    experiences and memorable student moments.
                                                </p>

                                                <Button
                                                    href="/contact-us"
                                                    className="border-0 fw-bold mt-4 px-4 py-3 btn btn-primary rounded-pill"
                                                >
                                                    Contact Us →
                                                </Button>

                                            </div>

                                        </Col>

                                    </Row>

                                </Container>

                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>

            {/* LIGHTBOX */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={galleryImages.map((item) => ({
                    src: item.image,
                }))}
            />
        </>
    );
};

export default GalleryIndex;