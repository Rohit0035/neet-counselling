"use client";

import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";
import CounsellingCta from "@/components/counsellings/CounsellingCta";

import neetImg from "../../assets/images/counselling/n-dnb-m1.png";
import NeetImgVertical from "../../assets/images/counselling/n-dnb-m2.jpg";
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
  { icon: <FaList />, title: "Allotments", desc: "Track DNB PDCET seat allotments across hospitals and institutes." },
  { icon: <FaSearch />, title: "Rank Insights", desc: "Analyze ranks and understand realistic branch opportunities in DNB courses." },
  { icon: <FaClipboardCheck />, title: "Counselling Guide", desc: "Stay updated with MCC DNB PDCET counselling rounds and schedules." },
  { icon: <FaChartLine />, title: "Cutoff Trends", desc: "Explore previous year closing ranks for DNB diploma specialties." },
  { icon: <FaMapMarkedAlt />, title: "Seat Matrix", desc: "Check hospital-wise seat availability for DNB diploma courses." },
  { icon: <FaHospital />, title: "Institutions", desc: "Explore accredited hospitals offering DNB Post Diploma training." },
  { icon: <FaMoneyBill />, title: "Fees & Stipend", desc: "Compare stipend structure and training conditions across hospitals." },
  { icon: <FaBook />, title: "Courses", desc: "Browse DNB Post Diploma specialties and training pathways." },
  { icon: <FaUniversity />, title: "Hospitals Network", desc: "Discover NBE-recognized hospitals and their departments." },
];

/* ---------------- OVERVIEW ---------------- */

const sections = [
  {
    icon: <FaTrophy size={32} className="text-st" />,
    title: "Understanding DNB PDCET",
    content:
      "DNB PDCET (Diplomate of National Board Post Diploma Centralized Entrance Test) is a national-level exam for admission into Post Diploma DNB courses in various medical specialties across accredited hospitals in India."
  },
  {
    icon: <FaUserGraduate size={32} className="text-st" />,
    title: "Eligibility & Authority",
    content:
      "Conducted by the National Board of Examinations (NBE), DNB PDCET is open to candidates who have completed a recognized postgraduate diploma in the relevant specialty."
  },
  {
    icon: <FaBookOpen size={32} className="text-st" />,
    title: "Counselling Process",
    list: [
      "Centralized counselling conducted by MCC/NBE",
      "Seat allocation in accredited hospitals across India",
      "Multiple rounds including Round 1, Round 2, and Mop-up",
      "Choice filling based on rank and specialty preference",
      "Final admission after document verification and reporting"
    ],
  },
];

/* ---------------- VIDEOS ---------------- */

const videos = [
  {
    title: "DNB PDCET Counselling Strategy & Rank Analysis",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "DNB Counselling",
    date: "1 year ago",
  },
  {
    title: "Hospital Selection Strategy for DNB PDCET",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Hospitals",
    date: "10 months ago",
  },
  {
    title: "DNB Post Diploma Seat Matrix Explained",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Seat Matrix",
    date: "8 months ago",
  },
  {
    title: "All India DNB PDCET Strategy Guide",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "AI Strategy",
    date: "6 months ago",
  },
];

/* ---------------- PAGE ---------------- */

export default function DnbPdcet() {
  return (
    <>
      <CounsellingsHero
        title="Your DNB PDCET rank defines your specialty pathway."
        highlight="Upgrade your clinical career through DNB training"
        students="1k+ Doctors Guided"
        description="Explore DNB Post Diploma counselling with expert insights. Choose the right hospital and specialty based on your rank."
        buttonText="Start Counselling"
        image={neetImg}
        icon={FaUserGraduate}
        bgColor="#ffe7ed"
      />

      <CounsellingFeature
        titleLines={["Upgrade,", "Specialize,", "Excel"]}
        image={NeetImgVertical}
        features={features}
      />

      <CounsellingOverview
        title="DNB PDCET 2025 – Complete Counselling Overview"
        subtitle="Understand eligibility, hospitals, and counselling strategy for DNB Post Diploma courses"
        sections={sections}
        bgClass="bg-warning bg-opacity-10"
      />

      <CounsellingCta
        title="Ready to secure your"
        highlight="DNB seat?"
        subtitle="Join doctors using structured counselling insights to secure top hospital-based DNB training."
        primaryBtn="Start DNB Counselling"
        secondaryBtn="Explore Tools"
        points={[
          "AI-based hospital & branch prediction",
          "Real-time cutoff & seat insights",
          "Post Diploma specialization strategy",
          "Nationwide hospital network coverage",
        ]}
      />

      <CounsellingVideo
        title="Learn DNB PDCET Counselling Through Videos"
        subtitle="Watch expert breakdowns of hospitals, ranks, and strategies"
        videos={videos}
      />
    </>
  );
}