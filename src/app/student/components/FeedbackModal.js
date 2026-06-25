"use client";

import { useState } from "react";
import {
  Modal,
  ModalBody,
  Button,
  Input,
  Spinner,
} from "reactstrap";

import {
  FaTimes,
  FaRegSadTear,
  FaFrown,
  FaMeh,
  FaSmile,
  FaGrinStars,
} from "react-icons/fa";

const FeedbackModal = ({ isOpen, toggle }) => {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const ratings = [
    {
      value: "bad",
      label: "Bad",
      icon: <FaRegSadTear size={32} />,
      color: "#ef4444",
    },
    {
      value: "poor",
      label: "Poor",
      icon: <FaFrown size={32} />,
      color: "#f97316",
    },
    {
      value: "average",
      label: "Average",
      icon: <FaMeh size={32} />,
      color: "#eab308",
    },
    {
      value: "good",
      label: "Good",
      icon: <FaSmile size={32} />,
      color: "#22c55e",
    },
    {
      value: "excellent",
      label: "Excellent",
      icon: <FaGrinStars size={32} />,
      color: "#8b5cf6",
    },
  ];

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      console.log({
        rating: selected,
        message,
      });

      setLoading(false);
      toggle();
    }, 1500);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          background: "#fff",
        }}
      >

        <div
          style={{
            padding: "22px 28px",
            color: "#fff",
          }}
          className="d-flex justify-content-between align-items-center st-bg"
        >
          <div>
            <h4 className="mb-1 fw-bold">
              Share Your Feedback
            </h4>

            <small style={{ opacity: 0.8 }}>
              Help us improve your experience
            </small>
          </div>

          <button
            onClick={toggle}
            className="p-1"
            style={{
              border: 0,
              background: "rgba(255,255,255,.2)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              color: "#fff",
            }}
          >
            <FaTimes />
          </button>
        </div>

        <ModalBody className="p-4">
          <div
            className="mb-4 p-3"
            style={{
              background: "#F8FAFC",
              borderRadius: "16px",
            }}
          >
            We value your feedback. Tell us about your
            experience and help us build a better platform.
          </div>

          <h6 className="fw-bold mb-3">
            How was your experience?
          </h6>

          <div className="row g-3 mb-4">
            {ratings.map((item) => (
              <div
                key={item.value}
                className="col-md col-6"
              >
                <div
                  onClick={() =>
                    setSelected(item.value)
                  }
                  style={{
                    cursor: "pointer",
                    borderRadius: "18px",
                    padding: "18px",
                    textAlign: "center",
                    transition: "0.3s",
                    background:
                      selected === item.value
                        ? `${item.color}15`
                        : "#F8FAFC",
                    border:
                      selected === item.value
                        ? `2px solid ${item.color}`
                        : "2px solid transparent",
                    boxShadow:
                      selected === item.value
                        ? `0 10px 25px ${item.color}40`
                        : "none",
                  }}
                >
                  <div
                    style={{
                      color: item.color,
                      marginBottom: "10px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <small className="fw-semibold">
                    {item.label}
                  </small>
                </div>
              </div>
            ))}
          </div>

          <h6 className="fw-bold mb-2">
            Additional Comments
          </h6>

          <Input
            type="textarea"
            rows="5"
            value={message}
            maxLength={500}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Tell us what you liked, disliked, or what can be improved..."
          />

          <div className="text-end mt-2">
            <small className="text-muted">
              {message.length}/500
            </small>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button
              color="light"
              onClick={toggle}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              disabled={
                !selected || loading
              }
              onClick={handleSubmit}
              style={{
                minWidth: "140px",
              }}
            >
              {loading ? (
                <>
                  <Spinner
                    size="sm"
                    className="me-2"
                  />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </Button>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default FeedbackModal;