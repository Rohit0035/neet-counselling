import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import img1 from "../../assets/images/abt-m1.png";
import img2 from "../../assets/images/abt-m2.png";
import Image from "next/image";

const AbtJourney = () => {
  const data = [
    {
      title: "Grow With Our Team",
      desc: "Work with a mission-driven team helping students make smarter career decisions across the country.",
      image: img1,
      bg: "#e9e7f7",
    },
    {
      title: "Partner With Us",
      desc: "Collaborate with us to build impactful solutions and expand opportunities in the education ecosystem.",
      image: img2,
      bg: "#f5e6df",
    },
  ];

  return (
    <section className="bg-white">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ fontWeight: "700" }}>
              Be A Part of Our Journey
            </h2>
            <p
              style={{
                color: "#6c757d",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Join us in building meaningful solutions and shaping better outcomes for students nationwide.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          {data.map((item, index) => (
            <Col md="5" key={index}>
              <Card
                data-aos="zoom-in"
                style={{
                  background: item.bg,
                  border: "none",
                  borderRadius: "20px",
                  padding: "20px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <CardBody>
                  {/* Image */}
                  <div style={{ marginBottom: "15px" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        // maxHeight: "160px",
                        // objectFit: "contain",
                      }}
                    />
                  </div>

                  <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
                    {item.title}
                  </h5>

                  <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
                    {item.desc}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AbtJourney;