"use client";

import React, { useEffect, useState } from "react";
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
import { FaLock } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css"; 
import "swiper/css/navigation";

import Image from "next/image";
import Logo from "@/assets/images/logo-dark.png";
import Link from "next/link";
import AuthA from "@/assets/images/auth-a.jpg";
import AuthB from "@/assets/images/auth-b.jpg";
import { useRouter } from "next/navigation";
// 🔥 ADDITION 1: Import useSession hook
import { signIn, useSession } from "next-auth/react";

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
    const router = useRouter();
    
    // 🔥 ADDITION 2: Destructure status and session from useSession
    const { data: session, status } = useSession();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // 🔥 ADDITION 3: Auto-redirect if session is active
    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/student/dashboard");
        }
    }, [status, router]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "", general: "" });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async () => {
        try {
            if (!validate()) return;
            setLoading(true);
            const res = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
                role: "student",
            });

            if (res?.ok) {
                router.push("/student/dashboard");
            } else {
                setErrors({ general: "Invalid email or password" });
            }
        } catch (error) {
            console.log(error);
            setErrors({ general: "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    // 🔥 ADDITION 4: Visual safety barrier while checking session to avoid UI flash
    if (status === "loading" || status === "authenticated") {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <section
            className="min-vh-100 d-flex align-items-center py-5"
            style={{ background: "linear-gradient(to right, #f8fafc, #eef4ff)" }}
        >
            <Container>
                <Row className="align-items-stretch g-4">
                    <Col md="6" className="d-none d-md-flex flex-column justify-content-stretch">
                        <Swiper
                            className="w-100 h-100 m-0"
                            style={{ minWidth: 0, minHeight: 0 }} 
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop
                        >
                            {slides.map((item, index) => (
                                <SwiperSlide key={index} className="h-100">
                                    <Card className="border-0 h-100 rounded-4">
                                        <CardBody className="p-5 d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h2 className="fw-bold mb-2 text-st">
                                                    {item.title}
                                                </h2>
                                                <p className="mt-0 mb-2 text-muted">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="text-center mt-auto">
                                                <Image
                                                    src={item.img}
                                                    alt="login description"
                                                    className="w-100 img-fluid rounded-3"
                                                    width={250}
                                                    height={250}
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>

                    <Col xs="12" md="6" className="d-flex">
                        <Card className="border-0 w-100 h-100 rounded-4">
                            <CardBody className="p-5 d-flex flex-column justify-content-center">
                                <div className="text-center mb-5">
                                    <Image 
                                        src={Logo}
                                        alt="logo"
                                        className="st-logo mx-auto"
                                        width={300}
                                    />
                                    <h4 className="text-muted mt-3">Login in to continue 👋</h4>
                                </div>

                                {errors.general && (
                                    <div className="alert alert-danger mt-3">
                                        {errors.general}
                                    </div>
                                )}

                                <Form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                                    <FormGroup className="mb-4">
                                        <Label>Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            style={{ height: "58px", borderRadius: "16px" }}
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <div className="text-danger small mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </FormGroup>

                                    <FormGroup className="mb-4">
                                        <Label>Password</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter password"
                                            style={{ height: "58px", borderRadius: "16px" }}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && (
                                            <div className="text-danger small mt-1">
                                                {errors.password}
                                            </div>
                                        )}
                                    </FormGroup>

                                    <div className="d-grid gap-3">
                                        <Button
                                            type="submit"
                                            className="border-0 fw-bold"
                                            style={{ height: "58px", borderRadius: "16px", background: "#f97316" }}
                                            disabled={loading}
                                        >
                                            <FaLock className="me-2" /> Login
                                        </Button>
                                    </div>

                                    <div className="my-4 text-center text-muted">
                                        <span>--------- Or ---------</span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => signIn("google", { callbackUrl: "/student/dashboard" })}
                                        className="btn btn-light w-100 py-3 rounded-3 border fw-semibold d-flex align-items-center justify-content-center gap-2"
                                    >
                                        <FcGoogle size={24} /> Continue with Google
                                    </button>

                                    <div className="d-flex justify-content-between mt-4">
                                        <Link href="/student/auth/register" className="text-decoration-none fw-semibold text-st small">
                                            Create Account
                                        </Link>
                                        <Link href="/student/auth/forgot" className="text-decoration-none fw-semibold text-st small">
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