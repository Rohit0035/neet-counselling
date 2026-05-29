
"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // DATA
  const plans = {
    neet: [
      {
        name: "Pro",
        price: "₹4499",
        color: "#1bc612",
        tag: "All India + State",
        features: [
          "Priority Call & Email Support",
          "Live Updates & Alerts",
          "Premium Webinars",
          "Advanced Rank Analysis",
        ],
      },
      {
        name: "Standard",
        price: "₹4099",
        color: "#095d9e",
        tag: "All India Only",
        features: [
          "Email Support",
          "Daily Notifications",
          "Video Guides",
          "Basic Insights",
        ],
      },
    ],

    dnb: [
      {
        name: "Standard",
        price: "₹999",
        color: "#6f42c1",
        tag: "DNB Counselling",
        features: [
          "Latest Updates & Alerts",
          "Complete Info & Insights",
        ],
        note: "Call & Email Support not available",
      },
    ],
  };

  // CARD UI
 const PlanCard = ({ plan }) => (
  <Col md="6" lg="4" data-aos="zoom-in">
    <Card
      className="border-0 shadow rounded-4 h-100 position-relative"
      style={{
        border: `1px solid ${plan.color}30`,
        background: `${plan.color}08`,
      }}
    >
      <CardBody className="d-flex flex-column p-4">

        {/* TOP LABEL */}
        <small className="text-uppercase fw-semibold mb-1" style={{ color: plan.color }}>
          {plan.tag}
        </small>

        {/* TITLE */}
        <h5 className="fw-bold mb-2" style={{ color: plan.color }}>
          {plan.name}
        </h5>

        {/* STRIP */}
        <div
          className="text-center small fw-semibold rounded-pill py-1 mb-3"
          style={{
            background: `${plan.color}20`,
            color: plan.color,
          }}
        >
          {plan.tag}
        </div>

        {/* PRICE */}
        <h2 className="fw-bold mb-0" style={{ color: plan.color }}>
          {plan.price}
        </h2>
        <small className="text-muted mb-2">
          Valid till limited period
        </small>

        {/* LINK */}
        <a href="#" className="small mb-3" style={{ color: plan.color }}>
          View all details
        </a>

        {/* FEATURES BOX */}
        <div
          className="rounded-4 p-3 mb-3"
          style={{
            border: `1.5px solid ${plan.color}`,
            background: "#fff",
          }}
        >
          <small className="fw-bold text-muted d-block mb-2">
            KEY FEATURES
          </small>

          {plan.features.map((f, i) => (
            <div key={i} className="d-flex align-items-start mb-2">

              {/* ICON CIRCLE */}
              <div
                className="me-2 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "24px",
                  height: "24px",
                  background: `${plan.color}20`,
                  color: plan.color,
                  fontSize: "12px",
                }}
              >
                <FaCheckCircle />
              </div>

              <small>{f}</small>
            </div>
          ))}
        </div>

        {/* NOTE */}
        {plan.note && (
          <div
            className="rounded-4 p-2 mb-3 small"
            style={{
              border: "1.5px solid #ff4d4f",
              color: "#ff4d4f",
              background: "#fff5f5",
            }}
          >
            {plan.note}
          </div>
        )}

        {/* CTA */}
        <Button
          className="mt-auto rounded-pill fw-semibold py-2"
          style={{
            background: plan.color,
            border: "none",
            boxShadow: `0 6px 14px ${plan.color}40`,
          }}
        >
          Explore now
        </Button>

      </CardBody>
    </Card>
  </Col>
);

  return (
    <section className="py-5 bg-light">
      <Container>

        {/* HEADER */}
        {/* <Row className="text-center mb-4">
          <Col lg="8" className="mx-auto" data-aos="zoom-in">
            <h2 className="fw-bold">
              More Than Data, for Less Than You Think
            </h2>
            <p className="text-muted">
              Choose the right package based on your counselling journey.
            </p>
          </Col>
        </Row> */}

        {/* PILLS */}
        <div className="d-flex justify-content-center mb-4">
          <Nav pills className="bg-white shadow-sm rounded-pill p-1">

            <NavItem>
              <NavLink
                className={classnames("rounded-pill px-4", {
                  active: activeTab === "1",
                })}
                onClick={() => toggle("1")}
                style={{ cursor: "pointer" }}
              >
                NEET PG
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames("rounded-pill px-4", {
                  active: activeTab === "2",
                })}
                onClick={() => toggle("2")}
                style={{ cursor: "pointer" }}
              >
                DNB PDCET
              </NavLink>
            </NavItem>

          </Nav>
        </div>

        {/* CONTENT */}
        <TabContent activeTab={activeTab}>

          {/* NEET PG (2 CARDS) */}
          <TabPane tabId="1">
            <Row className="justify-content-center g-4">
              {plans.neet.map((plan, i) => (
                <PlanCard key={i} plan={plan} />
              ))}
            </Row>
          </TabPane>

          {/* DNB (1 CARD CENTER) */}
          <TabPane tabId="2">
            <Row className="justify-content-center g-4">
              {plans.dnb.map((plan, i) => (
                <PlanCard key={i} plan={plan} />
              ))}
            </Row>
          </TabPane>

        </TabContent>

      </Container>
    </section>
  );
};

export default PricingPlan;