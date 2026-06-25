"use client";

import { useEffect } from "react";
import { Container, Button } from "reactstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DashEvents = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  const events = [
    {
      date: "AUG 05",
      type: "Registration",
      title: "NEET UG Counselling",
      desc: "Fresh registration for All India Quota counselling begins.",
    },
    {
      date: "AUG 08",
      type: "Choice Filling",
      title: "NEET UG Counselling",
      desc: "Candidates can fill and lock preferred colleges.",
    },
    {
      date: "AUG 12",
      type: "Mock Allotment",
      title: "NEET UG Counselling",
      desc: "Preview seat allocation before final choice locking.",
    },
    {
      date: "AUG 18",
      type: "Round 1 Result",
      title: "NEET UG Counselling",
      desc: "Round 1 seat allotment result declared.",
    },
    {
      date: "AUG 20",
      type: "Reporting",
      title: "NEET UG Counselling",
      desc: "Selected candidates must report to allotted colleges.",
    },
    {
      date: "AUG 25",
      type: "Verification",
      title: "NEET UG Counselling",
      desc: "Document verification process starts.",
    },
    {
      date: "SEP 01",
      type: "Round 2 Registration",
      title: "NEET UG Counselling",
      desc: "Registration opens for second round counselling.",
    },
    {
      date: "SEP 04",
      type: "Seat Matrix",
      title: "NEET UG Counselling",
      desc: "Updated MBBS and BDS seat matrix released.",
    },
    {
      date: "SEP 10",
      type: "Round 2 Result",
      title: "NEET UG Counselling",
      desc: "Round 2 allotment result announced.",
    },
    {
      date: "SEP 14",
      type: "Security Deposit",
      title: "NEET UG Counselling",
      desc: "Last date for security deposit submission.",
    },
    {
      date: "SEP 18",
      type: "College Reporting",
      title: "NEET UG Counselling",
      desc: "Candidates report to allotted institutes.",
    },
    {
      date: "SEP 25",
      type: "Mop-Up Round",
      title: "NEET UG Counselling",
      desc: "Mop-up round registration starts.",
    },
    {
      date: "OCT 02",
      type: "Mop-Up Result",
      title: "NEET UG Counselling",
      desc: "Mop-up round allotment result released.",
    },
    {
      date: "OCT 06",
      type: "Stray Vacancy",
      title: "NEET UG Counselling",
      desc: "Stray vacancy round schedule published.",
    },
    {
      date: "OCT 12",
      type: "Final Reporting",
      title: "NEET UG Counselling",
      desc: "Last reporting date for admitted candidates.",
    },
  ];

  const groupedEvents = [];

  for (let i = 0; i < events.length; i += 3) {
    groupedEvents.push(events.slice(i, i + 3));
  }

  return (
    <section className="py-4 bg-white">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0">
            Events
          </h4>

          <Button
            color="warning"
            size="sm"
            className="rounded-pill fw-semibold st-bg text-white"
          >
            View All
          </Button>
        </div>

        <div className="bg-light rounded-3 p-3 shadow-sm">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
          >
            {groupedEvents.map((group, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-100 border-end p-3"
                  data-aos="zoom-in"
                >
                  {group.map((event, idx) => (
                    <div
                      key={idx}
                      className={`${
                        idx !== group.length - 1
                          ? "border-bottom pb-3 mb-3"
                          : ""
                      }`}
                    >
                      <span className="badge bg-light text-dark border fw-semibold">
                        {event.date}
                      </span>

                      <div className="small mt-2 text-muted">
                        {event.type}
                      </div>

                      <h6 className="fw-bold mb-1 st-txt-o">
                        {event.title}
                      </h6>

                      <p className="small text-secondary mb-2 st-txt-o">
                        {event.desc}
                      </p>

                      <a
                        href="#"
                        className="small text-decoration-none"
                      >
                        Schedule
                        <FaExternalLinkAlt
                          size={8}
                          className="ms-1"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default DashEvents;