"use client";

import { useState, useEffect } from "react";
import StudentLayoutWrapper from "@/app/student/components/StudentLayout";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Button,
    Input,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";

import {
    FiPackage,
    FiCheckCircle,
    FiBook,
} from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";

const packageData = {
    "NEET UG": {
        price: 1499,
        validity: "Valid Until Sep 2026",
        title: "NEET UG 2026",
        package: "Pre Counselling Package",
        expertPrice: 699,
        description: "Personalized MBBS counselling support.",
        features: [
            "College Predictor",
            "State Counselling",
            "Choice Filling",
            "Seat Matrix",
            "Cutoff Data",
            "Premium Videos",
            "Live Updates",
            "Unlimited Recommendations",
        ],
    },

    "NEET PG": {
        price: 1999,
        validity: "Valid Until Aug 2026",
        title: "NEET PG 2026",
        package: "Pre Counselling Package",
        expertPrice: 999,
        description: "Personalized counselling support.",
        features: [
            "Comprehensive Up-To-Date Data",
            "Exclusive Counselling Tools",
            "All India & 40+ State Counselling",
            "Premium Videos",
            "Everything for Choice Filling",
            "Live Updates",
            "Institute Information",
            "Unlimited Choice Recommendations",
        ],
    },

    INICET: {
        price: 2499,
        validity: "Valid Until Jul 2026",
        title: "INICET 2026",
        package: "Premium Package",
        expertPrice: 1199,
        description: "Expert AIIMS counselling support.",
        features: [
            "AIIMS Data",
            "Institute Ranking",
            "Choice Filling",
            "Previous Year Cutoff",
            "Video Guidance",
            "Live Alerts",
            "Unlimited Recommendations",
        ],
    },

    "NEET MDS": {
        price: 1799,
        validity: "Valid Until Aug 2026",
        title: "NEET MDS 2026",
        package: "Premium Package",
        expertPrice: 899,
        description: "Dental counselling assistance.",
        features: [
            "Dental Colleges",
            "Counselling Data",
            "Seat Matrix",
            "College Reviews",
            "Choice Filling",
            "Premium Videos",
            "Live Support",
        ],
    },

    "DNB PDCET": {
        price: 1299,
        validity: "Valid Until Jun 2026",
        title: "DNB PDCET",
        package: "Basic Package",
        expertPrice: 499,
        description: "DNB admission support.",
        features: [
            "Hospital List",
            "Previous Cutoff",
            "Counselling Guide",
            "Premium Videos",
            "Choice Filling",
            "Live Updates",
        ],
    },
};

const PackageCard = ({ data }) => {
    return (
        <Card className="border-info rounded-4 h-100">
            <CardBody>

                <Badge color="danger" pill className="st-bg">
                    <FiPackage className="me-1" />
                    {data.title}
                </Badge>

                <h2 className="text-danger fw-bold mt-3 text-st">
                    ₹{data.price}
                </h2>

                <small className="text-muted">
                    {data.validity}
                </small>

                <Card className="mt-3 bg-warning-subtle border-0">
                    <CardBody>

                        <div className="fw-bold text-st">
                            {data.package}
                        </div>

                        <ul className="small mt-2 mb-0">
                            <li>Access counselling data</li>
                            <li>Upgrade anytime</li>
                            <li>Premium Support</li>
                        </ul>

                    </CardBody>
                </Card>

                <h6 className="mt-4">Features</h6>

                {data.features.map((item) => (
                    <div
                        key={item}
                        className="d-flex align-items-center mb-2"
                    >
                        <FiCheckCircle className="text-success me-2" />
                        <small>{item}</small>
                    </div>
                ))}

            </CardBody>
        </Card>
    );
};

const PackageCustomization = ({
    data,
    expert,
    setExpert,
}) => {
    return (
        <Card className="rounded-4">
            <CardBody>

                <div className="d-flex justify-content-between">

                    <div className="d-flex">

                        <div className=" text-white rounded p-2 me-3">
                            <FiBook className="text-st" />
                        </div>

                        <div>

                            <Badge color="info">
                                Most Useful
                            </Badge>

                            <h5 className="mt-2">
                                Expert Guidance
                            </h5>

                            <small className="text-muted">
                                {data.description}
                            </small>

                        </div>

                    </div>

                    <div className="text-end">

                        <Input
                            type="switch"
                            checked={expert}
                            onChange={() => setExpert(!expert)}
                        />

                        <h5 className="text-primary">
                            ₹{data.expertPrice}
                        </h5>

                    </div>

                </div>

            </CardBody>
        </Card>
    );
};

const PackagePage = () => {

    const [active, setActive] = useState("NEET PG");
    const [expert, setExpert] = useState(true);

  

    const data = packageData[active];

    const total =
        data.price + (expert ? data.expertPrice : 0);

    return (
        <StudentLayoutWrapper>

            <Container className="py-4">

                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem active>
                        Packages
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="overflow-auto mt-3">

                    <Nav pills className="bg-light rounded-pill p-1 flex-nowrap">

                        {Object.keys(packageData).map((tab) => (

                            <NavItem key={tab}>

                                <NavLink
                                    active={active === tab}
                                    onClick={() => {
                                        setActive(tab);
                                        setExpert(true);
                                    }}
                                    style={{ cursor: "pointer" }}
                                    className="rounded-pill text-nowrap small py-1"
                                >
                                    {tab}
                                </NavLink>

                            </NavItem>

                        ))}

                    </Nav>

                </div>

                <Row className="mt-3">

                    <Col lg="5" className="mb-2">
                        <PackageCard data={data} />
                    </Col>

                    <Col lg="7" className="mb-2">

                        <h4 className="fw-bold">
                            Customize Your Package
                        </h4>

                        <small className="text-muted">
                            Select Add-ons
                        </small>

                        <PackageCustomization
                            data={data}
                            expert={expert}
                            setExpert={setExpert}
                        />

                    </Col>

                </Row>

                <Card className="rounded-pill shadow position-sticky bottom-0 mt-5">

                    <CardBody className="d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted">
                                TOTAL
                            </small>

                            <h3 className="text-st mb-0">
                                ₹{total}
                            </h3>

                        </div>

                        <Button className="rounded-pill px-5 btn-sm st-bg">
                            Purchase Now
                        </Button>

                    </CardBody>

                </Card>

            </Container>

        </StudentLayoutWrapper>
    );
};

export default PackagePage;