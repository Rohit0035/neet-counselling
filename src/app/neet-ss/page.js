"use client";

import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";
import CounsellingCta from "@/components/counsellings/CounsellingCta";

import neetImg from "../../assets/images/counselling/n-ss-m1.png";
import NeetImgVertical from "../../assets/images/neetug-m2.jpg";
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
} from "react-icons/fa";

/* ---------------- FEATURES ---------------- */

const features = [
  { icon: <FaList />, title: "Allotments", desc: "Track NEET SS seat allotments across DM/MCh super specialty branches." },
  { icon: <FaSearch />, title: "Rank Insights", desc: "Analyze NEET SS ranks and predict top super specialty opportunities." },
  { icon: <FaClipboardCheck />, title: "Counselling Guide", desc: "Stay updated with MCC NEET SS counselling rounds and schedule." },
  { icon: <FaChartLine />, title: "Cutoff Trends", desc: "Explore previous year closing ranks for DM/MCh specialties." },
  { icon: <FaMapMarkedAlt />, title: "Seat Matrix", desc: "Check institute-wise SS seat availability across India." },
  { icon: <FaHospital />, title: "Institutes", desc: "Explore top hospitals and institutes offering super specialty training." },
  { icon: <FaMoneyBill />, title: "Fees & Bonds", desc: "Compare fees, stipend, and bond policies for SS programs." },
  { icon: <FaBook />, title: "Courses", desc: "Browse all DM/MCh super specialty courses and eligibility paths." },
  { icon: <FaUniversity />, title: "Institutions", desc: "Discover AIIMS, PGIMER, JIPMER and other top SS institutes." },
];

/* ---------------- OVERVIEW ---------------- */

const sections = [
  {
    icon: <FaTrophy size={32} className="text-st" />,
    title: "Understanding NEET SS",
    content:
      "NEET SS (Super Specialty) is the national-level entrance exam for admission into DM and MCh courses in India. It is the highest level of medical specialization after MD/MS."
  },
  {
    icon: <FaUserGraduate size={32} className="text-st" />,
    title: "Eligibility & Authority",
    content:
      "Conducted by the National Board of Examinations (NBE), NEET SS is open to candidates who hold a recognized MD/MS/DNB qualification in the relevant specialty."
  },
  {
    icon: <FaBookOpen size={32} className="text-st" />,
    title: "Counselling Process",
    list: [
      "Centralized counselling conducted by MCC",
      "Seat allocation for DM/MCh super specialty courses",
      "Multiple rounds including Round 1, Round 2, and Stray Vacancy Round",
      "Choice filling based on super specialty rank",
      "Final admission after verification and reporting"
    ],
  },
];

/* ---------------- VIDEOS ---------------- */

const videos = [
  {
    title: "NEET SS Closing Rank Analysis | Top DM Branches",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "NEET SS Strategy",
    date: "1 year ago",
  },
  {
    title: "Cardiology vs Neurology SS Strategy",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Branch Comparison",
    date: "10 months ago",
  },
  {
    title: "NEET SS Counselling Guide for Top Institutes",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Counselling",
    date: "8 months ago",
  },
  {
    title: "All India NEET SS Rank Strategy",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "AI Strategy",
    date: "6 months ago",
  },
];

/* ---------------- PAGE ---------------- */

export default function NeetSs() {
  return (
    <>
      <CounsellingsHero
        title="Your NEET SS rank defines your super specialty future."
        highlight="Reach the highest level of medical expertise"
        students="1k+ Super Specialty Aspirants Guided"
        description="Explore NEET SS counselling with expert insights. Choose the right DM/MCh specialty and institute based on your rank."
        buttonText="Start Counselling"
        image={neetImg}
        icon={FaUserGraduate}
         bgColor="#46e5da0f"
      />

      <CounsellingFeature
        titleLines={["Specialize,", "Excel,", "Lead"]}
        image={NeetImgVertical}
        features={features}
      />

      <CounsellingOverview
        title="NEET SS 2025 – Complete Counselling Overview"
        subtitle="Understand eligibility, DM/MCh courses, and counselling strategy for super specialty admission"
        sections={sections}
        bgClass="bg-warning bg-opacity-10"
      />

      <CounsellingCta
        title="Ready to secure your"
        highlight="super specialty seat?"
        subtitle="Join doctors using advanced insights and expert guidance to crack NEET SS counselling."
        primaryBtn="Start NEET SS Counselling"
        secondaryBtn="Explore Tools"
        points={[
          "AI-based super specialty branch prediction",
          "Real-time cutoff & rank insights",
          "DM/MCh specialization strategy",
          "Top institute counselling coverage",
        ]}
      />

      <CounsellingVideo
        title="Learn NEET SS Counselling Through Videos"
        subtitle="Watch expert breakdowns of ranks, branches, and strategies"
        videos={videos}
      />
    </>
  );
}