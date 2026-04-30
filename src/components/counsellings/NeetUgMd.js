"use client";

import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaTrophy,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaTrophy size={32} className="text-st" />,
    title: "A quick understanding of the exam",
    content:
      "NEET MDS is a national-level entrance exam for postgraduate dental programs across India. It provides a single-window opportunity for admission into both government and private institutions.",
  },
  {
    icon: <FaUserGraduate size={32} className="text-st" />,
    title: "Eligibility, authority, and importance",
    content:
      "The exam is conducted by the National Board of Examinations (NBE). Candidates must hold a BDS degree and complete internship. It is mandatory for MDS admissions.",
  },
  {
    icon: <FaBookOpen size={32} className="text-st" />,
    title: "Counselling process overview",
    list: [
      "Counselling is conducted by MCC for All India Quota",
      "States handle their own counselling rounds",
      "Multiple rounds are conducted across India",
      "Seat allotment depends on rank, preferences, and availability",
    ],
  },
];

const NeetUgMd = () => {


  return (
    <section className="bg-warning bg-opacity-10">
      <Container>
        <div className="text-center mb-5" data-aos="zoom-in">
          <h2 className="fw-bold">NEET MDS 2025 Overview</h2>
          <p className="text-muted mb-0">
            Everything you need to know about NEET MDS and how it impacts your career
          </p>
        </div>
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

export default NeetUgMd;