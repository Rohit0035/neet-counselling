"use client";

import {
  Modal,
  ModalBody,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  FormGroup,
  Input,
} from "reactstrap";

import {
  FaBoxOpen,
  FaHeadset,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const PlanFeatureModal = ({ isOpen, toggle }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="xl"
    >
      <ModalBody className="p-0">

        <Row className="g-0">

          <Col md={7} className="border-end">

            <div
              style={{
                height: "80vh",
                overflowY: "auto",
                padding: "20px",
                background: "#fafafa",
              }}
            >

              <Card className="mb-4 shadow-sm">
                <CardBody>

                  <h6 className="fw-bold mb-3">
                    Pre Counselling Package
                  </h6>

                  <Card className="mb-3 border-0 bg-light">
                    <CardBody>

                      <h5>Package Overview</h5>

                      <p className="text-muted mb-2">
                        Prepare for NEET PG 2026 with access to 2024 &
                        2025 counselling data, planning tools,
                        guidance resources and live announcements.
                      </p>

                      <small className="text-secondary">
                        Valid until NEET PG 2026 Exam Day
                      </small>

                    </CardBody>
                  </Card>

                  <Card className="border-0 bg-light">
                    <CardBody>

                      <h5>Package Validity</h5>

                      <p className="text-muted">
                        Package is valid only till NEET PG 2026 Exam
                        Day and does not include counselling data,
                        allotments, closing ranks or seat matrix.
                      </p>

                      <small className="text-info">
                        Please read before purchasing
                      </small>

                    </CardBody>
                  </Card>

                </CardBody>
              </Card>

              <Card className="shadow-sm">
                <CardBody>

                  <h6 className="fw-bold mb-3">
                    Counselling Data
                  </h6>

                  <Card className="border-0 bg-light mb-3">
                    <CardBody>

                      <h5>Counselling Overview</h5>

                      <p className="text-muted">
                        Explore all counselling and participating
                        institutes in one place with fee structure,
                        closing ranks and trends.
                      </p>

                    </CardBody>
                  </Card>

                  <Card className="border-0 bg-light">
                    <CardBody>

                      <h5>Fees, Stipend & Bonds</h5>

                      <p className="text-muted">
                        Detailed fee structure, stipend information,
                        bond duration and service rules.
                      </p>

                    </CardBody>
                  </Card>

                </CardBody>
              </Card>

            </div>

          </Col>

          <Col md={5}>

            <div className="p-4">

              <Card
                className="border-infor mb-4"
                style={{
                  borderWidth: "2px",
                }}
              >
                <CardBody>

                  <div className="d-flex align-items-center mb-3">

                    <div
                      className="st-bg text-white rounded p-2 me-3"
                    >
                      <FaBoxOpen size={22} />
                    </div>

                    <div>

                      <h5 className="mb-0">
                        NEET PG 2026
                      </h5>

                    </div>

                  </div>

                  <h1 className="text-infor fw-bold">
                    ₹1999
                  </h1>

                </CardBody>
              </Card>

              <Card className="mb-4">

                <CardBody>

                  <div className="d-flex justify-content-between">

                    <div className="d-flex">

                      <div
                        className="st-bg rounded text-white p-2 me-3"
                      >
                        <FaHeadset />
                      </div>

                      <div>

                        <div className="fw-bold">
                          Expert Guidance
                        </div>

                        <small className="text-muted">
                          Unlimited one-on-one expert calls.
                        </small>

                      </div>

                    </div>

                    <div>

                      <FormGroup switch>

                        <Input
                          type="switch"
                          defaultChecked={false}
                        />

                      </FormGroup>

                      <div className="fw-bold text-primary">
                        ₹999
                      </div>

                    </div>

                  </div>

                </CardBody>

              </Card>

              <Button
                size="lg"
                className="w-100 rounded-pill btn-sm st-bg"
              >
                Purchase Now
              </Button>

            </div>

          </Col>

        </Row>

      </ModalBody>
    </Modal>
  );
};

export default PlanFeatureModal;