"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Row,
  Col
} from "reactstrap";

import { FaQuestionCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    id: "1",
    q: "What makes our platform different?",
    a: "We combine real-time data, expert insights, and personalized strategies to help you make confident decisions throughout your admission journey."
  },
  {
    id: "2",
    q: "Who can benefit from this service?",
    a: "Students, parents, and even repeat aspirants can benefit from structured guidance and better decision-making support."
  },
  {
    id: "3",
    q: "Is the guidance personalized?",
    a: "Yes, recommendations are tailored based on your rank, preferences, and category to maximize your outcomes."
  },
  {
    id: "4",
    q: "How reliable are the insights?",
    a: "Our insights are based on historical trends, expert validation, and continuous updates to ensure high accuracy."
  },
  {
    id: "5",
    q: "Can I join in the middle of the process?",
    a: "Absolutely. You can join anytime and still improve your strategy for upcoming rounds."
  }
];

const FaqSection = () => {
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-info bg-opacity-10">
      <Container>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontWeight: "700" }}>
            Everything You Need to Know
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            Quick answers to common questions to help you understand how everything works.
          </p>
        </div>

        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <Accordion open={open} toggle={toggle}>
              {faqData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  style={{
                    border: "none",
                    marginBottom: "12px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#fff"
                  }}
                >
                  <AccordionHeader
                    targetId={item.id}
                    style={{
                      padding: "14px 18px",
                      background: "transparent"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                      }}
                    >
                      <FaQuestionCircle color="#6366f1" />
                      <span style={{ fontSize: "16px", fontWeight: "500" }}>
                        {item.q}
                      </span>
                    </div>
                  </AccordionHeader>

                  <AccordionBody
                    accordionId={item.id}
                    style={{
                      padding: "15px 20px",
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      background: "#ffffff"
                    }}
                  >
                    {item.a}
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;