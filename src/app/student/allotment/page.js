"use client";

import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Input,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

import {
    FiAlertTriangle,
    FiHeart,
    FiFilter,
    FiExternalLink,
    FiRotateCcw,
} from "react-icons/fi";
import AllotmentDetailsModal from "./AllotmentDetailsModal";
import StudentLayoutWrapper from "../components/StudentLayout";
import ChoiceListModal from "./ChoiceListModal";


const AllotmentPage = () => {

    const allotmentTypes = [
        { value: "inicet", label: "INICET - PG Medical" },
        { value: "neet", label: "NEET PG" },
    ];

    const stateOptions = [
        { value: "Delhi", label: "Delhi" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Karnataka", label: "Karnataka" },
    ];

    const categoryOptions = [
        { value: "UR", label: "UR" },
        { value: "OBC", label: "OBC" },
        { value: "EWS", label: "EWS" },
    ];

    const quotaOptions = [
        {
            value: "AIIMS-All India",
            label: "AIIMS-All India",
        },
        {
            value: "All India",
            label: "All India",
        },
        {
            value: "State Quota",
            label: "State Quota",
        },
    ];

    const roundOptions = [
        { value: 0, label: "Round 0" },
        { value: 1, label: "Round 1" },
        { value: 2, label: "Round 2" },
    ];

    const dummyData = [
        {
            round: 0,
            rank: 1,
            state: "Delhi",
            institute: "AIIMS Delhi",
            course: "GENERAL MEDICINE",
            quota: "AIIMS-All India",
            category: "UR",
        },
        {
            round: 0,
            rank: 2,
            state: "Delhi",
            institute: "AIIMS Delhi",
            course: "GENERAL MEDICINE",
            quota: "AIIMS-All India",
            category: "UR",
        },
        {
            round: 0,
            rank: 3,
            state: "Delhi",
            institute: "AIIMS Delhi",
            course: "GENERAL MEDICINE",
            quota: "AIIMS-All India",
            category: "UR",
        },
        {
            round: 1,
            rank: 15,
            state: "Maharashtra",
            institute: "KEM Hospital",
            course: "RADIOLOGY",
            quota: "State Quota",
            category: "OBC",
        },
        {
            round: 1,
            rank: 20,
            state: "Karnataka",
            institute: "BMC Bengaluru",
            course: "DERMATOLOGY",
            quota: "All India",
            category: "EWS",
        },
        {
            round: 2,
            rank: 35,
            state: "Delhi",
            institute: "Safdarjung Hospital",
            course: "ORTHOPEDICS",
            quota: "All India",
            category: "UR",
        },
    ];

    const [detailsModal, setDetailsModal] =
        useState(false);

    const [choiceModal, setChoiceModal] =
        useState(false);

    const [selectedRow, setSelectedRow] =
        useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setDetailsModal(true);
    };

    const [selectedType, setSelectedType] =
        useState(allotmentTypes[0]);

    const [search, setSearch] = useState("");

    const [filterModal, setFilterModal] =
        useState(false);

    const [stateFilter, setStateFilter] =
        useState(null);

    const [categoryFilter, setCategoryFilter] =
        useState(null);

    const [quotaFilter, setQuotaFilter] =
        useState(null);

    const [roundFilter, setRoundFilter] =
        useState(null);

    const [rankFrom, setRankFrom] = useState("");

    const [rankTo, setRankTo] = useState("");

    const resetFilters = () => {
        setStateFilter(null);
        setCategoryFilter(null);
        setQuotaFilter(null);
        setRoundFilter(null);
        setRankFrom("");
        setRankTo("");
    };

    const filteredData = useMemo(() => {
        let data = [...dummyData];

        if (search) {
            data = data.filter((item) =>
                Object.values(item)
                    .join(" ")
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (stateFilter) {
            data = data.filter(
                (item) => item.state === stateFilter.value
            );
        }

        if (categoryFilter) {
            data = data.filter(
                (item) =>
                    item.category === categoryFilter.value
            );
        }

        if (quotaFilter) {
            data = data.filter(
                (item) => item.quota === quotaFilter.value
            );
        }

        if (roundFilter) {
            data = data.filter(
                (item) => item.round === roundFilter.value
            );
        }

        if (rankFrom) {
            data = data.filter(
                (item) => item.rank >= Number(rankFrom)
            );
        }

        if (rankTo) {
            data = data.filter(
                (item) => item.rank <= Number(rankTo)
            );
        }

        return data;
    }, [
        search,
        stateFilter,
        categoryFilter,
        quotaFilter,
        roundFilter,
        rankFrom,
        rankTo,
    ]);

    const columns = [
        {
            name: "ROUND",
            selector: (row) => row.round,
            sortable: true,
            width: "100px",
        },
        {
            name: "AI RANK",
            selector: (row) => row.rank,
            sortable: true,
            width: "120px",
        },
        {
            name: "STATE",
            selector: (row) => row.state,
            sortable: true,
        },
        {
            name: "INSTITUTE",
            selector: (row) => row.institute,
            sortable: true,
            grow: 2,
            cell: (row) => (
                <Button
                    color="link"
                    className="p-0 text-decoration-none fw-semibold text-st small"
                >
                    {row.institute}
                </Button>
            ),
        },
        {
            name: "COURSE",
            selector: (row) => row.course,
            sortable: true,
            grow: 2,
        },
        {
            name: "QUOTA",
            selector: (row) => row.quota,
            sortable: true,
        },
        {
            name: "CATEGORY",
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: "",
            width: "80px",
            cell: () => (
                <FiHeart
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setChoiceModal(true);
                    }}
                />
            ),
        }
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
                    Allotments
                </BreadcrumbItem>
            </Breadcrumb>
            <Container className="py-4">
                <Card
                    className="border-0 shadow-sm"
                    data-aos="zoom-in"
                >
                    <CardBody>
                        <Row className="align-items-center g-3 mb-4">


                            <Col lg="3">
                                <Input
                                    placeholder="Search institute, course, state..."
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
                                <div className="d-flex justify-content-md-end gap-2 flex-wrap">
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
                                    <Button
                                        color="light"
                                        className="border"
                                    >
                                        Go to counselling
                                        <FiExternalLink className="ms-2" />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <DataTable
                            columns={columns}
                            data={filteredData}
                            pagination
                            striped
                            responsive
                            highlightOnHover
                            pointerOnHover
                            onRowClicked={handleRowClick}
                        />

                        <div className="mt-3 d-flex align-items-center gap-2 text-muted">
                            <FiAlertTriangle />
                            <small>
                                Spotted an error? Let us know
                            </small>
                        </div>
                    </CardBody>
                </Card>

                <Modal
                    isOpen={filterModal}
                    toggle={() => setFilterModal(false)}
                    size="lg"
                >
                    <ModalHeader
                        toggle={() => setFilterModal(false)}
                    >
                        Advanced Filters
                    </ModalHeader>

                    <ModalBody>
                        <Row className="g-3">
                            <Col md="6">
                                <label className="form-label">
                                    State
                                </label>

                                <Select
                                    isClearable
                                    value={stateFilter}
                                    options={stateOptions}
                                    onChange={setStateFilter}
                                />
                            </Col>

                            <Col md="6">
                                <label className="form-label">
                                    Category
                                </label>

                                <Select
                                    isClearable
                                    value={categoryFilter}
                                    options={categoryOptions}
                                    onChange={setCategoryFilter}
                                />
                            </Col>

                            <Col md="6">
                                <label className="form-label">
                                    Quota
                                </label>

                                <Select
                                    isClearable
                                    value={quotaFilter}
                                    options={quotaOptions}
                                    onChange={setQuotaFilter}
                                />
                            </Col>

                            <Col md="6">
                                <label className="form-label">
                                    Round
                                </label>

                                <Select
                                    isClearable
                                    value={roundFilter}
                                    options={roundOptions}
                                    onChange={setRoundFilter}
                                />
                            </Col>

                            <Col md="6">
                                <label className="form-label">
                                    Rank From
                                </label>

                                <Input
                                    type="number"
                                    value={rankFrom}
                                    onChange={(e) =>
                                        setRankFrom(e.target.value)
                                    }
                                />
                            </Col>

                            <Col md="6">
                                <label className="form-label">
                                    Rank To
                                </label>

                                <Input
                                    type="number"
                                    value={rankTo}
                                    onChange={(e) =>
                                        setRankTo(e.target.value)
                                    }
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
                            Apply Filters
                        </Button>
                    </ModalFooter>
                </Modal>
            </Container>
            <AllotmentDetailsModal
                isOpen={detailsModal}
                toggle={() => setDetailsModal(false)}
                data={selectedRow}
            />
            {/* modal for choise */}
            <ChoiceListModal
                isOpen={choiceModal}
                toggle={() => setChoiceModal(false)}
            />

        </StudentLayoutWrapper>
    );
};

export default AllotmentPage;