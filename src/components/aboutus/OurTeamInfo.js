"use client";

import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import {
  FaUserMd,
  FaChartLine,
  FaCode,
  FaHeadset,
  FaVideo,
  FaClipboardCheck,
} from "react-icons/fa";

const teamData = [
  {
    icon: <FaUserMd size={20} />,
    title: "Medical Experts",
    desc: "Experienced doctors and mentors who guide students with accurate counselling strategies.",
  },
  {
    icon: <FaChartLine size={20} />,
    title: "Data Analysts",
    desc: "They track trends, cutoffs, and insights to help you make smarter decisions.",
  },
  {
    icon: <FaCode size={20} />,
    title: "Tech Team",
    desc: "Building fast and reliable tools to simplify your NEET counselling journey.",
  },
  {
    icon: <FaHeadset size={20} />,
    title: "Support Team",
    desc: "Always ready to assist you with queries and personalized guidance.",
  },
  {
    icon: <FaVideo size={20} />,
    title: "Content Creators",
    desc: "Crafting helpful videos, guides, and updates for better understanding.",
  },
  {
    icon: <FaClipboardCheck size={20} />,
    title: "Verification Team",
    desc: "Ensuring every piece of information is accurate and trustworthy.",
  },
];

const OurTeamInfo = () => {

  return (
    <div className="py-5 bg-white">
      <Container>

        {/* Heading */}
        <div className="text-center mb-5" data-aos="zoom-in">
          <h2 className="fw-bold mb-2">
            The People Behind The Platform
          </h2>
          <p className="text-muted mb-0">
            A lot happens behind the scenes to make NEET counselling simple.
            Meet the teams working to keep you one step ahead.
          </p>
        </div>

        <Row className="g-4">
          {teamData.map((item, index) => (
            <Col lg="2" md="6" xs="12" key={index}>
              <Card
                className="h-100 border-0 shadow-sm bg-light"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <CardBody>
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-3 st-bg text-white"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h5 className="fw-semibold mb-2">
                    {item.title}
                  </h5>

                  <p className="text-muted mb-0">
                    {item.desc}
                  </p>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default OurTeamInfo;