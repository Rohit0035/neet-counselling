"use client";

import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import StudentLayoutWrapper from "../components/StudentLayout";
import Announcements from "../components/counsellings-section/Announcements";
import EventList from "../components/counsellings-section/EventList";
import VideoList from "../components/counsellings-section/VideoList";

const CounsellingsDetailPage = () => (
    <StudentLayoutWrapper>

        <Breadcrumb>
            <BreadcrumbItem>
                <a
                    href="/"
                >
                    Home
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem active>
                Counselling
            </BreadcrumbItem>
        </Breadcrumb>

        <div
            className="mt-3 p-3 rounded-3"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                background: "linear-gradient(105deg, #07a614 0%, #054c92 45%, #37312f 100%)",
                boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
            }}
        >
            <div>
                <h5 className="text-white">
                    AFMS (through MCC) - UG Medical
                </h5>
                <div className="small text-white">
                    Central • AFMS
                </div>
            </div>
            <div
                className="d-none d-sm-block"
                style={{
                    fontSize: "42px",
                    transform: "rotate(-7deg)",
                    marginRight: "10px",
                }}
            >
                📋
            </div>
        </div>

        <div className="py-2 mt-4">
            <h6
                className="small"
            >
                Counselling Timeline
            </h6>

            <div
                style={{
                    position: "relative",
                    display: "flex",
                    padding: "0 5%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        height: "3px",
                        background: "#19a47c",
                        left: "6%",
                        right: "6%",
                        top: "6px",
                        borderRadius: "10px",
                    }} />

                <div
                    style={{
                        width: "50%",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            width: "13px",
                            height: "13px",
                            borderRadius: "50%",
                            background: "#19a47c",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "8px",
                            fontWeight: "bold",
                            border: "2px solid #fff",
                            boxShadow: "0 0 0 1px #19a47c",
                        }}
                    >
                        ✓
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <div
                            style={{
                                color: "#888",
                                fontSize: "8px",
                                lineHeight: "1.4",
                            }}
                        >
                            Aug 20, 2026 - Aug 26, 2026
                        </div>

                        <div
                            style={{
                                marginTop: "5px",
                                color: "#333",
                                fontSize: "9px",
                                fontWeight: "500",
                            }}
                        >
                            Round 1 Reporting
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        width: "50%",
                        position: "relative",
                        zIndex: 1,
                        textAlign: "right",
                    }}
                >
                    <div
                        style={{
                            width: "13px",
                            height: "13px",
                            borderRadius: "50%",
                            background: "#19a47c",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "8px",
                            fontWeight: "bold",
                            border: "2px solid #fff",
                            boxShadow: "0 0 0 1px #19a47c",
                            marginLeft: "auto",
                        }}
                    >
                        ✓
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <div
                            style={{
                                color: "#888",
                                fontSize: "8px",
                                lineHeight: "1.4",
                            }}
                        >
                            Sep 5, 2026, 08:00 AM - Sep 8, 2026, 12:00 PM
                        </div>

                        <div
                            style={{
                                marginTop: "5px",
                                color: "#333",
                                fontSize: "9px",
                                fontWeight: "500",
                            }}
                        >
                            Round 1 Reporting
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Event list */}
        <EventList />

        {/*Announcements */}
        <Announcements />

        {/* video lis */}
        <VideoList />

    </StudentLayoutWrapper>
);

export default CounsellingsDetailPage;