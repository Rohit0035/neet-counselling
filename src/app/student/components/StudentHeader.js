"use client";
import { useState } from "react";
import { Button } from "reactstrap";
import { FiMenu } from "react-icons/fi";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import DashHeroImg from "../../../assets/images/dash-user.png"

import Image from "next/image";
import { FiEdit3, FiLogOut, FiUser } from "react-icons/fi";
import { FcPackage, FcRating } from "react-icons/fc";
import FeedbackModal from "./FeedbackModal";
import { MdDevices } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";

const StudentHeader = ({ setSidebarOpen }) => {

  const [feedbackModal, setFeedbackModal] = useState(false);

  return (
    <header className="sp-header position-relative">
      <div className="sp-header-left">
        <Button
          color="light"
          className="sp-menu-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <FiMenu size={22} />
        </Button>

        <h5 className="mb-0">Student Panel</h5>
      </div>

      <div className="sp-header-right d-flex">
        <div
          className="position-relative text-center"
          data-aos="zoom-in"
        >
          <UncontrolledDropdown className="position-relative">

            <DropdownToggle
              tag="div"
              className="d-flex align-items-center gap-2 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              <Image
                src={DashHeroImg}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-circle border"
              />
            </DropdownToggle>

            <DropdownMenu
              center
              className="shadow border-0 rounded-4 p-2 small h-drop"
              style={{ minWidth: "200px" }}
            >

              <div className="px-3 py-2 border-bottom mb-1">
                <div className="fw-bold d-flex align-items-center gap-2">
                  <FiUser />
                  John Doe
                </div>
                <small className="text-muted">Student Account</small>
              </div>

              <DropdownItem href="/student/profile" className="d-flex align-items-center gap-2">
                <FiEdit3 />
                Edit Profile
              </DropdownItem>

              <DropdownItem href="/student/my-package" className="d-flex align-items-center gap-2">
                <FcPackage />
                My Package
              </DropdownItem>

              <DropdownItem onClick={() => setFeedbackModal(true)} className="d-flex align-items-center gap-2">
                <FcRating />
                Feedback
              </DropdownItem>

              <DropdownItem href="/student/devices" className="d-flex align-items-center gap-2">
                <MdDevices />
                My Devices
              </DropdownItem>

              <DropdownItem href="/student/saved-videos" className="d-flex align-items-center gap-2">
                <FaBookBookmark />
                Saved Videos
              </DropdownItem>


              {/* LOGOUT */}
              <DropdownItem className="d-flex align-items-center gap-2 text-danger">
                <FiLogOut />
                Logout
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>

      <FeedbackModal
        isOpen={feedbackModal}
        toggle={() => setFeedbackModal(false)}
      />
    </header>
  );
};

export default StudentHeader;