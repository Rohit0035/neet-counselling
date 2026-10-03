"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
  Collapse,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

import {
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import StudentLayoutWrapper from "../components/StudentLayout";

const announcementsData = [
  {
    id: 1,
    day: "17",
    month: "SEP",
    category: "Announcements",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "17 Sep, 2026",
    externalLink: "https://example.com/announcement/1",
  },
  {
    id: 2,
    day: "15",
    month: "SEP",
    category: "Announcements",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "15 Sep, 2026",
    externalLink: "https://example.com/announcement/2",
  },
  {
    id: 3,
    day: "08",
    month: "SEP",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "08 Sep, 2026",
    externalLink: "https://example.com/announcement/3",
  },
  {
    id: 4,
    day: "02",
    month: "SEP",
    category: "Important Notice",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "02 Sep, 2026",
    externalLink: "https://example.com/announcement/4",
  },
  {
    id: 5,
    day: "02",
    month: "SEP",
    category: "Notice",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "02 Sep, 2026",
    externalLink: "https://example.com/announcement/5",
  },
  {
    id: 6,
    day: "16",
    month: "SEP",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "16 Sep, 2026",
    externalLink: "https://example.com/announcement/6",
  },
  {
    id: 7,
    day: "20",
    month: "SEP",
    category: "Prospectus",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Information Brochure 2026",
    date: "20 Sep, 2026",
    externalLink: "https://example.com/announcement/7",
  },
];

const eventsData = [
  {
    id: 1,
    day: "12",
    month: "SEP",
    status: "Past",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "12 Sep, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Main Auditorium",
    externalLink: "https://example.com/event/1",
  },
  {
    id: 2,
    day: "12",
    month: "SEP",
    status: "Ongoing",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "12 Sep, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Conference Hall",
    externalLink: "https://example.com/event/2",
  },
  {
    id: 3,
    day: "13",
    month: "SEP",
    status: "Upcoming",
    category: "Admission",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "13 Sep, 2026",
    time: "11:00 AM - 03:00 PM",
    location: "Admission Centre",
    externalLink: "https://example.com/event/3",
  },
  {
    id: 4,
    day: "15",
    month: "SEP",
    status: "Upcoming",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "15 Sep, 2026",
    time: "09:30 AM - 02:00 PM",
    location: "Seminar Hall",
    externalLink: "https://example.com/event/4",
  },
  {
    id: 5,
    day: "18",
    month: "SEP",
    status: "Upcoming",
    category: "Screening",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "18 Sep, 2026",
    time: "10:00 AM - 05:00 PM",
    location: "Screening Centre",
    externalLink: "https://example.com/event/5",
  },
  {
    id: 6,
    day: "20",
    month: "SEP",
    status: "Upcoming",
    category: "Counselling",
    title: "AFM1 through MOC - UG Medical",
    description:
      "Round 1 Reporting & Verification of Allotment for Remaining Seat",
    date: "20 Sep, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Main Auditorium",
    externalLink: "https://example.com/event/6",
  },
];

const DateBox = ({ day, month }) => {
  return (
    <div
      className="border rounded bg-light text-center flex-shrink-0"
      style={{
        width: "44px",
        height: "46px",
      }}
    >
      <div
        className="fw-bold text-dark"
        style={{
          fontSize: "15px",
          lineHeight: "18px",
          paddingTop: "4px",
        }}
      >
        {day}
      </div>

      <div
        className="text-muted fw-semibold"
        style={{
          fontSize: "9px",
          lineHeight: "12px",
        }}
      >
        {month}
      </div>
    </div>
  );
};

const AnnouncementItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-bottom">
      <button
        type="button"
        className="btn btn-link text-decoration-none text-dark w-100 p-2"
        onClick={onToggle}
      >
        <div className="d-flex align-items-center gap-2 text-start">

          <DateBox
            day={item.day}
            month={item.month}
          />

          <div className="flex-grow-1 overflow-hidden">

            <div
              className="text-muted fw-semibold"
              style={{ fontSize: "9px" }}
            >
              {item.category}
            </div>

            <div
              className="fw-semibold text-dark text-truncate"
              style={{ fontSize: "12px" }}
            >
              {item.title}
            </div>

            <div
              className="text-muted text-truncate"
              style={{ fontSize: "9px" }}
            >
              {item.description}
            </div>

          </div>

          <div className="text-muted">
            {isOpen ? (
              <FiChevronUp size={15} />
            ) : (
              <FiChevronDown size={15} />
            )}
          </div>

        </div>
      </button>

      <Collapse isOpen={isOpen}>
        <div className="px-2 pb-2">

          <div
            className="bg-light border rounded p-2"
            style={{ fontSize: "10px" }}
          >
            <div className="text-muted mb-2">
              Published on {item.date}
            </div>

            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
              style={{ fontSize: "10px" }}
            >
              View Details
              <FiExternalLink size={11} />
            </a>
          </div>

        </div>
      </Collapse>
    </div>
  );
};

const EventItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-bottom">

      <button
        type="button"
        className="btn btn-link text-decoration-none text-dark w-100 p-2"
        onClick={onToggle}
      >
        <div className="d-flex align-items-center gap-2 text-start">

          <DateBox
            day={item.day}
            month={item.month}
          />

          <div className="flex-grow-1 overflow-hidden">

            <div className="d-flex align-items-center gap-1">

              <span
                className="badge bg-light text-muted border"
                style={{ fontSize: "8px" }}
              >
                {item.category}
              </span>

            </div>

            <div
              className="fw-semibold text-dark text-truncate mt-1"
              style={{ fontSize: "12px" }}
            >
              {item.title}
            </div>

            <div
              className="text-muted text-truncate"
              style={{ fontSize: "9px" }}
            >
              {item.description}
            </div>

          </div>

          <div className="text-muted">
            {isOpen ? (
              <FiChevronUp size={15} />
            ) : (
              <FiChevronDown size={15} />
            )}
          </div>

        </div>
      </button>

      <Collapse isOpen={isOpen}>

        <div className="px-2 pb-2">

          <div
            className="bg-light border rounded p-2"
            style={{ fontSize: "10px" }}
          >

            <div className="d-flex align-items-center gap-2 mb-1">
              <FiCalendar size={11} />
              <span>{item.date}</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-1">
              <FiMapPin size={11} />
              <span>{item.location}</span>
            </div>

            <div className="text-muted mb-2">
              Time: {item.time}
            </div>

            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
              style={{ fontSize: "10px" }}
            >
              View Event
              <FiExternalLink size={11} />
            </a>

          </div>

        </div>

      </Collapse>

    </div>
  );
};

