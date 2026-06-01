"use client";

import React, { useEffect } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    Form,
    FormGroup,
    Label,
} from "reactstrap";

import {
    FaLock,
    FaWhatsapp,
} from "react-icons/fa";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    Navigation,
    Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import Logo from "@/assets/images/logo-dark.png"
import Link from "next/link";
import AuthA from "@/assets/images/auth-a.jpg"
import AuthB from "@/assets/images/auth-b.jpg"


const slides = [
    {
        title: "Comprehensive Resources & Tools",
        desc: "Access allotments, cut-offs, fees and counseling resources in one place.",
        img: AuthA,
    },
    {
        title: "Track Counseling Updates",
        desc: "Stay updated with NEET counseling schedules and notifications.",
        img: AuthB,
    },
];

const Login = () => {

    return (
        <section
            className="min-vh-100 d-flex align-items-center py-5"
            style={{
                background:
                    "linear-gradient(to right,#f8fafc,#eef4ff)",
            }}
        >

            <Container>
                <Row className="align-items-stretch g-4">
                    <Col lg="6" className="d-flex d-none d-sm-block">
                        <Swiper
                            className="w-100 h-100"
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{ delay: 3000 }}
                            loop
                        >
                            {slides.map((item, index) => (
                                <SwiperSlide key={index} className="h-100">

                                    <Card
                                        className="border-0 h-100 rounded-4"
                                    >
                                        <CardBody className="p-5 d-flex flex-column justify-content-between h-100">

                                            <div>
                                                <h2
                                                    className="fw-bold mb-2 text-st"
                                                >
                                                    {item.title}
                                                </h2>

                                                <p
                                                    className="mt-0 mb-2"
                                                >
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <div className="text-center">
                                                <Image
                                                    src={item.img}
                                                    alt="login"
                                                    className=" w-100"
                                                    width={100}
                                                    height={100}
                                                    // style={{ maxHeight: "230px" }}
                                                />
                                            </div>

                                        </CardBody>
                                    </Card>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    <Col lg="6" className="d-flex">
                        <Card
                            className="border-0 w-100 h-100 rounded-4"
                            data-aos="zoom-in"
                        >
                            <CardBody className="p-5 d-flex flex-column justify-content-center">
                                <div className="text-center mb-5">
                                    <Image src={Logo} alt="logo" className="st-logo mx-auto" width={100} height={280} />
                                    <h4 className="text-muted">Login in to continue 👋 </h4>
                                </div>
                                <Form>
                                    <FormGroup className="mb-4">
                                        <Label>Phone Number</Label>
                                        <Input
                                            placeholder="Enter phone number"
                                            style={{
                                                height: "58px",
                                                borderRadius: "16px",
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-4">
                                        <Label>Password</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter password"
                                            style={{
                                                height: "58px",
                                                borderRadius: "16px",
                                            }}
                                        />
                                    </FormGroup>
                                    <div className="d-grid gap-3">
                                        <Button
                                            className="border-0 fw-bold"
                                            style={{
                                                height: "58px",
                                                borderRadius: "16px",
                                                background: "#f97316",
                                            }}
                                        >
                                            <FaLock className="me-2" />
                                           Login
                                        </Button>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">

                                        <Link
                                            href="/student/auth/register"
                                            className="text-decoration-none fw-semibold text-st small"
                                        >
                                            Create Account
                                        </Link>

                                        <Link
                                            href="/student/auth/forgot"
                                            className="text-decoration-none fw-semibold text-st small"
                                        >
                                            Forgot Password?
                                        </Link>

                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;