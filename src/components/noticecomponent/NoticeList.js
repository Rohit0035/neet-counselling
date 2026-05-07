// ==========================================
// components/notice/NoticeList.jsx
// PREMIUM NOTICE TAB GRID SECTION
// ==========================================

"use client";

import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Button,
    Nav,
    NavItem,
    NavLink,
    Table,
} from "reactstrap";

import classnames from "classnames";

import {
    FaBell,
    FaCalendarAlt,
    FaArrowRight,
    FaFileAlt,
    FaCheckCircle,
    FaUniversity,
    FaGraduationCap,
} from "react-icons/fa";

const noticeTabs = [
    "All Notices",
    "Counseling",
    "Admissions",
    "Results",
    "Scholarships",
];

const noticeData = [
    {
        type: "Counseling",
        title: "NEET UG Counseling Registration Started",
        date: "12 May 2026",
        status: "New",
        icon: <FaBell />,
        desc: "Registration for MCC counseling process has officially started.",
    },
    {
        type: "Admissions",
        title: "MBBS Admission Notification Released",
        date: "15 May 2026",
        status: "Important",
        icon: <FaUniversity />,
        desc: "Top medical colleges have released admission notification updates.",
    },
    {
        type: "Results",
        title: "Round 1 Seat Allotment Result Declared",
        date: "20 May 2026",
        status: "Result",
        icon: <FaCheckCircle />,
        desc: "Candidates can now check their allotted colleges online.",
    },
    {
        type: "Scholarships",
        title: "Scholarship Application Window Open",
        date: "24 May 2026",
        status: "Live",
        icon: <FaGraduationCap />,
        desc: "Eligible students can apply for scholarship programs.",
    },
    {
        type: "Counseling",
        title: "Choice Filling Last Date Extended",
        date: "27 May 2026",
        status: "Update",
        icon: <FaFileAlt />,
        desc: "Students can now complete choice filling till new deadline.",
    },
];

const NoticeList = () => {

    const [activeTab, setActiveTab] = useState("All Notices");

    const filteredData =
        activeTab === "All Notices"
            ? noticeData
            : noticeData.filter(
                (item) => item.type === activeTab
            );

    return (
        <section
            className="py-5 position-relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom,#f8fbff,#ffffff)",
            }}
        >

            <Container>

                {/* HEADING */}
                <Row className="justify-content-center mb-5">

                    <Col lg="8" className="text-center">

                        <Badge
                            pill
                            className="px-4 py-2 border-0 mb-4"
                           
                        >
                            
                        </Badge>

                        <Button className="btn btn-primary btn-sm st-bg border-0 rounded-pill">