const AnnouncementsEvents = () => {

  const [announcementTab, setAnnouncementTab] = useState("all");

  const [eventTab, setEventTab] = useState("past");

  const [announcementSearch, setAnnouncementSearch] = useState("");
  const [eventSearch, setEventSearch] = useState("");

  const [openAnnouncement, setOpenAnnouncement] = useState(null);
  const [openEvent, setOpenEvent] = useState(null);

  const filteredAnnouncements = announcementsData.filter((item) => {

    const searchMatch =
      item.title
        .toLowerCase()
        .includes(announcementSearch.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(announcementSearch.toLowerCase());

    return searchMatch;
  });

  const filteredEvents = eventsData.filter((item) => {

    const searchMatch =
      item.title
        .toLowerCase()
        .includes(eventSearch.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(eventSearch.toLowerCase());

    const tabMatch =
      eventTab === "all" ||
      item.status.toLowerCase() === eventTab;

    return searchMatch && tabMatch;
  });


const [selectedDate, setSelectedDate] = useState("");


  return (
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
          Announcements Event
        </BreadcrumbItem>
      </Breadcrumb>

      <section className="py-4 bg-light">

        <Container fluid="lg">

          <Row className="g-3">

            <Col lg="6">

              <Card className="border-0 shadow-sm h-100">

                <CardBody className="p-2 p-md-3">

                  <div className="d-flex align-items-center justify-content-between mb-2">

                    <h6 className="fw-bold mb-0">
                      Announcements
                    </h6>

                  </div>


                  <Nav
                    pills
                    className="bg-light rounded-pill p-1 mb-2"
                  >

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={announcementTab === "all"}
                        onClick={(e) => {
                          e.preventDefault();
                          setAnnouncementTab("all");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        All
                      </NavLink>
                    </NavItem>

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={announcementTab === "today"}
                        onClick={(e) => {
                          e.preventDefault();
                          setAnnouncementTab("today");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Today
                      </NavLink>
                    </NavItem>

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={announcementTab === "date"}
                        onClick={(e) => {
                          e.preventDefault();
                          setAnnouncementTab("date");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Select Date
                      </NavLink>
                    </NavItem>

                  </Nav>
                  <div className="position-relative mb-2">

                    <FiSearch
                      size={13}
                      className="position-absolute text-muted"
                      style={{
                        left: "9px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />

                    <Input
                      type="search"
                      bsSize="sm"
                      placeholder="Search announcement"
                      value={announcementSearch}
                      onChange={(e) =>
                        setAnnouncementSearch(e.target.value)
                      }
                      className="ps-4"
                      style={{ fontSize: "10px" }}
                    />

                  </div>

                  <div className="border rounded overflow-hidden">

                    {filteredAnnouncements.length > 0 ? (

                      filteredAnnouncements.map((item) => (

                        <AnnouncementItem
                          key={item.id}
                          item={item}
                          isOpen={openAnnouncement === item.id}
                          onToggle={() =>
                            setOpenAnnouncement(
                              openAnnouncement === item.id
                                ? null
                                : item.id
                            )
                          }
                        />

                      ))

                    ) : (

                      <div className="text-center text-muted py-4 small">
                        No announcements found.
                      </div>

                    )}

                  </div>

                </CardBody>

              </Card>

            </Col>

            <Col lg="6">

              <Card className="border-0 shadow-sm h-100">

                <CardBody className="p-2 p-md-3">

                  <h6 className="fw-bold mb-2">
                    Events
                  </h6>

                  <Nav
                    pills
                    className="bg-light rounded-pill p-1 mb-2"
                  >

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={eventTab === "past"}
                        onClick={(e) => {
                          e.preventDefault();
                          setEventTab("past");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Past
                      </NavLink>
                    </NavItem>

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={eventTab === "ongoing"}
                        onClick={(e) => {
                          e.preventDefault();
                          setEventTab("ongoing");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Ongoing
                      </NavLink>
                    </NavItem>

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={eventTab === "upcoming"}
                        onClick={(e) => {
                          e.preventDefault();
                          setEventTab("upcoming");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Upcoming
                      </NavLink>
                    </NavItem>

                    <NavItem className="flex-fill">
                      <NavLink
                        href="#"
                        active={eventTab === "date"}
                        onClick={(e) => {
                          e.preventDefault();
                          setEventTab("date");
                        }}
                        className="text-center py-1 px-2"
                        style={{ fontSize: "9px" }}
                      >
                        Select Date
                      </NavLink>
                    </NavItem>

                  </Nav>

                  <div className="position-relative mb-2">

                    <FiSearch
                      size={13}
                      className="position-absolute text-muted"
                      style={{
                        left: "9px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />

                    <Input
                      type="search"
                      bsSize="sm"
                      placeholder="Search event"
                      value={eventSearch}
                      onChange={(e) =>
                        setEventSearch(e.target.value)
                      }
                      className="ps-4"
                      style={{ fontSize: "10px" }}
                    />

                  </div>


                  <div className="border rounded overflow-hidden">

                    {filteredEvents.length > 0 ? (

                      filteredEvents.map((item) => (

                        <EventItem
                          key={item.id}
                          item={item}
                          isOpen={openEvent === item.id}
                          onToggle={() =>
                            setOpenEvent(
                              openEvent === item.id
                                ? null
                                : item.id
                            )
                          }
                        />

                      ))

                    ) : (

                      <div className="text-center text-muted py-4 small">
                        No events found.
                      </div>

                    )}

                  </div>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </section>
    </StudentLayoutWrapper>

  );
};

export default AnnouncementsEvents;