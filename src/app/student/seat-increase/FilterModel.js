import React, { useState } from "react";
import Select from "react-select";

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Input,
    Label,
    FormGroup,
} from "reactstrap";

import { FiRotateCcw } from "react-icons/fi";

const FilterModal = ({
    filterModal,
    setFilterModal,
    resetFilters,
}) => {

    /* ==================================================
                        STATES
    ================================================== */

    const [aiRankMin, setAiRankMin] = useState("0");
    const [aiRankMax, setAiRankMax] = useState("50000000");

    const [session, setSession] = useState("2026");
    const [round, setRound] = useState("");

    const [stateFilter, setStateFilter] = useState(null);
    const [instituteFilter, setInstituteFilter] = useState(null);
    const [instituteTypeFilter, setInstituteTypeFilter] =
        useState(null);

    const [counsellingFilter, setCounsellingFilter] =
        useState(null);

    const [quotaFilter, setQuotaFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);

    const [courseFilter, setCourseFilter] = useState([]);

    const [admissionStatus, setAdmissionStatus] =
        useState([]);

    const [joinedStatus, setJoinedStatus] =
        useState(false);

       


    /* ==================================================
                        OPTIONS
    ================================================== */

    const stateOptions = [
        { value: "andhra-pradesh", label: "Andhra Pradesh" },
        { value: "bihar", label: "Bihar" },
        { value: "chhattisgarh", label: "Chhattisgarh" },
        { value: "delhi", label: "Delhi" },
        { value: "gujarat", label: "Gujarat" },
        { value: "haryana", label: "Haryana" },
        { value: "karnataka", label: "Karnataka" },
        { value: "kerala", label: "Kerala" },
        { value: "madhya-pradesh", label: "Madhya Pradesh" },
        { value: "maharashtra", label: "Maharashtra" },
        { value: "rajasthan", label: "Rajasthan" },
        { value: "tamil-nadu", label: "Tamil Nadu" },
        { value: "telangana", label: "Telangana" },
        { value: "uttar-pradesh", label: "Uttar Pradesh" },
        { value: "west-bengal", label: "West Bengal" },
    ];

    const instituteOptions = [
        {
            value: "medical-college",
            label: "Medical College",
        },
        {
            value: "government-medical-college",
            label: "Government Medical College",
        },
        {
            value: "private-medical-college",
            label: "Private Medical College",
        },
        {
            value: "deemed-university",
            label: "Deemed University",
        },
    ];

    const instituteTypeOptions = [
        {
            value: "government",
            label: "Government",
        },
        {
            value: "private",
            label: "Private",
        },
        {
            value: "deemed",
            label: "Deemed",
        },
        {
            value: "trust",
            label: "Trust",
        },
    ];

    const counsellingOptions = [
        {
            value: "neet-ug",
            label: "NEET UG",
        },
        {
            value: "neet-pg",
            label: "NEET PG",
        },
        {
            value: "neet-mds",
            label: "NEET MDS",
        },
        {
            value: "neet-inicet",
            label: "INI-CET",
        },
    ];

    const quotaOptions = [
        {
            value: "aiq",
            label: "All India Quota",
        },
        {
            value: "state",
            label: "State Quota",
        },
        {
            value: "management",
            label: "Management Quota",
        },
        {
            value: "nri",
            label: "NRI Quota",
        },
    ];

    const categoryOptions = [
        {
            value: "general",
            label: "General",
        },
        {
            value: "obc",
            label: "OBC",
        },
        {
            value: "sc",
            label: "SC",
        },
        {
            value: "st",
            label: "ST",
        },
        {
            value: "ews",
            label: "EWS",
        },
    ];


    /* ==================================================
                    SMALL SELECT STYLE
    ================================================== */

    const selectStyles = {

        control: (base) => ({
            ...base,
            minHeight: "30px",
            height: "30px",
            fontSize: "11px",
            boxShadow: "none",
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 7px",
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px",
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: "11px",
        }),

        singleValue: (base) => ({
            ...base,
            fontSize: "11px",
        }),

        input: (base) => ({
            ...base,
            fontSize: "11px",
        }),

        option: (base) => ({
            ...base,
            fontSize: "11px",
            padding: "6px 8px",
        }),
    };


    /* ==================================================
                    COURSE HANDLER
    ================================================== */

    const handleCourseChange = (
        course,
        checked
    ) => {

        if (checked) {

            setCourseFilter((prev) => [
                ...prev,
                course,
            ]);

        } else {

            setCourseFilter((prev) =>
                prev.filter(
                    (item) => item !== course
                )
            );

        }
    };


    /* ==================================================
                    ADMISSION STATUS
    ================================================== */

    const handleAdmissionChange = (
        status,
        checked
    ) => {

        if (checked) {

            setAdmissionStatus((prev) => [
                ...prev,
                status,
            ]);

        } else {

            setAdmissionStatus((prev) =>
                prev.filter(
                    (item) => item !== status
                )
            );

        }
    };


    /* ==================================================
                    RESET
    ================================================== */

    const handleReset = () => {

        setAiRankMin("0");
        setAiRankMax("50000000");

        setSession("2026");
        setRound("");

        setStateFilter(null);
        setInstituteFilter(null);
        setInstituteTypeFilter(null);

        setCounsellingFilter(null);
        setQuotaFilter(null);
        setCategoryFilter(null);

        setCourseFilter([]);
        setAdmissionStatus([]);

        setJoinedStatus(false);

        if (resetFilters) {
            resetFilters();
        }
    };


    return (

        <Modal
            isOpen={filterModal}
            toggle={() =>
                setFilterModal(false)
            }
            size="lg"
            centered
        >

            {/* ==================================================
                            HEADER
            ================================================== */}

            <ModalHeader
                toggle={() =>
                    setFilterModal(false)
                }
                className="py-2"
            >

                <span className="small fw-semibold">
                    Filters
                </span>

            </ModalHeader>


            {/* ==================================================
                            BODY
            ================================================== */}

            <ModalBody className="p-2">

                <Row className="g-2">


                  

                    {/* ==================================================
                            MIDDLE COLUMN
                    ================================================== */}

                    <Col md="6">

                        <Card className="border">

                            <CardBody className="p-2">


                                {/* STATE */}

                                <div className="mb-2">

                                    <label className="small fw-semibold mb-1">

                                        State

                                        <span className="text-muted fw-normal">
                                            {" "}
                                            (Selection will filter
                                            Institutes as well)
                                        </span>

                                    </label>

                                    <Select
                                        isClearable
                                        isSearchable
                                        placeholder="Search State"
                                        value={
                                            stateFilter
                                        }
                                        options={
                                            stateOptions
                                        }
                                        onChange={
                                            setStateFilter
                                        }
                                        styles={
                                            selectStyles
                                        }
                                    />

                                </div>


                                {/* INSTITUTE */}

                                <div className="mb-2">

                                    <label className="small fw-semibold mb-1">

                                        Institute

                                        <span className="text-muted fw-normal">
                                            {" "}
                                            (119)
                                        </span>

                                    </label>

                                    <Select
                                        isClearable
                                        isSearchable
                                        placeholder="Search Institute"
                                        value={
                                            instituteFilter
                                        }
                                        options={
                                            instituteOptions
                                        }
                                        onChange={
                                            setInstituteFilter
                                        }
                                        styles={
                                            selectStyles
                                        }
                                    />

                                </div>


                                {/* INSTITUTE TYPE */}

                                <div className="mb-2">

                                    <label className="small fw-semibold mb-1">
                                        Institute Type
                                    </label>

                                    <Select
                                        isClearable
                                        isSearchable
                                        placeholder="Search Institute Type"
                                        value={
                                            instituteTypeFilter
                                        }
                                        options={
                                            instituteTypeOptions
                                        }
                                        onChange={
                                            setInstituteTypeFilter
                                        }
                                        styles={
                                            selectStyles
                                        }
                                    />

                                </div>


                            </CardBody>

                        </Card>

                    </Col>


                    {/* ==================================================
                            RIGHT COLUMN
                    ================================================== */}

                    <Col md="6">

                        <Card className="border">

                            <CardBody className="p-2">

                                <label className="small fw-semibold d-block mb-2">
                                    Course
                                </label>


                                {/* MBBS */}

                                <FormGroup
                                    check
                                    className="mb-2"
                                >

                                    <Input
                                        type="checkbox"
                                        id="course-mbbs"
                                        checked={
                                            courseFilter.includes(
                                                "MBBS"
                                            )
                                        }
                                        onChange={(e) =>
                                            handleCourseChange(
                                                "MBBS",
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <Label
                                        check
                                        htmlFor="course-mbbs"
                                        className="small"
                                    >
                                        MBBS
                                    </Label>

                                </FormGroup>


                                {/* BDS */}

                                <FormGroup
                                    check
                                    className="mb-0"
                                >

                                    <Input
                                        type="checkbox"
                                        id="course-bds"
                                        checked={
                                            courseFilter.includes(
                                                "BDS"
                                            )
                                        }
                                        onChange={(e) =>
                                            handleCourseChange(
                                                "BDS",
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <Label
                                        check
                                        htmlFor="course-bds"
                                        className="small"
                                    >
                                        BDS
                                    </Label>

                                </FormGroup>

                            </CardBody>

                        </Card>

                    </Col>

                </Row>


                {/* ==================================================
                        DISPLAYED FIELDS
                ================================================== */}

                <Card className="border mt-2">

                    <CardBody className="p-2">

                        <label className="small fw-semibold d-block mb-2">
                            Displayed Fields
                        </label>

                        <Row className="g-1">

                            {[
                                "AI Rank",
                                "Course",
                                "Counselling",
                                "Quota",
                                "Round",
                                "Category",
                                "State",
                                "Admission Status",
                                "Institute",
                                "Joined Status",
                            ].map((field) => (

                                <Col
                                    xs="6"
                                    sm="4"
                                    md="3"
                                    lg="auto"
                                    key={field}
                                    className="me-lg-2"
                                >

                                    <FormGroup
                                        check
                                        className="mb-1"
                                    >

                                        <Input
                                            type="checkbox"
                                            id={`field-${field}`}
                                            defaultChecked
                                        />

                                        <Label
                                            check
                                            htmlFor={`field-${field}`}
                                            className="small"
                                        >
                                            {field}
                                        </Label>

                                    </FormGroup>

                                </Col>

                            ))}

                        </Row>

                    </CardBody>

                </Card>

            </ModalBody>


            {/* ==================================================
                            FOOTER
            ================================================== */}

            <ModalFooter className="py-2">

                <Button
                    color="light"
                    size="sm"
                    onClick={handleReset}
                >

                    <FiRotateCcw
                        size={13}
                        className="me-1"
                    />

                    Clear Filters

                </Button>


                <Button
                    color="light"
                    size="sm"
                >
                    Save filter
                </Button>


                <div className="ms-auto d-flex gap-2">

                    <Button
                        color="light"
                        size="sm"
                    >
                        Filters
                        <span className="ms-1">
                            ▾
                        </span>
                    </Button>

                    <Button
                        color="primary"
                        size="sm"
                        onClick={() =>
                            setFilterModal(false)
                        }
                    >
                        View Results
                    </Button>

                </div>

            </ModalFooter>

        </Modal>
    );
};

export default FilterModal;