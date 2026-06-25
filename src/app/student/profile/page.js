"use client";

import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaUser,
    FaPhone,
    FaEnvelope,
    FaMapMarkedAlt,
    FaGraduationCap,
    FaEdit,
    FaSave,
    FaTimes,
    FaCrown,
} from "react-icons/fa";
import StudentLayoutWrapper from "../components/StudentLayout";

const ProfilePage = () => {
    const [editMode, setEditMode] = useState(false);

    const [profile, setProfile] = useState({
        name: "John Doe",
        phone: "+91 1231231231",
        email: "john12@gmail.com",
        state: "Punjab",
        exam: "DNB PDCET",
        role: "Other",
    });

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    const stateOptions = [
        { value: "Punjab", label: "Punjab" },
        { value: "Delhi", label: "Delhi" },
        { value: "Haryana", label: "Haryana" },
        { value: "Rajasthan", label: "Rajasthan" },
    ];

    const examOptions = [
        { value: "DNB PDCET", label: "DNB PDCET" },
        { value: "NEET PG", label: "NEET PG" },
        { value: "FMGE", label: "FMGE" },
    ];

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = () => {
        console.log(profile);
        setEditMode(false);
    };

    return (
        <StudentLayoutWrapper>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active >
                    Profile
                </BreadcrumbItem>
              
            </Breadcrumb>
            <div className="container py-3">
                <Card
                    data-aos="zoom-in"
                    className="border-0"
                    style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        maxWidth: "1000px",
                        margin: "auto",
                    }}
                >

                    <div
                        className="st-bg"
                        style={{
                            padding: "30px",
                        }}
                    >
                        <Row className="align-items-center">
                            <Col md={8}>
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            borderRadius: "50%",
                                            background: "#fff",
                                            color: "#4F46E5",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontSize: "34px",
                                            fontWeight: "700",
                                        }}
                                    >
                                        J
                                    </div>

                                    <div className="text-white">
                                        <h3 className="mb-1">{profile.name}</h3>
                                        <small>Medical Aspirant</small>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="text-md-end mt-3 mt-md-0">
                                <span
                                    style={{
                                        background: "rgba(255,255,255,.2)",
                                        padding: "10px 18px",
                                        borderRadius: "50px",
                                        color: "#fff",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <FaCrown />
                                    Premium User
                                </span>
                            </Col>
                        </Row>
                    </div>

                    <CardBody className="p-4 p-md-5">
                        <div
                            style={{
                                background: "#FFF7E8",
                                borderRadius: "16px",
                                padding: "16px",
                                marginBottom: "25px",
                            }}
                        >
                            <h5 className="fw-bold">
                                <FaCrown className="text-warning me-2" />
                                Premium Benefits
                            </h5>

                            <ul className="mb-0">
                                <li>Unlimited Mock Tests</li>
                                <li>Priority Support</li>
                                <li>Exclusive Question Bank</li>
                                <li>Advanced Analytics</li>
                            </ul>
                        </div>

                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Name</Label>

                                        <Input
                                            name="name"
                                            value={profile.name}
                                            onChange={handleChange}
                                            disabled={!editMode}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Phone Number</Label>

                                        <Input
                                            name="phone"
                                            value={profile.phone}
                                            onChange={handleChange}
                                            disabled={!editMode}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Email</Label>

                                        <Input
                                            name="email"
                                            value={profile.email}
                                            onChange={handleChange}
                                            disabled={!editMode}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>State</Label>

                                        <Select
                                            isDisabled={!editMode}
                                            options={stateOptions}
                                            value={stateOptions.find(
                                                (item) => item.value === profile.state
                                            )}
                                            onChange={(selected) =>
                                                setProfile({
                                                    ...profile,
                                                    state: selected.value,
                                                })
                                            }
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Preferred Exam</Label>

                                        <Select
                                            isDisabled={!editMode}
                                            options={examOptions}
                                            value={examOptions.find(
                                                (item) => item.value === profile.exam
                                            )}
                                            onChange={(selected) =>
                                                setProfile({
                                                    ...profile,
                                                    exam: selected.value,
                                                })
                                            }
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>I am a...</Label>

                                        <Input
                                            name="role"
                                            value={profile.role}
                                            onChange={handleChange}
                                            disabled={!editMode}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <div className="text-end mt-4">
                                {!editMode ? (
                                    <Button
                                        color="primary"
                                        onClick={() => setEditMode(true)}
                                    >
                                        <FaEdit className="me-2" />
                                        Edit Profile
                                    </Button>
                                ) : (
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Button
                                            color="success"
                                            onClick={handleUpdate}
                                        >
                                            <FaSave className="me-2" />
                                            Update
                                        </Button>

                                        <Button
                                            color="secondary"
                                            onClick={() => setEditMode(false)}
                                        >
                                            <FaTimes className="me-2" />
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </StudentLayoutWrapper>

    );
};

export default ProfilePage;