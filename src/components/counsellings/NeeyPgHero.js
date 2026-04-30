"use client";

import React from "react";
import Image from "next/image"; // ✅ IMPORTANT
import { Container, Row, Col, Button } from "reactstrap";
import { FaUserGraduate, FaArrowRight, FaStar } from "react-icons/fa";
import neetimghero from "../../assets/images/neetug-h1.png";

const NeeyPgHero = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="p-4 rounded-5 bg-info bg-opacity-10">
          <Row className="align-items-center">
            {/* LEFT */}
            <Col md="6">
              <h2 className="fw-bold mb-3">
                Your NEET UG rank has potential. Let’s unlock the right college for it
              </h2>

              <div className="d-flex align-items-center mb-3 text-primary">
                <FaUserGraduate className="me-2" />
                <span>5k+ Students Enrolled</span>
              </div>

              <p className="text-muted">
                Find the Right Medical Seat Based on Your Rank. The NEET UG counselling
                process can feel overwhelming but it doesn’t have to be.
              </p>

              <Button className="d-flex align-items-center px-4 py-2 rounded-pill st-bg">
                Get started <FaArrowRight className="ms-2" />
              </Button>
            </Col>

            {/* RIGHT */}
            <Col md="6" className="text-center mt-4 mt-md-0">
                {/* ✅ FIXED IMAGE */}
                <Image
                  src={neetimghero}
                  alt="doctor"
                  className="rounded-4 w-100 h-100"
                //   style={{ objectFit: "cover" }}
                />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NeeyPgHero;