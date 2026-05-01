"use client";

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Badge,
} from "reactstrap";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaVideo,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import Image from "next/image";
import pricingImg from "../../assets/images/counselling/neet-pg-m3.jpg";

const plans = [
  {
    name: "Elite Plan",
    tag: "All India + State Counselling",
    price: "₹4999",
    color: "#ff6a3d",
    features: [
      "1-on-1 counselling calls",
      "Live updates & alerts",
      "Premium webinars access",
      "Advanced cutoff analysis",
      "All India + State coverage",
    ],
  },
  {
    name: "Smart Plan",
    tag: "All India Counselling",
    price: "₹3999",
    color: "#6f42c1",
    features: [
      "Email + chat support",
      "Daily counselling alerts",
      "Recorded video guides",
      "Cutoff insights",
      "AIQ counselling only",
    ],
  },
];

const CounsellingPgPricing = () => {
  return (
    <section className="py-5 bg-light">
      <Container>

        {/* HEADER */}
        <Row className="text-center mb-5">
          <Col lg="8" className="mx-auto" data-aos="zoom-in">
            <h2 className="fw-bold">Choose Your Counselling Plan</h2>
            <p className="text-muted">
              Flexible plans designed to help you secure the best medical seat with confidence.
            </p>
          </Col>
        </Row>

        <Row className="align-items-stretch">

          {/* IMAGE SIDE */}
          <Col lg="4" data-aos="zoom-in" className="mb-2">
            <div className="h-100 bg-white rounded-4 shadow-sm p-3">
              <Image
                src={pricingImg}
                alt="counselling"
                className="rounded-4 w-100 h-100"
              />
            </div>
          </Col>

          {/* PLANS */}
          {plans.map((plan, index) => (
            <Col lg="4" key={index} data-aos="zoom-in" className="mb-2">
              <Card
                className="h-100 border-0 shadow rounded-4"
                style={{
                  borderTop: `4px solid ${plan.color}`,
                }}
              >
                <CardBody className="d-flex flex-column">

                  {/* TOP */}
                  <div className="mb-3">
                    <small className="text-muted">IKNOWLEDGE 2025</small>
                    <h5
                      className="fw-bold mt-1"
                      style={{ color: plan.color }}
                    >
                      {plan.name}
                    </h5>

                    <Badge
                      className="mt-2 bg-info bg-opacity-10"
                      style={{
                        // background: `${plan.color}20`,
                        color: plan.color,
                      }}
                    >
                      {plan.tag}
                    </Badge>
                  </div>

                  {/* PRICE */}
                  <div className="mb-3">
                    <h3
                      className="fw-bold"
                      style={{ color: plan.color }}
                    >
                      {plan.price}
                    </h3>
                    <small className="text-muted">
                      Limited time offer
                    </small>
                  </div>

                  {/* FEATURES */}
                  <div
                    className="rounded-4 p-3 mb-3"
                    style={{
                      border: `1px solid ${plan.color}`,
                    }}
                  >
                    {plan.features.map((f, i) => (
                      <div
                        key={i}
                        className="d-flex align-items-start mb-2"
                      >
                        <FaCheckCircle
                          className="me-2 mt-1"
                          style={{ color: plan.color }}
                        />
                        <small>{f}</small>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className="mt-auto rounded-pill fw-semibold"
                    style={{
                      background: plan.color,
                      border: "none",
                    }}
                  >
                    Get Started
                  </Button>

                </CardBody>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default CounsellingPgPricing;