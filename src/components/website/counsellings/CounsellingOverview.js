"use client";

import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const CounsellingOverview = ({
  title,
  subtitle,
  sections = [],
  bgClass = "bg-light",
}) => {
  return (
    <section className={`${bgClass} py-5`}>
      <Container>

        {/* HEADER */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg="8" data-aos="zoom-in">
            <h2 className="fw-bold mb-3">{title}</h2>
            <p className="text-muted">{subtitle}</p>
          </Col>
        </Row>

        {/* GRID CARDS */}
        <Row className="g-4">
          {sections.map((item, index) => (
            <Col md="6" lg="4" key={index} data-aos="zoom-in">

              <Card
                className="h-100 border-0 shadow-sm rounded-4"
                style={{ minHeight: "260px" }}
              >
                <CardBody className="d-flex flex-column">

                  {/* ICON */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(13,110,253,0.1)",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h5 className="fw-bold mb-2">{item.title}</h5>

                  {/* CONTENT */}
                  {item.content && (
                    <p className="text-muted small mb-2">
                      {item.content}
                    </p>
                  )}

                  {/* LIST */}
                  {item.list && (
                    <ul className="text-muted small ps-3 mt-auto">
                      {item.list.map((li, i) => (
                        <li key={i} className="mb-1">
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}

                </CardBody>
              </Card>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default CounsellingOverview;