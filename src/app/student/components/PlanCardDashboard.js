"use client";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    FormGroup ,
    Input 
} from "reactstrap";

import {
    FaCube,
    FaPhoneAlt,
    FaChevronRight,
} from "react-icons/fa";

import { IoInformationCircleOutline } from "react-icons/io5";
import { BsToggleOff } from "react-icons/bs";
import PlanFeatureModal from "@/app/student/components/PlanFeatureModal"
import { useState } from "react";

const planData = [
    {
        exam: "NEET PG",
        plans: [
            {
                title: "NEET PG",
                year: "2026",
                price: "₹1999",
                valid: "Valid Until 29 August 2026",

                preCounselling: [
                    "Access 2024 & 2025 counselling data. Valid until 29 Aug 2026.",
                    "Upgrade to the NEET PG 2026 Counselling Package on Exam Day with ₹500 OFF.",
                ],

                expertGuidance: {
                    title: "Expert Guidance",
                    price: "₹999",
                    description:
                        "Truly unlimited, dedicated 1-on-1 phone calls and emails with our counselling experts with no limits to call frequency or duration.",
                },
            },
        ],
    },
];

const PlanCard = ({ plan }) => {

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <>
            <Col xs="12" md="12" lg="12">
                <Card
                    className="rounded-4 shadow-sm overflow-hidden"
                    style={{
                        background: "#FFF8F4",
                    }}
                >
                    <CardBody className="p-4">

                        <div className="d-flex align-items-start">
                            <div
                                className="rounded-3 d-flex align-items-center justify-content-center st-bg"
                                style={{
                                    width: 42,
                                    height: 42,
                                    color: "#fff",
                                }}
                            >
                                <FaCube size={18} />
                            </div>

                            <div className="ms-3">
                                <h5
                                    className="fw-bold mb-0 text-st"
                                >
                                    {plan.title}
                                </h5>

                                <div
                                    className="fw-bold text-start text-st"
                                    style={{
                                        fontSize: 12,
                                    }}
                                >
                                    {plan.year}
                                </div>
                            </div>
                        </div>

                        <h3
                            className="fw-bold mt-2 mb-1 text-start text-st"
                        >
                            {plan.price}
                        </h3>

                        <div className="d-flex justify-content-between align-items-center">
                            <small className="">
                                {plan.valid}
                            </small>

                            <div
                                className="d-flex align-items-center text-st"
                                style={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: 13,
                                }}
                                onClick={toggleModal}
                            >
                                Full Feature List
                                <FaChevronRight
                                    size={10}
                                    className="ms-1"
                                />
                            </div>
                        </div>

                        <div
                            className="rounded-4 p-2 mt-2"
                            style={{
                                background: "#FFF2EA",
                                border: "1px solid #FFD6BF",
                            }}
                        >
                            <div
                                className="fw-bold mb-2 small text-start"
                            >
                                <p className="mt-0 mb-0">
                                    Pre Counselling Package
                                </p>
                            </div>

                            <ul
                                className="mb-0 text-start"
                                style={{
                                    paddingLeft: 18,
                                }}
                            >
                                {plan.preCounselling.map((item, index) => (
                                    <li
                                        key={index}
                                        className="mb-2"
                                        style={{ fontSize: 13 }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Card
                            className="rounded-4 border-0 shadow-sm mt-2"
                        >
                            <CardBody>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center st-bg"
                                            style={{
                                                width: 38,
                                                height: 38,
                                                color: "#fff",
                                            }}
                                        >
                                            <FaPhoneAlt />
                                        </div>

                                        <div className="ms-3 text-start">
                                            <span
                                                className="badge rounded-pill text-st"
                                                style={{
                                                    background: "#ECE9FF",
                                                    fontSize: 10,
                                                }}
                                            >
                                                ★ Most Useful
                                            </span>

                                            <div className="d-flex align-items-start mt-1">
                                                <h6 className="fw-bold mb-0 small">
                                                    {plan.expertGuidance.title}
                                                </h6>

                                                <IoInformationCircleOutline
                                                    size={15}
                                                    className="ms-1 text-muted"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <FormGroup switch>
                                            <Input
                                                type="switch"
                                                defaultChecked={false}
                                            />
                                        </FormGroup>
                                        <div
                                            className="fw-bold mt-2 text-st"
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >
                                            {plan.expertGuidance.price}
                                        </div>
                                    </div>
                                </div>

                                <small
                                    className=" d-block mt-3"
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: '12px'
                                    }}
                                >
                                    {plan.expertGuidance.description}
                                </small>
                            </CardBody>
                        </Card>

                        <Button
                            className="w-100 rounded-pill mt-2"
                            style={{
                                background: "#F25C05",
                                border: "none",
                                height: 48,
                                fontWeight: 600,
                            }}
                        >
                            Purchase Now
                        </Button>
                    </CardBody>
                </Card>
            </Col>

            <PlanFeatureModal
                isOpen={open}
                toggle={toggleModal}
            />
        </>
    );
};

const PlanCardDashboard = ({
    selectedExam = "NEET PG",
}) => {
    const selectedPlan = planData.find(
        (item) => item.exam === selectedExam
    )?.plans[0];

    return (
        <>
            <Container className="">
                <Row className="justify-content-center">
                    {selectedPlan && (
                        <PlanCard plan={selectedPlan} />
                    )}
                </Row>
            </Container>


        </>

    );
};

export default PlanCardDashboard;