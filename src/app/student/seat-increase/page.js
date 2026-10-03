"use client";

import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";

import {
    Container,
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";

import {
    FiFilter,
    FiHeart,
    FiRotateCcw,
} from "react-icons/fi";

import StudentLayoutWrapper from "../components/StudentLayout";
import AllotmentDetailsModal from "../allotment/AllotmentDetailsModal";
import FilterModal from "./FilterModel";

const SeatIncreasePage = () => {
    /* =========================
       ALLOTMENT TYPES
    ========================= */

    const allotmentTypes = [
        {
            value: "inicet",
            label: "INICET - PG Medical",
        },
        {
            value: "neet",
            label: "NEET PG",
        },
    ];

    /* =========================
       FILTER OPTIONS
    ========================= */

    const stateOptions = [
        {
            value: "Karnataka",
            label: "Karnataka",
        },
        {
            value: "Tamil Nadu",
            label: "Tamil Nadu",
        },
        {
            value: "Maharashtra",
            label: "Maharashtra",
        },
        {
            value: "Rajasthan",
            label: "Rajasthan",
        },
        {
            value: "Bihar",
            label: "Bihar",
        },
    ];

    const courseOptions = [
        {
            value: "MBBS",
            label: "MBBS",
        },
    ];

    const instituteOptions = [
        {
            value: "Alva's Inst of Med Sci, Karnataka",
            label: "Alva's Inst of Med Sci, Karnataka",
        },
        {
            value: "APS Med Coll Hospital, Melvaruvam",
            label: "APS Med Coll Hospital, Melvaruvam",
        },
        {
            value: "BSP Medical Coll, Sambhajinagar",
            label: "BSP Medical Coll, Sambhajinagar",
        },
        {
            value: "BVIMS, Kota, Rajasthan",
            label: "BVIMS, Kota, Rajasthan",
        },
        {
            value: "Buddha Hos & Res Inst, Gaya",
            label: "Buddha Hos & Res Inst, Gaya",
        },
        {
            value: "CIMER, Karnataka",
            label: "CIMER, Karnataka",
        },
    ];

    /* =========================
       TABLE DATA
    ========================= */

    const data = [
        {
            id: 1,
            state: "Karnataka",
            institute: "Alva's Inst of Med Sci, Karnataka",
            course: "MBBS",
            from: 0,
            to: 150,
            increase: 150,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
        {
            id: 2,
            state: "Tamil Nadu",
            institute: "APS Med Coll Hospital, Melvaruvam",
            course: "MBBS",
            from: 0,
            to: 150,
            increase: 150,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
        {
            id: 3,
            state: "Maharashtra",
            institute: "BSP Medical Coll, Sambhajinagar",
            course: "MBBS",
            from: 0,
            to: 150,
            increase: 150,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
        {
            id: 4,
            state: "Rajasthan",
            institute: "BVIMS, Kota, Rajasthan",
            course: "MBBS",
            from: 0,
            to: 150,
            increase: 150,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
        {
            id: 5,
            state: "Bihar",
            institute: "Buddha Hos & Res Inst, Gaya",
            course: "MBBS",
            from: 0,
            to: 100,
            increase: 100,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
        {
            id: 6,
            state: "Karnataka",
            institute: "CIMER, Karnataka",
            course: "MBBS",
            from: 0,
            to: 100,
            increase: 100,
            remark:
                "New seats in 2026. Allotted through State Counselling.",
        },
    ];

    /* =========================
       STATES
    ========================= */

    const [selectedType, setSelectedType] =
        useState(allotmentTypes[1]);

    const [search, setSearch] = useState("");

    const [selectedRow, setSelectedRow] =
        useState(null);

    const [detailsModal, setDetailsModal] =
        useState(false);

    const [filterModal, setFilterModal] =
        useState(false);

    const [choiceModal, setChoiceModal] =
        useState(false);

    const [stateFilter, setStateFilter] =
        useState(null);

    const [courseFilter, setCourseFilter] =
        useState(null);

    const [instituteFilter, setInstituteFilter] =
        useState(null);

    /* =========================
       RESET FILTERS
    ========================= */

    const resetFilters = () => {
        setStateFilter(null);
        setCourseFilter(null);
        setInstituteFilter(null);
    };

    /* =========================
       FILTER DATA
    ========================= */

    const filteredData = useMemo(() => {
        let rows = [...data];

        if (search.trim()) {
            const searchValue =
                search.toLowerCase().trim();

            rows = rows.filter((item) =>
                [
                    item.state,
                    item.institute,
                    item.course,
                    item.from,
                    item.to,
                    item.increase,
                    item.remark,
                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(searchValue)
            );
        }

        if (stateFilter) {
            rows = rows.filter(
                (item) =>
                    item.state === stateFilter.value
            );
        }

        if (courseFilter) {
            rows = rows.filter(
                (item) =>
                    item.course === courseFilter.value
            );
        }

        if (instituteFilter) {
            rows = rows.filter(
                (item) =>
                    item.institute ===
                    instituteFilter.value
            );
        }

        return rows;
    }, [
        search,
        stateFilter,
        courseFilter,
        instituteFilter,
    ]);

    /* =========================
       ROW CLICK
    ========================= */

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setDetailsModal(true);
    };

    /* =========================
       TABLE COLUMNS
    ========================= */

    const columns = [
        {
            name: "STATE",
            selector: (row) => row.state,
            sortable: true,
            width: "130px",
        },

        {
            name: "INSTITUTE",
            grow: 2,
            sortable: true,
            cell: (row) => (
                <Button
                    color="link"
                    className="p-0 text-start fw-semibold text-decoration-none st-txt-o"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRowClick(row);
                    }}
                >
                    {row.institute}
                </Button>
            ),
        },

        {
            name: "COURSE",
            selector: (row) => row.course,
            sortable: true,
            width: "120px",
        },

        {
            name: "FROM",
            selector: (row) => row.from,
            sortable: true,
            width: "100px",
            center: true,
        },

        {
            name: "TO",
            selector: (row) => row.to,
            sortable: true,
            width: "100px",
            center: true,
        },

        {
            name: "INCREASE",
            selector: (row) => row.increase,
            sortable: true,
            width: "120px",
            center: true,
            cell: (row) => (
                <span className="text-primary fw-semibold">
                    {row.increase}
                </span>
            ),
        },

        {
            name: "REMARK",
            grow: 3,
            cell: (row) => (
                <div
                    className="py-2"
                    style={{
                        whiteSpace: "normal",
                        lineHeight: "1.4",
                    }}
                >
                    {row.remark}
                </div>
            ),
        },

     
    ];

    /* =========================
       TABLE STYLES
    ========================= */

    const customStyles = {
        headCells: {
            style: {
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                backgroundColor: "#f8f9fa",
                color: "#333",
            },
        },

        cells: {
            style: {
                fontSize: "13px",
                paddingTop: "10px",
                paddingBottom: "10px",
            },
        },

        rows: {
            style: {
                minHeight: "55px",
            },
        },
    };

     const handleApplyFilters = (filters) => {
        console.log("Applied Filters:", filters);

        setAppliedFilters(filters);

        setFilterModal(false);

        // Here you can call API / filter your table
        // fetchData(filters);
    };


    return (
        <StudentLayoutWrapper>
            {/* =========================
                BREADCRUMB
            ========================= */}

            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    Tools
                </BreadcrumbItem>

                <BreadcrumbItem active>
                    Seat Increase
                </BreadcrumbItem>
            </Breadcrumb>

            <Container className="py-4">
                <Card className="shadow-sm border-0">
                    <CardBody>
                        {/* =========================
                            TOP FILTER BAR
                        ========================= */}

                        <Row className="mb-4 g-3 align-items-center">
                            <Col lg="3" md="6">
                                <Input
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                />
                            </Col>

                            <Col lg="3" md="6">
                                <Select
                                    value={selectedType}
                                    onChange={
                                        setSelectedType
                                    }
                                    options={
                                        allotmentTypes
                                    }
                                    isSearchable={false}
                                />
                            </Col>

                            <Col
                                lg="6"
                                md="12"
                            >
                                <div className="d-flex justify-content-end">
                                    <Button
                                        color="light"
                                        className="border"
                                        onClick={() =>
                                            setFilterModal(
                                                true
                                            )
                                        }
                                    >
                                        <FiFilter className="me-2" />
                                        Filters
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        {/* =========================
                            ACTIVE FILTERS
                        ========================= */}

                        {(stateFilter ||
                            courseFilter ||
                            instituteFilter) && (
                                <div className="mb-3 d-flex flex-wrap gap-2">
                                    {stateFilter && (
                                        <span className="badge bg-light text-dark border p-2">
                                            State:{" "}
                                            {
                                                stateFilter.label
                                            }
                                        </span>
                                    )}

                                    {courseFilter && (
                                        <span className="badge bg-light text-dark border p-2">
                                            Course:{" "}
                                            {
                                                courseFilter.label
                                            }
                                        </span>
                                    )}

                                    {instituteFilter && (
                                        <span className="badge bg-light text-dark border p-2">
                                            Institute:{" "}
                                            {
                                                instituteFilter.label
                                            }
                                        </span>
                                    )}

                                    <Button
                                        color="link"
                                        size="sm"
                                        className="text-danger p-1"
                                        onClick={
                                            resetFilters
                                        }
                                    >
                                        Clear Filters
                                    </Button>
                                </div>
                            )}

                        {/* =========================
                            DATA TABLE
                        ========================= */}

                        <DataTable
                            columns={columns}
                            data={filteredData}
                            customStyles={
                                customStyles
                            }
                            striped
                            responsive
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="600px"
                            highlightOnHover
                            pointerOnHover
                            onRowClicked={
                                handleRowClick
                            }
                            noDataComponent={
                                <div className="py-4">
                                    No seat increase
                                    records found.
                                </div>
                            }
                        />
                    </CardBody>
                </Card>

               
                <FilterModal
                    filterModal={filterModal}
                    setFilterModal={setFilterModal}
                    resetFilters={resetFilters}
                    onApplyFilters={handleApplyFilters}
                />

                <AllotmentDetailsModal
                    isOpen={detailsModal}
                    toggle={() =>
                        setDetailsModal(false)
                    }
                    data={selectedRow}
                />



            </Container>
        </StudentLayoutWrapper>
    );
};

export default SeatIncreasePage;