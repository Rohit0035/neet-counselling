"use client";

import React from "react";
import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";
import CounsellingCta from "@/components/counsellings/CounsellingCta";

import neetImg from "../../assets/images/counselling/n-mds-m1.png";
import NeetImgVertical from "../../assets/images/counselling/n-mds-m2.jpg";
import Thumbnail from "../../assets/images/neetug-h1.jpg";


import {
  FaSearch,
  FaList,
  FaUniversity,
  FaBook,
  FaClipboardCheck,
  FaHospital,
  FaMoneyBill,
  FaMapMarkedAlt,
  FaChartLine,
  FaTrophy,
  FaUserGraduate,
  FaBookOpen,
  FaProjectDiagram,
  FaChartBar,
  FaCalendarAlt,
  FaLink
} from "react-icons/fa";

/* ---------------- FEATURES ---------------- */

const features = [
  {
    icon: <FaList />,
    title: "Allotments",
    desc: "View multi-year official MDS allotments across rounds, states, and quotas in one structured dashboard."
  },
  {
    icon: <FaChartLine />,
    title: "Closing Ranks",
    desc: "Analyze previous year closing ranks by branch, category, round, and quota with smart filters."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Seat Matrix",
    desc: "Track real-time seat availability across dental colleges, quotas, and categories."
  },
  {
    icon: <FaMoneyBill />,
    title: "Fees, Stipend & Bonds",
    desc: "Compare dental college fees, stipend details, and bond conditions across institutes."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Allotment Mapping",
    desc: "Understand how ranks move across rounds to identify better MDS opportunities."
  },
  {
    icon: <FaSearch />,
    title: "Rank Analysis",
    desc: "Explore what MDS branches candidates secured at different ranks across states."
  },
  {
    icon: <FaChartBar />,
    title: "Seat Increase",
    desc: "Track year-wise increase in MDS seats across dental colleges."
  },
  {
    icon: <FaClipboardCheck />,
    title: "My Choice List",
    desc: "Create and optimize your dental counselling choice list with live insights."
  },
  {
    icon: <FaHospital />,
    title: "Dental Colleges",
    desc: "Explore verified dental colleges, infrastructure, and clinical exposure."
  },
  {
    icon: <FaBook />,
    title: "Courses",
    desc: "Browse all MDS specializations with duration, scope, and recognition."
  },
  {
    icon: <FaUniversity />,
    title: "Universities",
    desc: "Discover dental universities, affiliations, and participating institutes."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Counselling Schedule",
    desc: "Stay updated with MDS counselling rounds, dates, and official notifications."
  },
  {
    icon: <FaLink />,
    title: "Resources",
    desc: "Access verified government sources and official counselling documents."
  }
];

/* ---------------- OVERVIEW SECTIONS ---------------- */

const sections = [
  {
    icon: <FaTrophy size={32} className="text-st" />,
    title: "Understanding NEET MDS",
    content:
      "NEET MDS is the national-level entrance exam for postgraduate dental courses in India. It enables BDS graduates to pursue specialization in various dental fields such as Orthodontics, Prosthodontics, Periodontics, and more."
  },
  {
    icon: <FaUserGraduate size={32} className="text-st" />,
    title: "Eligibility & Authority",
    content:
      "Conducted by the National Board of Examinations (NBE), NEET MDS is open to candidates who have completed BDS and mandatory internship within the prescribed timeline."
  },
  {
    icon: <FaBookOpen size={32} className="text-st" />,
    title: "Counselling Process",
    list: [
      "MCC conducts All India Quota counselling for dental colleges",
      "State authorities manage state quota counselling",
      "Multiple rounds including Round 1, Round 2, Round 3, and Stray Vacancy",
      "Seat allotment based on rank, preferences, category, and availability",
      "Final admission confirmed after document verification and reporting"
    ]
  }
];

/* ---------------- VIDEOS ---------------- */

const videos = [
  {
    title: "Karnataka NEET MDS Closing Rank Analysis",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Karnataka Counselling",
    date: "1 year ago",
  },
  {
    title: "Delhi NEET MDS Strategy & Seat Trends",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Delhi Counselling",
    date: "10 months ago",
  },
  {
    title: "Tamil Nadu NEET MDS Counselling Guide",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Tamil Nadu Counselling",
    date: "8 months ago",
  },
  {
    title: "NEET MDS All India Quota Strategy",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "AIQ Counselling",
    date: "6 months ago",
  },
];

/* ---------------- PAGE ---------------- */

export default function NeetMds() {
  return (
    <>
      <CounsellingsHero
        title="Your NEET MDS rank defines your dental career path."
        highlight="Choose the right specialization with clarity"
        students="2k+ Dental Aspirants Guided"
        description="Navigate NEET MDS counselling with expert insights. Explore dental colleges and specializations based on your rank and preferences."
        buttonText="Start Counselling"
        image={neetImg}
        bgColor="#e6f7ff"
        icon={FaUserGraduate}
      />

      <CounsellingFeature
        titleLines={["Plan,", "Select,", "Specialize"]}
        image={NeetImgVertical}
        features={features}
      />

      <CounsellingOverview
        title="NEET MDS 2025 – Complete Counselling Overview"
        subtitle="Understand admission process, eligibility, and strategy for dental PG seats"
        sections={sections}
        bgClass="bg-info bg-opacity-10"
      />

      <CounsellingCta
        title="Ready to secure your"
        highlight="MDS seat?"
        subtitle="Join thousands of dental graduates using smart counselling tools and expert guidance to secure the right specialization."
        primaryBtn="Start MDS Counselling"
        secondaryBtn="Explore Tools"
        points={[
          "AI-based dental college prediction",
          "Real-time cutoff & seat matrix updates",
          "Specialization-wise counselling strategy",
          "All India & State quota coverage",
        ]}
      />

      <CounsellingVideo
        title="Learn Dental Counselling Through Videos"
        subtitle="Watch expert MDS counselling strategies and college insights"
        videos={videos}
      />
    </>
  );
}