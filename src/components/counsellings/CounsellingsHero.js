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
  bgClass = "bg-info bg-opacity-10",
  reverse = false,
}) => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className={`p-4 rounded-5 ${bgClass}`}>
          <Row className={`align-items-center ${reverse ? "flex-row-reverse" : ""}`}>

            {/* LEFT */}
            <Col md="6">
              <h2 className="fw-bold mb-3">
                {title}{" "}
                <span className="text-primary">{highlight}</span>
              </h2>

              {students && (
                <div className="d-flex align-items-center mb-3 text-primary">
                  {Icon && <Icon className="me-2" />}
                  <span>{students}</span>
                </div>
              )}

              <p className="text-muted">{description}</p>

              <Button className="d-flex align-items-center px-4 py-2 rounded-pill st-bg">
                {buttonText} <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            {/* RIGHT */}
            <Col md="6" className="text-center mt-4 mt-md-0">
              <Image
                src={image}
                alt="hero"
                className="rounded-4 w-100 h-100"
              />
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CounsellingsHero;