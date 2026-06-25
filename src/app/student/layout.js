"use client";

import { useEffect } from "react";
import AOS from "aos";

import "../../assets/styles/student-panel.css";
import "../../assets/styles/globals.css";
import "aos/dist/aos.css";
import "../../assets/styles/student-panel.css"
import "../../assets/styles/globals.css"

export default function StudentLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return children;
}