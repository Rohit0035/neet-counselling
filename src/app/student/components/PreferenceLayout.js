"use client";

import { useState } from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import {
  FiChevronRight,
  FiArrowLeft,
} from "react-icons/fi";

import { FaMedal } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPieChartFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import RankTab from "@/app/student/components/preference/RankTab";
import CourseTab from "@/app/student/components/preference/CourseTab";
import InstituteTypeTab from "@/app/student/components/preference/InstituteTypeTab";
import InstituteStateTab from "@/app/student/components/preference/InstituteStateTab";
import QuotaTab from "@/app/student/components/preference/QuotaTab";
import CategoryTab from "@/app/student/components/preference/CategoryTab";
import FeeTab from "@/app/student/components/preference/FeeTab";
import BedsTab from "@/app/student/components/preference/BedsTab";
import ChoiceCountTab from "@/app/student/components/preference/ChoiceCountTab";


import ChoiceSplitModal from "@/app/student/components/ChoiceSplitModal";

const tabs = [
  {
    id: "rank",
    title: "Rank",
    icon: <FaMedal />,
    component: RankTab,
  },
  {
    id: "course",
    title: "Courses",
    icon: <MdSchool />,
    component: CourseTab,
  },
  {
    id: "type",
    title: "Institute Types",
    icon: <HiBuildingOffice2 />,
    component: InstituteTypeTab,
  },
  {
    id: "state",
    title: "Institute States",
    icon: <FaMapMarkerAlt />,
    component: InstituteStateTab,
  },
  {
    id: "quota",
    title: "Quota",
    icon: <BsPieChartFill />,
    component: QuotaTab,
  },
  {
    id: "category",
    title: "Category",
    icon: <BiCategory />,
    component: CategoryTab,
  },
  {
    id: "fee",
    title: "Fee",
    icon: <FaRupeeSign />,
    component: FeeTab,
  },
  {
    id: "beds",
    title: "Beds",
    icon: <IoBed />,
    component: BedsTab,
  },
  {
    id: "choice",
    title: "Choice Count",
    icon: <TbListNumbers />,
    component: ChoiceCountTab,
  },
];

const PreferenceLayout = ({
  onBack,
  onFinish,
}) => {
  const [activeTab, setActiveTab] = useState("rank");

  const currentIndex = tabs.findIndex(
    (t) => t.id === activeTab
  );

  const CurrentComponent =
    tabs[currentIndex].component;

  const handleContinue = () => {
    if (currentIndex === tabs.length - 1) {
      onFinish();
      return;
    }

    setActiveTab(
      tabs[currentIndex + 1].id
    );
  };

  const [isChoiceSplitModalOpen, setIsChoiceSplitModalOpen] = useState(false);

  const toggleChoiceSplitModal = () => {
    setIsChoiceSplitModalOpen(!isChoiceSplitModalOpen);
  };

  const handleGenerateChoiceList = () => {
    console.log("Generate Choice List");
    setIsChoiceSplitModalOpen(false);
  };

  return (
    <>
      <div
        style={{
          // minHeight: "65vh",
        }}
      >
        <Row
          className="h-100"
          style={{ height: "65vh" }}
        >
          <Col
            md={4}
            className="border-end d-flex flex-column p-0"
          >
            <PerfectScrollbar
              options={{ suppressScrollX: true }}
              style={{ height: "60vh" }}
            >
              <div className="p-3">
                <h5 className="fw-bold mb-1">
                  Preferences
                </h5>

                <small className="text-muted mb-4 d-block">
                  Your preferences while generating
                  this choice list.
                </small>

                <Nav vertical pills>
                  {tabs.map((tab) => (
                    <NavItem key={tab.id}>
                      <NavLink
                        href="#"
                        active={activeTab === tab.id}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                        className="d-flex align-items-center justify-content-between mb-2 rounded st-bg text-white"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          {tab.icon}
                          {tab.title}
                        </div>

                        <FiChevronRight />
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>


              </div>
            </PerfectScrollbar>
          </Col>

          <Col
            md={8}
            className="d-flex flex-column p-0"
          >
            <PerfectScrollbar
              options={{ suppressScrollX: true }}
              style={{ height: "60vh" }}
            >
              <div className="">
                <CurrentComponent />


              </div>
            </PerfectScrollbar>
          </Col>

          <Col lg="12">
            <div className="d-flex justify-content-between">
              <Button
                color="link"
                className="text-start mt-3"
                onClick={onBack}
              >
                <FiArrowLeft className="me-2" />
                Back
              </Button>
              <div className="text-end mt-4">
                <Button
                  color="danger"
                  className="st-bg"
                  // onClick={handleContinue}
                  onClick={toggleChoiceSplitModal}
                >
                  {currentIndex === tabs.length - 1
                    ? "Generate List"
                    : "Continue"}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/*  ChoiceSplitModal */}
      <ChoiceSplitModal
        isChoiceSplitModalOpen={isChoiceSplitModalOpen}
        toggleChoiceSplitModal={toggleChoiceSplitModal}
        onGenerateChoiceList={handleGenerateChoiceList}
      />

    </>

  );
};

export default PreferenceLayout;