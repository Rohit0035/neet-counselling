"use client";

import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";
import {
    Container,
    Row,
    Col,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import {
    FaFilter,
    FaChevronRight,
} from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";

import StudentLayoutWrapper from "@/app/student/components/StudentLayout";
import FilterModal from "@/app/student/allotment-mapping/FilterModal";

const AllotmentMapping = () => {
    // =========================================================
    // OPTIONS
    // =========================================================

    const yearOptions = [
        {
            value: "2026",
            label: "2026",
        },
        {
            value: "2025",
            label: "2025",
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

    // =========================================================
    // STATES
    // =========================================================

    const [year, setYear] = useState(yearOptions[0]);

    const [counselling, setCounselling] = useState(
        counsellingOptions[0]
    );

    const [round, setRound] = useState(
        roundOptions[0]
    );

    const [filterModal, setFilterModal] =
        useState(false);

    const [filters, setFilters] = useState({
        category: "",
    });

    // =========================================================
    // DATA
    // =========================================================

    const data = useMemo(() => {
        return Array.from(
            { length: 50 },
            (_, index) => {
                const rank = index + 1;

                const isJipmer = rank === 12;
                const isMaharashtra = rank === 14;

                return {
                    id: rank,

                    // LEFT SIDE
                    leftRank: rank,

                    leftQuota: isJipmer
                        ? "JIPMER SO"
                        : "AIIMS SO",

                    leftCategory: "Open",

                    leftInstitute: isJipmer
                        ? "JIPMER, Puducherry"
                        : "AIIMS, Delhi",

                    leftCourse: "MBBS",

                    leftAdmitted: "-",

                    // CENTER
                    aiRank: rank,

                    // RIGHT SIDE
                    rightRank: isMaharashtra
                        ? 2
                        : rank,

                    rightCounselling:
                        isMaharashtra
                            ? "Maharashtra - UG Medical"
                            : "All India UG - Medical & Dental",

                    rightInstitute:
                        isMaharashtra
                            ? "Seth GS, Mumbai"
                            : isJipmer
                            ? "JIPMER, Puducherry"
                            : "AIIMS, Delhi",

                    rightCourse: "MBBS",

                    rightRound:
                        isMaharashtra
                            ? 1
                            : 2,

                    rightAdmitted: "-",
                };
            }
        );
    }, []);

    // =========================================================
    // FILTER
    // =========================================================

    const filteredData = useMemo(() => {
        if (!filters.category) {
            return data;
        }

        return data.filter(
            (row) =>
                row.leftCategory ===
                filters.category
        );
    }, [data, filters]);

    // =========================================================
    // GO
    // =========================================================

    const handleGo = () => {
        console.log({
            year: year?.value,
            counselling: counselling?.value,
            round: round?.value,
        });

        // API CALL HERE
    };

    // =========================================================
    // COLUMNS
    // =========================================================

    const columns = [
        {
            name: "RANK",
            selector: (row) => row.leftRank,
            sortable: true,
            center: true,
            width: "55px",
        },
        {
            name: "QUOTA",
            selector: (row) => row.leftQuota,
            sortable: true,
            center: true,
            width: "85px",
        },
        {
            name: "CATEGORY",
            selector: (row) => row.leftCategory,
            sortable: true,
            center: true,
            width: "80px",
        },
        {
            name: "INSTITUTE",
            selector: (row) => row.leftInstitute,
            sortable: true,
            center: true,
            width: "140px",
        },
        {
            name: "COURSE",
            selector: (row) => row.leftCourse,
            sortable: true,
            center: true,
            width: "65px",
        },
        {
            name: "ADMITTED",
            selector: (row) => row.leftAdmitted,
            sortable: true,
            center: true,
            width: "65px",
        },

        // AI RANK
        {
            name: "AI RANK",
            selector: (row) => row.aiRank,
            sortable: true,
            center: true,
            width: "65px",
        },

        // RIGHT SIDE
        {
            name: "RANK",
            selector: (row) => row.rightRank,
            sortable: true,
            center: true,
            width: "55px",
        },
        {
            name: "COUNSELLING",
            selector: (row) =>
                row.rightCounselling,
            sortable: true,
            center: true,
            width: "190px",
        },
        {
            name: "INSTITUTE",
            selector: (row) =>
                row.rightInstitute,
            sortable: true,
            center: true,
            width: "140px",
        },
        {
            name: "COURSE",
            selector: (row) => row.rightCourse,
            sortable: true,
            center: true,
            width: "65px",
        },
        {
            name: "ROUND",
            selector: (row) => row.rightRound,
            sortable: true,
            center: true,
            width: "55px",
        },
        {
            name: "ADMITTED",
            selector: (row) =>
                row.rightAdmitted,
            sortable: true,
            center: true,
            width: "65px",
        },
    ];

    // =========================================================
    // PAGINATION TEXT
    // =========================================================

    const paginationComponentOptions = {
        rowsPerPageText: "Rows per page:",
        rangeSeparatorText: "of",
        selectAllRowsItem: false,
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <StudentLayoutWrapper>

            <Container fluid>

                {/* =================================================
                    BREADCRUMB
                ================================================== */}

                <Breadcrumb className="mb-2">

                    <BreadcrumbItem>
                        <a href="/">
                            Home
                        </a>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        Insights
                    </BreadcrumbItem>

                    <BreadcrumbItem active>
                        Allotment Mapping
                    </BreadcrumbItem>

                </Breadcrumb>

                {/* =================================================
                    FILTER BAR
                ================================================== */}

                <Row className="align-items-center g-2 mb-2">

                    <Col>
                        <div className="d-flex align-items-center flex-wrap gap-2">

                            {/* YEAR */}

                            <Select
                                value={year}
                                onChange={setYear}
                                options={yearOptions}
                                isSearchable={false}
                                className="small"
                            />

                            {/* COUNSELLING */}

                            <Select
                                value={counselling}
                                onChange={
                                    setCounselling
                                }
                                options={
                                    counsellingOptions
                                }
                                isSearchable={false}
                                className="small"
                            />

                            {/* ROUND */}

                            <Select
                                value={round}
                                onChange={setRound}
                                options={roundOptions}
                                isSearchable={false}
                                className="small"
                            />

                            {/* GO */}

                            <Button
                                color="danger"
                                size="sm"
                                onClick={handleGo}
                            >
                                Go
                            </Button>

                        </div>
                    </Col>

                    {/* FILTER */}

                    <Col xs="auto">

                        <Button
                            color="light"
                            size="sm"
                            className="border rounded-pill d-flex align-items-center gap-1"
                            onClick={() =>
                                setFilterModal(true)
                            }
                        >
                            <FaFilter size={9} />
                            Filters
                        </Button>

                    </Col>

                </Row>

                {/* =================================================
                    MAPPING INFORMATION
                ================================================== */}

                <Row className="g-0 mb-1">

                    <Col
                        xs="6"
                        className="bg-primary-subtle border text-center fw-bold py-2"
                    >
                        ALL INDIA UG - MEDICAL &
                        DENTAL / ROUND 1
                    </Col>

                    <Col
                        xs="1"
                        className="bg-dark text-white border text-center fw-bold py-2"
                    >
                        AI RANK
                    </Col>

                    <Col
                        xs="5"
                        className="bg-warning-subtle border text-center fw-bold py-2"
                    >
                        MAPPED TO OTHER
                        COUNSELLINGS
                    </Col>

                </Row>

                {/* =================================================
                    RECORD BAR
                ================================================== */}

                <Row className="align-items-center mb-1">

                    <Col>
                        <small className="text-muted">
                            1 - 50 of 29602 Records
                        </small>
                    </Col>

                    <Col xs="auto">

                        <div className="d-flex align-items-center gap-2">

                            <Button
                                color="light"
                                size="sm"
                                className="border py-0 px-2"
                            >
                                1
                            </Button>

                            <Button
                                color="light"
                                size="sm"
                                className="border-0 py-0 px-1"
                            >
                                2
                            </Button>

                            <Button
                                color="light"
                                size="sm"
                                className="border-0 py-0 px-1"
                            >
                                3
                            </Button>

                            <span>
                                ...
                            </span>

                            <Button
                                color="light"
                                size="sm"
                                className="border-0 py-0 px-1"
                            >
                                593
                            </Button>

                            <Button
                                color="light"
                                size="sm"
                                className="border py-0 px-2"
                            >
                                <FaChevronRight
                                    size={9}
                                />
                            </Button>

                            <Button
                                color="light"
                                size="sm"
                                className="border py-0 px-2"
                            >
                                <FiMaximize2
                                    size={11}
                                />
                            </Button>

                        </div>

                    </Col>

                </Row>

                {/* =================================================
                    ONLY REACT DATA TABLE
                ================================================== */}

                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={50}
                    paginationRowsPerPageOptions={[
                        25,
                        50,
                        100,
                    ]}
                    paginationComponentOptions={
                        paginationComponentOptions
                    }
                    dense
                    striped
                    bordered
                    responsive
                    highlightOnHover
                    pointerOnHover
                    fixedHeader
                    fixedHeaderScrollHeight="calc(100vh - 300px)"
                    persistTableHead
                    noDataComponent={
                        <div className="py-4">
                            No allotment mapping
                            records found
                        </div>
                    }
                />

                {/* =================================================
                    BOTTOM INFORMATION
                ================================================== */}

                <div className="d-flex justify-content-between align-items-center py-2">

                    <small className="text-muted">
                        1 - 50 of 29602 Records
                    </small>

                    <div className="d-flex align-items-center gap-2">

                        <Button
                            color="light"
                            size="sm"
                            className="border py-0 px-2"
                        >
                            1
                        </Button>

                        <Button
                            color="light"
                            size="sm"
                            className="border-0 py-0 px-1"
                        >
                            2
                        </Button>

                        <Button
                            color="light"
                            size="sm"
                            className="border-0 py-0 px-1"
                        >
                            3
                        </Button>

                        <span>
                            ...
                        </span>

                        <Button
                            color="light"
                            size="sm"
                            className="border-0 py-0 px-1"
                        >
                            593
                        </Button>

                        <Button
                            color="light"
                            size="sm"
                            className="border py-0 px-2"
                        >
                            <FaChevronRight
                                size={9}
                            />
                        </Button>

                    </div>

                </div>

            </Container>

            {/* =====================================================
                FILTER MODAL
            ====================================================== */}

            <FilterModal
                isOpen={filterModal}
                toggle={() =>
                    setFilterModal(false)
                }
                initialValues={filters}
                onApply={(values) => {
                    setFilters(values);
                }}
            />

        </StudentLayoutWrapper>
    );
};

export default AllotmentMapping;