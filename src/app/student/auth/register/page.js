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

import { FaUserPlus } from "react-icons/fa";

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
                    width={100} height={280}
                    className="st-logo mx-auto"
                  />
                  <h4 className="text-muted mt-3">
                    Create your account
                  </h4>
                </div>
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
                        />
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
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          placeholder="Create password"
                          style={{
                            height: "58px",
                            borderRadius: "16px",
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12" lg="12" >
                      <FormGroup className="mb-4">
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          placeholder="Confirm password"
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
                      <FaUserPlus className="me-2" />
                      Create Account
                    </Button>
                  </div>
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