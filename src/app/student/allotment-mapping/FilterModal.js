"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
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

const defaultFilters = {
    aiRankMin: "",
    aiRankMax: "",

    joinedOnly: false,

    leftCounsellingRankMin: "",
    leftCounsellingRankMax: "",

    leftState: [],
    leftInstitute: [],
    leftCourse: [],
    leftQuota: [],
    leftCategory: [],
    leftAdmissionStatus: [],

    rightCounselling: [],
    rightState: [],
    rightInstitute: [],
    rightCourse: [],
    rightRound: [],
    rightAdmissionStatus: [],
};

const stateOptions = [
    {
        value: "andhra-pradesh",
        label: "Andhra Pradesh",
    },
    {
        value: "assam",
        label: "Assam",
    },
    {
        value: "bihar",
        label: "Bihar",
    },
    {
        value: "delhi",
        label: "Delhi",
    },
    {
        value: "gujarat",
        label: "Gujarat",
    },
    {
        value: "karnataka",
        label: "Karnataka",
    },
    {
        value: "maharashtra",
        label: "Maharashtra",
    },
    {
        value: "rajasthan",
        label: "Rajasthan",
    },
];

const leftInstituteOptions = [
    {
        value: "aiims-delhi",
        label: "AIIMS, Delhi",
    },
    {
        value: "jipmer-puducherry",
        label: "JIPMER, Puducherry",
    },
    {
        value: "aiims-jodhpur",
        label: "AIIMS, Jodhpur",
    },
    {
        value: "aiims-bhopal",
        label: "AIIMS, Bhopal",
    },
];

const rightInstituteOptions = [
    {
        value: "aiims-delhi",
        label: "AIIMS, Delhi",
    },
    {
        value: "jipmer-puducherry",
        label: "JIPMER, Puducherry",
    },
    {
        value: "seth-gs-mumbai",
        label: "Seth GS, Mumbai",
    },
];

const courseOptions = [
    {
        value: "mbbs",
        label: "MBBS",
    },
    {
        value: "bds",
        label: "BDS",
    },
];

const quotaOptions = [
    {
        value: "aiims-so",
        label: "AIIMS SO",
    },
    {
        value: "jipmer-so",
        label: "JIPMER SO",
    },
    {
        value: "general",
        label: "General",
    },
    {
        value: "open",
        label: "Open",
    },
];

const categoryOptions = [
    {
        value: "ur",
        label: "UR",
    },
    {
        value: "obc-ncl",
        label: "OBC/MOBC (NCL)",
    },
    {
        value: "sc",
        label: "SC",
    },
    {
        value: "st-p",
        label: "ST(P)",
    },
    {
        value: "st-h",
        label: "ST(H)",
    },
    {
        value: "ews",
        label: "EWS",
    },
];

const counsellingOptions = [
    {
        value: "all-india-ug-medical-dental",
        label: "All India UG - Medical & Dental",
    },
    {
        value: "maharashtra-ug-medical",
        label: "Maharashtra - UG Medical",
    },
    {
        value: "karnataka-ug-medical",
        label: "Karnataka - UG Medical",
    },
    {
        value: "delhi-ug-medical",
        label: "Delhi - UG Medical",
    },
];

const roundOptions = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
];

const admissionStatusOptions = [
    {
        value: "admitted",
        label: "Admitted",
    },
    {
        value: "not-admitted",
        label: "Not Admitted",
    },
    {
        value: "na",
        label: "Info NA",
    },
];

