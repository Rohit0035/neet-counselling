"use client";

import { FiX } from "react-icons/fi";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import StudentMenuData from "./StudentMenuData";
import StudentSidebarMenu from "./StudentSidebarMenu";
import logo from "../../../assets/images/logo-dark.png"
import Image from "next/image";

const StudentSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      <div
        className={`sp-sidebar-overlay ${
          sidebarOpen ? "sp-overlay-show" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`sp-sidebar ${
          sidebarOpen ? "sp-sidebar-open" : ""
        }`}
      >
        <div className="sp-sidebar-top">
          <Image src={logo}  alt="logo" className="" width={150} />

          <button
            className="sp-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <PerfectScrollbar
          className="sp-sidebar-scroll"
          options={{
            suppressScrollX: true,
          }}
        >
          <ul className="sp-menu">
            {StudentMenuData.map((item, index) => (
              <StudentSidebarMenu
                key={index}
                item={item}
              />
            ))}
          </ul>
        </PerfectScrollbar>
      </aside>
    </>
  );
};

export default StudentSidebar;