"use client";

import { useState } from "react";
import Link from "next/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Button,
    Input,
    Badge,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";

import {
    FiPlus,
    FiSearch,
    FiHeart,
    FiTrash2,
    FiCheckCircle,
} from "react-icons/fi";

import StudentLayoutWrapper from "@/app/student/components/StudentLayout";
import CreateChoiceModal from "@/app/student/components/CreateChoiceModal";
import AddChoiceListModal from "@/app/student/components/AddChoiceListModal";
import ChoiseListTable from "@/app/student/components/ChoiseListTable";

const dummyLists = [
    {
        id: 1,
        counselling: "All India Counselling - SS Medical",
        lists: [
            {
                id: 11,
                name: "Choice List 1",
                saved: true,
                choices: [],
            },
            {
                id: 12,
                name: "Choice List 2",
                saved: false,
                choices: [],
            },
        ],
    },
    {
        id: 2,
        counselling: "State Counselling",
        lists: [
            {
                id: 21,
                name: "MP State List",
                saved: true,
                choices: [],
            },
            {
                id: 22,
                name: "State Backup",
                saved: false,
                choices: [],
            },
        ],
    },
];

const ChoiseListPage = () => {
    const [choiceLists] = useState(dummyLists);

    const [selectedChoice, setSelectedChoice] = useState(
        dummyLists[0].lists[0]
    );

    const [createModal, setCreateModal] = useState(false);

    const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);

    const [openAccordion, setOpenAccordion] = useState("1");

    const toggleAccordion = (id) => {
        if (openAccordion === id) {
            setOpenAccordion("");
        } else {
            setOpenAccordion(id);
        }
    };

    const handleOpenChoiceListModal = () => {
        setIsChoiceModalOpen(true);
    };

    const handleCloseChoiceListModal = () => {
        setIsChoiceModalOpen(false);
    };

    const handleSaveChoiceList = () => {
        console.log("Choice Saved");
        setIsChoiceModalOpen(false);
    };

    return (
        <StudentLayoutWrapper>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href="/">Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem active>My Choice List</BreadcrumbItem>
            </Breadcrumb>

            <section className="py-3">
                <Container>
                    <Row>
                        {/* LEFT SIDE */}
                        <Col lg="3" className="mb-3">
                            <Card className="border-0 shadow-sm">
                                <CardBody>
                                    <div className="position-relative mb-3">
                                        <FiSearch
                                            className="position-absolute"
                                            style={{
                                                left: 12,
                                                top: 12,
                                                color: "#999",
                                            }}
                                        />

                                        <Input
                                            placeholder="Search Choice List"
                                            className="ps-5"
                                        />
                                    </div>

                                    <Accordion
                                        open={openAccordion}
                                        toggle={toggleAccordion}
                                        flush
                                    >
                                        {choiceLists.map((group) => (
                                            <AccordionItem key={group.id}>
                                                <AccordionHeader
                                                    targetId={group.id.toString()}
                                                    className="st-chlst1"
                                                >
                                                    {group.counselling}
                                                </AccordionHeader>

                                                <AccordionBody
                                                    accordionId={group.id.toString()}
                                                >
                                                    {group.lists.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            onClick={() =>
                                                                setSelectedChoice(
                                                                    item
                                                                )
                                                            }
                                                            className={`d-flex justify-content-between align-items-center rounded p-2 mb-2 ${selectedChoice?.id ===
                                                                    item.id
                                                                    ? "bg-light"
                                                                    : ""
                                                                }`}
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <FiHeart
                                                                    color="red"
                                                                    className="me-2"
                                                                />

                                                                <div>
                                                                    <div className="st-txt-o small">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </div>

                                                                    <small className="st-txt-o">
                                                                        {
                                                                            item
                                                                                .choices
                                                                                .length
                                                                        }{" "}
                                                                        Choices
                                                                    </small>
                                                                </div>
                                                            </div>

                                                            <FiTrash2 color="red" />
                                                        </div>
                                                    ))}
                                                </AccordionBody>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>

                                    <Button
                                        color="danger"
                                        className="w-100 rounded-pill btn-sm st-bg mt-3"
                                        onClick={() =>
                                            setCreateModal(true)
                                        }
                                    >
                                        <FiPlus className="me-2" />
                                        Create Choice List
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* RIGHT SIDE */}
                        <Col lg="9">
                            <Card className="border-0 shadow-sm">
                                <CardBody>
                                    {selectedChoice ? (
                                        <>
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="fw-bold mb-0">
                                                            {
                                                                selectedChoice.name
                                                            }
                                                        </h5>

                                                        {selectedChoice.saved && (
                                                            <Badge
                                                                color="success"
                                                                className="ms-2"
                                                            >
                                                                <FiCheckCircle className="me-1 text-white" />
                                                                Saved
                                                            </Badge>
                                                        )}
                                                    </div>

                                                    <p className="text-st small mt-2">
                                                        All India Counselling -
                                                        SS Medical
                                                    </p>
                                                </div>

                                                <Button
                                                    color="primary"
                                                    className="rounded-pill st-bg btn-sm"
                                                    onClick={
                                                        handleOpenChoiceListModal
                                                    }
                                                >
                                                    <FiPlus className="me-2" />
                                                    Add Choice
                                                </Button>
                                            </div>

                                            <ChoiseListTable />
                                        </>
                                    ) : (
                                        <div className="text-center py-5">
                                            <h4>Select Choice List</h4>
                                        </div>
                                    )}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Create Choice List */}
            <CreateChoiceModal
                open={createModal}
                toggle={() => setCreateModal(false)}
            />

            {/* Add Choice */}
            <AddChoiceListModal
                isOpen={isChoiceModalOpen}
                onCloseModal={handleCloseChoiceListModal}
                onSaveChoice={handleSaveChoiceList}
            />
        </StudentLayoutWrapper>
    );
};

export default ChoiseListPage;