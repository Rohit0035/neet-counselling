"use client";

import { useEffect } from "react";
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
  FaGraduationCap,
  FaCrown,
  FaRocket,
  FaCheck,
} from "react-icons/fa";

import "aos/dist/aos.css";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const DashPackages = () => {
  

  const plans = [
    {
      name: "Starter",
      icon: <FaGraduationCap />,
      price: "499",
      oldPrice: "999",
      color: "#0d6efd",
      bg: "#eff6ff",
      desc: "Perfect for students beginning their educational journey.",
      features: [
        "Admission Guidance",
        "College Recommendations",
        "Scholarship Updates",
        "Educational Resources",
        "Email Support",
        "Student Community Access",
        "Important Admission Alerts",
      ],
    },
    {
      name: "Pro",
      icon: <FaCrown />,
      price: "999",
      oldPrice: "2499",
      color: "#ff6b00",
      bg: "#fff4eb",
      popular: true,
      desc: "The most popular package for serious students.",
      features: [
        "Everything in Starter",
        "1-on-1 Career Counselling",
        "Priority Support",
        "Application Review",
        "Expert Guidance",
        "Interview Preparation",
        "Career Roadmap Planning",
        "Personalized Recommendations",
        "Priority Alerts",
        "Exclusive Webinars",
      ],
    },
    {
      name: "Advanced",
      icon: <FaRocket />,
      price: "1999",
      oldPrice: "4999",
      color: "#198754",
      bg: "#eefbf4",
      desc: "Complete mentorship and premium educational support.",
      features: [
        "Everything in Pro",
        "Dedicated Mentor",
        "Study Abroad Guidance",
        "Scholarship Planning",
        "Unlimited Counselling",
        "Profile Building",
        "Premium Resources",
        "Mock Interviews",
        "Career Tracking",
        "24/7 Priority Support",
        "Exclusive Learning Sessions",
        "Personal Success Manager",
      ],
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-start mb-5">
          <Badge
            pill
            className="px-3 py-2 mb-2 st-bg"
            color="warning"
          >
            Limited Time Offer
          </Badge>

          <h4
            className="fw-bold mb-1"
          >
            Choose Your Success Plan
          </h4>

          <p
            className="text-secondary"
          >
            Personalized guidance, expert mentorship, and educational
            resources designed to help students achieve their academic
            and career goals.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col lg={4} md={6} key={index}>
              <Card
                data-aos="zoom-in"
                className="border-0 shadow-lg h-100 overflow-hidden"
                style={{
                  borderRadius: "28px",
                  minHeight: "700px",
                  transform: plan.popular
                    ? "scale(1.04)"
                    : "scale(1)",
                  transition: "all .3s ease",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "8px",
                        background: plan.color,
                      }}
                    />

                    <Badge
                      pill
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        background: plan.color,
                        padding: "10px 18px",
                        fontSize: "12px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      MOST POPULAR
                    </Badge>
                  </>
                )}

                <CardBody className="p-4 d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "24px",
                      background: plan.bg,
                      color: plan.color,
                      fontSize: "32px",
                    }}
                  >
                    {plan.icon}
                  </div>

                  <h3 className="fw-bold mb-2">
                    {plan.name}
                  </h3>

                  <p
                    className="text-muted mb-4"
                    style={{ minHeight: "50px" }}
                  >
                    {plan.desc}
                  </p>

                  <div className="mb-4">
                    <div className="text-muted text-decoration-line-through">
                      ₹{plan.oldPrice}
                    </div>

                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: plan.color,
                      }}
                    >
                      ₹{plan.price}
                    </div>

                    <small className="text-muted">
                      One-Time Payment
                    </small>
                  </div>

                  <div
                    className="rounded-4 p-3 mb-4"
                    style={{
                      background: plan.bg,
                    }}
                  >
                    <small className="fw-semibold">
                      ✔ Instant Access
                    </small>
                    <br />
                    <small className="fw-semibold">
                      ✔ Expert Support
                    </small>
                    <br />
                    <small className="fw-semibold">
                      ✔ Student Success Tools
                    </small>
                  </div>

                  <PerfectScrollbar
                    options={{
                      suppressScrollX: true,
                    }}
                    style={{
                      height: "260px",
                    }}
                  >
                    <div className="pe-2">
                      {plan.features.map((feature, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-start mb-3"
                        >
                          <div
                            className="d-flex align-items-center justify-content-center text-white flex-shrink-0 me-3"
                            style={{
                              width: "15px",
                              height: "15px",
                              borderRadius: "50%",
                              background: plan.color,
                              fontSize: "10px",
                            }}
                          >
                            <FaCheck />
                          </div>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </PerfectScrollbar>

                  <div className="mt-auto pt-4">
                    <Button
                      className="w-100 fw-bold border-0"
                      style={{
                        background: plan.color,
                        padding: "14px",
                        borderRadius: "16px",
                        fontSize: "16px",
                      }}
                    >
                      Purchase Now
                    </Button>

                    <div className="text-center mt-3">
                      <small className="text-muted">
                        Secure Payment • Instant Access
                      </small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DashPackages;