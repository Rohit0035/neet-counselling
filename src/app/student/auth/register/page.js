"use client";

import React, { useState } from "react";

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
  InputGroup,
} from "reactstrap";

import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'


import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo-dark.png";
import AuthA from "@/assets/images/auth-a.jpg"
import AuthB from "@/assets/images/auth-b.jpg"
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const slides = [
  {
    title: "Join Our Medical Platform",
    desc: "Create account and access NEET, PG, INI CET resources in one place.",
    img: AuthA,
  },
  {
    title: "Start Your Preparation Journey",
    desc: "Get expert guidance, study plans and updates for medical exams.",
    img: AuthB,
  },
];

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    if (e.target.name === "terms") {
      setFormData({
        ...formData,
        [e.target.name]: !formData.terms,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }

    // remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
      general: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    try {
      if (!validate()) return;
      setLoading(true);
      const payload = {
        ...formData,
        role: "student",
      }

      const res = await axios.post("/api/auth/register", payload);

      if (res.data) {
        alert("Account Created");

        router.push("/student/auth/login");
      }
    } catch (error) {
      setErrors({ general: error?.response?.data?.error || "Something went wrong" });
      // alert(error?.response?.data?.error || "Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

                  <Card className="border-0 h-100 rounded-4">

                    <CardBody className="p-5 d-flex flex-column justify-content-between h-100">

                      <div>
                        <h2 className="fw-bold mb-2">
                          {item.title}
                        </h2>

                        <p className="text-muted">
                          {item.desc}
                        </p>
                      </div>
                      <div className="text-center">
                        <Image
                          src={item.img}
                          alt="signup"
                          width={250}
                          height={250}
                          className="w-100"
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
            <Card className="border-0 w-100 h-100 rounded-4">
              <CardBody className="p-5 d-flex flex-column justify-content-center">
                <div className="text-center mb-4">
                  <Image
                    src={Logo}
                    alt="logo"
                    width={300}
                    // height={100}
                    className="st-logo mx-auto"
                  />
                  <h4 className="text-muted mt-3">
                    Create your account
                  </h4>
                </div>
                {errors.general && (
                  <div className="alert alert-danger mt-3">
                    {errors.general}
                  </div>
                )}
                <Form>
                  <Row>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-3">
                        <Label>Full Name</Label>
                        <Input
                          placeholder="Enter your name"
                          style={{
                            height: "58px",
                            borderRadius: "16px",
                          }}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <span className="text-danger">{errors.name}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-3">
                        <Label>Email</Label>
                        <Input
                          placeholder="Enter your email"
                          style={{
                            height: "58px",
                            borderRadius: "16px",
                          }}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <InputGroup>

                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password"
                            style={{
                              height: "58px",
                              borderRadius: "16px",
                            }}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <Button color="link" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </InputGroup>
                        {errors.password && (
                          <span className="text-danger">{errors.password}</span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-4">
                        <Label>Confirm Password</Label>
                        <InputGroup>
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            style={{
                              height: "58px",
                              borderRadius: "16px",
                            }}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <Button color="link" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </InputGroup>
                        {errors.confirmPassword && (
                          <span className="text-danger">{errors.confirmPassword}</span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-grid gap-3">
                    <Button
                      className="border-0 fw-bold"
                      style={{
                        height: "58px",
                        borderRadius: "16px",
                        background: "#f97316",
                      }}
                      onClick={handleRegister}
                    >
                      <FaUserPlus className="me-2" />
                      Create Account
                    </Button>
                  </div>
                  <div className="my-4 text-center text-muted">
                    <span>--------- Or ---------</span>
                  </div>

                  {/* GOOGLE BUTTON */}
                  <button
                    onClick={() => signIn("google", {
                      callbackUrl: "/student/dashboard",
                    })}
                    className="btn btn-light w-100"
                  >
                    <FcGoogle size={30} /> Continue with Google
                  </button>
                  <div className="d-flex justify-content-between mt-3">
                    <Link
                      href="/student/auth/login"
                      className="text-decoration-none fw-semibold text-st small"
                    >
                      Already have account?
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

export default Register;