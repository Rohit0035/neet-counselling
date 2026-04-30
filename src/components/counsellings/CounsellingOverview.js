"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";

const CounsellingOverview = ({
  title,
  subtitle,
  sections = [],
  bgClass = "bg-light",
}) => {
  return (
    <section className={`${bgClass}`}>
      <Container>

        {(title || subtitle) && (
          <div className="text-center mb-5" data-aos="zoom-in">
            {title && <h2 className="fw-bold">{title}</h2>}
            {subtitle && (
              <p className="text-muted mb-0">{subtitle}</p>
            )}
          </div>
        )}

        {sections.map((item, index) => (
          <Row
            key={index}
            className="align-items-start mb-5"
            data-aos="zoom-in"
          >
            <Col md="5" className="d-flex align-items-start">
              <div className="me-3">{item.icon}</div>
              <h5 className="fw-semibold mb-0">{item.title}</h5>
            </Col>

            <Col md="7">
              {item.content && (
                <p className="text-muted mb-0">{item.content}</p>
              )}

              {item.list && (
                <ul className="text-muted ps-3 mb-0">
                  {item.list.map((li, i) => (
                    <li key={i} className="mb-1">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        ))}

      </Container>
    </section>
  );
};

export default CounsellingOverview;