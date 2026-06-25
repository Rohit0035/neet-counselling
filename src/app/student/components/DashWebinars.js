"use client";

import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {
    FaPlayCircle,
    FaArrowRight,
    FaEllipsisV,
    FaBookmark,
    FaShare,
} from "react-icons/fa";

import ThumbImg from "../../../assets/images/neetug-h1.jpg";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
    {
        id: 1,
        title: "NEET PG Counselling Strategy 2025",
        image: ThumbImg,
        duration: "45 Min",
    },
    {
        id: 2,
        title: "How To Build Your Choice List",
        image: ThumbImg,
        duration: "30 Min",
    },
    {
        id: 3,
        title: "Round Wise Allotment Analysis",
        image: ThumbImg,
        duration: "52 Min",
    },
    {
        id: 4,
        title: "Closing Rank Trends Explained",
        image: ThumbImg,
        duration: "38 Min",
    },
    {
        id: 5,
        title: "Top Medical Colleges Comparison",
        image: ThumbImg,
        duration: "41 Min",
    },
];

const DashWebinars = () => {
    return (
        <section className="pt-4 pb-0">
            <div className="text-start mb-4">
                <h4 className="fw-bold">
                    Webinars & Video Guides
                </h4>

                <p className="mb-0">
                    Learn from counselling experts through webinars,
                    admission strategies, choice filling guides,
                    allotment analysis, and college selection tips.
                </p>
            </div>

            <div className="d-flex justify-content-end mb-3">
                <Link href="/videos">
                    <Button
                        size="sm"
                        color="primary"
                        className="rounded-pill st-bg"
                    >
                        View All
                    </Button>
                </Link>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <Card
                            className="border-0 shadow-sm h-100 position-relative"
                            data-aos="zoom-in"
                        >

                            <Image
                                src={video.image}
                                alt={video.title}
                                className="img-fluid rounded-top"
                            />

                            <CardBody>
                                <div className="mb-2 d-flex">
                                    <UncontrolledDropdown className="mt-0 ">
                                        <DropdownToggle
                                            color=""
                                            size="sm"
                                            caret={false}
                                            className="border-0 p-0"
                                        >
                                            <FaEllipsisV />
                                        </DropdownToggle>

                                        <DropdownMenu  className="small">
                                            <DropdownItem className="small">
                                                <Link href="#" className="text-dark">
                                                    <FaBookmark /> Save
                                                </Link>
                                            </DropdownItem>

                                            <DropdownItem className="small">
                                                <Link href="#" className="text-dark">
                                                    <FaShare /> Share
                                                </Link>

                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <span className="badge st-bg small ms-auto">
                                        <FaPlayCircle className="me-1" />
                                        {video.duration}
                                    </span>
                                </div>

                                <h6
                                    className="fw-semibold mb-3 st-txt-o"
                                    style={{
                                        minHeight: "48px",
                                    }}
                                >
                                    {video.title}
                                </h6>
                                <Link href={`/videos/${video.id}`}>
                                    <Button
                                        size="sm"
                                        color="light"
                                        className="w-100"
                                    >
                                        Watch Now
                                        <FaArrowRight className="ms-2" />
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default DashWebinars;