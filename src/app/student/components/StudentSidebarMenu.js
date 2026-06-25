"use client";

import { useState } from "react";
import Link from "next/link";
import { Collapse } from "reactstrap";
import {
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const StudentSidebarMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  const Icon = item.icon;

  if (!item.children) {
    return (
      <li className="sp-menu-item">
        <Link href={item.link} className="sp-menu-link">
          <div className="sp-menu-left">
            <Icon />
            <span>{item.title}</span>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li className="sp-menu-item">
      <div
        className="sp-menu-link"
        onClick={() => setOpen(!open)}
      >
        <div className="sp-menu-left">
          <Icon />
          <span>{item.title}</span>
        </div>

        {open ? (
          <FiChevronDown />
        ) : (
          <FiChevronRight />
        )}
      </div>

      <Collapse isOpen={open}>
        <ul className="sp-submenu">
          {item.children.map((sub, index) => (
            <li key={index}>
              <Link href={sub.link}>
                {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
};

export default StudentSidebarMenu;