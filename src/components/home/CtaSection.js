"use client";

import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaArrowRight, FaUserGraduate } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const CtaSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0",
        background: "#0f172a",
        overflow: "hidden"
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(59,130,246,0.3)",
          filter: "blur(120px)",
          top: "-100px",
          left: "-100px"
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "rgba(16,185,129,0.3)",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px"
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          
          {/* LEFT CONTENT */}
          <Col lg="7">
            <div data-aos="fade-right">
              
              <h1
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "1.3",
                  marginBottom: "20px"
                }}
              >
                Secure Your Medical Admission <br />
                <span style={{ color: "#3b82f6" }}>
                  with Expert Counselling Guidance
                </span>
              </h1>

              <p
                style={{
                  color: "#cbd5f5",
                  fontSize: "16px",
                  maxWidth: "520px",
                  marginBottom: "30px"
                }}
              >
                From choice filling to final seat allotment, our experts guide
                you at every step of the counselling process to maximize your
                chances of getting the best college.
              </p>

              {/* BUTTONS */}
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                
                <Button
                  style={{
                    background: "#3b82f6",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  Start Counselling <FaArrowRight />
                </Button>

                <Button
                  outline
                  style={{
                    color: "#fff",
                    borderColor: "#555",
                    padding: "12px 22px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  Talk to Expert <MdSupportAgent />
                </Button>

              </div>
            </div>
          </Col>

          {/* RIGHT CARD */}
          <Col lg="5">
            <div data-aos="zoom-in" style={{ marginTop: "30px" }}>
              
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
                }}
              >
                <FaUserGraduate size={40} color="#22c55e" />

                <h4 style={{ color: "#fff", marginTop: "15px" }}>
                  Free Counselling Session
                </h4>

                <p style={{ color: "#aaa", fontSize: "14px" }}>
                  Get personalized college prediction & guidance based on your rank.
                </p>

                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#22c55e"
                  }}
                >
                  FREE
                </div>

                <Button
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    background: "#22c55e",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px"
                  }}
                >
                  Book Now
                </Button>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CtaSection;