🔔 Latest Notice Board
                        </Button>

                        <h2
                            className="fw-bold mb-3 fs-1 fw-bold"
                           
                        >
                            Important Notices
                            <span
                               className="text-st"
                            >
                                {" "}& Announcements
                            </span>
                        </h2>

                        <p
                            className="mx-auto"
                            style={{
                                maxWidth: "760px",
                                color: "#64748b",
                                lineHeight: "2",
                                fontSize: "17px",
                            }}
                        >
                            Explore all latest NEET counseling updates,
                            admission notifications, seat allotment results,
                            scholarships, and important announcements.
                        </p>

                    </Col>

                </Row>

                {/* PREMIUM TABS */}
                <Row className="justify-content-center mb-5">

                    <Col lg="10">

                        <div
                            className="d-flex justify-content-center flex-wrap gap-3"
                            data-aos="fade-up"
                        >

                            {noticeTabs.map((tab, index) => (

                                <Button
                                    key={index}
                                    onClick={() => setActiveTab(tab)}
                                    className={classnames(
                                        "border-0 fw-semibold text-white"
                                    )}
                                    style={{
                                        borderRadius: "60px",
                                        padding:
                                            "14px 26px",
                                        background:
                                            activeTab === tab
                                                ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                                                : "#fff",
                                        color:
                                            activeTab === tab
                                                ? "#fff"
                                                : "#071028",
                                        boxShadow:
                                            activeTab === tab
                                                ? "0 15px 35px rgba(37,99,235,0.25)"
                                                : "0 8px 20px rgba(0,0,0,0.05)",
                                        border:
                                            activeTab === tab
                                                ? "none"
                                                : "1px solid #eef2ff",
                                        transition:
                                            "all .3s ease",
                                    }}
                                >
                                    {tab}
                                </Button>

                            ))}

                        </div>

                    </Col>

                </Row>

                {/* PREMIUM TABLE */}
                <Row>

                    <Col lg="12">

                        <div
                            data-aos="zoom-in-up"
                            style={{
                                borderRadius: "35px",
                                background: "#fff",
                                overflow: "hidden",
                                boxShadow:
                                    "0 20px 60px rgba(15,23,42,0.06)",
                                border:
                                    "1px solid rgba(226,232,240,0.7)",
                            }}
                        >

                            <div
                                className="d-flex flex-wrap justify-content-between align-items-center px-4 py-4"
                                style={{
                                    borderBottom:
                                        "1px solid #eef2ff",
                                    background:
                                        "linear-gradient(to right,#f8fbff,#ffffff)",
                                }}
                            >

                                <div>

                                    <h4
                                        className="fw-bold mb-1"
                                        style={{
                                            color: "#071028",
                                        }}
                                    >
                                        {activeTab}
                                    </h4>

                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "#64748b",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Latest updates & notifications
                                    </p>

                                </div>

                                <Badge
                                    pill
                                    className="px-3 py-2"
                                    style={{
                                        background:
                                            "#001f5b",
                                        color: "#fff",
                                        fontSize: "13px",
                                    }}
                                >
                                    {filteredData.length} Notices
                                </Badge>

                            </div>

                            {/* RESPONSIVE TABLE */}
                            <div className="table-responsive">

                                <Table
                                    borderless
                                    responsive
                                    className="align-middle mb-0"
                                >

                                    <thead
                                        style={{
                                            background:
                                                "#f8fbff",
                                        }}
                                    >
                                        <tr>

                                            <th className="px-4 py-4">
                                                Notice
                                            </th>

                                            <th className="py-4">
                                                Category
                                            </th>

                                            <th className="py-4">
                                                Date
                                            </th>

                                            <th className="py-4">
                                                Status
                                            </th>

                                            <th className="py-4 text-end pe-4">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {filteredData.map(
                                            (item, index) => (

                                                <tr
                                                    key={index}
                                                    style={{
                                                        borderBottom:
                                                            "1px solid #f1f5f9",
                                                    }}
                                                >

                                                    {/* NOTICE */}
                                                    <td className="px-4 py-4">

                                                        <div className="d-flex align-items-start gap-3">

                                                            <div
                                                                className="d-flex align-items-center justify-content-center"
                                                                style={{
                                                                    minWidth:
                                                                        "58px",
                                                                    height:
                                                                        "58px",
                                                                    borderRadius:
                                                                        "18px",
                                                                    background:
                                                                        "linear-gradient(135deg,#2563eb,#4f46e5)",
                                                                    color:
                                                                        "#fff",
                                                                    fontSize:
                                                                        "22px",
                                                                }}
                                                            >
                                                                {item.icon}
                                                            </div>

                                                            <div>

                                                                <h6
                                                                    className="fw-bold mb-2"
                                                                    style={{
                                                                        color:
                                                                            "#071028",
                                                                        lineHeight:
                                                                            "1.6",
                                                                    }}
                                                                >
                                                                    {item.title}
                                                                </h6>

                                                                <p
                                                                    className="mb-0"
                                                                    style={{
                                                                        color:
                                                                            "#64748b",
                                                                        fontSize:
                                                                            "14px",
                                                                        lineHeight:
                                                                            "1.8",
                                                                        maxWidth:
                                                                            "450px",
                                                                    }}
                                                                >
                                                                    {item.desc}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </td>

                                                    {/* CATEGORY */}
                                                    <td>

                                                        <Badge
                                                            pill
                                                            className="px-3 py-2 bg-success bg-opacity-10 text-success"
                                                        >
                                                            {item.type}
                                                        </Badge>

                                                    </td>

                                                    {/* DATE */}
                                                    <td>

                                                        <div className="d-flex align-items-center gap-2">

                                                            <FaCalendarAlt
                                                                style={{
                                                                    color:
                                                                        "#2563eb",
                                                                }}
                                                            />

                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#475569",
                                                                    fontSize:
                                                                        "14px",
                                                                }}
                                                            >
                                                                {item.date}
                                                            </span>

                                                        </div>

                                                    </td>

                                                    {/* STATUS */}
                                                    <td>

                                                        <Badge
                                                            pill
                                                            className="px-3 py-2 bg-danger bg-opacity-10 text-danger"
                                                           
                                                        >
                                                            {item.status}
                                                        </Badge>

                                                    </td>

                                                    {/* ACTION */}
                                                    <td className="text-end pe-4">

                                                        <Button
                                                            size="sm"
                                                            className="border-0 fw-semibold"
                                                            style={{
                                                                borderRadius:
                                                                    "50px",
                                                                background:
                                                                    "#2563eb",
                                                                padding:
                                                                    "10px 20px",
                                                            }}
                                                        >
                                                            View
                                                            <FaArrowRight className="ms-2" />
                                                        </Button>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </Table>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default NoticeList;