"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";

export const HeroPackage  = () => {
  return (
    <section className="st-bg text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="8" data-aos="zoom-in">

            <h1 className="fw-bold mb-3 display-6">
              Smarter Counselling Starts Here
            </h1>

            <p className="mb-4 text-white">
              Choose a plan that fits your journey — powered by real-time data,
              expert insights, and proven strategies to secure your medical seat.
            </p>

            {/* <Button className="px-4 py-2 rounded-pill d-inline-flex align-items-center bg-white text-dark fw-semibold">
              Explore Plans <FaArrowRight className="ms-2" />
            </Button> */}

          </Col>
        </Row>
      </Container>
    </section>
  );
};