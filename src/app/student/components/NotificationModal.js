"use client";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { FiBell, FiCheck } from "react-icons/fi";


const NotificationModal = ({
  isOpen,
  toggle,
  examName,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="md"
    >
      <ModalHeader
        toggle={toggle}
        className="border-0 pb-2"
      >
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            You have new notifications
          </div>
        </div>
      </ModalHeader>

      <ModalBody className="pt-0">
        <div
          style={{
            border: "1px solid #f4c65d",
            borderRadius: 6,
            background: "#fff9e8",
            padding: 18,
          }}
        >
          <div className="d-flex align-items-start gap-3">
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 6,
                background: "#fff2c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiBell size={18} color="#555" />
            </div>

            <div className="flex-grow-1">
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 8,
                }}
              >
                NBE Update
              </div>

              <div
                style={{
                  color: "#444",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <strong>{examName}</strong> 2026 Online Exam
                Application starts from
                <br />
                01.07.2026 (5:00 PM) to
                21.07.2026 (11:55 PM)
              </div>

              <div className="text-end mt-3">
                <Button
                  color="link"
                  className="text-decoration-none p-0"
                  onClick={toggle}
                >
                  <FiCheck
                    size={14}
                    className="me-1"
                  />
                  Mark as read
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default NotificationModal;