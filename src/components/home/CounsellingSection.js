"use client";

import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

const CounsellingSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Complete Counselling Support System</h2>
          <p className="text-secondary">
            Structured insights, accurate data, and tools to guide your admission journey.
          </p>
        </div>

        {/* ROW 1 */}
        <Row className="g-4 mb-2">

          <Col lg="6" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Cut-offs & Seat Matrix</h6>

              <p className="small text-secondary">
                Understand how ranks change across rounds and predict your admission chances.
              </p>

              <Table bordered size="sm">
                <thead>
                  <tr>
                    <th>Round</th>
                    <th>General</th>
                    <th>OBC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Round 1</td>
                    <td>12,000</td>
                    <td>15,500</td>
                  </tr>
                  <tr>
                    <td>Round 2</td>
                    <td>14,200</td>
                    <td>18,000</td>
                  </tr>
                </tbody>
              </Table>

              <small className="text-muted">
                Better colleges often open in later rounds.
              </small>
            </div>
          </Col>

          <Col lg="6" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Fee, Stipend & Bond</h6>

              <ul className="small text-secondary ps-3">
                <li>Tuition fees vary from ₹8L to ₹50L</li>
                <li>Monthly stipend ranges ₹30k – ₹80k</li>
                <li>Service bond: 1–3 years</li>
              </ul>

              <Table bordered size="sm">
                <tbody>
                  <tr>
                    <td>Hostel</td>
                    <td>₹20,000/year</td>
                  </tr>
                  <tr>
                    <td>Penalty</td>
                    <td>Up to ₹40L</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>

        </Row>

        {/* ROW 2 */}
        <Row className="g-4 mb-2">

          <Col md="4" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Never Miss an Update</h6>

              <ul className="small text-secondary ps-3">
                <li>All counselling notifications</li>
                <li>Form deadlines and alerts</li>
                <li>Round-wise seat updates</li>
              </ul>

              <small className="text-muted">
                Stay updated at every step.
              </small>
            </div>
          </Col>

          <Col md="4" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Insights for All States</h6>

              <ul className="small text-secondary ps-3">
                <li>All India & State counselling</li>
                <li>Category-wise seat distribution</li>
                <li>State-specific rules & quotas</li>
              </ul>

              <Table bordered size="sm">
                <tbody>
                  <tr><td>States</td><td>20+</td></tr>
                  <tr><td>Boards</td><td>15+</td></tr>
                </tbody>
              </Table>
            </div>
          </Col>

          <Col md="4" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Webinars & Video Guides</h6>

              <ul className="small text-secondary ps-3">
                <li>Round-wise strategies</li>
                <li>Expert counselling sessions</li>
                <li>Live Q&A support</li>
              </ul>

              <small className="text-muted">
                Learn before you decide.
              </small>
            </div>
          </Col>

        </Row>

        {/* ROW 3 */}
        <Row className="g-4">

          <Col md="6" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Choice List Builder</h6>

              <ul className="small text-secondary ps-3">
                <li>AI-based priority list</li>
                <li>Safe & backup options</li>
                <li>Dream college selection</li>
              </ul>

              <Table bordered size="sm">
                <tbody>
                  <tr><td>Total Choices</td><td>250+</td></tr>
                  <tr><td>Editable</td><td>Unlimited</td></tr>
                </tbody>
              </Table>
            </div>
          </Col>

          <Col md="6" data-aos="fade-up">
            <div className="h-100 bg-white border rounded-4 p-4 shadow-sm">
              <h6 className="fw-bold mb-2">Advanced Tools</h6>

              <ul className="small text-secondary ps-3">
                <li>Seat matrix analyzer</li>
                <li>Rank predictor</li>
                <li>Admission probability tools</li>
              </ul>

              <Table bordered size="sm">
                <tbody>
                  <tr><td>Colleges</td><td>300+</td></tr>
                  <tr><td>Seats</td><td>1500+</td></tr>
                </tbody>
              </Table>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default CounsellingSection;