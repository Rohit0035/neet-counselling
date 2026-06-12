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

import {
    FaMapMarkerAlt,
    FaArrowRight,
    FaStar,
    FaUniversity,
    FaGraduationCap,
} from "react-icons/fa";
import Image from "next/image";

const categories = [
    "All",
    "Bangalore",
    "Chennai",
    "Mangalore",
    "Mysore",
    "Hyderabad",
];

const colleges = [
    {
        id: 1,
        city: "Bangalore",
        name: "Rajarajeswari Medical College",
        image:
            "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
        location: "Bangalore, Karnataka",
        rating: "4.8",
        type: "MBBS College",
        desc:
            "Known for modern medical infrastructure and quality clinical exposure. Offers advanced learning facilities with experienced faculty support.",
    },

    {
        id: 2,
        city: "Bangalore",
        name: "MS Ramaiah Medical College",
        image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
        location: "MSR Nagar, Bangalore",
        rating: "4.7",
        type: "Top Ranked College",
        desc:
            "One of Bangalore’s leading medical institutions with strong academics. Provides excellent hospital training and research opportunities.",
    },

    {
        id: 3,
        city: "Chennai",
        name: "Saveetha Medical College",
        image:
            "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop",
        location: "Chennai, Tamil Nadu",
        rating: "4.6",
        type: "Medical Institute",
        desc:
            "Recognized for innovation-driven medical education and smart classrooms. Offers extensive practical exposure and modern campus facilities.",
    },

    {
        id: 4,
        city: "Mangalore",
        name: "KMC Mangalore",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
        location: "Mangalore, Karnataka",
        rating: "4.9",
        type: "Top Medical Institute",
        desc:
            "Highly reputed for quality MBBS education and global recognition. Focuses on clinical excellence and student-centered learning.",
    },

    {
        id: 5,
        city: "Hyderabad",
        name: "Apollo Medical College",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        location: "Hyderabad, Telangana",
        rating: "4.5",
        type: "MBBS Institute",
        desc:
            "Provides strong medical academics with advanced healthcare training. Connected with multi-specialty hospital exposure for students.",
    },

    {
        id: 6,
        city: "Mysore",
        name: "JSS Medical College",
        image:
            "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
        location: "Mysore, Karnataka",
        rating: "4.8",
        type: "Medical College",
        desc:
            "Popular for its academic excellence and research-based education system. Offers a vibrant campus and experienced medical faculty.",
    },

    {
        id: 7,
        city: "Bangalore",
        name: "Kempegowda Institute of Medical Sciences",
        image:
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
        location: "Banashankari, Bangalore",
        rating: "4.7",
        type: "Healthcare Institute",
        desc:
            "Offers quality medical education with strong patient exposure programs. Known for disciplined academics and clinical training.",
    },

    {
        id: 8,
        city: "Chennai",
        name: "SRM Medical College",
        image:
            "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
        location: "Kattankulathur, Chennai",
        rating: "4.6",
        type: "Medical University",
        desc:
            "Modern medical university with advanced infrastructure and innovation labs. Encourages research, skill development, and practical learning.",
    },
];

