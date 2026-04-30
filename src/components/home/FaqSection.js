"use client";

import React, { useState, useEffect } from "react";
import {
    Container,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
    Row,
    Col
} from "reactstrap";

import { FaQuestionCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
    {
        id: "1",
        q: "Is counselling guidance really needed if data is already available online?",
        a: "While basic data is available, expert counselling helps you make the right decisions based on your rank, category, and preferences — increasing your chances of better seat allotment."
    },
    {
        id: "2",
        q: "How accurate is the college prediction?",
        a: "Our predictions are based on previous year trends, real-time updates, and expert analysis to give you highly reliable results."
    },
    {
        id: "3",
        q: "Do I need to pay every round?",
        a: "No, most plans cover multiple counselling rounds so you stay guided throughout the entire admission process."
    },
    {
        id: "4",
        q: "Can I get personalized guidance?",
        a: "Yes, you’ll get expert support for choice filling, document verification, and strategy planning."
    },
    {
        id: "5",
        q: "What if I already started counselling?",
        a: "You can still join — we help optimize your choices and improve your chances in upcoming rounds."
    },
    {
        id: "6",
        q: "Is there any free support available?",
        a: "Yes, we offer a free initial consultation to understand your needs before you choose a plan."
    }
];

const FaqSection = () => {
    const [open, setOpen] = useState("1");

    const toggle = (id) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <section className="bg-light">
            <Container>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontWeight: "700" }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{ color: "#64748b" }}>
                        Everything you need to know about counselling & admissions
                    </p>
                </div>
                <Row>
                    <Col lg="8" md="8" className="mx-auto">
                        <Accordion open={open} toggle={toggle}>
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                    style={{
                                        border: "none",
                                        marginBottom: "15px",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                                    }}
                                >
                                    <AccordionHeader
                                        targetId={item.id}
                                        style={{
                                            background: "#fff",
                                            padding: "15px 20px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%"
                                            }}
                                        >

                                            {/* LEFT CONTENT */}
                                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                <FaQuestionCircle color="#6366f1" />
                                                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                                                    {item.q}
                                                </span>
                                            </div>


                                        </div>
                                    </AccordionHeader>

                                    <AccordionBody
                                        accordionId={item.id}
                                        style={{
                                            background: "#fff",
                                            padding: "15px 20px",
                                            color: "#475569",
                                            fontSize: "14px",
                                            lineHeight: "1.6"
                                        }}
                                    >
                                        {item.a}
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FaqSection;