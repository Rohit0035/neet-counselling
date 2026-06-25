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

import AllotmentDetailsModal from "./AllotmentDetailsModal";
import ChoiceListModal from "./ChoiceListModal";
import StudentLayoutWrapper from "../components/StudentLayout";

const ClosingRankingPage = () => {
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
            state: "Pondicherry",

            institute:
                "Jawaharlal Institute of Postgraduate Medical Education & Research",

            location: "Pondicherry",

            course: "MD Radio Diagnosis",

            quota: "JIPMER",

            category: "OBC",

            ranks: {
                "Jan-2022": "107(3)",
                "Jul-2022": "84(2)",
                "Jan-2023": "48(1)",
                "Jul-2023": "119(2)",
            },
        },

        {
            id: 2,
            state: "Delhi",

            institute: "AIIMS Delhi",

            location: "Delhi",

            course: "General Medicine",

            quota: "All India",

            category: "UR",

            ranks: {
                "Jan-2022": "12",
                "Jul-2022": "10",
                "Jan-2023": "8",
                "Jul-2023": "7",
            },
        },

        {
            id: 3,
            state: "Delhi",

            institute: "AIIMS Delhi",

            location: "Delhi",

            course: "Radiology",

            quota: "All India",

            category: "OBC",

            ranks: {
                "Jan-2022": "35",
                "Jul-2022": "30",
                "Jan-2023": "27",
                "Jul-2023": "22",
            },
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
            width: "130px",
        },

        {
            name: "INSTITUTE",
            grow: 2,
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
            width: "220px",
        },

        {
            name: "QUOTA",
            selector: (row) => row.quota,
            width: "150px",
        },

        {
            name: "CATEGORY",
            selector: (row) => row.category,
            width: "120px",
        },

        ...sessions.map((session) => ({
            name: session,
            width: "120px",

            cell: (row) => (
                <div
                    className="text-primary fw-semibold"
                >
                    {row.ranks?.[session] || "-"}
                </div>
            ),
        })),

        {
            name: "",
            width: "70px",

            cell: () => (
                <FiHeart
                    onClick={(e) => {
                        e.stopPropagation();
                        setChoiceModal(true);
                    }}
                    size={18}
                    style={{
                        cursor: "pointer",
                    }}
                />

            ),
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
                    Closing Ranks
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
                {/* modal for choise */}
                <ChoiceListModal
                    isOpen={choiceModal}
                    toggle={() => setChoiceModal(false)}
                />
            </Container>

        </StudentLayoutWrapper>

    );
};

export default ClosingRankingPage;