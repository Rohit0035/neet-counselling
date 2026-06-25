import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import {
    Card,
    CardBody,
    Input,
    Row,
    Col,
    Badge,
} from "reactstrap";

const DashChoiceList = () => {
    const [filterText, setFilterText] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const data = [
        {
            id: 1,
            institute: "AIIMS Delhi",
            course: "MD General Medicine",
            quota: "AIQ",
            category: "UR",
            priority: 1,
        },
        {
            id: 2,
            institute: "JIPMER Puducherry",
            course: "MD Pediatrics",
            quota: "AIQ",
            category: "UR",
            priority: 2,
        },
        {
            id: 3,
            institute: "PGIMER Chandigarh",
            course: "MD Radiology",
            quota: "AIQ",
            category: "OBC",
            priority: 3,
        },
        {
            id: 4,
            institute: "KGMU Lucknow",
            course: "MS General Surgery",
            quota: "State",
            category: "UR",
            priority: 4,
        },
        {
            id: 5,
            institute: "BHU Varanasi",
            course: "MD Dermatology",
            quota: "AIQ",
            category: "EWS",
            priority: 5,
        },
        {
            id: 6,
            institute: "Maulana Azad Medical College",
            course: "MD Anaesthesia",
            quota: "AIQ",
            category: "SC",
            priority: 6,
        },
        {
            id: 7,
            institute: "Seth GS Medical College",
            course: "MS Orthopaedics",
            quota: "State",
            category: "ST",
            priority: 7,
        },
        {
            id: 8,
            institute: "VMMC Safdarjung",
            course: "MD Psychiatry",
            quota: "AIQ",
            category: "OBC",
            priority: 8,
        },
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case "UR":
                return "primary";
            case "OBC":
                return "warning";
            case "SC":
                return "danger";
            case "ST":
                return "dark";
            case "EWS":
                return "success";
            default:
                return "secondary";
        }
    };

    const columns = [
        {
            name: <small>#</small>,
            selector: (row) => row.priority,
            sortable: true,
            width: "70px",
            cell: (row) => (
                <small className="fw-semibold">
                    {row.priority}
                </small>
            ),
        },
        {
            name: <small>Institute</small>,
            selector: (row) => row.institute,
            sortable: true,
            wrap: true,
            cell: (row) => (
                <small className="fw-medium">
                    {row.institute}
                </small>
            ),
        },
        {
            name: <small>Course</small>,
            selector: (row) => row.course,
            sortable: true,
            wrap: true,
            cell: (row) => (
                <small>{row.course}</small>
            ),
        },
        {
            name: <small>Quota</small>,
            selector: (row) => row.quota,
            sortable: true,
            center: true,
            cell: (row) => (
                <small>{row.quota}</small>
            ),
        },
        {
            name: <small>Category</small>,
            sortable: true,
            center: true,
            cell: (row) => (
                <Badge
                    color={getCategoryColor(row.category)}
                    pill
                >
                    {row.category}
                </Badge>
            ),
        },
    ];

    const filteredItems = data.filter((item) => {
        const matchesSearch =
            item.institute
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            item.course
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            item.quota
                .toLowerCase()
                .includes(filterText.toLowerCase());

        const matchesCategory =
            !categoryFilter ||
            item.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    const subHeaderComponent = useMemo(() => {
        return (
            <Row className="w-100 g-2">
                <Col md="4">
                    <Input
                        bsSize="sm"
                        type="text"
                        placeholder="Search institute, course..."
                        value={filterText}
                        onChange={(e) =>
                            setFilterText(e.target.value)
                        }
                    />
                </Col>

                <Col md="3">
                    <Input
                        bsSize="sm"
                        type="select"
                        value={categoryFilter}
                        onChange={(e) =>
                            setCategoryFilter(e.target.value)
                        }
                    >
                        <option value="">
                            All Categories
                        </option>
                        <option value="UR">UR</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="EWS">EWS</option>
                    </Input>
                </Col>
            </Row>
        );
    }, [filterText, categoryFilter]);

    return (
        <>
            <section className="py-3">
                <Card className="border-0 shadow-sm">
                    <CardBody>
                        <div className="mb-0">
                            <h6 className="fw-bold mb-1">
                                My Choice List
                            </h6>

                            <small className="text-muted">
                                Review your preferred colleges and
                                courses before choice locking. Use
                                filters to quickly find specific
                                institutes, courses, or reservation
                                categories.
                            </small>
                        </div>

                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            dense
                            striped
                            highlightOnHover
                            responsive
                            subHeader
                            persistTableHead
                        />
                    </CardBody>
                </Card>
            </section>
        </>

    );
};

export default DashChoiceList;