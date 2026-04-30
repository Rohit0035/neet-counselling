import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import "../../assets/styles/testimonialMarquee.css";

const testimonialData = [
  {
    name: "Athul",
    text: "ZyNerd saved me days of research.",
  },
  {
    name: "Gampa Abhinay",
    text: "ZyNerd is the GOAT",
  },
  {
    name: "Vidhu K Nath",
    text: "Excellent worth it... thankful to ZyNerd",
  },
  {
    name: "Medha Paul",
    text: "Today, as I am a first year pgt, I want to convey my heartfelt gratitude.",
  },
  {
    name: "Arjit Singh",
    text: "Thank you, ZyNerd, for being a dedicated partner.",
  },
  {
    name: "Siddhant Kamani",
    text: "Thank you ZyNerd for helping us out.",
  },
  {
    name: "Saransh Gupta",
    text: "Great app",
  },
  {
    name: "Animesh Das",
    text: "Very good app for aspirants",
  },
];

const MarqueeRow = ({ data, reverse }) => {
  return (
    <div className={`tmq-marquee ${reverse ? "tmq-reverse" : ""}`}>
      <div className="tmq-track">
        {[...data, ...data].map((item, index) => (
          <Card className="tmq-card" key={index}>
            <CardBody className="d-flex align-items-center gap-2">
              <FaUserCircle size={28} className="tmq-icon" />
              <div>
                <p className="tmq-text mb-1">{item.text}</p>
                <small className="tmq-name">{item.name}</small>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TestimonialMarqueeSection = () => {
  return (
    <section className="tmq-wrapper py-5 bg-info bg-opacity-10">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="tmq-title">What Our Community Says</h2>
            <p className="tmq-subtitle">
              Real feedback from the community that made us India's No.1 NEET counselling platform.
            </p>
          </Col>
        </Row>
      </Container>

      <MarqueeRow data={testimonialData} />
      <MarqueeRow data={testimonialData} reverse />
    </section>
  );
};

export default TestimonialMarqueeSection;