"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCheckCircle } from "react-icons/fa";
import aboutimg from "../../assets/images/abt-hero.png"
import Image from "next/image";

const AbtHero = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" data-aos="zoom-in" className="mb-3">
            <h4 className="fw-bold mb-2">
              We created a smarter way to
            </h4>
            <h1 className="fw-bold display-5 mb-3">
              <span className="text-st">Counselling Intelligence</span>
              <br />
              for Every NEET Aspirant
            </h1>
            <p className="text-secondary">
              Just like a medical tool is designed with precision and trust,
              our platform is built to simplify every step of your counselling journey.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-st-sec me-2 mt-1" />
                <span>Built with real counselling data and expert-backed logic.</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-st-sec me-2 mt-1" />
                <span>Designed using insights from doctors, mentors, and toppers.</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FaCheckCircle className="text-st-sec me-2 mt-1" />
                <span>Helping thousands of students make confident decisions.</span>
              </div>
            </div>
            <h5 className="fw-bold mt-4">
              Built for clarity. Trusted for results.
              <br />
              <span className="text-st-sec">Your complete NEET counselling partner.</span>
            </h5>
          </Col>
          <Col lg="6" className="text-center mt-4 mt-lg-0" data-aos="zoom-in">
            <div
              className="position-relative d-inline-block "
             
            >
              <Image
                src={aboutimg}
                alt="doctor"
                className="img-fluid rounded-4"
              />

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AbtHero;