"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import {
  FaSearch,
  FaList,
  FaUniversity,
  FaBook,
  FaClipboardCheck,
  FaHospital,
  FaMoneyBill,
  FaMapMarkedAlt,
  FaChartLine,
} from "react-icons/fa";

import NeetImgVertical from "../../assets/images/neetug-m2.jpg";

const features = [
  {
    icon: <FaList />,
    title: "Allotments",
    desc: "Track multi-year allotments across rounds and quotas in one place.",
  },
  {
    icon: <FaSearch />,
    title: "Rank Insights",
    desc: "Analyze ranks and explore realistic admission possibilities.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Counselling Guide",
    desc: "Stay updated with key timelines and announcements.",
  },
  {
    icon: <FaChartLine />,
    title: "Cutoff Trends",
    desc: "Understand previous year trends and closing ranks.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Seat Matrix",
    desc: "Check real-time availability across colleges and quotas.",
  },
  {
    icon: <FaHospital />,
    title: "Institutions",
    desc: "Explore hospitals, facilities, and infrastructure.",
  },
  {
    icon: <FaMoneyBill />,
    title: "Fees & Bonds",
    desc: "Compare tuition fees, stipends, and service bonds.",
  },
  {
    icon: <FaBook />,
    title: "Courses",
    desc: "Browse courses with duration and recognition.",
  },
  {
    icon: <FaUniversity />,
    title: "Universities",
    desc: "Discover universities, affiliations, and details.",
  },
];

const NeetUgFeature = () => {
  return (
    <section className="">
      <Container>
        <Row>
          <Col md="4" data-aos="zoom-in"> 
            <div
              className="h-100 d-flex flex-column justify-content-between text-white p-4"
              style={{
                background: "#0b2c4a",
                borderRadius: "20px",
                minHeight: "520px",
              }}
            >
              <div>
                <h2 className="fw-bold">
                  Explore,<br /> Choose,<br /> Succeed
                </h2>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                }}
              >
                <Image
                  src={NeetImgVertical}
                  alt="doctor"
                  fill
                  className="rounded-4"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Col>

          <Col md="8" data-aos="zoom-in">
            <Row>
              {features.map((item, index) => (
                <Col sm="12" md="6" lg="6" key={index} className="mb-3">
                  <Card
                    className="border-0 shadow rounded-4 h-100"
                    style={{ minHeight: "100px" }}
                  >
                    <CardBody>
                      <div className="d-flex align-items-start">
                        <div className="text-st fs-5 me-2">
                          {item.icon}
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">{item.title}</h6>
                          <p className="text-muted small mb-0">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NeetUgFeature;