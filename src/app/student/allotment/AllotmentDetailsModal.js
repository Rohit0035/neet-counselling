"use client";

import {
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Badge,
} from "reactstrap";

import {
  FiAlertTriangle,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

import {
  MdOutlineAccountBalance,
  MdOutlineCategory,
} from "react-icons/md";

import { TbTournament } from "react-icons/tb";

const AllotmentDetailsModal = ({
  isOpen,
  toggle,
  data,
}) => {
  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
      centered
    >
      <ModalHeader toggle={toggle}>
        <div className="d-flex justify-content-between align-items-center w-100">
          <span>Factors & Details</span>

          <small className="text-muted">
            <FiAlertTriangle className="me-1" />
            Spotted an error? Let us know
          </small>
        </div>
      </ModalHeader>
      <ModalBody className="p-4">
        <Row className="align-items-center mb-5">
          <Col md="1" className="text-center">
            <MdOutlineAccountBalance
              size={45}
              className="text-secondary"
            />
          </Col>
          <Col md="9">
            <h2 className="fw-bold mb-2">
              {data.institute}
            </h2>
            <div className="d-flex align-items-center gap-2 text-muted">
              <FiMapPin />
              <span>
                Location:
                <span className="text-danger fw-semibold ms-1">
                  {data.state}
                </span>
              </span>
            </div>
          </Col>
          <Col md="2" className="text-end">
            <Badge
              color="light"
              className="border border-danger text-danger fs-6 p-2"
            >
              Round {data.round} / Jul-2026
            </Badge>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="4">
            <div className="border rounded p-3 h-100">
              <div className="d-flex gap-3 align-items-center">
                <div className="bg-light rounded p-3">
                  <FiBookOpen
                    size={22}
                    className="text-danger"
                  />
                </div>
                <div>
                  <small className="text-muted d-block">
                    COURSE
                  </small>

                  <div className="fw-medium">
                    {data.course}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="border rounded p-3 h-100">
              <div className="d-flex gap-3 align-items-center">
                <div className="bg-light rounded p-3">
                  <MdOutlineAccountBalance
                    size={22}
                    className="text-danger"
                  />
                </div>

                <div>
                  <small className="text-muted d-block">
                    QUOTA
                  </small>
                  <div className="fw-medium">
                    {data.quota}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="border rounded p-3 h-100">
              <div className="d-flex gap-3 align-items-center">
                <div className="bg-light rounded p-3">
                  <MdOutlineCategory
                    size={22}
                    className="text-danger"
                  />
                </div>
                <div>
                  <small className="text-muted d-block">
                    CATEGORY
                  </small>

                  <div className="fw-medium">
                    {data.category}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="border rounded p-3 h-100">
              <div className="d-flex gap-3 align-items-center">
                <div className="bg-primary rounded p-3">
                  <TbTournament
                    size={22}
                    className="text-white"
                  />
                </div>

                <div>
                  <small className="text-muted d-block">
                    AI RANK
                  </small>

                  <div className="fw-bold fs-4">
                    {data.rank}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default AllotmentDetailsModal;