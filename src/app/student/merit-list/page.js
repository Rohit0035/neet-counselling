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
import { FaArrowDown, FaFilter } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import StudentLayoutWrapper from "@/app/student/components/StudentLayout";
import FilterModal from "@/app/student/merit-list/FilterModal";

const MeritListPage = () => {
    const examOptions = [
        {
            value: "assam-ug-medical",
            label: "Assam - UG Medical",
        },
        {
            value: "assam-ug-dental",
            label: "Assam - UG Dental",
        },
    ];

    const meritOptions = [
        {
            value: "common-merit",
            label: "Common Merit List",
        },
        {
            value: "category-merit",
            label: "Category Merit List",
        },
    ];

    const roundOptions = [
        {
            value: "round-1",
            label: "Round 1",
        },
        {
            value: "round-2",
            label: "Round 2",
        },
        {
            value: "round-3",
            label: "Round 3",
        },
    ];

    const data = [
        {
            id: 1,
            rollNo: "-",
            marks: "-",
            aiRank: 133,
            stateRank: 1,
            category: "UR",
        },
        {
            id: 2,
            rollNo: "-",
            marks: "-",
            aiRank: 243,
            stateRank: 2,
            category: "UR",
        },
        {
            id: 3,
            rollNo: "-",
            marks: "-",
            aiRank: 427,
            stateRank: 3,
            category: "OBC/MOBC (NCL)",
        },
        {
            id: 4,
            rollNo: "-",
            marks: "-",
            aiRank: 554,
            stateRank: 4,
            category: "UR",
        },
        {
            id: 5,
            rollNo: "-",
            marks: "-",
            aiRank: 708,
            stateRank: 5,
            category: "UR",
        },
        {
            id: 6,
            rollNo: "-",
            marks: "-",
            aiRank: 763,
            stateRank: 6,
            category: "UR",
        },
        {
            id: 7,
            rollNo: "-",
            marks: "-",
            aiRank: 876,
            stateRank: 7,
            category: "SC",
        },
        {
            id: 8,
            rollNo: "-",
            marks: "-",
            aiRank: 1020,
            stateRank: 8,
            category: "UR",
        },
        {
            id: 9,
            rollNo: "-",
            marks: "-",
            aiRank: 1077,
            stateRank: 9,
            category: "ST(P)",
        },
        {
            id: 10,
            rollNo: "-",
            marks: "-",
            aiRank: 1245,
            stateRank: 10,
            category: "UR",
        },
        {
            id: 11,
            rollNo: "-",
            marks: "-",
            aiRank: 1388,
            stateRank: 11,
            category: "UR",
        },
        {
            id: 12,
            rollNo: "-",
            marks: "-",
            aiRank: 1450,
            stateRank: 12,
            category: "OBC/MOBC (NCL)",
        },
    ];

    const [exam, setExam] = useState(examOptions[0]);
    const [merit, setMerit] = useState(meritOptions[0]);
    const [round, setRound] = useState(roundOptions[0]);

    const [sortAsc, setSortAsc] = useState(true);

    const [filters] = useState({
        category: "",
    });

    const filteredData = useMemo(() => {
        let rows = [...data];

        if (filters.category) {
            rows = rows.filter(
                (row) => row.category === filters.category
            );
        }

        rows.sort((a, b) =>
            sortAsc
                ? a.aiRank - b.aiRank
                : b.aiRank - a.aiRank
        );

        return rows;
    }, [filters, sortAsc]);

    const columns = [
        {
            name: "S NO",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "ROLL NO",
            selector: (row) => row.rollNo,
            sortable: true,
        },
        {
            name: "MARKS",
            selector: (row) => row.marks,
            sortable: true,
        },
        {
            name: "AI RANK",
            selector: (row) => row.aiRank,
            sortable: true,
        },
        {
            name: "STATE RANK",
            selector: (row) => row.stateRank,
            sortable: true,
        },
        {
            name: "CATEGORIES",
            selector: (row) => row.category,
            sortable: true,
        },
    ];

    const [filterModal, setFilterModal] = useState(false);

    // const [filters, setFilters] = useState({
    //     rollNo: "",
    //     aiRankMin: "",
    //     aiRankMax: "",
    //     stateRankMin: "",
    //     stateRankMax: "",
    //     marksMin: "",
    //     marksMax: "",
    //     category: "",
    // });

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
                    Merit List
                </BreadcrumbItem>
            </Breadcrumb>

            <Container fluid className="py-3">
                <div className="mb-3">
                    <Row className="g-2 align-items-center">
                        <Col xs="auto">
                            <Select
                                className="small"
                                value={exam}
                                onChange={setExam}
                                options={examOptions}
                                isSearchable={false}
                            />
                        </Col>

                        <Col xs="auto">
                            <Select
                                 className="small"
                                value={merit}
                                onChange={setMerit}
                                options={meritOptions}
                                isSearchable={false}
                            />
                        </Col>

                        <Col xs="auto">
                            <Select
                                 className="small"
                                value={round}
                                onChange={setRound}
                                options={roundOptions}
                                isSearchable={false}
                            />
                        </Col>

                        <Col xs="auto">
                            <Button color="primary" className=" btn-sm btn-primary bg-st">
                                Go
                            </Button>
                        </Col>

                        <Col className="d-flex justify-content-end gap-2">
                            <Button  
                                 className="btn btn-primary btn-sm"                              
                                onClick={() =>
                                    setSortAsc((value) => !value)
                                }
                            >
                                <FaArrowDown className="me-1" />
                                Sort
                            </Button>

                            <Button
                                 className="btn btn-primary btn-sm"
                                onClick={() => setFilterModal(true)}
                            >
                                <FaFilter className="me-1" />
                                Filters
                            </Button>
                        </Col>
                    </Row>
                </div>

                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[
                        10,
                        20,
                        50,
                    ]}
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                    highlightOnHover
                    responsive
                    striped
                    noDataComponent="No candidates found"
                />

                <div className="d-flex justify-content-between align-items-center mt-2">
                    <span>
                        1 - {Math.min(filteredData.length, 10)} of{" "}
                        36366 Candidates
                    </span>

                    <div className="d-flex align-items-center gap-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>728</span>

                        <Button
                            color="light"
                            size="sm"
                        >
                            ›
                        </Button>

                        <Button
                            color="light"
                            size="sm"
                        >
                            <FiMaximize2 />
                        </Button>
                    </div>
                </div>
            </Container>

            <FilterModal
                isOpen={filterModal}
                toggle={() => setFilterModal(false)}
                initialValues={filters}
                onApply={(values) => {
                    setFilters(values);
                }}
            />
        </StudentLayoutWrapper>
    );
};

export default MeritListPage;
