"use client";

import Image from "next/image";
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap";
import DashHeroImg from "../../../assets/images/dash-hero.png"

const DashboardHero = () => {
  return (
    <section className="bg-white py-3">
      <Container >
        <Card className="border-0">
          <CardBody>
            <Row className="align-items-center">
              <Col lg={6} className="mb-3" data-aos="zoom-in">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
                  NEET UG • PG • INCET Counselling
                </span>

                <h2 className="fw-bold mb-3">
                  Navigate{" "}
                  <span className="text-st">
                    INCET Counselling
                  </span>{" "}
                  with Confidence
                </h2>

                <p className="text-muted fs-6 mb-4">
                  Make informed medical admission decisions using
                  real-time counselling insights, closing ranks,
                  seat matrices, allotments and expert guidance.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  <Button className="st-bg rounded-pill btn-sm">
                    Explore Allotments
                  </Button>

                  <Button color="light" className="border rounded-pill btn-sm">
                    View Cut-Offs
                  </Button>
                </div>

                <Row className="g-3">
                  <Col xs={4}>
                    <h4 className="fw-bold mb-1">2000+</h4>
                    <small className="text-muted">
                      Institutes
                    </small>
                  </Col>

                  <Col xs={4}>
                    <h4 className="fw-bold mb-1">10L+</h4>
                    <small className="text-muted">
                      Aspirants
                    </small>
                  </Col>

                  <Col xs={4}>
                    <h4 className="fw-bold mb-1">42+</h4>
                    <small className="text-muted">
                      Counselling Rounds
                    </small>
                  </Col>
                </Row>
              </Col>

              <Col lg={6} className="mb-3">
                <div className="position-relative text-center" data-aos="zoom-in">
                  <Image
                    src={DashHeroImg}
                    alt="Medical Counselling"
                    width={420}
                    height={300}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

export default DashboardHero;