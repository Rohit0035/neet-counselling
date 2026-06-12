
"use client";

import React, { useEffect, useState } from "react";
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
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const exams = ["NEET UG", "NEET PG", "NEET MDS", "INICET", "DNB PDCET", "NEET SS"];

const PricingPlan = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("NEET UG");
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const { data: session } = useSession();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const fetchPackages = async () => {
    const res = await fetch("/api/website/packages");
    const data = await res.json();

    setPackages(data);
    setFilteredPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    setFilteredPackages(packages.filter((item) => item.exam === activeTab));
  }, [activeTab]);

  const handlePurchase = async (plan) => {
    // Not logged in
    if (!session) {
      const callbackUrl = encodeURIComponent(window.location.href);

      router.push(
        `/student/auth/login?callbackUrl=${callbackUrl}`
      );

      return;
    }
    
    // Logged in as admin
    if (session.user.role !== "student") {
      toast.error("Only students can purchase packages");
      return;
    }

    // Continue payment
    await startPayment(plan);
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const startPayment = async (plan) => {
    const loaded = await loadRazorpay();

    if (!loaded) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    const response = await fetch(
      "/api/payment/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageId: plan._id,
        }),
      }
    );

    const order = await response.json();
    const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const options = {
      key: RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: "INR",

      order_id: order.orderId,

      name: "Your Company",

      description: plan.name,

      prefill: {
        name: session.user.name,
        email: session.user.email,
      },

      handler: async function (paymentResponse) {
        await verifyPayment(
          plan,
          paymentResponse
        );
      },

      modal: {
        ondismiss: function () {
          console.log("Payment closed");
        },
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  const verifyPayment = async (
    plan,
    paymentResponse
  ) => {
    const response = await fetch(
      "/api/payment/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          packageId: plan._id,

          razorpayOrderId:
            paymentResponse.razorpay_order_id,

          razorpayPaymentId:
            paymentResponse.razorpay_payment_id,

          razorpaySignature:
            paymentResponse.razorpay_signature,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      toast.success("Payment successful");

      // Refresh page
      window.location.reload();
    } else {
      toast.error("Payment failed");
    }
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
          {/* <small className="text-uppercase fw-semibold mb-1" style={{ color: plan.color }}>
            {plan.tag}
          </small> */}

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
          <h6 className="fw-bold mb-0" style={{ color: "gray", textDecoration: "line-through" }}>
            {plan.mrp}
          </h6>
          <h2 className="fw-bold mb-0" style={{ color: plan.color }}>
            {plan.finalPrice}
          </h2>
          <small className="text-muted mb-2">
            Valid till limited period
          </small>

          {/* LINK */}
          {/* <a href="#" className="small mb-3" style={{ color: plan.color }}>
            View all details
          </a> */}

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
            onClick={() => handlePurchase(plan)}
            className="mt-auto rounded-pill fw-semibold py-2"
          >
            Purchase Now
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

            {
              exams.map((exam, i) => (
                <NavItem key={exam}>
                  <NavLink
                    className={classnames("rounded-pill px-4", {
                      active: activeTab === exam,
                    })}
                    onClick={() => toggle(exam)}
                    style={{ cursor: "pointer" }}
                  >
                    {exam}
                  </NavLink>
                </NavItem>
              ))
            }

          </Nav>
        </div>

        <TabContent activeTab={activeTab}>
          {exams.map((exam) => (
            <TabPane tabId={exam} key={exam}>
              <Row className="justify-content-center g-4">
                {packages
                  .filter((p) => p.exam === exam)
                  .map((plan, i) => (
                    <PlanCard key={i} plan={plan} />
                  ))}
              </Row>
            </TabPane>
          ))}
        </TabContent>

      </Container>
    </section>
  );
};

export default PricingPlan;