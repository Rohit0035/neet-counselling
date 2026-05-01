"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";

const CounsellingsHero = ({
  title,
  highlight,
  description,
  students,
  buttonText,
  image,
  icon: Icon,
  reverse = false,
  bgColor = "#e7f6ff",
}) => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "80K+", label: "Students Guided" },
    { value: "900+", label: "Colleges" },
    { value: "300K+", label: "Queries Solved" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: bgColor }}>
      <Container>
        <Row
          className={`align-items-center g-4 ${reverse ? "flex-row-reverse" : ""
            }`}
        >
          <Col lg="6">
            {students && (
              <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill st-sec-bg  shadow-sm mb-3">
                {Icon && <Icon className="me-2 text-white" />}
                <small className="fw-semibold text-white">{students}</small>
              </div>
            )}
            <h1 className="fw-bold mb-3 display-6">
              {title}{" "}
              <span className="text-st">{highlight}</span>
            </h1>
            <p className="mb-0">{description}</p>
            <Row className="g-3 mt-1">
              {stats.map((item, i) => (
                <Col xs="6" md="3" key={i} data-aos="zoom-in">
                  <div className="st-sec-bg text-white shadow-sm rounded-3 p-3 text-center h-100">
                    <h6 className="fw-bold mb-0">{item.value}</h6>
                    <small className="text-white">{item.label}</small>
                  </div>
                </Col>
              ))}
            </Row>
            <Button className="px-4 py-2 mt-4 rounded-pill d-inline-flex align-items-center border-0">
              {buttonText} <FaArrowRight className="ms-2" />
            </Button>
          </Col>
          <Col lg="6" className="text-center">
            <div className="">
              <Image
                src={image}
                alt="hero"
                className="rounded-4 w-100 h-auto"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CounsellingsHero;