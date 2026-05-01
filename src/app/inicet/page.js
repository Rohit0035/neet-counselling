"use client";

import CounsellingsHero from "@/components/counsellings/CounsellingsHero";
import CounsellingFeature from "@/components/counsellings/CounsellingFeature";
import CounsellingOverview from "@/components/counsellings/CounsellingOverview";
import CounsellingVideo from "@/components/counsellings/CounsellingVideo";
import CounsellingCta from "@/components/counsellings/CounsellingCta";

import neetImg from "../../assets/images/counselling/n-cet-m1.png";
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
    { icon: <FaList />, title: "Allotments", desc: "Track INI-CET seat allotments across AIIMS, JIPMER, and PGI institutes." },
    { icon: <FaSearch />, title: "Rank Insights", desc: "Analyze INI-CET ranks and understand realistic branch opportunities." },
    { icon: <FaClipboardCheck />, title: "Counselling Guide", desc: "Stay updated with MCC INI-CET counselling schedule and rules." },
    { icon: <FaChartLine />, title: "Cutoff Trends", desc: "Explore previous year INI-CET closing ranks for all institutes." },
    { icon: <FaMapMarkedAlt />, title: "Seat Matrix", desc: "Check institute-wise seat availability for MD/MS/DM/MCh courses." },
    { icon: <FaHospital />, title: "Institutes", desc: "Explore AIIMS, JIPMER, PGIMER infrastructure and departments." },
    { icon: <FaMoneyBill />, title: "Fees & Bonds", desc: "Compare fees, stipend structure, and bond policies across institutes." },
    { icon: <FaBook />, title: "Courses", desc: "Explore clinical and non-clinical PG courses under INI-CET." },
    { icon: <FaUniversity />, title: "Institutions", desc: "Details of AIIMS, JIPMER, PGIMER and other INIs." },
];

/* ---------------- OVERVIEW ---------------- */

const sections = [
    {
        icon: <FaTrophy size={32} className="text-st" />,
        title: "Understanding INI-CET",
        content:
            "INI-CET (Institute of National Importance Combined Entrance Test) is a national-level exam for admission into postgraduate medical courses like MD, MS, DM, and MCh in premier institutes such as AIIMS, JIPMER, and PGIMER."
    },
    {
        icon: <FaUserGraduate size={32} className="text-st" />,
        title: "Eligibility & Authority",
        content:
            "Conducted by AIIMS Delhi, INI-CET is open to MBBS graduates who have completed or are completing their internship within the specified timeline."
    },
    {
        icon: <FaBookOpen size={32} className="text-st" />,
        title: "Counselling Process",
        list: [
            "Centralized counselling conducted by AIIMS",
            "Seat allotment for AIIMS, JIPMER, PGIMER, NIMHANS, and others",
            "Multiple rounds including Round 1, Round 2, and Open Round",
            "Choice filling based on rank and institute preference",
            "Final admission after document verification and reporting"
        ],
    },
];

/* ---------------- VIDEOS ---------------- */

const videos = [
    {
        title: "INI-CET Closing Rank Analysis | AIIMS Delhi",
        img: Thumbnail,
        videoId: "JoTBsrnrPsc",
        tag: "AIIMS Counselling",
        date: "1 year ago",
    },
    {
        title: "INI-CET Rank Strategy for Top Branches",
        img: Thumbnail,
        videoId: "JoTBsrnrPsc",
        tag: "PG Strategy",
        date: "10 months ago",
    },
    {
        title: "PGIMER & JIPMER Counselling Guide",
        img: Thumbnail,
        videoId: "JoTBsrnrPsc",
        tag: "Institutes",
        date: "8 months ago",
    },
    {
        title: "INI-CET All India Rank Strategy",
        img: Thumbnail,
        videoId: "JoTBsrnrPsc",
        tag: "AIQ Strategy",
        date: "6 months ago",
    },
];

/* ---------------- PAGE ---------------- */

export default function NeetInicet() {
    return (
        <>
            <CounsellingsHero
                title="Your INI-CET rank defines your future at top institutes."
                highlight="Secure a seat at AIIMS, JIPMER & PGIMER"
                students="2k+ PG Aspirants Guided"
                description="Get expert insights into INI-CET counselling. Explore top clinical branches and institutes based on your rank."
                buttonText="Start Counselling"
                image={neetImg}
                icon={FaUserGraduate}
                bgColor="#eaffe7"

            />

            <CounsellingFeature
                titleLines={["Compete,", "Conquer,", "Excel"]}
                image={NeetImgVertical}
                features={features}
            />

            <CounsellingOverview
                title="INI-CET 2025 – Complete Counselling Overview"
                subtitle="Understand exam structure, eligibility, and strategy for top institute admissions"
                sections={sections}
                bgClass="bg-primary bg-opacity-10"
            />

            <CounsellingCta
                title="Ready to secure your"
                highlight="top institute seat?"
                subtitle="Join thousands of aspirants using data-driven insights and expert guidance to crack INI-CET counselling."
                primaryBtn="Start INI-CET Counselling"
                secondaryBtn="Explore Tools"
                points={[
                    "AI-based institute & branch prediction",
                    "Real-time cutoff & rank insights",
                    "Strategy for AIIMS, JIPMER & PGIMER",
                    "Centralized counselling guidance"
                ]}
            />

            <CounsellingVideo
                title="Learn INI-CET Counselling Through Videos"
                subtitle="Watch expert breakdowns of ranks, institutes, and strategies"
                videos={videos}
            />
        </>
    );
}