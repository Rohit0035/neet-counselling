"use client";

import React from "react";

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
const slides = [
  {
    title: "Reset Your Password",
    desc: "Recover your account securely and continue your preparation journey.",
    img: AuthA,
  },
  {
    title: "Stay Connected",
    desc: "Access NEET, PG and INI CET resources anytime after resetting your password.",
    img: AuthB,
  },
];

const ForgotPassword = () => {
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

          {/* Left Slider */}
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
                          alt="forgot-password"
                          width={250}
                          height={250}
                          className="w-100"
                        //   style={{ maxHeight: "230px" }}
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
                    width={100}
                    height={280}
                    className="st-logo mx-auto"
                  />
                  <h4 className="text-muted mt-3">
                    Forgot Password
                  </h4>
                  <p className="text-muted small">
                    Enter your registered email to receive a password reset link.
                  </p>
                </div>
                <Form>
                  <Row>
                    <Col md="12" lg="12">
                      <FormGroup className="mb-4">
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          placeholder="Enter your registered email"
                          style={{
                            height: "58px",
                            borderRadius: "16px",
                          }}
                        />

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
                    >
                      Send Reset Link
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Link
                      href="/student/auth/login"
                      className="text-decoration-none fw-semibold text-st small"
                    >
                      Back to Login
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

export default ForgotPassword;