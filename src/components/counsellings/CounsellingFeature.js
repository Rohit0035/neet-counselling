"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const CounsellingFeature = ({
  titleLines = [],
  image,
  features = [],
  bgColor = "#0b2c4a",
  reverse = false,
}) => {
  return (
    <section className="">
      <Container>
        <Row className={reverse ? "flex-row-reverse" : ""}>
          <Col md="4" data-aos="zoom-in" className="mb-3">
            <div
              className="h-100 d-flex flex-column justify-content-between text-white p-4"
              style={{
                background: bgColor,
                borderRadius: "20px",
                minHeight: "520px",
              }}
            >
              <div>
                <h2 className="fw-bold">
                  {titleLines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                }}
              >
                <Image
                  src={image}
                  alt="feature"
                  fill
                  className="rounded-4"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Col>

         <Col md="8" data-aos="zoom-in">
  <PerfectScrollbar
    style={{
      maxHeight: "600px", // SAME as left side
      // paddingRight: "10px",
    }}
  >
    <Row>
      {features.map((item, index) => (
        <Col sm="12" md="6" key={index} className="mb-3">
          <Card
            className="border-0 shadow rounded-4"
            style={{ minHeight: "100px" }}
          >
            <CardBody>
              <div className="d-flex align-items-start">
                <div className="fs-5 me-2 text-st">
                  {item.icon}
                </div>
                <div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted small mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </PerfectScrollbar>
</Col>

        </Row>
      </Container>
    </section>
  );
};

export default CounsellingFeature;