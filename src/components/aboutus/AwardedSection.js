"use client";
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import abtawrd from "../../assets/images/abt-awd.jpg"
import Image from "next/image";
const AwardSection = () => {

  return (
    <div className="py-5 bg-warning bg-opacity-10">
      <Container>
        <Row className="align-items-center">
          <Col md="4" data-aos="zoom-in">
            <div className=" overflow-hidden">
              <Image
                src={abtawrd}
                alt="award"
                className="img-fluid w-100 rounded-4 mb-3"
              />
            </div>
          </Col>
          <Col md="8" data-aos="zoom-in">

            <p className="mb-2 fw-semibold text-dark">
              Recognized
            </p>

            <h1
              className="fw-bold mb-3"
              style={{ color: "#7a5a00", lineHeight: "1.2" }}
            >
              India’s Most Reliable NEET Counselling Platform
            </h1>

            <h4 className="mb-3 fw-semibold text-dark">
              Med Creators Summit 2025
            </h4>

            <hr style={{ borderTop: "2px solid #7a5a00", width: "100%" }} />

            <p className="text-dark mt-3" style={{ maxWidth: "95%" }}>
              ZyNerd has been acknowledged for its excellence in NEET
              counselling at the Med Creators Summit 2025 — a premier
              event uniting India’s leading medical educators and
              healthcare mentors. This recognition highlights our
              continued commitment to delivering transparent,
              accurate, and student-first guidance for aspiring doctors.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AwardSection;