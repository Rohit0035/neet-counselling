"use client";

import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
} from "reactstrap";

const initialFilters = {
    rollNo: "",
    aiRankMin: "",
    aiRankMax: "",
    stateRankMin: "",
    stateRankMax: "",
    marksMin: "",
    marksMax: "",
    category: "",
};

const FilterModal = ({
    isOpen,
    toggle,
    onApply,
    initialValues = initialFilters,
}) => {
    const [filters, setFilters] = useState(initialValues);

    const handleChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleClear = () => {
        setFilters(initialFilters);
    };

    const handleApply = () => {
        onApply(filters);
        toggle();
    };

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            scrollable
            className="small"
        >
            <ModalHeader toggle={toggle}>
                Filters
            </ModalHeader>

            <ModalBody>
                <Form>
                    {/* Roll No */}
                    <FormGroup>
                        <Label for="rollNo">
                            Roll No
                        </Label>

                        <Input
                            id="rollNo"
                            type="text"
                            placeholder="Enter your Roll No"
                            value={filters.rollNo}
                            onChange={(e) =>
                                handleChange(
                                    "rollNo",
                                    e.target.value
                                )
                            }
                        />
                    </FormGroup>

                    {/* AI Rank */}
                    <FormGroup>
                        <Label>
                            AI Rank
                        </Label>

                        <Row>
                            <Col>
                                <Input
                                    type="number"
                                    placeholder="1"
                                    value={filters.aiRankMin}
                                    onChange={(e) =>
                                        handleChange(
                                            "aiRankMin",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>

                            <Col xs="auto" className="d-flex align-items-center">
                                -
                            </Col>

                            <Col>
                                <Input
                                    type="number"
                                    placeholder="3,000,000"
                                    value={filters.aiRankMax}
                                    onChange={(e) =>
                                        handleChange(
                                            "aiRankMax",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    {/* State Rank */}
                    <FormGroup>
                        <Label>
                            State Rank
                        </Label>

                        <Row>
                            <Col>
                                <Input
                                    type="number"
                                    placeholder="1"
                                    value={filters.stateRankMin}
                                    onChange={(e) =>
                                        handleChange(
                                            "stateRankMin",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>

                            <Col xs="auto" className="d-flex align-items-center">
                                -
                            </Col>

                            <Col>
                                <Input
                                    type="number"
                                    placeholder="3,000,000"
                                    value={filters.stateRankMax}
                                    onChange={(e) =>
                                        handleChange(
                                            "stateRankMax",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    {/* Marks */}
                    <FormGroup>
                        <Label>
                            Marks
                        </Label>

                        <Row>
                            <Col>
                                <Input
                                    type="number"
                                    placeholder="0"
                                    value={filters.marksMin}
                                    onChange={(e) =>
                                        handleChange(
                                            "marksMin",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>

                            <Col xs="auto" className="d-flex align-items-center">
                                -
                            </Col>

                            <Col>
                                <Input
                                    type="number"
                                    placeholder="720"
                                    value={filters.marksMax}
                                    onChange={(e) =>
                                        handleChange(
                                            "marksMax",
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    {/* Category */}
                    <FormGroup>
                        <Label for="category">
                            Category
                        </Label>

                        <Input
                            id="category"
                            type="select"
                            value={filters.category}
                            onChange={(e) =>
                                handleChange(
                                    "category",
                                    e.target.value
                                )
                            }
                        >
                            <option value="">
                                Is all of
                            </option>

                            <option value="UR">
                                UR
                            </option>

                            <option value="OBC/MOBC (NCL)">
                                OBC/MOBC (NCL)
                            </option>

                            <option value="SC">
                                SC
                            </option>

                            <option value="ST(P)">
                                ST(P)
                            </option>
                        </Input>

                        <small className="text-muted">
                            Show candidates who are eligible for at
                            least one of the selected categories.
                        </small>
                    </FormGroup>

                    <hr />

                    {/* Displayed Fields */}
                    <h6>
                        Displayed Fields
                    </h6>

                    <FormGroup check>
                        <Input
                            type="checkbox"
                            defaultChecked
                        />
                        <Label check>
                            Roll No
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input
                            type="checkbox"
                            defaultChecked
                        />
                        <Label check>
                            Marks
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input
                            type="checkbox"
                            defaultChecked
                        />
                        <Label check>
                            AI Rank
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input
                            type="checkbox"
                            defaultChecked
                        />
                        <Label check>
                            State Rank
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input
                            type="checkbox"
                            defaultChecked
                        />
                        <Label check>
                            Category
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter className="justify-content-between">
                <Button
                    color="light"
                    onClick={handleClear}
                >
                    Clear Filters
                </Button>

                <Button
                    className="btn btn-sm btn-primary bg-st"
                    onClick={handleApply}
                >
                    View Results
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default FilterModal;
