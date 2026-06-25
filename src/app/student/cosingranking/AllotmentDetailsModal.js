"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from "reactstrap";

import {
  FiMapPin,
  FiBookOpen,
  FiPieChart,
  FiLayers,
} from "react-icons/fi";

const AllotmentDetailsModal = ({
  isOpen,
  toggle,
  data,
}) => {
  if (!data) return null;

  const sessionDetails = [
    {
      session: "Jan-2022",
      rounds: {
        "Round 0": "107(3)",
        "Round 1": "107(2)",
        "Round 2": "90(1)",
      },
    },

    {
      session: "Jul-2022",
      rounds: {
        "Round 0": "84(2)",
        "Round 1": "72(2)",
      },
    },

    {
      session: "Jan-2023",
      rounds: {
        "Round 0": "48(1)",
        "Round 1": "98(1)",
      },
    },

    {
      session: "Jul-2023",
      rounds: {
        "Round 0": "119(2)",
        "Round 1": "81(1)",
      },
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
      centered
        scrollable
    >
      <ModalHeader toggle={toggle}>
        Factors & Details
      </ModalHeader>

      <ModalBody className="p-4 small">

        <Row className="align-items-center mb-4">
          <Col md="12">
            <h3
              className="fw-bold mb-2"
              style={{
                lineHeight: "1.4",
              }}
            >
              {data.institute}
            </h3>

            <div className="d-flex align-items-center text-muted">
              <FiMapPin
                className="me-2"
                size={16}
              />

              <span>
                Location :
                <span className="ms-1 fw-semibold text-warning">
                  {data.location}
                </span>
              </span>
            </div>
          </Col>
        </Row>


        <Row className="g-3 mb-4">
          <Col md="4">
            <Card
              className="h-100 border"
              style={{
                borderColor: "#ffd9c7",
              }}
            >
              <CardBody>
                <div className="d-flex align-items-start">
                  <FiBookOpen
                    size={20}
                    color="#ff6b35"
                    className="me-3 mt-1"
                  />

                  <div>
                    <small className="text-muted text-uppercase">
                      Course
                    </small>

                    <h6 className="mb-0 mt-2 fw-semibold">
                      {data.course}
                    </h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card
              className="h-100 border"
              style={{
                borderColor: "#ffd9c7",
              }}
            >
              <CardBody>
                <div className="d-flex align-items-start">
                  <FiPieChart
                    size={20}
                    color="#ff6b35"
                    className="me-3 mt-1"
                  />

                  <div>
                    <small className="text-muted text-uppercase">
                      Quota
                    </small>

                    <h6 className="mb-0 mt-2 fw-semibold">
                      {data.quota}
                    </h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card
              className="h-100 border"
              style={{
                borderColor: "#ffd9c7",
              }}
            >
              <CardBody>
                <div className="d-flex align-items-start">
                  <FiLayers
                    size={20}
                    color="#ff6b35"
                    className="me-3 mt-1"
                  />

                  <div>
                    <small className="text-muted text-uppercase">
                      Category
                    </small>

                    <h6 className="mb-0 mt-2 fw-semibold">
                      {data.category}
                    </h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <div className="mb-3">
          <h6 className="fw-bold text-uppercase text-primary">
            All India Rank
          </h6>
        </div>


        <div
          className="d-flex gap-3 overflow-auto pb-2"
          style={{
            scrollbarWidth: "thin",
          }}
        >
          {sessionDetails.map(
            (item, index) => (
              <Card
                key={index}
                className="shadow-sm"
                style={{
                  minWidth: "220px",
                  border:
                    "1px solid #ffd9c7",
                }}
              >
                <CardBody>
                  <Badge
                    color="primary"
                    pill
                    className="mb-3"
                  >
                    {item.session}
                  </Badge>

                  {Object.entries(
                    item.rounds
                  ).map(
                    (
                      [round, rank],
                      idx
                    ) => (
                      <div
                        key={idx}
                        className="d-flex justify-content-between align-items-center mb-3"
                      >
                        <span className="text-muted">
                          {round}
                        </span>

                        <span
                          className="fw-semibold"
                          style={{
                            color:
                              "#0d6efd",
                          }}
                        >
                          {rank}
                        </span>
                      </div>
                    )
                  )}
                </CardBody>
              </Card>
            )
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AllotmentDetailsModal;