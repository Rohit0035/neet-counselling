"use client";

import React, { useMemo, useState } from "react";
import {
    Container,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    Pagination,
    PaginationItem,
    PaginationLink,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import Select from "react-select";
import { FaSearch, FaGraduationCap } from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";
import Link from "next/link";

const COUNSELLINGS = [
    ["All India UG - Medical & Dental", "All India"],
    ["AFMS (through MCC) - UG Medical", "MCC"],
    ["Andaman & Nicobar Islands - UG Medical", "Government Quota"],
    ["Andhra Pradesh Government Quota - UG Medical", "Government Quota"],
    ["Andhra Pradesh Management Quota - UG Medical", "Management Quota"],
    ["Arunachal Pradesh - UG Medical", "Government Quota"],
    ["Assam - UG Medical", "Government Quota"],
    ["Bihar - UG Medical", "Government Quota and Management Quota"],
    ["Chandigarh - UG Medical", "Government Quota"],
    ["Chhattisgarh - UG Medical", "Government Quota and Management Quota"],
    ["Dadra and Nagar Haveli - UG Medical", "Government Quota and Management Quota"],
    ["Delhi - UG Medical", "Government Quota"],
    ["Goa - UG Medical", "Government Quota"],
    ["Gujarat - UG Medical", "Government Quota and Management Quota"],
    ["Haryana - UG Medical", "Government Quota and Management Quota"],
    ["Himachal Pradesh - UG Medical", "Government Quota and Management Quota"],
    ["Jammu and Kashmir - UG Medical", "Government Quota and Management Quota"],
    ["Jharkhand - UG Medical", "Government Quota"],
    ["Karnataka - UG Medical", "Government Quota and Management Quota"],
    ["Kerala - UG Medical", "Government Quota and Management Quota"],
    ["Madhya Pradesh - UG Medical", "Government Quota and Management Quota"],
    ["Maharashtra - UG Medical", "Government Quota and Management Quota"],
    ["Manipur - UG Medical", "Government Quota"],
    ["Meghalaya - UG Medical", "Government Quota"],
    ["Mizoram - UG Medical", "Government Quota"],
    ["Nagaland - UG Medical", "Government Quota"],
    ["NEIGRIHMS - UG Medical", "Government Quota"],
    ["Odisha - UG Medical", "Government Quota and Management Quota"],
    ["Open Seats (Private Institute seats available)", "Open Seats"],
    ["Pondicherry - UG Medical", "Government Quota and Management Quota"],
    ["Punjab - UG Medical", "Government Quota and Management Quota"],
    ["Rajasthan - UG Medical", "Government Quota and Management Quota"],
    ["RIMS Manipur - UG Medical", "Government Quota"],
    ["Sikkim Manipal University - UG Medical", "Government Quota and Management Quota"],
    ["Sikkim - UG Medical", "Government Quota"],
    ["Tamil Nadu - UG Medical", "Government Quota and Management Quota"],
    ["Telangana - UG Medical", "Government Quota"],
    ["Tripura - UG Medical", "Government Quota"],
    ["Uttar Pradesh - UG Medical", "Government Quota and Management Quota"],
    ["Uttarakhand - UG Medical", "Government Quota and Management Quota"],
    ["West Bengal - UG Medical", "Government Quota and Management Quota"],
];

const TYPE_OPTIONS = [
    { value: "all", label: "Counselling Type" },
    { value: "medical", label: "UG Medical" },
    { value: "dental", label: "UG Dental" },
];

const STATE_OPTIONS = [
    { value: "all", label: "State / Authority" },
    ...COUNSELLINGS.map(([name]) => ({
        value: name,
        label: name,
    })),
];

const ITEMS_PER_PAGE = 12;

const Counsellings = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState(TYPE_OPTIONS[0]);
    const [state, setState] = useState(STATE_OPTIONS[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        return COUNSELLINGS.filter(([name, category]) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                name.toLowerCase().includes(searchText) ||
                category.toLowerCase().includes(searchText);

            const matchesType =
                type.value === "all" ||
                name.toLowerCase().includes(type.value);

            const matchesState =
                state.value === "all" || name === state.value;

            return matchesSearch && matchesType && matchesState;
        });
    }, [search, type, state]);

    const totalPages = Math.ceil(
        filteredData.length / ITEMS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentData = filteredData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const handleTypeChange = (selected) => {
        setType(selected);
        setCurrentPage(1);
    };

    const handleStateChange = (selected) => {
        setState(selected);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <StudentLayoutWrapper>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="/">Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        Explore
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Counsellings
                    </BreadcrumbItem>
                </Breadcrumb>
                <Container fluid className="p-0">
                    <div className="bg-light rounded-bottom py-3">

                        <Container>
                            <Row className="justify-content-center">
                                <Col xs={12} sm={8} md={6} lg={4} className="mb-2">
                                    <InputGroup >
                                        <InputGroupText className="bg-white">
                                            <FaSearch size={10} />
                                        </InputGroupText>

                                        <Input
                                            value={search}
                                            onChange={handleSearch}
                                            placeholder="Search counsellings"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={12} sm={8} md={6} lg={4} className="mb-2">
                                    <Select
                                        value={type}
                                        options={TYPE_OPTIONS}
                                        onChange={handleTypeChange}
                                        isSearchable={false}
                                    />
                                </Col>
                                <Col xs={12} sm={8} md={6} lg={4} className="mb-2">
                                    <Select
                                        value={state}
                                        options={STATE_OPTIONS}
                                        onChange={handleStateChange}
                                    />
                                </Col>

                                <Col xs={12} sm={8} md={12} lg={12}>
                                    <div className="text-start small mt-2">
                                        {filteredData.length} Counsellings found
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Container fluid className="p-0">
                        <Row xs="1" sm="2" md="3" lg="5" className="g-0">
                            {currentData.map(([name, category]) => (
                                <Col key={name}>
                                    <Link href="/student/counsellings-detail">
                                        <div className="d-flex align-items-center gap-2 p-2 border-end border-bottom">
                                            <div className="d-flex align-items-center justify-content-center bg-white rounded flex-shrink-0 p-2">
                                                <FaGraduationCap size={20} />
                                            </div>
                                            <div className="overflow-hidden">
                                                <div
                                                    className="text-primary text-truncate"
                                                    title={name}
                                                >
                                                    {name}
                                                </div>
                                                <div
                                                    className="text-muted text-truncate small"
                                                    title={category}
                                                >
                                                    {category}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    {currentData.length === 0 && (
                        <div className="text-center text-muted py-5">
                            No counsellings found
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center py-3">
                            <Pagination className="mb-0">
                                <PaginationItem disabled={currentPage === 1}>
                                    <PaginationLink
                                        previous
                                        onClick={() =>
                                            handlePageChange(currentPage - 1)
                                        }
                                    />
                                </PaginationItem>

                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => index + 1
                                ).map((page) => (
                                    <PaginationItem
                                        key={page}
                                        active={page === currentPage}
                                    >
                                        <PaginationLink
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem
                                    disabled={currentPage === totalPages}
                                >
                                    <PaginationLink
                                        next
                                        onClick={() =>
                                            handlePageChange(currentPage + 1)
                                        }
                                    />
                                </PaginationItem>
                            </Pagination>
                        </div>
                    )}
                </Container>
            </StudentLayoutWrapper>
        </>


    );
};

export default Counsellings;