const FilterModal = ({
    isOpen,
    toggle,
    onApply,
    initialValues = defaultFilters,
}) => {
    const [filters, setFilters] = useState({
        ...defaultFilters,
        ...initialValues,
    });

    useEffect(() => {
        if (isOpen) {
            setFilters({
                ...defaultFilters,
                ...initialValues,
            });
        }
    }, [isOpen, initialValues]);

    const handleChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleClear = () => {
        setFilters({
            ...defaultFilters,
        });
    };

    const handleApply = () => {
        onApply(filters);
        toggle();
    };

    const handleSaveFilter = () => {
        localStorage.setItem(
            "allotment-mapping-filters",
            JSON.stringify(filters)
        );
    };

    const SelectField = ({
        value,
        options,
        onChange,
        placeholder,
        isMulti = true,
    }) => {
        return (
            <Select
                value={value}
                options={options}
                onChange={onChange}
                placeholder={placeholder}
                isSearchable
                isClearable
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                className="small"
            />
        );
    };

    const AdmissionStatus = ({
        field,
    }) => {
        const selected =
            filters[field] || [];

        const handleStatusChange = (
            value,
            checked
        ) => {
            const current = [...selected];

            if (checked) {
                if (!current.includes(value)) {
                    current.push(value);
                }
            } else {
                const index =
                    current.indexOf(value);

                if (index !== -1) {
                    current.splice(index, 1);
                }
            }

            handleChange(field, current);
        };

        return (
            <div>
                {admissionStatusOptions.map(
                    (option) => (
                        <FormGroup
                            check
                            key={option.value}
                            className="mb-1"
                        >
                            <Input
                                type="checkbox"
                                checked={selected.includes(
                                    option.value
                                )}
                                onChange={(e) =>
                                    handleStatusChange(
                                        option.value,
                                        e.target.checked
                                    )
                                }
                            />

                            <Label check>
                                {option.label}
                            </Label>
                        </FormGroup>
                    )
                )}
            </div>
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            size="xl"
            centered
            scrollable
        >
            <ModalHeader
                toggle={toggle}
                className="py-2"
            >
                Filters
            </ModalHeader>

            <ModalBody>
                <Form>

                    {/* =================================================
                        TOP SECTION
                    ================================================== */}

                    <Row className="g-3 align-items-end mb-2">

                        <Col md="6">

                            <FormGroup className="mb-0">

                                <Label className="small fw-semibold">
                                    All India Rank
                                </Label>

                                <Row className="g-2 align-items-center">

                                    <Col>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            value={
                                                filters.aiRankMin
                                            }
                                            onChange={(e) =>
                                                handleChange(
                                                    "aiRankMin",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Col>

                                    <Col xs="auto">
                                        -
                                    </Col>

                                    <Col>
                                        <Input
                                            type="number"
                                            placeholder="50000000"
                                            value={
                                                filters.aiRankMax
                                            }
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

                        </Col>

                        <Col
                            md="6"
                            className="d-flex justify-content-md-end"
                        >

                            <FormGroup
                                switch
                                className="mb-0"
                            >
                                <Input
                                    type="switch"
                                    checked={
                                        filters.joinedOnly
                                    }
                                    onChange={(e) =>
                                        handleChange(
                                            "joinedOnly",
                                            e.target.checked
                                        )
                                    }
                                />

                                <Label check>
                                    Show only joined
                                    allotments.
                                </Label>
                            </FormGroup>

                        </Col>

                    </Row>

                    {/* =================================================
                        TWO FILTER SECTIONS
                    ================================================== */}

                    <Row className="g-2">

                        {/* =================================================
                            LEFT - ALL INDIA
                        ================================================== */}

                        <Col md="6">

                            <div className="border border-primary-subtle h-100">

                                <div className="bg-primary-subtle text-center fw-bold small py-2">
                                    ALL INDIA UG - MEDICAL & DENTAL / ROUND 1
                                </div>

                                <div className="p-3">

                                    {/* COUNSELLING RANK */}

                                    <FormGroup>
                                        <Label className="small">
                                            Counselling Rank
                                        </Label>

                                        <Row className="g-2 align-items-center">

                                            <Col>
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    value={
                                                        filters.leftCounsellingRankMin
                                                    }
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "leftCounsellingRankMin",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>

                                            <Col xs="auto">
                                                -
                                            </Col>

                                            <Col>
                                                <Input
                                                    type="number"
                                                    placeholder="0"
                                                    value={
                                                        filters.leftCounsellingRankMax
                                                    }
                                                    onChange={(e) =>
                                                        handleChange(
                                                            "leftCounsellingRankMax",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>

                                        </Row>

                                    </FormGroup>

                                    {/* STATE */}

                                    <FormGroup>
                                        <Label className="small">
                                            State{" "}
                                            <span className="text-muted">
                                                (Selection will filter Institutes as well)
                                            </span>
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.leftState
                                            }
                                            options={
                                                stateOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "leftState",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search State"
                                        />
                                    </FormGroup>

                                    {/* INSTITUTE */}

                                    <FormGroup>
                                        <Label className="small">
                                            Institute{" "}
                                            <span className="text-muted">
                                                (609)
                                            </span>
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.leftInstitute
                                            }
                                            options={
                                                leftInstituteOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "leftInstitute",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Institute"
                                        />
                                    </FormGroup>

                                    {/* COURSE */}

                                    <FormGroup>
                                        <Label className="small">
                                            Course
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.leftCourse
                                            }
                                            options={
                                                courseOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "leftCourse",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Course"
                                        />
                                    </FormGroup>

                                    {/* QUOTA */}

                                    <FormGroup>
                                        <Label className="small">
                                            Quota
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.leftQuota
                                            }
                                            options={
                                                quotaOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "leftQuota",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Quota"
                                        />
                                    </FormGroup>

                                    {/* CATEGORY */}

                                    <FormGroup>
                                        <Label className="small">
                                            Category
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.leftCategory
                                            }
                                            options={
                                                categoryOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "leftCategory",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Category"
                                        />
                                    </FormGroup>

                                    {/* ADMISSION STATUS */}

                                    <FormGroup className="mb-0">

                                        <Label className="small fw-semibold">
                                            Admission Status
                                        </Label>

                                        <AdmissionStatus
                                            field="leftAdmissionStatus"
                                        />

                                    </FormGroup>

                                </div>

                            </div>

                        </Col>

                        {/* =================================================
                            RIGHT - OTHER COUNSELLINGS
                        ================================================== */}

                        <Col md="6">

                            <div className="border border-warning-subtle h-100">

                                <div className="bg-warning-subtle text-center fw-bold small py-2">
                                    MAPPED TO OTHER COUNSELLINGS
                                </div>

                                <div className="p-3">

                                    {/* EMPTY ROW TO MATCH SCREENSHOT */}

                                    <FormGroup
                                        switch
                                        className="mb-3"
                                    >
                                        <Input
                                            type="switch"
                                        />

                                        <Label check>
                                            Hide empty rows that have no available data.
                                        </Label>
                                    </FormGroup>

                                    {/* COUNSELLING */}

                                    <FormGroup>
                                        <Label className="small">
                                            Counselling
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.rightCounselling
                                            }
                                            options={
                                                counsellingOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "rightCounselling",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Counselling"
                                        />
                                    </FormGroup>

                                    {/* STATE */}

                                    <FormGroup>
                                        <Label className="small">
                                            State{" "}
                                            <span className="text-muted">
                                                (Selection will filter Institutes as well)
                                            </span>
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.rightState
                                            }
                                            options={
                                                stateOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "rightState",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search State"
                                        />
                                    </FormGroup>

                                    {/* INSTITUTE */}

                                    <FormGroup>
                                        <Label className="small">
                                            Institute{" "}
                                            <span className="text-muted">
                                                (138)
                                            </span>
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.rightInstitute
                                            }
                                            options={
                                                rightInstituteOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "rightInstitute",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Institute"
                                        />
                                    </FormGroup>

                                    {/* COURSE */}

                                    <FormGroup>
                                        <Label className="small">
                                            Course
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.rightCourse
                                            }
                                            options={
                                                courseOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "rightCourse",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Course"
                                        />
                                    </FormGroup>

                                    {/* ROUND */}

                                    <FormGroup>
                                        <Label className="small">
                                            Round
                                        </Label>

                                        <SelectField
                                            value={
                                                filters.rightRound
                                            }
                                            options={
                                                roundOptions
                                            }
                                            onChange={(value) =>
                                                handleChange(
                                                    "rightRound",
                                                    value || []
                                                )
                                            }
                                            placeholder="Search Round"
                                        />
                                    </FormGroup>

                                    {/* ADMISSION STATUS */}

                                    <FormGroup className="mb-0">

                                        <Label className="small fw-semibold">
                                            Admission Status
                                        </Label>

                                        <AdmissionStatus
                                            field="rightAdmissionStatus"
                                        />

                                    </FormGroup>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Form>
            </ModalBody>

            {/* =================================================
                FOOTER
            ================================================== */}

            <ModalFooter className="justify-content-between">

                <div className="d-flex align-items-center gap-2">

                    <Button
                        color="light"
                        size="sm"
                        onClick={handleClear}
                    >
                        Clear Filters
                    </Button>

                    <Button
                        color="light"
                        size="sm"
                        className="border"
                        onClick={handleSaveFilter}
                    >
                        Save filter
                    </Button>

                </div>

                <div className="d-flex align-items-center gap-2">

                    <Button
                        color="light"
                        size="sm"
                        className="border rounded-pill"
                    >
                        Filters
                    </Button>

                    <Button
                        color="danger"
                        size="sm"
                        onClick={handleApply}
                    >
                        View Results
                    </Button>

                </div>

            </ModalFooter>

        </Modal>
    );
};

export default FilterModal;