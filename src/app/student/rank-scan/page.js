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
    FormGroup,
    Label
} from "reactstrap";

import {
    FiFilter,
    FiHeart,
    FiRotateCcw,
} from "react-icons/fi";

import StudentLayoutWrapper from "../components/StudentLayout";
import AllotmentDetailsModal from "../allotment/AllotmentDetailsModal";
import FilterModal from "./FilterModel";

const RankScanPage = () => {
    // --------------------------------------------------
    // ALLOTMENT TYPES
    // --------------------------------------------------

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

    // --------------------------------------------------
    // FILTER OPTIONS
    // --------------------------------------------------

    const stateOptions = [
        {
            value: "Delhi",
            label: "Delhi",
        },
        {
            value: "Pondicherry",
            label: "Pondicherry",
        },
        {
            value: "Karnataka",
            label: "Karnataka",
        },
        {
            value: "Maharashtra",
            label: "Maharashtra",
        },
        {
            value: "Tamil Nadu",
            label: "Tamil Nadu",
        },
    ];

    const categoryOptions = [
        {
            value: "Open",
            label: "Open",
        },
        {
            value: "UR",
            label: "UR",
        },
        {
            value: "OBC",
            label: "OBC",
        },
        {
            value: "EWS",
            label: "EWS",
        },
        {
            value: "SC",
            label: "SC",
        },
        {
            value: "ST",
            label: "ST",
        },
    ];

    const quotaOptions = [
        {
            value: "AIIMS SO",
            label: "AIIMS SO",
        },
        {
            value: "All India",
            label: "All India",
        },
        {
            value: "JIPMER",
            label: "JIPMER",
        },
        {
            value: "State",
            label: "State",
        },
    ];

    // --------------------------------------------------
    // TABLE DATA
    // --------------------------------------------------

    const data = [
        {
            id: 1,
            aiRank: 1,
            counselling: "All India UG - Medical & Dental",
            round: 2,
            state: "Delhi",
            institute: "AIIMS, Delhi",
            course: "MBBS",
            quota: "AIIMS SO",
            category: "Open",
            admission: "-",
        },
        {
            id: 2,
            aiRank: 1,
            counselling: "All India UG - Medical & Dental",
            round: 1,
            state: "Delhi",
            institute: "AIIMS, Delhi",
            course: "MBBS",
            quota: "AIIMS SO",
            category: "Open",
            admission: "-",
        },
        {
            id: 3,
            aiRank: 2,
            counselling: "All India UG - Medical & Dental",
            round: 2,
            state: "Delhi",
            institute: "AIIMS, Delhi",
            course: "MBBS",
            quota: "AIIMS SO",
            category: "Open",
            admission: "-",
        },
    ];

    // --------------------------------------------------
    // STATES
    // --------------------------------------------------

    const [selectedType, setSelectedType] =
        useState(allotmentTypes[0]);

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

    const [categoryFilter, setCategoryFilter] =
        useState(null);

    const [quotaFilter, setQuotaFilter] =
        useState(null);



    const [appliedFilters, setAppliedFilters] = useState({});

    // --------------------------------------------------
    // RESET FILTERS
    // --------------------------------------------------

    const resetFilters = () => {
        setStateFilter(null);
        setCategoryFilter(null);
        setQuotaFilter(null);
    };

    // --------------------------------------------------
    // FILTER DATA
    // --------------------------------------------------

    const filteredData = useMemo(() => {
        let rows = [...data];

        // Search
        if (search.trim()) {
            rows = rows.filter((item) =>
                JSON.stringify(item)
                    .toLowerCase()
                    .includes(search.toLowerCase().trim())
            );
        }

        // State
        if (stateFilter) {
            rows = rows.filter(
                (item) =>
                    item.state === stateFilter.value
            );
        }

        // Category
        if (categoryFilter) {
            rows = rows.filter(
                (item) =>
                    item.category ===
                    categoryFilter.value
            );
        }

        // Quota
        if (quotaFilter) {
            rows = rows.filter(
                (item) =>
                    item.quota ===
                    quotaFilter.value
            );
        }

        return rows;
    }, [
        search,
        stateFilter,
        categoryFilter,
        quotaFilter,
    ]);

    // --------------------------------------------------
    // ROW CLICK
    // --------------------------------------------------

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setDetailsModal(true);
    };

    // --------------------------------------------------
    // TABLE COLUMNS
    // --------------------------------------------------

    const columns = [
        {
            name: "AI RANK",
            selector: (row) => row.aiRank,
            width: "90px",
            sortable: true,
            center: true,
        },

        {
            name: "COUNSELLING",
            selector: (row) => row.counselling,
            width: "230px",
            sortable: true,
        },

        {
            name: "ROUND",
            selector: (row) => row.round,
            width: "80px",
            sortable: true,
            center: true,
        },

        {
            name: "STATE",
            selector: (row) => row.state,
            width: "100px",
            sortable: true,
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
            width: "100px",
            sortable: true,
        },

        {
            name: "QUOTA",
            selector: (row) => row.quota,
            width: "120px",
            sortable: true,
        },

        {
            name: "CATEGORY",
            selector: (row) => row.category,
            width: "110px",
            sortable: true,
        },

        {
            name: "ADMISSION STATUS",
            selector: (row) => row.admission,
            width: "110px",
            center: true,
        },
        {
            name: "JOINED STATUS",
            selector: (row) => row.admission,
            width: "110px",
            center: true,
        },


    ];

    // --------------------------------------------------
    // TABLE STYLES
    // --------------------------------------------------

    const customStyles = {
        table: {
            style: {
                minWidth: "1200px",
            },
        },

        headRow: {
            style: {
                backgroundColor: "#f8f9fa",
                minHeight: "48px",
                borderBottom: "1px solid #dee2e6",
            },
        },

        headCells: {
            style: {
                fontSize: "12px",
                fontWeight: "700",
                color: "#495057",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
            },
        },

        rows: {
            style: {
                minHeight: "58px",
                fontSize: "13px",
                color: "#212529",
            },
        },

        cells: {
            style: {
                paddingLeft: "12px",
                paddingRight: "12px",
            },
        },

        pagination: {
            style: {
                borderTop: "1px solid #dee2e6",
                marginTop: "10px",
            },
        },
    };

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    const handleApplyFilters = (filters) => {
        console.log("Applied Filters:", filters);

        setAppliedFilters(filters);

        setFilterModal(false);

        // Here you can call API / filter your table
        // fetchData(filters);
    };

    return (
        <StudentLayoutWrapper>

            {/* BREADCRUMB */}

            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    Tools
                </BreadcrumbItem>

                <BreadcrumbItem active>
                    Rank Scan
                </BreadcrumbItem>
            </Breadcrumb>

            <Container className="py-4">

                <Card className="shadow-sm border-0">

                    <CardBody>

                        {/* TOP FILTER BAR */}

                        <Row className="mb-4 g-3">

                            {/* SEARCH */}

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

                            {/* ALLOTMENT TYPE */}

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

                            {/* FILTER BUTTON */}

                            <Col lg="6">

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

                        {/* DATA TABLE */}

                        <DataTable
                            columns={columns}
                            data={filteredData}
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
                            customStyles={
                                customStyles
                            }
                            paginationPerPage={10}
                            paginationRowsPerPageOptions={[
                                10,
                                20,
                                50,
                                100,
                            ]}
                            noDataComponent={
                                <div className="py-5 text-muted">
                                    No records found
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

export default RankScanPage;
