"use client";
import neetImg from "../../assets/images/neetug-h1.png";
import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
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
import NeetPgImg1 from "../../assets/images/counselling/neet-pg-m1.png";
import NeetPgImg2 from "../../assets/images/counselling/neet-pg-m2.jpg";
import Thumbnail from "../../assets/images/neetug-h1.jpg";


import NeetImgVertical from "../../assets/images/neetug-m2.jpg";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";
import CounsellingCta from "@/components/counsellings/CounsellingCta";
import CounsellingPgPricing from "@/components/counsellings/CounsellingPgPricing";


const features = [
  {
    icon: <FaList />,
    title: "Allotments",
    desc: "View multi-year official allotments across rounds, states, and quotas in one structured dashboard."
  },
  {
    icon: <FaChartLine />,
    title: "Closing Ranks",
    desc: "Analyze previous year closing ranks by round, course, category, and quota with smart filters."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Seat Matrix",
    desc: "Track round-wise seat availability across colleges, quotas, and categories in real time."
  },
  {
    icon: <FaMoneyBill />,
    title: "Fees, Stipend & Bonds",
    desc: "Compare tuition fees, stipends, and bond conditions across institutes and courses."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Allotment Mapping",
    desc: "Understand how nearby ranks move across rounds and states to identify better options."
  },
  {
    icon: <FaSearch />,
    title: "Rank Scan",
    desc: "Explore what candidates at specific ranks secured across all rounds and counsellings."
  },
  {
    icon: <FaChartBar />,
    title: "Seat Increase",
    desc: "Track year-wise seat additions across colleges and specialties to spot new opportunities."
  },
  {
    icon: <FaClipboardCheck />,
    title: "My Choice List",
    desc: "Create, save, and optimize your choice lists with live data and intelligent suggestions."
  },
  {
    icon: <FaHospital />,
    title: "Institutes",
    desc: "Access verified data on hospitals, infrastructure, patient load, and clinical exposure."
  },
  {
    icon: <FaBook />,
    title: "Courses",
    desc: "Browse all PG medical courses with details on duration, recognition, and training scope."
  },
  {
    icon: <FaUniversity />,
    title: "Universities",
    desc: "Explore medical universities, their affiliations, and participating colleges."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Counsellings",
    desc: "Stay updated with counselling schedules, quotas, key events, and official notifications."
  },
  {
    icon: <FaLink />,
    title: "Resources",
    desc: "Access verified sources including government portals, documents, and official data."
  }
];

const sections = [
  {
    icon: <FaTrophy size={32} className="text-st" />,
    title: "Understanding NEET PG",
    content:
      "NEET PG is the national-level entrance exam for postgraduate medical courses such as MD, MS, and PG Diploma. It serves as the primary gateway for MBBS graduates to pursue specialization in clinical and non-clinical fields across India.",
  },
  {
    icon: <FaUserGraduate size={32} className="text-st" />,
    title: "Eligibility & Conducting Body",
    content:
      "Conducted by the National Board of Examinations (NBE), NEET PG is open to candidates who have completed or are completing their MBBS internship within the specified timeline. It plays a crucial role in determining admission to postgraduate medical seats nationwide.",
  },
  {
    icon: <FaBookOpen size={32} className="text-st" />,
    title: "Counselling Process",
    list: [
      "MCC conducts All India Quota counselling for central, deemed, and government institutes",
      "State authorities manage counselling for state quota seats",
      "Multiple rounds including Round 1, Round 2, Round 3, and Stray Vacancy Round",
      "Seat allotment depends on rank, preferences, category, and seat availability",
      "Final admission is confirmed after document verification and joining",
    ],
  },
];
const videos = [
  {
    title: "Karnataka NEET PG Closing Rank Analysis",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Karnataka Counselling",
    date: "1 year ago",
  },
  {
    title: "Delhi NEET PG Rank Strategy & Seat Trends",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Delhi Counselling",
    date: "10 months ago",
  },
  {
    title: "Tamil Nadu NEET PG Counselling Guide",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "Tamil Nadu Counselling",
    date: "8 months ago",
  },
  {
    title: "NEET PG All India Quota (AIQ) Strategy",
    img: Thumbnail,
    videoId: "JoTBsrnrPsc",
    tag: "AIQ Counselling",
    date: "6 months ago",
  },
];



export default function NeetPg() {
  return (
    <>
      <CounsellingsHero
        title="Your NEET PG rank opens doors to specialization."
        highlight="Choose the right branch with confidence"
        students="3k+ PG Aspirants Guided"
        description="Navigate NEET PG counselling with clarity. Get personalized insights on colleges and specialties based on your rank."
        buttonText="Start Counselling"
        image={NeetPgImg1}
         bgColor="#fff9e4"
        icon={FaUserGraduate}
      />
      <CounsellingFeature
        titleLines={["Explore,", "Choose,", "Succeed"]}
        image={NeetPgImg2}
        features={features}
      />

      <CounsellingPgPricing/>

      <CounsellingOverview
        title="NEET PG 2025 – Complete Counselling Overview"
        subtitle="Understand the exam, eligibility, and counselling process to make informed career decisions"
        sections={sections}
        bgClass="bg-primary bg-opacity-10"
      />

      <CounsellingCta
        title="Ready to secure your"
        highlight="PG medical seat?"
        subtitle="Join thousands of MBBS graduates using data-driven insights and expert guidance to navigate NEET PG counselling with clarity."
        primaryBtn="Start PG Counselling"
        secondaryBtn="Explore Tools"
        points={[
          "AI-powered branch & college prediction",
          "Real-time cutoff, ranks & seat insights",
          "Smart counselling strategies for MD/MS",
          "All India & State quota coverage",
        ]}
      />

      <CounsellingVideo
        title="Learn Counselling Through Videos"
        subtitle="Watch expert breakdowns, strategies, and real counselling insights"
        videos={videos}
      />
    </>
  );
}
