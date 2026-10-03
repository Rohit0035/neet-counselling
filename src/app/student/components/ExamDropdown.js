"use client";

import { useState } from "react";
import {
    Button,
    Popover,
    PopoverBody,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
} from "reactstrap";
import { FiChevronDown } from "react-icons/fi";
import NotificationModal from "@/app/student/components/NotificationModal"

const examData = [
    {
        id: "1",
        title: "Under Graduation - Medicine",
        exams: ["NEET UG"],
    },
    {
        id: "2",
        title: "Post Graduation - Medicine",
        exams: ["NEET PG", "INICET", "NEET MDS", "DNB PDCET"],
    },
    {
        id: "3",
        title: "Super Speciality - Medicine",
        exams: ["NEET SS"],
    },
];

const ExamDropdown = ({
    value = "NEET SS",
    onChange,
}) => {
    const [selected, setSelected] = useState(value);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState("3");

  const handleSelect = (exam) => {
  setSelected(exam);
  setSelectedExam(exam);

  onChange?.(exam);

  setPopoverOpen(false);

  // Open notification modal
  setModalOpen(true);
};


    const [modalOpen, setModalOpen] = useState(false);
const [selectedExam, setSelectedExam] = useState("");



    return (
        <>
            <Button
                id="examDropdown"
                color="warning"
                size="sm"
                className="rounded-pill d-flex align-items-center gap-2 border-0"
                style={{
                    background: "rgb(7, 166, 20)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "5px 12px",
                }}
            >
                {selected}
                <FiChevronDown size={13} />
            </Button>

            <Popover
                placement="bottom-start"
                target="examDropdown"
                isOpen={popoverOpen}
                toggle={() => setPopoverOpen(!popoverOpen)}
                className="border-none"
            >
                <PopoverBody
                    className="p-2 border-0"
                    style={{
                        width: 290,
                        maxHeight: 420,
                        overflowY: "auto",
                    }}
                >
                    <Accordion
                        open={openAccordion}
                        className="me-2 pe-1"
                        toggle={(id) =>
                            setOpenAccordion(
                                openAccordion === id ? "" : id
                            )
                        }
                        flush
                    >
                        {examData.map((group) => (
                            <AccordionItem key={group.id}>
                                <AccordionHeader targetId={group.id}>
                                    <span
                                        style={{
                                            fontSize: 14,
                                            color: "#666",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {group.title}
                                    </span>
                                </AccordionHeader>

                                <AccordionBody
                                    accordionId={group.id}
                                    className="p-1"
                                >
                                    {group.exams.map((exam) => (
                                        <div
                                            key={exam}
                                            onClick={() =>
                                                handleSelect(exam)
                                            }
                                            className="d-flex justify-content-between align-items-center rounded px-2 py-2 mb-1"
                                            style={{
                                                cursor: "pointer",
                                                background:
                                                    selected === exam
                                                        ? "#FFF4EF"
                                                        : "#fff",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color:
                                                        selected === exam
                                                            ? "#07248b"
                                                            : "#000",
                                                }}
                                            >
                                                {exam}
                                            </span>

                                            <input
                                                type="radio"
                                                checked={selected === exam}
                                                readOnly
                                                style={{
                                                    accentColor: "#07248b",
                                                    width: 16,
                                                    height: 16,
                                                }}
                                            />
                                        </div>
                                    ))}
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </PopoverBody>
            </Popover>


            <NotificationModal
  isOpen={modalOpen}
  toggle={() => setModalOpen(false)}
  examName={selectedExam}
/>
        </>
    );
};

export default ExamDropdown;