const CollegeList = () => {

    const [activeCategory, setActiveCategory] =
        useState("All");
    const [institutes, setInstitutes] = useState([]);

    const fetchInstitutes = async () => {
        const res = await fetch("/api/website/institutes");
        const data = await res.json();

        setInstitutes(data);
    };

    useEffect(() => {
        fetchInstitutes();
    }, []);

    const filteredColleges = institutes.filter((item) => {
        return (
            activeCategory === "All" ||
            item.location.city === activeCategory
        );
    });

    return (
        <>
            <section
                className="py-5 overflow-hidden position-relative"
                style={{
                    background:
                        "linear-gradient(135deg,#071028,#0f172a,#1e3a8a)",
                }}
            >

                <Container>

                    <Row className="justify-content-center">

                        <Col lg="8" className="text-center">

                            <Badge
                                pill
                                className="px-4 py-2 mb-4 bg-info border-0"
                                style={{
                                    color: "#fff",
                                    fontSize: "14px",
                                }}
                            >
                                Top Medical Colleges
                            </Badge>

                            <h2
                                className="fw-bold text-white mb-4"
                                data-aos="fade-up"
                                style={{
                                    fontSize:
                                        "clamp(2.5rem,5vw,3.3rem)",
                                    lineHeight: "1.2",
                                }}
                            >
                                Explore Top
                                <span className="text-st ms-3">
                                    Medical Colleges
                                </span>
                            </h2>

                            <p
                                className="mx-auto text-white"
                                data-aos="fade-up"
                                style={{
                                    maxWidth: "760px",
                                }}
                            >
                                Discover top MBBS colleges in Bangalore,
                                Chennai, Hyderabad, Mangalore and other
                                leading medical education hubs across India.
                            </p>

                        </Col>

                    </Row>

                </Container>

            </section>
            <section
                className="py-5 position-relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(to bottom,#f8fbff,#ffffff)",
                }}
            >
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
                                onClick={() =>
                                    setActiveCategory(item)
                                }
                                className="border-0 fw-semibold"
                                style={{
                                    borderRadius: "60px",
                                    padding:
                                        "14px 28px",
                                    background:
                                        activeCategory === item
                                            ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                                            : "#fff",
                                    color:
                                        activeCategory === item
                                            ? "#fff"
                                            : "#fff",
                                    boxShadow:
                                        activeCategory === item
                                            ? "0 15px 35px rgba(37,99,235,0.25)"
                                            : "0 10px 25px rgba(0,0,0,0.05)",
                                    minWidth: "fit-content",
                                }}
                            >
                                {item}
                            </Button>

                        ))}
                    </div>

                    <Row className="g-4">
                        {filteredColleges.map((college, index) => (
                            <Col
                                lg="4"
                                md="6"
                                key={index}
                            >
                                <Card
                                    className="border-0 h-100 overflow-hidden"
                                    data-aos="zoom-in-up"
                                    style={{
                                        borderRadius: "32px",
                                        boxShadow:
                                            "0 20px 60px rgba(15,23,42,0.06)",
                                        transition:
                                            "all .3s ease",
                                    }}
                                >
                                    {/* IMAGE */}
                                    <div className="position-relative overflow-hidden">

                                        <Image
                                            src={college.logoImage}
                                            alt={college.name}
                                            className="w-100"
                                            height="100"
                                            width="100"
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Badge
                                            pill
                                            className="position-absolute top-0 start-0 m-3 px-3 py-2 border-0"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,0.92)",
                                                color: "#071028",
                                                fontSize: "13px",
                                            }}
                                        >
                                            {college.location.city}
                                        </Badge>
                                        <div
                                            className="position-absolute top-0 end-0 m-3 d-flex align-items-center gap-2 px-3 py-2"
                                            style={{
                                                borderRadius:
                                                    "50px",
                                                background:
                                                    "rgba(0,0,0,0.55)",
                                                color: "#fff",
                                                fontSize: "13px",
                                            }}
                                        >
                                            <FaStar
                                                style={{
                                                    color:
                                                        "#facc15",
                                                }}
                                            />
                                            {college.rating}
                                        </div>
                                    </div>

                                    <CardBody className="p-4 d-flex flex-column">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius:
                                                        "16px",
                                                    background:
                                                        "#eff6ff",
                                                    color:
                                                        "#2563eb",
                                                    fontSize:
                                                        "22px",
                                                }}
                                            >
                                                <FaUniversity />
                                            </div>
                                            {college.courses.map((course, index) => (
                                                <Badge
                                                    key={index}
                                                    pill
                                                    className="px-3 py-2 border-0 bg-info"

                                                >
                                                    {course.shortName}
                                                </Badge>
                                            ))
                                            }
                                           
                                        </div>
                                        <h4
                                            className="fw-bold mb-0"
                                            style={{
                                                lineHeight:
                                                    "1.5",
                                                color:
                                                    "#071028",
                                            }}
                                        >
                                            {college.name}
                                        </h4>
                                        <p
                                            className="mb-1 mt-0"
                                            style={{
                                                color:
                                                    "#64748b",
                                                lineHeight:
                                                    "1.9",

                                            }}
                                        >
                                            {college.type}
                                        </p>
                                        <p
                                            className="mb-2 small"
                                        >
                                            {college.about}
                                        </p>
                                        <div className="d-flex align-items-center gap-2 mb-4">
                                            <FaMapMarkerAlt
                                                style={{
                                                    color:
                                                        "#2563eb",
                                                }}
                                            />
                                            <span
                                                style={{
                                                    color:
                                                        "#475569",
                                                    fontSize:
                                                        "14px",
                                                }}
                                            >
                                                {college.location.address}, {college.location.city}
                                            </span>
                                        </div>

                                        <div className="mt-auto d-flex gap-3">
                                            <Button
                                                href="/contact-us"
                                                className="border-0 py-3 fw-semibold flex-fill btn btn-primary text-center"
                                            >
                                                View Details
                                                <FaArrowRight className="ms-2" />
                                            </Button>

                                        </div>
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

export default CollegeList;