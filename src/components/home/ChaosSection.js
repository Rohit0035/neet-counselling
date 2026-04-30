"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import whyimg1 from "../../assets/images/why-1.jpg"
import whyimg2 from "../../assets/images/why-img2.jpg"
import whyimg3 from "../../assets/images/why-img-3.jpg"
import whyimg4 from "../../assets/images/why-img4.jpg"
import whyimg5 from "../../assets/images/why-img5.jpg"
import whyimg6 from "../../assets/images/why-img6.jpg"

import Image from "next/image";

const ChaosSection = () => {
    const data = [
        {
            title: "Cut-offs Are Never Stable",
            desc: "Cut-offs change every year based on rank trends, seat availability, and competition levels.\nEven a small shift in marks can move you across multiple colleges.\nRelying only on last year’s data can lead to wrong expectations and poor decisions.",
            img: whyimg1,
            aos: "zoom-in",
        },
        {
            title: "Documentation Confusion",
            desc: "Each counselling authority asks for different documents and formats.\nMissing or incorrect documents can delay or even cancel your admission.\nProper preparation and verification are crucial before every round.",
            img: whyimg2,
            aos: "zoom-in",
        },
        {
            title: "Too Many Colleges",
            desc: "With hundreds of colleges available, comparing them becomes overwhelming.\nFactors like fees, location, ranking, and facilities all impact your decision.\nChoosing the right college requires clarity, not just guesswork.",
            img: whyimg3,
            aos: "zoom-in",
        },
        {
            title: "Quota System Complexity",
            desc: "Different quotas like AIQ, State, Management, and NRI follow separate rules.\nEligibility, fees, and seat distribution vary across each category.\nUnderstanding these differences is key to making the right move.",
            img: whyimg4,
            aos: "zoom-in",
        },
        {
            title: "Wrong Choice Filling",
            desc: "Your preference order directly affects which college you get.\nEven a small mistake in ranking choices can cost a better opportunity.\nStrategic choice filling is more important than just listing options.",
            img: whyimg5,
            aos: "zoom-in",
        },
        {
            title: "Multiple Rounds Strategy",
            desc: "Each counselling round works differently with changing seat availability.\nWhat works in Round 1 may not work in Mop-up rounds.\nA smart, adaptive strategy is needed to secure the best possible seat.",
            img: whyimg6,
            aos: "zoom-in",
        },
    ];
    return (
        <section className="py-5 bg-light">
            <Container>
                <div className="col-lg-8 mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Why Counselling Feels So Complicated?</h2>
                        <p className="text-secondary">
                            Students face multiple challenges during college admissions — here’s what makes it tricky.
                        </p>
                    </div>
                    {data.map((item, index) => (
                        <Row
                            key={index}
                            className="align-items-center mb-4 p-3"
                            data-aos={item.aos}
                        >
                            <Col xs="4" md="3" lg="3" className={index % 2 !== 0 ? "order-2 text-center" : "text-center"}>
                               <Image src={item.img} alt={item.title} width={100} height={100} className="w-100 rounded-3" />
                            </Col>
                            <Col xs="8" md="9" lg="9" className={index % 2 !== 0 ? "order-1" : ""}>
                                <div className="d-flex align-items-start">
                                    <div>
                                        <h5 className="fw-bold mb-1">{item.title}</h5>
                                        <p className=" mb-0 small" style={{ whiteSpace: "pre-line" }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ChaosSection;