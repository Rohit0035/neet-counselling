"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupText,
  Badge,
  Button,
  Breadcrumb, BreadcrumbItem
} from "reactstrap";

import {
  FaSearch,
  FaUniversity,
  FaMapMarkerAlt,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const InstitutesPage = () => {
  const institutes = [
    {
      id: 1,
      name: "All India Institute of Medical Sciences, New Delhi",
      state: "Delhi",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-delhi",
    },
    {
      id: 2,
      name: "PGIMER Chandigarh",
      state: "Chandigarh",
      authority: "PGIMER",
      type: "INI",
      slug: "pgimer-chandigarh",
    },
    {
      id: 3,
      name: "NIMHANS Bangalore",
      state: "Karnataka",
      authority: "NIMHANS",
      type: "INI",
      slug: "nimhans-bangalore",
    },
    {
      id: 4,
      name: "AIIMS Bhopal",
      state: "Madhya Pradesh",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-bhopal",
    },
    {
      id: 5,
      name: "AIIMS Jodhpur",
      state: "Rajasthan",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-jodhpur",
    },
    {
      id: 6,
      name: "AIIMS Patna",
      state: "Bihar",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-patna",
    },
    {
      id: 7,
      name: "AIIMS Raipur",
      state: "Chhattisgarh",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-raipur",
    },
    {
      id: 8,
      name: "AIIMS Rishikesh",
      state: "Uttarakhand",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-rishikesh",
    },
    {
      id: 9,
      name: "AIIMS Nagpur",
      state: "Maharashtra",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-nagpur",
    },
    {
      id: 10,
      name: "AIIMS Bathinda",
      state: "Punjab",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-bathinda",
    },
    {
      id: 11,
      name: "AIIMS Bibinagar",
      state: "Telangana",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-bibinagar",
    },
    {
      id: 12,
      name: "AIIMS Mangalagiri",
      state: "Andhra Pradesh",
      authority: "AIIMS",
      type: "INI",
      slug: "aiims-mangalagiri",
    },
  ];

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [authority, setAuthority] = useState("");
  const [state, setState] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = useMemo(() => {
    return institutes.filter((item) => {
      const searchMatch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const typeMatch = !type || item.type === type;
      const authorityMatch =
        !authority || item.authority === authority;

      const stateMatch = !state || item.state === state;

      return (
        searchMatch &&
        typeMatch &&
        authorityMatch &&
        stateMatch
      );
    });
  }, [search, type, authority, state]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, type, authority, state]);

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <StudentLayoutWrapper>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem >
          Explore
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Institutes
        </BreadcrumbItem>
      </Breadcrumb>
      <section className="py-4 min-vh-100">
        <Container>
          <Card className="border-0 shadow-sm rounded-4 mb-5">
            <CardBody className="p-4 p-lg-5">

              <Row className="g-3 justify-content-center">

                <Col lg={4}>
                  <InputGroup>
                    <InputGroupText>
                      <FaSearch />
                    </InputGroupText>

                    <Input
                      placeholder="Search institute..."
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                    />
                  </InputGroup>
                </Col>

                <Col lg={2}>
                  <Input
                    type="select"
                    value={type}
                    onChange={(e) =>
                      setType(e.target.value)
                    }
                  >
                    <option value="">
                      Institute Type
                    </option>
                    <option value="INI">
                      INI
                    </option>
                  </Input>
                </Col>

                <Col lg={3}>
                  <Input
                    type="select"
                    value={authority}
                    onChange={(e) =>
                      setAuthority(e.target.value)
                    }
                  >
                    <option value="">
                      Authority / Board
                    </option>

                    <option value="AIIMS">
                      AIIMS
                    </option>

                    <option value="PGIMER">
                      PGIMER
                    </option>

                    <option value="NIMHANS">
                      NIMHANS
                    </option>
                  </Input>
                </Col>

                <Col lg={3}>
                  <Input
                    type="select"
                    value={state}
                    onChange={(e) =>
                      setState(e.target.value)
                    }
                  >
                    <option value="">
                      State
                    </option>

                    {[...new Set(
                      institutes.map(
                        (item) => item.state
                      )
                    )].map((state) => (
                      <option
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}
                  </Input>
                </Col>

              </Row>

                         </CardBody>
          </Card>

          <Row className="g-4">

             <div className="text-start mt-4 small">
                <Badge
                  color="primary"
                  pill
                  className="px-4 py-2"
                >
                  {filteredData.length} Institutes Found
                </Badge>
              </div>

            {currentData.map((item) => (
              <Col
                xl={3}
                lg={4}
                md={6}
                key={item.id}
              >
                <Card
                  className="border-0 shadow-sm rounded-4 h-100"
                  style={{
                    animation:
                      "zoomIn .5s ease",
                  }}
                >
                  <CardBody className="p-4 d-flex flex-column">

                    <div className="d-flex justify-content-between mb-3">

                      <div className="bg-primary bg-opacity-10 rounded p-3">
                        <FaUniversity
                          className="text-primary"
                          size={20}
                        />
                      </div>

                      <small color="info">
                        {item.type}
                      </small>

                    </div>

                    <h6
                      className="fw-bold mb-3"
                      style={{
                        minHeight: "60px",
                      }}
                    >
                      {item.name}
                    </h6>

                    <div className="small text-muted mb-2">
                      <FaBuilding className="me-2" />
                      {item.authority}
                    </div>

                    <div className="small text-muted mb-3">
                      <FaMapMarkerAlt className="me-2" />
                      {item.state}
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/student/institute-detail`}
                      >
                        <Button
                          color="primary"
                          className="w-100 rounded-pill"
                        >
                          View Details
                          <FaArrowRight className="ms-2" />
                        </Button>
                      </Link>
                    </div>

                  </CardBody>
                </Card>
              </Col>
            ))}

          </Row>

          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">

              <ul className="pagination shadow-sm">

                <li
                  className={`page-item ${currentPage === 1
                    ? "disabled"
                    : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage(
                        currentPage - 1
                      )
                    }
                  >
                    Previous
                  </button>
                </li>

                {[...Array(totalPages)].map(
                  (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage ===
                        index + 1
                        ? "active"
                        : ""
                        }`}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          setCurrentPage(
                            index + 1
                          )
                        }
                      >
                        {index + 1}
                      </button>
                    </li>
                  )
                )}

                <li
                  className={`page-item ${currentPage ===
                    totalPages
                    ? "disabled"
                    : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage(
                        currentPage + 1
                      )
                    }
                  >
                    Next
                  </button>
                </li>

              </ul>

            </div>
          )}

        </Container>

        <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      </section>

    </StudentLayoutWrapper>

  );
};

export default InstitutesPage;