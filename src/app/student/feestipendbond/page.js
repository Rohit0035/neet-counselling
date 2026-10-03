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
    BreadcrumbItem
} from "reactstrap";

import {
    FiFilter,
    FiHeart,
    FiRotateCcw,
} from "react-icons/fi";

import AllotmentDetailsModal from "@/app/student/allotment/AllotmentDetailsModal";
import StudentLayoutWrapper from "@/app/student/components/StudentLayout";

const FeeStipendBondPage = () => {
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
    ];

    const categoryOptions = [
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
    ];

    const quotaOptions = [
        {
            value: "All India",
            label: "All India",
        },
        {
            value: "JIPMER",
            label: "JIPMER",
        },
    ];

    const sessions = [
        "Jan-2022",
        "Jul-2022",
        "Jan-2023",
        "Jul-2023",
    ];

    const data = [
    {
        id: 1,
        state: "Jharkhand",
        institute: "Bokaro General Hospital, Bokaro",
        course: "DNBOBG",
        quota: "DNB Post MBBS",
        fee: "₹1,25,000",
        stipend: "₹60,588",
        bondYears: "0",
        bondPenalty: "₹0",
        beds: "910",
    },
    {
        id: 2,
        state: "Jharkhand",
        institute: "Sadar Hospital, Ranchi",
        course: "DNBOBG",
        quota: "DNB Post MBBS",
        fee: "₹1,25,000",
        stipend: "₹54,500",
        bondYears: "0",
        bondPenalty: "₹0",
        beds: "380",
    },
    {
        id: 3,
        state: "Karnataka",
        institute: "New Amrutha Med & RC, Raichur",
        course: "DCH(NBEMS)",
        quota: "NBE Diploma",
        fee: "₹1,25,000",
        stipend: "₹45,000*",
        bondYears: "0",
        bondPenalty: "₹0",
        beds: "Info Not Available",
    },
];

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

    const resetFilters = () => {
        setStateFilter(null);
        setCategoryFilter(null);
        setQuotaFilter(null);
    };

    const filteredData = useMemo(() => {
        let rows = [...data];

        if (search) {
            rows = rows.filter((item) =>
                JSON.stringify(item)
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (stateFilter) {
            rows = rows.filter(
                (item) =>
                    item.state === stateFilter.value
            );
        }

        if (categoryFilter) {
            rows = rows.filter(
                (item) =>
                    item.category ===
                    categoryFilter.value
            );
        }

        if (quotaFilter) {
            rows = rows.filter(
                (item) =>
                    item.quota === quotaFilter.value
            );
        }

        return rows;
    }, [
        search,
        stateFilter,
        categoryFilter,
        quotaFilter,
    ]);

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setDetailsModal(true);
    };

    const columns = [
    {
        name: "STATE",
        selector: (row) => row.state,
        sortable: true,
        width: "120px",
    },

    {
        name: "INSTITUTE",
        grow: 2.5,
        sortable: true,
        cell: (row) => (
            <Button
                color="link"
                className="p-0 text-start fw-semibold text-decoration-none st-txt-o"
            >
                {row.institute}
            </Button>
        ),
    },

    {
        name: "COURSE",
        selector: (row) => row.course,
        sortable: true,
        width: "150px",
    },

    {
        name: "QUOTA",
        selector: (row) => row.quota,
        sortable: true,
        width: "160px",
    },

    {
        name: "FEE",
        selector: (row) => row.fee,
        sortable: true,
        width: "120px",
        center: true,
    },

    {
        name: "STIPEND YEAR 1",
        selector: (row) => row.stipend,
        sortable: true,
        width: "150px",
        center: true,
    },

    {
        name: "BOND YEARS",
        selector: (row) => row.bondYears,
        sortable: true,
        width: "130px",
        center: true,
    },

    {
        name: "BOND PENALTY",
        selector: (row) => row.bondPenalty,
        sortable: true,
        width: "150px",
        center: true,
    },

    {
        name: "BEDS",
        selector: (row) => row.beds,
        sortable: true,
        width: "150px",
        center: true,
    },
];

    return (
        <StudentLayoutWrapper>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    Insights
                </BreadcrumbItem>

                <BreadcrumbItem active>
                    Fee, Stipend & Bond
                </BreadcrumbItem>
            </Breadcrumb>
            <Container className="py-4">
                <Card className="shadow-sm border-0">
                    <CardBody>
                        <Row className="mb-4 g-3">
                            <Col lg="3">
                                <Input
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />
                            </Col>

                            <Col lg="3">
                                <Select
                                    value={selectedType}
                                    onChange={setSelectedType}
                                    options={allotmentTypes}
                                />
                            </Col>

                            <Col lg="6">
                                <div className="d-flex justify-content-end">
                                    <Button
                                        color="light"
                                        className="border"
                                        onClick={() =>
                                            setFilterModal(true)
                                        }
                                    >
                                        <FiFilter className="me-2" />
                                        Filters
                                    </Button>
                                </div>
                            </Col>
                        </Row>

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
                            onRowClicked={handleRowClick}
                        />
                    </CardBody>
                </Card>

                {/* FILTER MODAL */}

                <Modal
                    isOpen={filterModal}
                    toggle={() =>
                        setFilterModal(false)
                    }
                    size="lg"
                >
                    <ModalHeader
                        toggle={() =>
                            setFilterModal(false)
                        }
                    >
                        Advanced Filters
                    </ModalHeader>

                    <ModalBody>
                        <Row className="g-3">
                            <Col md="4">
                                <label className="mb-2">
                                    State
                                </label>

                                <Select
                                    isClearable
                                    value={stateFilter}
                                    options={stateOptions}
                                    onChange={setStateFilter}
                                />
                            </Col>

                            <Col md="4">
                                <label className="mb-2">
                                    Category
                                </label>

                                <Select
                                    isClearable
                                    value={categoryFilter}
                                    options={categoryOptions}
                                    onChange={
                                        setCategoryFilter
                                    }
                                />
                            </Col>

                            <Col md="4">
                                <label className="mb-2">
                                    Quota
                                </label>

                                <Select
                                    isClearable
                                    value={quotaFilter}
                                    options={quotaOptions}
                                    onChange={setQuotaFilter}
                                />
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="secondary"
                            onClick={resetFilters}
                        >
                            <FiRotateCcw className="me-2" />
                            Reset
                        </Button>

                        <Button
                            color="primary"
                            onClick={() =>
                                setFilterModal(false)
                            }
                        >
                            Apply
                        </Button>
                    </ModalFooter>
                </Modal>

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

export default FeeStipendBondPage;