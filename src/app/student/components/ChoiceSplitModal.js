"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Progress,
} from "reactstrap";

import { FiArrowLeft } from "react-icons/fi";

const ChoiceSplitModal = ({
  isChoiceSplitModalOpen,
  toggleChoiceSplitModal,
  onGenerateChoiceList,
}) => {
  return (
    <Modal
      isOpen={isChoiceSplitModalOpen}
      toggle={toggleChoiceSplitModal}
      centered
      scrollable
      size="lg"
    >
      <ModalHeader toggle={toggleChoiceSplitModal}>
        <small className="fw-semibold text-muted">
          Choices Split
        </small>
      </ModalHeader>

      <ModalBody className="px-4 py-3">


        <h4 className="fw-bold mb-1">
          How do you want your choices to be split?
        </h4>

        <small className="text-muted d-block mb-4">
          Your AI Rank :
          <span className="fw-bold text-dark ms-1">
            45
          </span>
        </small>


        <div
          className="shadow-sm rounded bg-white p-3 mb-4"
          style={{
            width: "250px",
            border: "1px solid #e9ecef",
          }}
        >
          <small className="text-muted d-block">
            Choices Ranging From
          </small>

          <h4
            className="fw-bold mb-0"
            style={{
              color: "#ff5a1f",
              fontSize:'14px'
            }}
          >
            Rank 14,991 - 1,394,835
          </h4>
        </div>


        <Progress
          value={100}
          color="success"
          style={{
            height: "8px",
            borderRadius: "20px",
          }}
        />

        <div className="d-flex justify-content-between mt-2 mb-4">

          <div>

            <small
              className="fw-bold d-block"
              style={{ color: "#E98A09" }}
            >
              0%
            </small>

            <small className="text-muted">
              Before Your Rank
            </small>

          </div>

          <div className="text-end">

            <small className="fw-bold text-success d-block">
              100%
            </small>

            <small className="text-muted">
              After Your Rank
            </small>

          </div>

        </div>


        <small className="text-muted d-block">
          Estimated Total Choices
        </small>

        <h4 className="fw-bold mb-4">
          93
        </h4>


        <div className="d-flex align-items-center mb-3">

          <div
            style={{
              width: 18,
              height: 18,
              background: "#E98A09",
              borderRadius: 5,
            }}
          />

          <small className="ms-3">

            Estimated choices from before your rank :

            <strong> 0</strong>

          </small>

        </div>


        <div className="d-flex align-items-center mb-4">

          <div
            style={{
              width: 18,
              height: 18,
              background: "#059669",
              borderRadius: 5,
            }}
          />

          <small className="ms-3">

            Estimated choices from after your rank :

            <strong> 93</strong>

          </small>

        </div>

        <div
          className="rounded p-3 mb-3"
          style={{
            border: "1px solid #FFC107",
            background: "#FFF8E5",
          }}
        >
          <small
            className="fw-semibold"
            style={{
              color: "#B45309",
            }}
          >
            Only 93 choices are available after your rank for this split.
          </small>
        </div>

        <div
          className="rounded p-3"
          style={{
            border: "1px solid #FFC107",
            background: "#FFF8E5",
          }}
        >
          <small
            className="fw-semibold"
            style={{
              color: "#B45309",
            }}
          >
            Only 93 matching choices are available for this split.
            You can try a different split or update your preferences.
          </small>
        </div>

      </ModalBody>

      <ModalFooter className="justify-content-between">

        <Button
          color="link"
          className="text-dark text-decoration-none"
          onClick={toggleChoiceSplitModal}
        >
          <FiArrowLeft className="me-2" />
          Back
        </Button>

        <Button
          color="danger"
          className="rounded-pill px-4 small st-bg"
          onClick={onGenerateChoiceList}
        >
          Generate Choice List
        </Button>

      </ModalFooter>

    </Modal>
  );
};

export default ChoiceSplitModal;