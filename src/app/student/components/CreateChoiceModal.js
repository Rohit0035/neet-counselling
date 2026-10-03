"use client";

import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Button,
} from "reactstrap";

import {
    FiSearch,
    FiCheckCircle,
} from "react-icons/fi";
import PreferenceLayout from "./PreferenceLayout";


const counsellingList = [
    "All India Counselling - SS Medical",
    "Tamil Nadu Inservice Quota - SS Medical",
    "Tamil Nadu Inservice Quota - SS Medical 2",
    "Tamil Nadu Inservice Quota - SS Medical 3",
    "Tamil Nadu Inservice Quota - SS Medical 4",
];

const CreateChoiceModal = ({ open, toggle }) => {
    const [step, setStep] = useState(1);

    const [selectedCounselling, setSelectedCounselling] = useState(null);

    const [listName, setListName] = useState("");

    const [type, setType] = useState("custom");

    const resetModal = () => {
        setStep(1);
        setSelectedCounselling(null);
        setListName("");
        setType("custom");
        toggle();
    };

    const handleContinue = () => {
        if (type === "auto") {
            setStep(3);
            return;
        }

        console.log({
            counselling: selectedCounselling,
            listName,
            type,
        });

        resetModal();
    };

    return (
        <Modal
            isOpen={open}
            toggle={resetModal}
            centered
            scrollable
            size={step === 3 ? "xl" : "md"}
        >
            <ModalHeader toggle={resetModal}>
                {step === 3
                    ? "Your Preferences"
                    : "Create Choice List"}
            </ModalHeader>

            <ModalBody
                style={{
                    minHeight: step === 3 ? "80vh" : "auto",
                }}
            >

                {step === 1 && (
                    <>
                        <div className="position-relative mb-3">
                           

                            <Input
                                className="ps-4"
                                placeholder="Search Counselling"
                            />
                        </div>

                        {counsellingList.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded p-3 mb-2"
                                style={{
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    setSelectedCounselling(item);
                                    setStep(2);
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </>
                )}


                {step === 2 && (
                    <>
                        <p className="text-muted">
                            Selected :
                            <strong className="ms-2">
                                {selectedCounselling}
                            </strong>
                        </p>

                        <Input
                            className="mb-3"
                            placeholder="Enter Choice List Name"
                            value={listName}
                            onChange={(e) =>
                                setListName(e.target.value)
                            }
                        />


                        <div
                            className={`border rounded p-3 mb-3 ${type === "auto"
                                    ? "border-danger"
                                    : ""
                                }`}
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => setType("auto")}
                        >
                            <div className="d-flex justify-content-between">

                                <div>
                                    <h6 className="mb-1">
                                        Auto Generate List
                                    </h6>

                                    <small className="text-muted">
                                        AI Recommended Choice List
                                    </small>
                                </div>

                                {type === "auto" && (
                                    <FiCheckCircle
                                        color="green"
                                        size={22}
                                    />
                                )}
                            </div>
                        </div>


                        <div
                            className={`border rounded p-3 mb-4 ${type === "custom"
                                    ? "border-danger"
                                    : ""
                                }`}
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => setType("custom")}
                        >
                            <div className="d-flex justify-content-between">

                                <div>
                                    <h6 className="mb-1">
                                        Custom Choice List
                                    </h6>

                                    <small className="text-muted">
                                        Build Choice List Yourself
                                    </small>
                                </div>

                                {type === "custom" && (
                                    <FiCheckCircle
                                        color="green"
                                        size={22}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">

                            <Button
                                color="light"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </Button>

                            <Button
                                color="danger"
                                className="st-bg"
                                disabled={!listName}
                                onClick={handleContinue}
                            >
                                {type === "auto"
                                    ? "Continue"
                                    : "Create"}
                            </Button>

                        </div>
                    </>
                )}


                {step === 3 && (
                    <PreferenceLayout
                        onBack={() => setStep(2)}
                        onFinish={() => {
                            console.log("Generate AI List");

                            resetModal();
                        }}
                    />
                )}
            </ModalBody>
        </Modal>
    );
};

export default CreateChoiceModal;